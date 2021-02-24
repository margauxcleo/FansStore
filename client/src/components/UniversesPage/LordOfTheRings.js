import UniversesNav from '../UniversesNav/UniversesNav'
;
import Articles from '../Articles/Articles';
import PageTitle from '../PageTitle/PageTitle';

import './Universes.css';

import { useEffect } from 'react';

const LordOfTheRings = (props) => {

    const title = props.title;

    useEffect(() => {
        props.setSdaTitle();
      }, []);
    
    return (
        <>
            <div className="sda">
                < PageTitle title={title} />
                < UniversesNav />
                < Articles />
            </div> 
        </>
    );
}

export default LordOfTheRings; 