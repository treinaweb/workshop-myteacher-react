import type { NextPage } from 'next'

function Botao(props){
  return <a href="#">{props.titulo}</a>;
}

const Home: NextPage = () => {
  return (
   <div>
    <Botao titulo="Click" /><br />
    <Botao titulo="Entrar"  /><br />
    <Botao titulo="Ver"  /><br />
    <Botao titulo="Ver Mais"  />
   </div>
  )
}

export default Home
