import React from 'react'
import * as _ from 'lodash'
import './card.styles.css'

interface Props {
  name: string
  id: number
}

const Card: React.FC<Props> = ({ name, id }) => {
  name = _.startCase(_.toLower(name))
  return <div className='card'>{name}</div>
}

export default Card
