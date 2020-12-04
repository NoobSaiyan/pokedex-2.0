import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

import Card from '../../components/card/card.component'
import ToolBar from '../../components/toolbar/toolbar.component'

import './homepage.style.css'

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
      <ToolBar />
      <div className='container'>
        <div className='cards'>
          {queryInfo.data?.map(({ name, url }) => {
            let arr = url.split('/')
            let id = parseInt(arr[arr.length - 2])
            return <Card key={id} name={name} id={id} />
          })}
        </div>
      </div>
    </>
  )
}
export default HomePage
