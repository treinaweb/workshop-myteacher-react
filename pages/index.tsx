import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/Lista/Lista'

const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: "João",
      foto: "https://github.com/elton-fonseca.png",
      descricao: "Descricação do professor 1",
      valor_hora: 100
    },
    {
      id: 2,
      nome: "Professor 2",
      foto: "https://github.com/elton-fonseca.png",
      descricao: "Descricação do professor 2",
      valor_hora: 200
    },
    {
      id: 3,
      nome: "Professor 3",
      foto: "https://github.com/elton-fonseca.png",
      descricao: "Descricação do professor 3",
      valor_hora: 300
    },
    {
      id: 4,
      nome: "Professor 4",
      foto: "https://github.com/elton-fonseca.png",
      descricao: "Descricação do professor 4",
      valor_hora: 400
    }
  ]

  return (
   <Box sx={{ backgroundColor: 'secondary.main' }}>
      <Lista professores={professores}></Lista>
   </Box>
  )
}

export default Home
