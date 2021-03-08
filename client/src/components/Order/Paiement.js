import { useState, useEffect } from 'react';
import PageTitle from '../PageTitle/PageTitle';
import Cart from '../Cart/Cart';
import './Paiement.css';

const Paiement = (props) => {

    const [infos, setInfos] = useState("");

    // AR => pas bon de faire comme ça 
    const [mainTitle, setMainTitle] = useState("Paiement");
    const [themeStyle, setThemeStyle ] = useState("mainTheme");
    // fin AR

    const { handleGetCart } = props;
    const { cart } = props.cart;

    // Récupération des informations clients présentes en base de données
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

    // calcul du prix total (reduce?)
    let totalPrice = cart.reduce( (total, article) => {
        // console.log(`Prix  => ${article.price} Quantité => ${article.quantity}`);
        // console.log(`Total => ${total}`);
        // console.log('-----------');
        return total + (article.price * article.quantity);
    },0);


    // DIFFERENTS FORM = DIFFERENTS FETCH 
    // update des infos du client
    const updateClientInfos = async data => {
        console.log('onSubmit: ', JSON.stringify(data));
        
        try {
            const response = await fetch('http://localhost:8088/clients/updateClient', {
                method : 'PUT',
                mode : 'cors',
                headers : {
                'Content-Type' : 'application/json'
                },
                body : JSON.stringify(data)
            });
      
            const parseRes = await response.json();
      
            if (parseRes) {
              console.log('Infos à jour!');
            } else {
              console.log(parseRes);
            }
          } catch (e) {
            console.error(e.message);
          }
    };

    // création d'une adresse
    const handleAddAddress = async data => {
        console.log('onSubmit: ', JSON.stringify(data));
        
        try {
            const response = await fetch('http://localhost:8088/clients/client/addAddress', {
                method : 'POST',
                mode : 'cors',
                headers : {
                'Content-Type' : 'application/json'
                },
                body : JSON.stringify(data)
            });
      
            const parseRes = await response.json();
      
            if (parseRes) {
              console.log('Nouvelle adresse créée avec succès !');
            } else {
              console.log(parseRes);
            }
          } catch (e) {
            console.error(e.message);
          }
    };

    // création d'une carte de paiement 
    const handleAddCard = async data => {
        console.log('onSubmit: ', JSON.stringify(data));
        
        try {
            const response = await fetch('http://localhost:8088/clients/client/addCard', {
                method : 'POST',
                mode : 'cors',
                headers : {
                'Content-Type' : 'application/json'
                },
                body : JSON.stringify(data)
            });
      
            const parseRes = await response.json();
      
            if (parseRes) {
              console.log('Nouvelle carte de paiement créée avec succès !');
            } else {
              console.log(parseRes);
            }
          } catch (e) {
            console.error(e.message);
          }
    };

    // création d'une commande 
    const handleNewOrder = async data => {
        console.log('onSubmit: ', JSON.stringify(data));
        
        try {
            const response = await fetch('http://localhost:8088/orders//newOrder', {
                method : 'POST',
                mode : 'cors',
                headers : {
                'Content-Type' : 'application/json'
                },
                body : JSON.stringify(data)
            });
      
            const parseRes = await response.json();
      
            if (parseRes) {
              console.log('Commande créée avec succès !');
            } else {
              console.log(parseRes);
            }
          } catch (e) {
            console.error(e.message);
          }
    };

    // on met à jour le panier à chaque fois qu'on render cette page 
    useEffect(() => {
        getInfos();
        handleGetCart();
    }, []);


    return (
        <>
            <div className="container-fluid mx-auto col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-4">
                < PageTitle mainTitle={mainTitle} themeStyle={themeStyle}/>
                <div className="paiement-div jumbotron jumbotron-paiement p-3 p-md-5 mx-auto col-xl-11 col-lg-11 col-md-11 col-sm-12 rounded">
                        <h2 className="text-center text-dark mb-3">Adresse de paiement</h2>
                        <form>
                            <div className="row col-lg-12 col-sm-12 mb-5">
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                                    <input type="text" className="form-control first-name" placeholder={infos.first_name} />
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                                    <input type="text" className="form-control last-name" placeholder={infos.last_name} />
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                                    <input type="text" className="form-control phone" placeholder={!infos.phone ? "NC." : infos.phone } />
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-4">
                                    <input type="text" className="form-control email" placeholder={infos.email} disabled/>
                                </div>
                                <button className="btn btn-primary ml-3">Mettre à jour mes informations</button>
                            </div>
                        </form>
                        <form>
                            <div className="row col-lg-12 col-sm-6 col-md-11">
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                                    <input type="text" className="form-control adresse-postale mb-2" placeholder="Nom de l'adresse *" />
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                                    <input type="text" className="form-control adresse-postale" placeholder="Rue*" />
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                                    <input type="text" className="form-control adresse-postale" placeholder="Zip Code*" />
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                                    <input type="text" className="form-control adresse-postale" placeholder="Ville *" />
                                </div>
                                <button className="btn btn-primary ml-3">Ajouter une adresse</button>
                            </div>
                        </form>
                </div>
                <div className="mx-auto col-xl-12 col-lg-12 col-md-11 col-sm-12">
                    <div className="row mt-3">
                        <div className="paiement-div jumbotron jumbotron-paiement jumbotron-moyen-paiement p-3 p-md-5 mx-auto col-xl-5 col-lg-5 rounded">
                            <h2 className="text-center text-dark mb-4">Mes moyens de paiement</h2>
                            <form>
                                <div className="row col-lg-12 col-sm-12 mb-4">
                                    <div className="mnb-4 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <input type="text" className="form-control nom-carte" placeholder="Nom carte" />
                                    </div>
                                    <div className="mb-4 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <input type="text" className="form-control" placeholder="Numéro carte" />
                                    </div>
                            </div>
                            <div className="row col-lg-12 col-sm-12 mb-4">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-4">
                                    <input type="text" className="form-control" placeholder="Expiration" />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <input type="text" className="form-control mb-3" placeholder="CVV" />
                                </div> 
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <button className="btn btn-primary">Ajouter une carte</button>
                                </div> 
                            </div>
                    </form>
                </div>
                <div className="paiement-div jumbotron jumbotron-paiement jumbotron-recapitulatif-commabde p-3 p-md-5 mx-auto col-xl-5 col-lg-5 rounded">
                    <h2 className="text-center text-dark mb-3">Récapitulatif commande</h2>
                    <>
                        {(cart.map((cartItem, key) => {
                                    return (
                                    <div key={key} className="row d-flex flex-row justify-content-between align-items-start mb-2">
                                        <ul className="list-group">
                                            <li className="list-group-item text-dark">{cartItem.quantity} - {cartItem.name}  : {cartItem.price} € </li>
                                        </ul>
                                    </div>)}
                        ))}
                    </>
                    <h5 className="price">Somme totale: 
                        <span> { Math.round(totalPrice * 100)/100 } € TTC</span>
                    </h5>
                    <div>
                        <input type="checkbox" aria-label="Checkbox for following text input" className="ml-3 mr-4 mb-4" checked disabled />
                        <span className="text-dark" style={{fontSize: "12px"}}>Livraison colissimo sous 24h</span>
                    </div>
                    {(!infos.addresses || infos.addresses.length === 0 || infos.cards.length === 0) ? 

                        (
                            <>
                                <button className="btn btn-primary" disabled>Valider la commande</button>
                            </>
                        ) :

                        (
                            <>
                                <button className="btn btn-primary">Valider la commande</button>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
        
    </>
    )
}

export default Paiement;