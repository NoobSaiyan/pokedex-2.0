import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

import InfoCard from '../infoCard/infoCard.component'

import './infoContainer.style.css'

interface PokemonResponse {
  name: string
}
interface Params {
  id: number
}
const imgStyles: React.CSSProperties = {
  height: '300px',
  width: '300px',
  marginTop: '150px',
  marginRight: '10%',
  float: 'right',
}

const informationFetcher = async (id: number) => {
  const { data } = await axios.get<PokemonResponse>(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  )
  return data
}

const InfoContainer: React.FC<Params> = ({ id }) => {
  const { data: informationData } = useQuery(id, informationFetcher)
  return (
    <div className='infoContainer'>
      <div className='infoImage'>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          style={{ ...imgStyles }}
          alt='not found'
        />
      </div>
      <InfoCard informationData={informationData} />
    </div>
  )
}

export default InfoContainer
