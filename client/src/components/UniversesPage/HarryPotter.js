import UniversesNav from '../UniversesNav/UniversesNav'
;
import Articles from '../Articles/Articles';
import PageTitle from '../PageTitle/PageTitle';

import './Universes.css';

import { useEffect } from 'react';

// where articles = univers HP 
    
const HarryPotter = (props) => {

    const title = props.title;

    useEffect(() => {
        props.setHarryPotterTitle();
      }, []);

    return (
        <>
            <div className="hp">
                < PageTitle title={title} />
                < UniversesNav />
                < Articles />
            </div>
        </>
    );
}

export default HarryPotter;