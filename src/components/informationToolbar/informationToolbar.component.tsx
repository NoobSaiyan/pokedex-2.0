import React from 'react'

import Title from '../title/title.component'

import './informationToolbar.style.css'
interface Props {
  title: string
}

const InformationToolbar: React.FC<Props> = ({ title }) => {
  return (
    <div className='toolbar'>
      <h1 style={{ backgroundColor: '#6dc0ff' }}>previous</h1>
      <Title title={title} />
      <h1 style={{ backgroundColor: '#6dc0ff' }}>next</h1>
    </div>
  )
}
export default InformationToolbar
