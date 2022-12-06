import React, { useState } from "react";
import { Info } from '../../comon/info';
import Botao from '../Botao'

interface Props {
    setCadastro: React.Dispatch<React.SetStateAction<Info[]>>
}

export default function Formulario( {setCadastro}: Props){

    const [cadastro, setCadastros] = useState("")

    return(
        <form>
            <div>
                <label htmlFor="">
                    
                </label>
                <input 
                    type="text" 
                    name="" 
                    id="" 
                />
            </div>
            <div>
                <label htmlFor=""></label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor=""></label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor=""></label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor=""></label>
                <input type="text" />
            </div>
            <Botao />
        </form>

    )
}