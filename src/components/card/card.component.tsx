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

  const imgStyles: React.CSSProperties = {
    height: '100px',
    width: '100px',
    marginTop: '10px',
    marginLeft: '20px',
  }

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
    </div>
  )
}

export default Card
