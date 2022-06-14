import { gql } from "@apollo/client"

export const introQuery = gql`
  query fetchIntroLines {
    allIntroLine {
      line
    }
  }
`