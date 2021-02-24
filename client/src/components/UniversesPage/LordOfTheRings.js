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
            < PageTitle title={title} />
            < UniversesNav />
            < Articles />
        </>
    );
}

export default LordOfTheRings; 