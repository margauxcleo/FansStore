import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';
import UniversesNav from '../UniversesNav/UniversesNav';
import Articles from '../Articles/Articles';

import './Universes.css';

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
 
    const [catFiltre, setCatFiltre ] = useState([]);
    const [checkEmpty, setCheckEmpty ] = useState(false);
    
    const [mainTitle, setMainTitle] = useState("Nos collections");

    const [themeStyle, setThemeStyle ] = useState("mainTheme");
    // indiquer hp / .... pour les className 

    const fetchArticles = async (path) => {

        const response = await fetch(`http://localhost:8088/${path}`, {
            method: "GET",
            mode: "cors",
        });
        const parseResponse = await response.json();
        return parseResponse;
    };

    const setThemeOnClick = (event, path, title, className) => {
        event.preventDefault();
        setApiPath(path);
        setMainTitle(title);
        setThemeStyle(className);
    }

    const setCategoryOnClick = (event, condition) => {
        // reset des filtres
        setCatFiltre([]);
        // on reset le check au state initial 
        setCheckEmpty(false);
        event.preventDefault();
        if (condition !== 0) {
            let articlesByCat = articles.filter(article => article.fk_category === condition);
            setCatFiltre(articlesByCat);
            // console.log(articlesByCat);
            if(articlesByCat.length === 0) {
                setCheckEmpty(true);
            }
        }
        else {
            setCatFiltre(articles);
            // console.log(articles);
        }
    }


    useEffect(() => {
        fetchArticles(apiPath)
        .then((result) => {
            // console.log(result);
            setArticles(result);
            setCheckEmpty(false);
            setCatFiltre([]);
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
                < Articles 
                    articles={articles} 
                    catFiltre={catFiltre} 
                    checkEmpty={checkEmpty} 
                    imgPath={imgPath} 
                    themeStyle={themeStyle} 
                    setCategoryOnClick={setCategoryOnClick}/>
            </div>
        </>
    );
}

export default MainUniverse;