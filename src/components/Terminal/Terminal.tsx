import React from 'react'
import TerminalPrompt from 'icons/TerminalPrompt'
import ActualPrompt from './ActualPrompt/ActualPrompt'
import { enteredCommand } from './types'
import { v4 as uuidv4 } from 'uuid'
import { client } from 'App'
import { gql } from '@apollo/client'

interface MyProps {}
interface MyState {
  introArray: string[]
  commandHistory: enteredCommand[]
  showPrompt: boolean
  typedCommand: string
}

const introQuery = gql`
  {
    allIntroLine {
      line
    }
  }
`

class Terminal extends React.Component<MyProps, MyState> {
  typedCommandInput = React.createRef<HTMLInputElement>()
  state: MyState = {
    introArray: [],
    commandHistory: [],
    showPrompt: false,
    typedCommand: '',
  }

  componentDidMount() {
    let starterArray: string[] = []

    client.query({ query: introQuery }).then((data: any) => {
      starterArray = data.data.allIntroLine.map((line: any) => line.line)
    })

    const createTypingEffect = async (text: string, index: number) => {
      return Promise.all(
        text.split('').map(
          (character, characterIndex) =>
            new Promise((res) => {
              setTimeout(() => {
                this.setState((state) => ({
                  introArray: [
                    ...state.introArray.slice(0, index),
                    [...state.introArray][index] + character,
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
    document.addEventListener('keydown', this.listenForAnyKeyPress, false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.listenForAnyKeyPress, false)
  }

  listenForAnyKeyPress = (e: KeyboardEvent) => {
    this.typedCommandInput.current?.focus()
    if (e.key === 'Enter') {
      this.handleCommandSubmit()
    }
  }

  handleCommandSubmit = () => {
    let invalidCommand = true
    this.validCommands.forEach((command) => {
      if (this.state.typedCommand === command.command) {
        command.action()
        invalidCommand = false
      }
    })

    if (invalidCommand) {
      this.setState((state) => ({
        commandHistory: [...state.commandHistory, { command: state.typedCommand, notFound: true }],
        typedCommand: '',
      }))
    }
  }

  handleTypedCommand = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ typedCommand: e.target.value })
  }

  validCommands = [
    {
      command: 'clear',
      description: 'Clear the terminal',
      action: () => {
        this.setState({
          introArray: [],
          commandHistory: [],
          typedCommand: '',
        })
      },
    },
    {
      command: 'help',
      description: 'Show help',
      action: () =>
        this.setState((state) => ({
          commandHistory: [...state.commandHistory, { command: state.typedCommand, notFound: false, jsx: <div>help</div> }],
          typedCommand: '',
        })),
    },
  ]

  render() {
    const { introArray, commandHistory, showPrompt, typedCommand } = this.state
    return (
      <div className="w-1/2 h-1/2 p-5 flex items-start justify-start bg-clip-padding bg-slate-900 backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-900 rounded text-white">
        <div className="flex flex-col">
          {/* Intro */}
          {introArray.map((introLine) => (
            <div className="flex items-center" key={uuidv4()}>
              <TerminalPrompt />
              <p>{introLine}</p>
            </div>
          ))}

          <ActualPrompt
            showPrompt={showPrompt}
            typedCommand={typedCommand}
            commandHistory={commandHistory}
            onTypedCommand={this.handleTypedCommand}
            inputRef={this.typedCommandInput}
          />
        </div>
      </div>
    )
  }
}

export default Terminal
