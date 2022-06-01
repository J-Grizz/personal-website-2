import React from 'react'
import TerminalCursor from 'icons/TerminalCursor'
import TerminalPrompt from 'icons/TerminalPrompt'
import { v4 as uuidv4 } from 'uuid'

type MyProps = {}
type MyState = {
  starterArray: string[]
  introArray: string[]
  showPrompt: boolean
}
class Terminal extends React.Component<MyProps, MyState> {
  state: MyState = {
    starterArray: [],
    introArray: [],
    showPrompt: false,
  }

  componentDidMount() {
    // Data to import from sanity
    const starterArray = [
      'The very first line that needs to finish typing before going to the next line',
      'The second line that needs to start being typed after the first line',
    ]

    this.setState({
      starterArray,
    })

    const createTypingEffect = async (text: string, index: number) => {
      return Promise.all(
        text.split('').map(
          (character, characterIndex) =>
            new Promise((res) => {
              setTimeout(() => {
                let arrayCopy = this.state.introArray.slice()
                this.setState((state) => ({
                  introArray: [...state.introArray.slice(0, index), arrayCopy[index] + character, ...state.introArray.slice(index + 1)],
                }))
                res(null)
              }, 100 * characterIndex)
            })
        )
      )
    }
    const cycle = async () => {
      let i = 0
      for (const starterText of starterArray) {
        // Setting empty string for each line in starterArray so we dont get undefined as first character
        this.setState((state) => ({
          introArray: [...state.introArray, ''],
        }))

        await createTypingEffect(starterText, i)
        i++
      }
      this.setState({
        showPrompt: true,
      })
    }

    cycle()
  }

  render() {
    return (
      <div className="w-1/2 h-1/2 p-5 flex items-start justify-start bg-clip-padding bg-slate-900 backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-900 rounded">
        <div className="flex flex-col">
          {this.state.introArray.map((introLine) => (
            <div className="flex items-center" key={uuidv4()}>
              <TerminalPrompt />
              <p className="text-white">{introLine}</p>
            </div>
          ))}
          {/* Actual prompt starts here */}
          {this.state.showPrompt && (
            <div className="flex">
              <TerminalPrompt />
              <TerminalCursor />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Terminal
