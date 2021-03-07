import { useState, useEffect } from 'react';

import './Clients.css';

const ClientInfos = (props) => {

    const [infos, setInfos] = useState("");

    const getInfos = async () => {
        try {
            const response = await fetch("http://localhost:8088/clients/client/infos", {
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
            <div className="jumbotron jumbotron-universes p-3 p-md-5 mx-auto col-xl-11 col-lg-11 col-md-11 col-sm-12 rounded  d-flex align-items-center">
                <div className="px-0 mx-auto jumb-div-title" >
                    <h1 className="display-4 mx-auto">Mon compte</h1>
                    <h2>Bonjour {infos.first_name} !</h2>
                </div>
            </div>
            <div className="client row col-xl-11 col-lg-11 col-md-11 col-sm-12 mx-auto mb-2">
                <div className="div-infos general-infos col-xl-6 col-lg-6 col-md-12 col-sm-12 mx-auto mb-2">
                    <h3>
                        <i class="fas fa-user"></i>
                        <span>Profil</span>
                    </h3>
                    <div className="row d-flex flex-row justify-content-between align-items-center">
                        <p className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-row justify-content-between">
                            <span className="label col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">Prénom: </span>
                            <span className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">{infos.first_name}</span>
                        </p>
                        <p className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-row justify-content-between">
                            <span className="label col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">Nom:</span>
                            <span className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">{infos.last_name}</span>
                        </p>
                    </div>
                    <div className="row">
                        <p className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-row justify-content-between">
                            <span className="label col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">Date de naissance: </span>
                            <span className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">{infos.birth_date}</span>
                        </p>
                        <p className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-row justify-content-between">
                            <span className="label col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">Téléphone:</span>
                            <span className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">{!infos.phone ? "NC." : infos.phone }</span> 
                        </p>
                    </div>
                    <div className="row">
                        <p className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-row justify-content-start align-items-start">
                            <span className="label col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">Adresse email:</span>
                            <span className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">{infos.email}</span>
                        </p>
                    </div>
                </div>
                <div className="div-infos addresses col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                    <h3>
                        <i class="fas fa-home"></i>
                        <span>Mes adresses</span>
                    </h3>
                    {infos.addresses.length === 0 ?
                    (<>
                        <p>Aucune adresse renseignée.</p>
                    </>
                    ): ( // faire une boucle sur les adresses 
                        <>
                            <div className="row">
                                <p className="col-xl-6 col-lg-6 col-md-6 col-sm-12">nom de l'adresse </p>
                                <p className="col-xl-6 col-lg-6 col-md-6 col-sm-12"></p>
                            </div>
                            <div className="row">
                                <p className="col-xl-6 col-lg-6 col-md-6 col-sm-12">rue </p>
                                <p className="col-xl-6 col-lg-6 col-md-6 col-sm-12"></p>
                            </div>
                            <div className="row">
                                <p className="col-xl-6 col-lg-6 col-md-6 col-sm-12">cp</p>
                                <p className="col-xl-6 col-lg-6 col-md-6 col-sm-12">ville</p>
                            </div>
                        </>
                    )
                }    
                </div>
            </div>
            <div className="client row col-xl-11 col-lg-11 col-md-11 col-sm-12 mx-auto mb-2">
                <div className="div-infos cards col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                    <h3>
                        <i class="far fa-credit-card"></i>
                        <span>Mes cartes de paiement</span>
                    </h3>
                    <div className="row">
                        <p></p>
                        <p></p>
                    </div>
                    <div className="row">
                        <p></p>
                        <p></p>
                    </div>
                    <div className="row">
                        <p></p>
                        <p></p>
                    </div>
                </div>
                <div className="div-infos orders col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                    <h3>
                        <i class="fas fa-shopping-bag"></i>
                        <span>Mon historique de commande</span>
                    </h3>
                    <p>
                        <i class="fas fa-wrench"></i>
                        Zone en travaux, prochainement !
                    </p>
                </div>
            </div>
        </>
    );
}

export default ClientInfos;