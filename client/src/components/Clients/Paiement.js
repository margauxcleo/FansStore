import { useState, useEffect } from 'react';
import PageTitle from '../PageTitle/PageTitle';
import Cart from '../Cart/Cart';
import './Paiement.css';

const Paiement = (props) => {

    const [infos, setInfos] = useState("");
    const [mainTitle, setMainTitle] = useState("Paiement");
    const [themeStyle, setThemeStyle ] = useState("mainTheme");

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

    const { handleDeleteFromCart, handleGetCart, handleIncrement, handleDecrement} = props;

    // console.log(cart.json());
    // const panier = cart.json();

    const { cart } = props.cart;

    // calcul du prix total (reduce?)
    let totalPrice = cart.reduce( (total, article) => {
        // console.log(`Prix  => ${article.price} Quantité => ${article.quantity}`);
        // console.log(`Total => ${total}`);
        // console.log('-----------');
        return total + (article.price * article.quantity);
    },0);

    // on met à jour le panier à chaque fois qu'on render cette page 
    useEffect(() => {
        getInfos();
        handleGetCart();
    }, []);


    return (
        <>
            <div className="container-fluid mx-auto col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-4">
                < PageTitle mainTitle={mainTitle} themeStyle={themeStyle}/>
                <div className="paiement-div jumbotron jumbotron-paiement p-3 p-md-5 mx-auto col-xl-11 col-lg-11 col-sm-12 rounded">
                        <h2 className="text-center text-dark mb-3">Adresse de paiement</h2>
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
                        </div>
                        <div className="row col-lg-12 col-sm-6">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                                <input type="text" className="form-control email" placeholder={infos.email} />
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                                <input type="text" className="form-control adresse-postale" placeholder="Adresse Postale" />
                            </div>
                            <div>
                                <input type="checkbox" aria-label="Checkbox for following text input" className="mr-4" />
                                <i className="fas fa-check-square mr-4" style={{backgroundColor: "black", color: "white"}}></i>
                                <span className="text-dark" style={{fontSize: "12px"}}>Livraison colissimo sous 24h</span>
                            </div>
                        </div>
                </div>
                <div className="mx-auto col-xl-12 col-lg-12 col-md-11 col-sm-12">
                    <div className="row mt-3">
                        <div className="paiement-div jumbotron jumbotron-paiement p-3 p-md-5 mx-auto col-xl-5 col-lg-5 rounded">
                            <h2 className="text-center text-dark mb-3">Mes moyens de paiement</h2>
                            <div className="row col-lg-12 col-sm-12">
                            <input type="checkbox" aria-label="Checkbox for following text input" className="mr-4"/>
                            <span className="text-dark">Credit card</span><br/>
                            <div className="row col-lg-12 col-sm-12">
                            <input type="checkbox" aria-label="Checkbox for following text input" className="mr-4 mb-4"/>
                            <span className="text-dark">Paypal</span><br/>
                            <div className="row col-lg-12 col-sm-12 mb-4">
                                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                                    <input type="text" className="form-control nom-carte" placeholder="Nom carte" />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <input type="text" className="form-control" placeholder="Numéro carte" />
                                </div>
                            </div>
                            <div className="row col-lg-12 col-sm-12 mb-4">
                                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 mb-4">
                                    <input type="text" className="form-control mb-3" placeholder="Expiration" />
                                    <button className="btn btn-primary">Enregister carte</button>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <input type="text" className="form-control mb-3" placeholder="CVV" />
                                    <button className="btn btn-primary">Ajouter nouvelle carte</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="paiement-div jumbotron jumbotron-paiement p-3 p-md-5 mx-auto col-xl-5 col-lg-5 rounded">
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

                    {/* if (!infos.addresses || infos.addresses.length === 0 || infos.cards.length === 0) ? 
                    button disabled  true*/}
                    {/* : bouton not disabled => il peut passer commande 
                    => on lance le fetch post pour la création d'une commande */}
                </div>
            </div>
        </div>
    </div>
        
    </>
    )
}

export default Paiement;