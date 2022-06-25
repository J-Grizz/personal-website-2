export interface validCommand {
  command: string
  description: string
  action: () => void
}

export interface enteredCommand {
  command: string
  notFound: boolean
  jsx?: JSX.Element
}


