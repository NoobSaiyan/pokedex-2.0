import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import InformationToolbar from '../../components/informationToolbar/informationToolbar.component'

import './information.style.css'

interface PokemonResponse {
  name: string
}
interface Params {
  id: number
}

const informationFetcher = async (id: number) => {
  const { data } = await axios.get<PokemonResponse>(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  )
  return data
}

const InfoPage: React.FC<Params> = () => {
  let { id } = useParams<any>()
  const { data: informationData } = useQuery(id, informationFetcher)

  return (
    <div className='information'>
      <InformationToolbar />
      <h1>{informationData?.name}</h1>
    </div>
  )
}
export default InfoPage
