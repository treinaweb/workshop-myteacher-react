import { Button } from "@mui/material";
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, Nome, Valor } from "./Lista.style";

const Lista = () => {
    return (
        <ListaStyled>
            <ItemLista>
                <Foto src="https://github.com/elton-fonseca.png"></Foto>
                <Informacoes>
                    <Nome>Elton Fonseca</Nome>
                    <Valor>R$ 100,00 por hora</Valor>
                    <Descricao>Aulas de programação</Descricao>
                    <Button sx={{ width: '70%'}}>Marcar Aula com Elton</Button>
                </Informacoes>
            </ItemLista>
            <ItemLista>
                <Foto src="https://github.com/elton-fonseca.png"></Foto>
                <Informacoes>
                    <Nome>Elton Fonseca</Nome>
                    <Valor>R$ 100,00 por hora</Valor>
                    <Descricao>Aulas de programação</Descricao>
                    <Button sx={{ width: '70%'}}>Marcar Aula com Elton</Button>
                </Informacoes>
            </ItemLista>
            <ItemLista>
                <Foto src="https://github.com/elton-fonseca.png"></Foto>
                <Informacoes>
                    <Nome>Elton Fonseca</Nome>
                    <Valor>R$ 100,00 por hora</Valor>
                    <Descricao>Aulas de programação</Descricao>
                    <Button sx={{ width: '70%'}}>Marcar Aula com Elton</Button>
                </Informacoes>
            </ItemLista>
            <ItemLista>
                <Foto src="https://github.com/elton-fonseca.png"></Foto>
                <Informacoes>
                    <Nome>Elton Fonseca</Nome>
                    <Valor>R$ 100,00 por hora</Valor>
                    <Descricao>Aulas de programação</Descricao>
                    <Button sx={{ width: '70%'}}>Marcar Aula com Elton</Button>
                </Informacoes>
            </ItemLista>
        </ListaStyled>
    )
}

export default Lista;