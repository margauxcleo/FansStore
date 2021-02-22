import { useState, useEffect } from 'react';


import './Article.css'; 

const Article = () => {

    // const [article, setArticle] = useState([]);

    // const fetchArticle = async () => {

    //     const response = await fetch("http://localhost:8000/article/:id", {
    //       method: "GET",
    //       mode: "cors",
    //     });
    //     const parseResponse = await response.json();
    //     setArticle(parseResponse);
    //   };

    //   useEffect(() => {
    //     fetchArticle();
    //   }, []);

    return (
        <>
            {/* <div className="article p-3 p-md-5 mx-auto col-xl-11 col-lg-11 rounded row d-flex justify-content-around">
                <div className="card-deck ">
                    <div className="card" key={article.articleId}>
                        <img className="card-img-top" src={article.image} alt={article.name}/>
                        <div className="card-body">
                            <h5 className="card-title">{article.name}</h5>
                            <h4 className="brand">{article.brand}</h4>
                            <h3 className="price">{article.price} €</h3>
                            <p className="card-text description">
                                {article.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default Article;