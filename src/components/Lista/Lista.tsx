import { Button } from "@mui/material";
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, Nome, Valor } from "./Lista.style";

const Lista = () => {
    return (
        <ListaStyled>
            <ItemLista>
                <Foto src="https://github.com/elton-fonseca.png"></Foto>
                <Informacoes>
                    <Nome>Elton Fonseca</Nome>
                    <Valor>R$ 100,00</Valor>
                    <Descricao>Aulas de programação</Descricao>
                    <Button>Marcar Aula</Button>
                </Informacoes>
            </ItemLista>
        </ListaStyled>
    )
}

export default Lista;