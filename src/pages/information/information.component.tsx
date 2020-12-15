import React from 'react'

import { useParams } from 'react-router'

import InfoContainer from '../../components/infoContainer/infoContainer.component'
import InformationToolbar from '../../components/informationToolbar/informationToolbar.component'

import './information.style.css'

interface Params {
  id: number
}

const InfoPage: React.FC<Params> = () => {
  let { id } = useParams<any>()
  function pad(n: string, width: number, z: string) {
    z = z || '0'
    n = n + ''
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
  }
  let idTitle = pad(id.toString(), 3, '')
  idTitle = '#' + idTitle

  return (
    <div className='information'>
      <InformationToolbar title={idTitle} />
      <InfoContainer id={id} />
    </div>
  )
}
export default InfoPage
