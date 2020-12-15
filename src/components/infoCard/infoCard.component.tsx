import React from 'react'
import * as _ from 'lodash'

import './infoCard.style.css'

interface Props {
  informationData?: informationData
}
interface informationData {
  name: string
}

const InfoCard: React.FC<Props> = ({ informationData }) => {
  const name = _.startCase(_.toLower(informationData?.name))
  return (
    <div className='infoCard'>
      <div className='infoName'>{name} </div>
    </div>
  )
}

export default InfoCard
