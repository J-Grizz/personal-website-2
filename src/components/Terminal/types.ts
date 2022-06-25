export interface ValidCommand {
  command: string
  description: string
  action: () => void
}

export interface EnteredCommand {
  command: string
  notFound: boolean
  jsx?: JSX.Element
}


