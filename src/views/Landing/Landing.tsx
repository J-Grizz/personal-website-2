import { FC } from 'react'
import Terminal from 'components/Terminal/Terminal'
import { useFetchIntroLinesQuery } from 'generated/graphql'

const Landing: FC = () => {
  const { data, loading } = useFetchIntroLinesQuery()

  return (
    <main className="w-full h-full flex justify-center items-center bg-nature-dark bg-center bg-cover bg-no-repeat">
      { loading ? "loading.." :<Terminal introLines={data?.allIntroLine} />}
    </main>
  )
}

export default Landing
