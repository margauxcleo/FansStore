import { useState, useEffect } from 'react';

const Products = () => {

    const [articles, setArticles] = useState([]);

    const fetchArticles = async () => {

        const response = await fetch("http://localhost:8000/articles", {
          method: "GET",
          mode: "cors",
        });
        const parseResponse = await response.json();
        setArticles(parseResponse);
      };

      useEffect(() => {
        fetchArticles();
      }, []);

      return (
        <div>
          <h1 align="center">Articles</h1>
          <div className="list-group">
            {articles.map((article) => {
              return (
                <div className="list-group-item" key={article.articleId}>
                  {article.name}
                  <p>{article.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      );
};

export default Products;
