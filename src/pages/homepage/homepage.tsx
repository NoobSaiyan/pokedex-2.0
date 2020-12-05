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

const HomePage: React.FC = () => {
  const { data: pokemonData } = useQuery('pokemon', () =>
    axios
      .get<PokemonResponse>('https://pokeapi.co/api/v2/generation/1')
      .then((res) => res.data.pokemon_species)
  )

  return (
    <>
      <HomeToolBar />
      {pokemonData ? <Cards pokemonData={pokemonData} /> : null}
    </>
  )
}
export default HomePage
