import React from 'react'

import './title.style.css'

interface Props {
  title: string
}

const Title: React.FC<Props> = ({ title }) => {
  return (
    <div className='title'>
      <div className='titleClip' />
      <p className='titlespan'>{title}</p>
    </div>
  )
}
export default Title
