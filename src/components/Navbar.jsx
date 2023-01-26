import React from "react";

//Link = Funciona como uma tag <a/>. Ao ser clicado, manda o usuario para uma rota especifica (rota definida dentro do link);
import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}