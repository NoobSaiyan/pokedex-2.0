import React from 'react'

import InfoCard from '../infoCard/infoCard.component'

import './infoContainer.style.css'

interface Props {
  informationData?: informationData
  id: number
}
interface informationData {
  name: string
  height: string
  weight: string
}
const imgStyles: React.CSSProperties = {
  height: '300px',
  width: '300px',
  marginTop: '150px',
  marginRight: '10%',
  float: 'right',
}

const InfoContainer: React.FC<Props> = ({ id, informationData }) => {
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
