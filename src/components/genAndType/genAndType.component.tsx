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
        <HStack spacing='10px'>
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
            <option value='1'>Gen 1</option>
            <option value='2'>Gen 2</option>
            <option value='3'>Gen 3</option>
            <option value='4'>Gen 4</option>
            <option value='5'>Gen 5</option>
            <option value='6'>Gen 6</option>
            <option value='7'>Gen 7</option>
            <option value='8'>Gen 8</option>
          </Select>
          <Select
            maxW='150px'
            fontWeight='200'
            iconSize='md'
            fontSize='16px'
            color='#363636'
            bg='#B2DEFF'
            borderColor='#B2DEFF'
            size='sm'
            placeholder='Types'
          >
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </HStack>
      </Center>
    </div>
  )
}
export default GenAndType
