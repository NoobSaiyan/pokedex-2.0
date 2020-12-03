import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

interface PokemonResponse {
  count: number
  next: string | null
  previous: string | null
  results: PokemonResponseResultItem[]
}
interface PokemonResponseResultItem {
  name: string
  url: string
}

const HomePage: React.FC = () => {
  const queryInfo = useQuery('pokemon', () =>
    axios
      .get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon')
      .then((res) => res.data.results)
  )

  return (
    <>
      {queryInfo.data?.map((result) => {
        return <div key={result.name}>{result.name}</div>
      })}
    </>
  )
}
export default HomePage
