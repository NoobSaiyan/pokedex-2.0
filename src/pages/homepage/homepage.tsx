import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

import HomeToolBar from '../../components/homeToolbar/homeToolbar.component'
import Cards from '../../components/cards/cards.component'

import './homepage.style.css'

interface PokemonResponse {
  pokemon_species: PokemonResponseResultItem[]
}
interface PokemonResponseResultItem {
  name: string
  url: string
}

const pokemonFetcher = async (key: string, gen: string) => {
  const { data } = await axios.get<PokemonResponse>(
    `https://pokeapi.co/api/v2/${key}/${gen}`
  )

  return data.pokemon_species
}

const HomePage: React.FC = () => {
  const [gen, setGen] = React.useState(1)

  const { data: pokemonData } = useQuery(['generation', gen], pokemonFetcher)

  return (
    <div className='home'>
      <HomeToolBar />
      {pokemonData ? <Cards pokemonData={pokemonData} /> : null}
    </div>
  )
}
export default HomePage
