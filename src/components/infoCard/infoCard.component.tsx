import React from 'react'
import * as _ from 'lodash'

import './infoCard.style.css'

interface Props {
  informationData?: informationData
}
interface informationData {
  name: string
  height: string
  weight: string
}

const InfoCard: React.FC<Props> = ({ informationData }) => {
  const name = _.startCase(_.toLower(informationData?.name))
  const height = parseInt(informationData?.height!) / 10
  const weight = parseInt(informationData?.weight!) / 10
  return (
    <div className='infoCard'>
      <div className='infoName'>{name} </div>
      <div className='details'>
        <h1>Weight➩ {weight} kg</h1>
        <h1>Height➩ {height} m</h1>
      </div>
    </div>
  )
}

export default InfoCard
