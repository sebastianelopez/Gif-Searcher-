import React,{useState, useEffect} from 'react'
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {

    const {data,loading}=useFetchGifs(categoria);     

    

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{categoria}</h3>
            
            {loading && <p className="animate__animated animate__flash">Cargando...</p>}

            <div className="card-grid">            
                    {
                        data.map(img=>(
                            <GifGridItem 
                            key={img.id}
                            {...img} 
                            />
                        ))
                        }
                
            </div>
        </>    
    )
}
