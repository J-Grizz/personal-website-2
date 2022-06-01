import React from 'react'
import TerminalCursor from 'icons/TerminalCursor'
import TerminalPrompt from 'icons/TerminalPrompt'

type MyProps = {}
type MyState = {
  introText: string
}
class Terminal extends React.Component<MyProps, MyState> {
  state: MyState = {
    introText: '',
  }

  componentDidMount() {
    const text = 'Hello world! . . .'
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        this.setState((state) => ({
          introText: state.introText + text[i],
        }))
      }, 100 * i)
    }
  }
  render() {
    return (
      <div className="w-1/2 h-1/2 p-5 flex items-start justify-start bg-clip-padding bg-slate-900 backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-900 rounded">
        <div className="flex flex-col">
          <div className="flex">
            <TerminalPrompt />
            <p className="text-white">{this.state.introText}</p>
            <TerminalCursor />
          </div>
        </div>
      </div>
    )
  }
}

export default Terminal
