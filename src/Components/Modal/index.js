import React from 'react'
import './index.css';

function Modal({data, closeModal}) {

    if(!data.flag){
        return <h3>Loading...</h3>
    }

    return (
        <div className="Modal">
            <div className="body">
                <h2>{data.name}</h2>
                <img src={data.flag} alt={data.name}/>
                <h4>Capital: {data.capital}</h4>
            </div>
            <button onClick={closeModal}>close</button>
        </div>
    )
}

export default Modal
