import { useState, useEffect } from 'react';


import './Article.css'; 

const Article = () => {

     const [article, setArticle] = useState([]);

     const fetchArticle = async () => {

        const response = await fetch("http://localhost:8000/articles/4",  {
          method: "GET",
           mode: "cors",
        });
        const parseResponse = await response.json();
        setArticle(parseResponse);
       };

       useEffect(() => {
         fetchArticle();
       }, []);

    return (
        <>
            { <div className="article p-3 p-md-5 mx-auto col-xl-11 col-lg-11 rounded row d-flex justify-content-around">
                <div className="card-deck ">
                    <h2>kjhgf</h2>
                    <div className="card" key={article.articleId}>
                        <img className="card-img-top" src={article.image}/>
                        <div className="card-body">
                            <p className="card-title">{article.name}</p>
                            <p className="brand">{article.brand}</p>
                            <p className="price">{article.price} </p>
                            <p className="card-text description">
                                {article.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default Article;
