import './ProductsPage.css';

import UniversesNav from '../UniversesNav/UniversesNav';
import Articles from '../Articles/Articles';
import PageTitle from '../PageTitle/PageTitle';

import { useEffect } from 'react';

const ProductsPage = (props) => {

  const title = props.title;

  useEffect(() => {
      props.setCollectionsTitle();
    }, []);

  return (
      <>
          < PageTitle title={title} />
          < UniversesNav />
          < Articles />
      </>
  );
};

export default ProductsPage;
