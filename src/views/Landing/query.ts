import { gql } from '@apollo/client'

export const QUERY_INTRO_LINES = gql`
  query fetchIntroLines {
    allIntroLine(sort: { order: ASC }, where: {draft: {neq: true}}) {
      line
      order
      draft
    }
  }
`

