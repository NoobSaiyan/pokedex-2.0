import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

import { useParams } from 'react-router'

import InfoContainer from '../../components/infoContainer/infoContainer.component'
import InformationToolbar from '../../components/informationToolbar/informationToolbar.component'

import './information.style.css'

interface PokemonResponse {
  name: string
  height: string
  weight: string
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
  id = parseInt(id)

  const { data: informationData } = useQuery(id, informationFetcher)

  return (
    <div className='information'>
      <InformationToolbar id={id} />
      <InfoContainer id={id} informationData={informationData} />
    </div>
  )
}
export default InfoPage
