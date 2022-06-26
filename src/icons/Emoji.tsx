import { FC } from 'react'

interface EmojiProps {
  label: string
  symbol: string
}

const Emoji: FC<EmojiProps> = ({ label, symbol }) => (
  <span className="emoji text-3xl" role="img" aria-label={label ? label : ''} aria-hidden={label ? 'false' : 'true'}>
    {symbol}
  </span>
)

export default Emoji
