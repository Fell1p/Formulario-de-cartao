import React from 'react';

interface Props {
    type: "button" | "submit" | undefined,
    onClick?: ()=> void
}

export default function Botao({ onClick, type }: Props){
    return (
        <button 
            onClick={onClick}
            type={type}
        />
    )
}