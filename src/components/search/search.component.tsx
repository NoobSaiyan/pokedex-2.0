import React from 'react'

import { Input, HStack, Center, Box } from '@chakra-ui/react'

import './search.style.css'

const Search: React.FC = () => {
  return (
    <div className='searchBase'>
      <Center h='100%' v='100%'>
        <HStack spacing='20px'>
          <Input
            maxW='150px'
            variant='flushed'
            fontWeight='200'
            fontSize='20px'
            color='#363636'
            borderColor='#363636'
            placeholder='Name'
          />
          <Box
            as='button'
            width='80px'
            bg='#B2DEFF'
            height='35px'
            fontWeight='200'
            lineHeight='1.2'
            borderColor='#B2DEFF'
            fontSize='18px'
            color='#363636'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            _hover={{ bg: '#ebedf0' }}
            _active={{
              bg: '#dddfe2',
              transform: 'scale(0.98)',
              borderColor: '#bec3c9',
            }}
            _focus={{
              boxShadow:
                '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            }}
          >
            Search
          </Box>
        </HStack>
      </Center>
    </div>
  )
}
export default Search
