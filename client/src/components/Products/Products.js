import { useState, useEffect } from 'react';
import './Products.css';
import { NavLink } from 'react-router-dom';

const Products = () => {

    const [articles, setArticles] = useState([]);

    const fetchArticles = async () => {

        const response = await fetch("http://localhost:8000/articles", {
          method: "GET",
          mode: "cors",
        });
        const parseResponse = await response.json();
        setArticles(parseResponse);
        console.log(parseResponse);
      };

      useEffect(() => {
        fetchArticles();
      }, []);

      return (
        <div className="fond">
          <h1 align="center">Articles</h1>
          <div className="grid">
           <div className="container entete">
             <h2 className="sous-titre">Pick one and let's travel !</h2>
           </div>
           <div className="universes-links p-3 p-md-5 mx-auto col-xl-11 col-lg-11 rounded row d-flex justify-content-around">
                <div className="col-sm-12 col-md-6 d-flex justify-content-around align-items-center px-0">
                    <div className="circle circle-sm hp-circle d-flex justify-content-center align-items-center">
                        <NavLink className="nav-link" to="/univers/harry-potter" exact>
                            <span className="universe-nav-title">Harry Potter</span>
                        </NavLink>
                    </div>
                    <div className="circle circle-sm marvel-circle d-flex justify-content-center align-items-center">
                        <NavLink className="nav-link" to="/univers/marvel" exact>
                            <span className="universe-nav-title">Marvel</span>
                        </NavLink>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 d-flex justify-content-around align-items-center px-0">
                    <div className="circle circle-sm lotr-circle d-flex justify-content-center align-items-center">
                        <NavLink className="nav-link align-items-center justify-content-center" to="/univers/seigneur-des-anneaux" exact>
                            <span className="universe-nav-title">Le Seigneur des</span>
                            <br />
                            <span className="universe-nav-title">Anneaux
                            </span>
                    </NavLink>
                </div>
                    <div className="circle circle-sm sw-circle d-flex justify-content-center align-items-center">
                        <NavLink className="nav-link" to="/univers/star-wars" exact>
                            <span className="universe-nav-title">Star Wars</span>
                        </NavLink>
                    </div>
                </div>
            </div>
          </div>
          <div class="row d-flex justify-content-around mt-5 mb-5">
            {articles.map((article) => {
              return (
                <div class="card mb-5" key={article.articleId}>
                  <div class="card-body">
                    <h5 class="card-title black">{article.name}</h5>
                    <p class="card-text black">{article.brand}</p>
                    <p class="card-text black">{article.price} $</p>
                    <img class="card-img-top" src={article.image} alt="Card image cap"/>
                    <p class="card-text black">{article.description}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
      );
};

export default Products;
