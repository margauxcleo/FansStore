import { useState, useEffect } from 'react';

import './Clients.css';

const ClientInfos = (props) => {

    const [infos, setInfos] = useState("");


    const getInfos = async () => {
        try {
            const response = await fetch("http://localhost:8088/clients/infos", {
                method: 'GET',
                mode: 'cors',
                headers: {
                    "jwt": localStorage.jwt
                }
            });
            const parseRes = await response.json();
            console.log(parseRes);
            setInfos(parseRes);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getInfos();
    }, []);

    return (
        <>
            <div>
                <h1>Mes informations</h1>
                <h2>Bonjour {infos.first_name} !</h2>
            </div>
        </>
    );
}

export default ClientInfos;