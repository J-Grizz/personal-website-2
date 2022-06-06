import React from 'react'
import TerminalCursor from 'icons/TerminalCursor'
import TerminalPrompt from 'icons/TerminalPrompt'
import { v4 as uuidv4 } from 'uuid'

interface MyProps {}
interface MyState {
  introArray: string[]
  showPrompt: boolean
  typedCommand: string
}
class Terminal extends React.Component<MyProps, MyState> {
  typedCommandInput = React.createRef<HTMLInputElement>()
  state: MyState = {
    introArray: [],
    showPrompt: false,
    typedCommand: '',
  }

  componentDidMount() {
    // Data to import from sanity
    const starterArray = ['Hello world...']

    const createTypingEffect = async (text: string, index: number) => {
      return Promise.all(
        text.split('').map(
          (character, characterIndex) =>
            new Promise((res) => {
              setTimeout(() => {
                this.setState((state) => ({
                  introArray: [
                    ...state.introArray.slice(0, index),
                    [...this.state.introArray][index] + character,
                    ...state.introArray.slice(index + 1),
                  ],
                }))
                res(null)
              }, 100 * characterIndex)
            })
        )
      )
    }

    const TypeIntroLines = async () => {
      let i = 0
      for (const starterText of starterArray) {
        // Setting empty string for each line in starterArray so we dont get undefined as first character
        this.setState((state) => ({
          introArray: [...state.introArray, ''],
        }))

        await createTypingEffect(starterText, i)
        i++
      }
      // Showing prompt after last line is typed
      setTimeout(() => {
        this.setState({ showPrompt: true })
      }, 400)
    }

    setTimeout(() => TypeIntroLines(), 400)
    document.addEventListener('keydown', this.listenForKeyPress, false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.listenForKeyPress, false)
  }

  listenForKeyPress = (e: KeyboardEvent) => {
    this.typedCommandInput.current?.focus()
    if (e.key === 'Enter') {
      console.log('command submitted')
    }
  }

  handleTypedCommand = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ typedCommand: e.target.value })
  }

  render() {
    return (
      <div className="w-1/2 h-1/2 p-5 flex items-start justify-start bg-clip-padding bg-slate-900 backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-900 rounded text-white">
        <div className="flex flex-col">
          {this.state.introArray.map((introLine) => (
            <div className="flex items-center" key={uuidv4()}>
              <TerminalPrompt />
              <p>{introLine}</p>
            </div>
          ))}
          {/* Actual prompt starts here */}
          {this.state.showPrompt && (
            <div className="flex">
              <TerminalPrompt />
              <input
                ref={this.typedCommandInput}
                autoFocus
                onChange={this.handleTypedCommand}
                className="opacity-0 w-0"
                type="text"
                name="test"
                id="test"
              />
              <p>{this.state.typedCommand}</p>
              <TerminalCursor />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Terminal
