export interface validCommand {
  command: string
  description: string
  arguments?: string[]
}

export interface enteredCommand {
  command: string
  notFound: boolean
  jsx?: JSX.Element
}


