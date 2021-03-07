import { useState, useEffect } from 'react';

import moment from 'moment';

import './Clients.css';

const ClientInfos = (props) => {

    const [infos, setInfos] = useState("");
    const [frDate, setFrDate ] = useState("");

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
            setFrDate(moment(parseRes.birth_date).format('DD-MM-YYYY'));
        } catch (e) {
            console.error(e);
        }
    };

    // const dateFr = moment(infos.birth_date).format('DD-MM-YYYY');

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
                        <i className="fas fa-user"></i>
                        <span>Profil</span>
                    </h3>
                    <div className="row d-flex flex-row justify-content-between align-items-center">
                        <p className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-row justify-content-between">
                            <span className="label col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">
                                {/* <i className="fas fa-user"></i> */}
                                Prénom: 
                            </span>
                            <span className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">{infos.first_name}</span>
                        </p>
                        <p className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-row justify-content-between">
                            <span className="label col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">
                                {/* <i className="far fa-user"></i> */}
                                Nom:
                            </span>
                            <span className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">{infos.last_name}</span>
                        </p>
                    </div>
                    <div className="row">
                        <p className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-row justify-content-between">
                            <span className="label col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">
                                <i className="fas fa-calendar-alt"></i>
                                Date de naissance: 
                            </span>
                            <span className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">{ frDate }</span>
                        </p>
                        <p className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-row justify-content-between">
                            <span className="label col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">
                                {/* <i className="fas fa-phone"></i> */}
                                Téléphone:
                            </span>
                            <span className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">{!infos.phone ? "NC." : infos.phone}</span>
                        </p>
                    </div>
                    <div className="row">
                        <p className="col-xl-12 col-lg-12 col-md-12 col-sm-12 d-flex flex-row justify-content-start align-items-start">
                            <span className="label col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">
                                <i className="fas fa-envelope"></i>
                                Adresse email:
                            </span>
                            <span className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">{infos.email}</span>
                        </p>
                    </div>
                </div>
                <div className="div-infos addresses col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                    <h3>
                        <i className="fas fa-home"></i>
                        <span>Mes adresses</span>
                    </h3>
                    <>
                        {!infos.addresses || infos.addresses.length === 0 ?
                            (<div>
                                <p>Aucune adresse renseignée.</p>
                            </div>
                            ) : ( // faire une boucle sur les adresses 
                                <>
                                {infos.addresses.map((address) => {
                                    return (
                                    <div key={address.id} >
                                        <div className="row">
                                            <p className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-row justify-content-start align-items-start">
                                                <span className="label col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">Nom de l'adresse:</span>
                                                <span className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">{ address.address_name }</span>
                                            </p>
                                        </div>
                                        <div className="row">
                                            <p className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-row justify-content-start align-items-start">
                                                <span className="label col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">Rue:</span>
                                                <span className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">{ address.street }</span>
                                            </p>
                                        </div>
                                        <div className="row d-flex flex-row justify-content-between align-items-center">
                                            <p className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <span className="label col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">Code Postal</span>
                                                <span className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">{ address.zipcode }</span>
                                            </p>
                                            <p className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <span className="label col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">Ville</span>
                                                <span className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">{ address.city }</span>
                                            </p>
                                        </div>
                                    </div>)
                                })}
                                </>
                            )
                        }
                    </>
                </div>
            </div>
            <div className="client row col-xl-11 col-lg-11 col-md-11 col-sm-12 mx-auto mb-2">
                <div className="div-infos cards col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                    <h3>
                        <i className="far fa-credit-card"></i>
                        <span>Mes cartes de paiement</span>
                    </h3>
                    {!infos.cards || infos.cards.length === 0 ?
                        (<>
                            <p>Aucune carte de paiement renseignée.</p>
                        </>
                        ) : ( // faire une boucle sur les adresses 
                            <>{infos.cards.map((card) => {
                                <>
                                    <div className="row">
                                        <p className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-row justify-content-start align-items-start">
                                            <span className="label col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">Nom de la carte:</span>
                                            <span className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">{ card.card_name }</span>
                                        </p>
                                    </div>
                                    <div className="row">
                                        <p className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-row justify-content-start align-items-start">
                                            <span className="label col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">Numéro de la carte:</span>
                                            <span className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">{ card.card_number }</span>
                                        </p>
                                    </div>
                                    <div className="row d-flex flex-row justify-content-between align-items-center">
                                        <p className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <span className="label col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">Date d'expiration</span>
                                            <span className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">{ card.card_exp_date }</span>
                                        </p>
                                        <p className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <span className="label col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">Ville</span>
                                            <span className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mx-auto">{ card.card_cvv }</span>
                                        </p>
                                    </div>
                                </>
                            })}
                            </>
                        )
                    }
                </div>
                <div className="div-infos orders col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                    <h3>
                        <i className="fas fa-shopping-bag"></i>
                        <span>Mon historique de commande</span>
                    </h3>
                    <p>
                        <i className="fas fa-wrench"></i>
                        Zone en travaux, prochainement !
                    </p>
                </div>
            </div>
        </>
    );
}

export default ClientInfos;