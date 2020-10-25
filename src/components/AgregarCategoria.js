import React, {useState} from 'react'
import PropTypes from 'prop-types';


export const AgregarCategoria = ({setCategorias}) => {

    const [inputValue, setValue] = useState('');

    const handleInputChange=(evento)=>{
        setValue(evento.target.value);
    }
    const handleEnter=(evento)=>{
        evento.preventDefault(); //evita que se actualize la pagina por caracteristica propia del form

        if(inputValue.trim().length>2){
            setCategorias(cats=>[inputValue, ...cats]);
            setValue('');
        };

        
    }

    return (
        <form onSubmit={handleEnter}>
            <input 
            type="text"
            placeholder="Agregar categoria"
            value={inputValue}
            onChange={handleInputChange}
            />
        </form>
    )
}

AgregarCategoria.propTypes={
 setCategorias: PropTypes.func.isRequired
}
