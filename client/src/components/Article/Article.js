import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


import './Article.css'; 

const Article = (props) => {

     const [article, setArticle] = useState();

     const { id } = useParams();

     const fetchArticle = async (id) => {

        const response = await fetch(`http://localhost:8088/articles/${id}`,  {
            method: "GET",
            mode: "cors",
            headers: {
                'Accept': 'application/json'
            }  
        });
        const parseResponse = await response.json();
        console.log(parseResponse);
        setArticle(parseResponse);
       };

       useEffect(() => {
            fetchArticle(id);
       }, []);

    return (
        <>
            <p>{id}</p>
            <p>{article.articleId}</p>
            {/* <div className="article p-3 p-md-5 mx-auto col-xl-11 col-lg-11 rounded row d-flex justify-content-around">
                <div className="card-deck ">
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
            </div> */}
        </>
    );
}

export default Article;
