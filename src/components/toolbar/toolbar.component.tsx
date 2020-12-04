import React from 'react'

import Title from '../title/title.component'
import GenAndType from '../genAndType/genAndType.component'
import Search from '../search/search.component'

import './toolbar.style.css'

const ToolBar = () => {
  return (
    <div className='toolbar'>
      <GenAndType />
      <Title />
      <Search />
    </div>
  )
}
export default ToolBar
