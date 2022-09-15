import { useState, useEffect } from "react";
import { Professor } from "../../@types/professor";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
    const [listaProfessores, setListaProfessores] = useState<Professor[]>([]);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        ApiService.get('/professores').then((resposta) => {
            setListaProfessores(resposta.data)
        })
    }, []);

    return {
        listaProfessores,
        nome,
        setNome,
        email,
        setEmail
    }
}