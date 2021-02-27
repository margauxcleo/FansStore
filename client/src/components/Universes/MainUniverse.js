import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';
import UniversesNav from '../UniversesNav/UniversesNav';
import Articles from '../Articles/Articles';

import './Universes.css';


// page title
// navbar universe props onClick event 
// articles props articles

const MainUniverse = (props) => {

    // Adaptation du src pour les images 
    let imgPath = "";
    switch (imgPath) {
        case "/produits":
        imgPath = ""
            break;
        case "/univers/harry-potter":
        imgPath = "../../"
            break;
        case "/univers/star-wars":
        imgPath = "../../"
            break;
        case "/univers/marvel":
        imgPath = "../../"
            break;
        case "/univers/seigneur-des-anneaux":
        imgPath = "../../"
            break;
        default:
            imgPath = "";
    }

    const [apiPath, setApiPath] = useState("produits");

    const [articles, setArticles] = useState([]);

    const [mainTitle, setMainTitle] = useState("Nos collections");

    const [themeStyle, setThemeStyle ] = useState("mainTheme ");
    // indiquer hp / .... pour les className 

    const fetchArticles = async (path) => {

        const response = await fetch(`http://localhost:8088/${path}`, {
            method: "GET",
            mode: "cors",
        });
        const parseResponse = await response.json();
        console.log(parseResponse);
        return parseResponse;
    };

    const setThemeOnClick = (event, path, title, className) => {
        event.preventDefault();
        setApiPath(path);
        setMainTitle(title);
        console.log(title);
        setThemeStyle(className);
        console.log(className);
    }

    // const reset = () => { 
    //     setArticles(parseResponse);
    // }

    const setCategoryOnClick = (event, condition) => {
        // reset() ? 
        let copyAllArticles = [...articles];
        event.preventDefault();
        if (condition !== 0) {
            let article_by_cat = copyAllArticles.filter(article => article.fk_category === condition);
            setArticles(article_by_cat);
            console.log(article_by_cat);
        }
        else {
            let article_by_cat = copyAllArticles;
            setArticles(article_by_cat);
            console.log(article_by_cat);
        }
    }


    useEffect(() => {
        fetchArticles(apiPath)
        .then((result) => {
            console.log(result);
            setArticles(result);
        });
    }, [apiPath]);

    
    return (
        <>
            <div className="universes">
                < PageTitle mainTitle={mainTitle} themeStyle={themeStyle}/>
                < UniversesNav 
                setThemeOnClick={setThemeOnClick}
                themeStyle={themeStyle}
                
                />
                < Articles articles={articles} imgPath={imgPath} themeStyle={themeStyle} setCategoryOnClick={setCategoryOnClick}/>
            </div>
        </>
    );
}

export default MainUniverse;