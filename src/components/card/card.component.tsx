import React from 'react'
import * as _ from 'lodash'
import './card.styles.css'
import axios from 'axios'
import { useQuery } from 'react-query'

interface Props {
  genName?: string
  name: string
  id: number
}
interface TypesResponse {
  types: Types[]
}
interface Types {
  slot: string
  type: {
    name: string
    url: string
  }
}

const typesFetcher = async (pokiId: string) => {
  const { data } = await axios.get<TypesResponse>(
    `https://pokeapi.co/api/v2/pokemon/${pokiId}`
  )
  return data.types
}

const Card: React.FC<Props> = ({ name, id, genName }) => {
  // formatting name and serial number
  name = _.startCase(_.toLower(name))
  function pad(n: string, width: number, z: string) {
    z = z || '0'
    n = n + ''
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
  }
  const num = pad(id.toString(), 3, '')

  // image tag css properties
  const imgStyles: React.CSSProperties = {
    height: '100px',
    width: '100px',
    marginTop: '10px',
    marginLeft: '20px',
  }
  const { data: typesData } = useQuery(id, typesFetcher)

  return (
    <div className='homeCard'>
      <div className='serial'>{num}</div>
      <div className='homeImage'>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          style={{ ...imgStyles }}
          alt='not found'
        />
      </div>
      <div className='homeName'>{name}</div>
      <div className='homeTypes'>
        {typesData?.map(({ type }) => {
          return <div className='type'>{type.name}</div>
        })}
      </div>
      <div className='genName'>{genName}</div>
    </div>
  )
}

export default Card
