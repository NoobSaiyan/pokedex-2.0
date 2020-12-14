import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../../components/card/card.component'

import './cards.style.css'

interface Props {
  genName?: string
  pokemonData: PokemonResponseResultItem[]
  loading: boolean
}

interface PokemonResponseResultItem {
  name: string
  url: string
}

const Cards: React.FC<Props> = ({ pokemonData, loading, genName }) => {
  return (
    <div className='container'>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className='cards'>
          {pokemonData.map(({ name, url }) => {
            let arr = url.split('/')
            let id = parseInt(arr[arr.length - 2])
            return (
              <Link key={url} to={`/${id}`}>
                <Card key={id} name={name} id={id} genName={genName} />
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
export default Cards
