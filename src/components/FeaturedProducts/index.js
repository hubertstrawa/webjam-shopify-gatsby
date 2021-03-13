import React from 'react';
import ProductContext from 'context/ProductContext';
import {ProductsGrid} from 'components';

export function FeaturedProducts(){
  const {collections} = React.useContext(ProductContext);
  const featuredCollection = collections.find(collection => collection.title === 'Featured')
  return (
    <section>
      <h1>Featured products</h1>
      <ProductsGrid products={featuredCollection.products} />
    </section>
  )
}