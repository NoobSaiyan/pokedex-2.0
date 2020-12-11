import React from 'react'

import Title from '../title/title.component'
import GenAndType from '../genAndType/genAndType.component'
import Search from '../search/search.component'

import './homeToolbar.style.css'

interface Props {
  handleChange: (e: any) => void
  gen: string
  setGen: (value: string) => void
}
const HomeToolBar: React.FC<Props> = ({ gen, setGen, handleChange }) => {
  let genTitle = 'Gen - ' + gen
  return (
    <div className='toolbar'>
      <GenAndType gen={gen} setGen={setGen} />
      <Title title={genTitle} />
      <Search handleChange={handleChange} />
    </div>
  )
}
export default HomeToolBar
