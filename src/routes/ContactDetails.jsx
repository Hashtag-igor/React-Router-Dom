import React from "react"

import { useParams, useNavigate } from "react-router-dom";

export default function ContactDetails(){
    const {id} = useParams()  //Esse nome "id" tem que combinar com o nome passado lá no "path" do index.js, onde ele foi definido no element
    //Seria interessante caso estivesse utilizando um banco de dados, por que definiria uma rota especifica propria para cada usuario salvo;

    const navigate = useNavigate()

    function submit(){                      
        console.log("Retornando para a home")
        return navigate("/")        //Após chamar a função, vai ir para a rota "/"
    }

    return(
        <div>
            <h1>Exibindo mais informações do contato: {id}</h1>
            <button onClick={submit}>Home</button>
        </div>
    )
}