import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

import HomeToolBar from '../../components/homeToolbar/homeToolbar.component'
import Cards from '../../components/cards/cards.component'

import './homepage.style.css'

interface PokemonResponse {
  main_region: MainRegion
  pokemon_species: PokemonResponseResultItem[]
}
interface MainRegion {
  name: string
  url: string
}
interface PokemonResponseResultItem {
  name: string
  url: string
}

const pokemonFetcher = async (key: string, gen: string) => {
  const { data } = await axios.get<PokemonResponse>(
    `https://pokeapi.co/api/v2/${key}/${gen}`
  )
  return data
}

const HomePage: React.FC = () => {
  const [gen, setGen] = React.useState('1')
  const { data: pokemonData, isLoading: loading } = useQuery(
    ['generation', gen],
    pokemonFetcher,
    {
      staleTime: Infinity,
    }
  )
  const [searchTerm, setSearchTerm] = React.useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const filteredPokemon = pokemonData?.pokemon_species?.filter(({ name }) =>
    name.toLocaleLowerCase().includes(searchTerm)
  )
  console.log(pokemonData?.main_region.name)

  return (
    <div className='home'>
      <HomeToolBar gen={gen} setGen={setGen} handleChange={handleChange} />
      {filteredPokemon ? (
        <Cards
          pokemonData={filteredPokemon}
          loading={loading}
          genName={pokemonData?.main_region.name}
        />
      ) : null}
    </div>
  )
}
export default HomePage
