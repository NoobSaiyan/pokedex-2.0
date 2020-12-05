import React from 'react'

import Title from '../title/title.component'
import GenAndType from '../genAndType/genAndType.component'
import Search from '../search/search.component'

import './homeToolbar.style.css'

interface Props {
  gen: string
  setGen: (value: string) => void
}

const HomeToolBar: React.FC<Props> = ({ gen, setGen }) => {
  return (
    <div className='toolbar'>
      <GenAndType gen={gen} setGen={setGen} />
      <Title gen={gen} />
      <Search />
    </div>
  )
}
export default HomeToolBar
