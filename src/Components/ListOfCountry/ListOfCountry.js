import React, { useState } from "react";
import './index.css';
import Modal from '../Modal';

export default function ListOfCountry(props) {
    const [state, setstate] = useState(false);
    const [data, setData] = useState({});

    const handleClick = (data) => {
        setstate(!state);
        setData(data);
    }

    const closeModal=()=>{
        setstate(false);
    }

    return (
        <>
            <h3 className="country-Name" onClick={() => handleClick(props.country)}>{props.country.name}</h3>
            {state && <Modal data={data} closeModal={closeModal}/>}
        </>
    );
}
