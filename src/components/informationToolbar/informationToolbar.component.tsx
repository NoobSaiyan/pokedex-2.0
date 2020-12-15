import React from 'react'

import Title from '../title/title.component'

import './informationToolbar.style.css'
interface Props {
  id: number
}

const InformationToolbar: React.FC<Props> = ({ id }) => {
  function pad(n: string, width: number, z: string) {
    z = z || '0'
    n = n + ''
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
  }
  let idTitle = pad(id.toString(), 3, '')
  idTitle = '#' + idTitle
  return (
    <div className='toolbar'>
      <h1 style={{ backgroundColor: '#6dc0ff' }}>previous</h1>
      <Title title={idTitle} />
      <h1 style={{ backgroundColor: '#6dc0ff' }}>next</h1>
    </div>
  )
}
export default InformationToolbar
