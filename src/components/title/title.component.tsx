import React from 'react'

import './title.style.css'

interface Props {
  gen: string
}

const Title: React.FC<Props> = ({ gen }) => {
  return (
    <div className='title'>
      <div className='titleClip' />
      <p className='titlespan'>Gen - {gen}</p>
    </div>
  )
}
export default Title
