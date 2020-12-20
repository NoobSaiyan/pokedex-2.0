import React from 'react'

import Title from '../title/title.component'
import { PokemonId } from '../../asset/pokemonId'

import './informationToolbar.style.css'

interface Props {
  id: number
}

const InformationToolbar: React.FC<Props> = ({ id }) => {
  let idTitle = PokemonId(id)
  return (
    <div className='toolbar'>
      <h1 style={{ backgroundColor: '#6dc0ff' }}>{idTitle}</h1>
      <Title title={idTitle} />
      <h1 style={{ backgroundColor: '#6dc0ff' }}>next</h1>
    </div>
  )
}
export default InformationToolbar
