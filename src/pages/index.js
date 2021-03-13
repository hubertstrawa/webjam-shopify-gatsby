import React from 'react';
import { Layout, SEO, HomepageCollectionsGrid, FeaturedProducts } from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const {collections} = React.useContext(ProductContext);
  console.log(collections)
  return (
    <Layout>
      <SEO title="Homepage" description="Really cool store" />
      <HomepageCollectionsGrid collections={collections.filter(collection => collection.title !== 'Featured')} />
      {!!collections.find(collection => collection.title === 'Featured') &&
        <FeaturedProducts />
      }
    </Layout>
  )
}

export default IndexPage;
