import { FC, useState, useEffect } from 'react'
import TerminalCursor from 'icons/TerminalCursor'
import TerminalPrompt from 'icons/TerminalPrompt'

const Terminal: FC = () => {
  const [introText, setIntroText] = useState('')

  useEffect(() => {
    const text = 'Hello world! . . .'
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        setIntroText((introText) => introText + text[i])
      }, 100 * i)
    }
  }, [])

  return (
    <div className="w-2/3 h-2/3 p-5 flex items-start justify-start bg-clip-padding bg-slate-900 backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-900 rounded">
      <div className="flex items-center h-3">
        <TerminalPrompt />

        <p className="text-white">{introText}</p>

        <TerminalCursor />
      </div>
    </div>
  )
}

export default Terminal
