import UniversesNav from '../UniversesNav/UniversesNav'
;
import Articles from '../Articles/Articles';
import PageTitle from '../PageTitle/PageTitle';

import './Universes.css';

import { useEffect } from 'react';

const Marvel = (props) => {

    const title = props.title;

    useEffect(() => {
        props.setMarvelTitle();
      }, []);
    
    return (
        <>
            < PageTitle title={title} />
            < UniversesNav />
            < Articles />
        </>
    );
}

export default Marvel;