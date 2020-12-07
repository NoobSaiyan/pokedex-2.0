import React from 'react'
import { Select, HStack, Center } from '@chakra-ui/react'

import './genAndType.style.css'

interface Props {
  gen: string
  setGen: (value: string) => void
}

const GenAndType: React.FC<Props> = ({ gen, setGen }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGen(event.target.value)
  }
  return (
    <div className='filtersBase'>
      <Center h='100%' v='100%'>
        <Select
          maxW='150px'
          iconSize='md'
          fontWeight='200'
          fontSize='16px'
          color='#363636'
          bg='#B2DEFF'
          borderColor='#B2DEFF'
          size='sm'
          value={gen}
          onChange={handleChange}
        >
          <option value='1'>Generation 1</option>
          <option value='2'>Generation 2</option>
          <option value='3'>Generation 3</option>
          <option value='4'>Generation 4</option>
          <option value='5'>Generation 5</option>
          <option value='6'>Generation 6</option>
          <option value='7'>Generation 7</option>
          <option value='8'>Generation 8</option>
        </Select>
      </Center>
    </div>
  )
}
export default GenAndType
