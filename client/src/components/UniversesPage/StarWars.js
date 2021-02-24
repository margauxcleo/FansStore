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
            <div className="sw">
                < PageTitle title={title} />
                < UniversesNav />
                < Articles />
            </div>
        </>
    );
}

export default StarWars;