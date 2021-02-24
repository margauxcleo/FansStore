import UniversesNav from '../UniversesNav/UniversesNav'
;
import Articles from '../Articles/Articles';
import PageTitle from '../PageTitle/PageTitle';

import './Universes.css';

import { useEffect } from 'react';

const StarWars = (props) => {

    const title = props.title;

    useEffect(() => {
        props.setStarWarsTitle();
      }, []);
    
    return (
        <>
            < PageTitle title={title} />
            < UniversesNav />
            < Articles />
        </>
    );
}

export default StarWars;