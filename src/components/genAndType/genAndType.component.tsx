import React from 'react'
import { Select, HStack, Center } from '@chakra-ui/react'

import './genAndType.style.css'

const GenAndType: React.FC = () => {
  return (
    <div className='filtersBase'>
      <Center h='100%' v='100%'>
        <HStack spacing='10%'>
          <Select
            width='120px'
            fontWeight='200'
            fontSize='16px'
            color='#363636'
            bg='#B2DEFF'
            borderColor='#B2DEFF'
            size='sm'
            placeholder='Generation'
          >
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
          <Select
            width='120px'
            fontWeight='200'
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
