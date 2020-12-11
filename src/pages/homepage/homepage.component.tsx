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
  const [gen, setGen] = React.useState('1')
  const [searchTerm, setSearchTerm] = React.useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const { data: pokemonData, isLoading: loading } = useQuery(
    ['generation', gen],
    pokemonFetcher
  )

  const filteredPokemon = pokemonData?.filter(({ name }) =>
    name.toLocaleLowerCase().includes(searchTerm)
  )

  return (
    <div className='home'>
      <HomeToolBar gen={gen} setGen={setGen} handleChange={handleChange} />
      {filteredPokemon ? (
        <Cards pokemonData={filteredPokemon} loading={loading} />
      ) : null}
    </div>
  )
}
export default HomePage
