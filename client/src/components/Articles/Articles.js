import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArticlesNav from '../ArticlesNav/ArticlesNav';

import './Articles.css';


const Articles = (props) => {

    const { imgPath, articles, catFiltre, checkEmpty, setCategoryOnClick, themeStyle } = props;

    return (
        <>
            <div className={themeStyle}>
                <div className="articles p-3 p-md-5 mx-auto col-xl-11 col-lg-11 col-md-11 col-sm-12 rounded row d-flex flex-column justify-content-center">
                    < ArticlesNav articles={articles} catFiltre={catFiltre} setCategoryOnClick={setCategoryOnClick} />
                    {(catFiltre.length === 0 && checkEmpty === false) ?
                        (<div className="card-group row mx-auto">
                            {(articles.length != 0) ?
                                (articles.map((article) => {
                                    return (
                                        <Link to={`/produits/produit/${article.articleId}`} key={article.articleId} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                            <div className="card" >
                                                <div className="img-div d-flex align-items-end">
                                                    <img className="card-img-top" src={imgPath + article.image} alt={article.name} />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title name">{article.name}</h5>
                                                    <h4 className="brand">{article.brand}</h4>
                                                    <h3 className="price">{article.price} €</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                }))
                                :
                                (<div className="no-article col-xl-12 col-lg-12 col-md-12 col-sm-12"> Désolé, aucun article ne correspond à votre sélection. </div>
                                )
                            }
                        </div>
                        )
                        : (<div className="card-group row mx-auto">
                            {(catFiltre.length != 0 && checkEmpty === false) ?
                                (catFiltre.map((article) => {
                                    return (
                                        <Link to={`/produits/produit/${article.articleId}`} key={article.articleId} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                            <div className="card" >
                                                <div className="img-div d-flex align-items-end">
                                                    <img className="card-img-top" src={imgPath + article.image} alt={article.name} />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title name">{article.name}</h5>
                                                    <h4 className="brand">{article.brand}</h4>
                                                    <h3 className="price">{article.price} €</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                }))
                                :
                                (<div className="no-article col-xl-12 col-lg-12 col-md-12 col-sm-12"> Désolé, aucun article ne correspond à votre sélection. </div>
                                )
                            }
                        </div>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default Articles;