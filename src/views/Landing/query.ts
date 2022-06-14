import { gql } from "@apollo/client"

export const QUERY_INTRO_LINES = gql`
  query fetchIntroLines {
    allIntroLine {
      line
    }
  }
`