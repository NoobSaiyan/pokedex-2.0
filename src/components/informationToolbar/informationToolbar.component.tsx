import React from 'react'

import Title from '../title/title.component'
import { PokemonId } from '../../asset/pokemonId'
import { Link } from 'react-router-dom'

import './informationToolbar.style.css'

interface Props {
  id: number
}

const InformationToolbar: React.FC<Props> = ({ id }) => {
  let idTitle = PokemonId(id)
  let prev = id - 1,
    next = id + 1
  if (id <= 1) {
    prev = 858
  } else if (id >= 858) {
    next = 1
  }

  return (
    <div className='toolbar'>
      <Link to={`/${prev}`}>
        <div className='prev'>{`⇚ ${PokemonId(prev)}`}</div>
      </Link>

      <Title title={idTitle} />
      <Link to={`/${next}`}>
        <div className='next'>{`${PokemonId(next)} ⇛`}</div>
      </Link>
    </div>
  )
}
export default InformationToolbar
