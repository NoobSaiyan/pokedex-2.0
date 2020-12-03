import React from 'react'
import * as _ from 'lodash'
import './card.styles.css'

interface Props {
  name: string
  id: number
}

const Card: React.FC<Props> = ({ name, id }) => {
  name = _.startCase(_.toLower(name))
  function pad(n: string, width: number, z: string) {
    z = z || '0'
    n = n + ''
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
  }
  const num = pad(id.toString(), 3, '')
  return (
    <div className='card'>
      <div className='serial'>{num}</div>
      <div className='name'>{name}</div>
    </div>
  )
}

export default Card
