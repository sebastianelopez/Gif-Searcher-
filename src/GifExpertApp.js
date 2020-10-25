import React, {useState} from 'react';
import { AgregarCategoria } from './components/AgregarCategoria';
import {GifGrid} from './components/GifGrid';

export const GifExpertApp = ()=>{

    const [categorias, setCategorias]= useState(['Barry Allen']);

    const handleAdd = (nuevo)=>{
        
    };
    


    return (
        <>
            <h2 className="tituloprincipal">Gif Expert App</h2>
            <AgregarCategoria setCategorias={setCategorias} />
            <hr />
        
            

            <ol>
                {
                 categorias.map(categoria =>
                  <GifGrid 
                    key={categoria}
                    categoria={categoria} 
                  />
                 )   
                }
            </ol>
        </>    
    );
}


