import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Lista from '../src/components/Lista/Lista'

const Home: NextPage = () => {
  return (
   <Box sx={{ backgroundColor: 'secondary.main' }}>
      <Lista></Lista>
   </Box>
  )
}

export default Home
