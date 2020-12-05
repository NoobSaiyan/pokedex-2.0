import React from 'react'

import Card from '../../components/card/card.component'

import './cards.style.css'

interface Props {
  pokemonData: PokemonResponseResultItem[]
  loading: boolean
}

interface PokemonResponseResultItem {
  name: string
  url: string
}

const Cards: React.FC<Props> = ({ pokemonData, loading }) => {
  return (
    <div className='container'>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className='cards'>
          {pokemonData.map(({ name, url }) => {
            let arr = url.split('/')
            let id = parseInt(arr[arr.length - 2])
            return <Card key={id} name={name} id={id} />
          })}
        </div>
      )}
    </div>
  )
}
export default Cards
