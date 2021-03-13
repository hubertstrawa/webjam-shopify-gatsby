import React from 'react';
import {CollectionTile} from '../CollectionTile';
import {RemainingCollectionsGrid} from './styles';
import Link from 'gatsby'

export function HomepageCollectionsGrid({collections}){
  const firstCollection = collections.find(collection => collection.title === 'Music');
  const remainingCollections = collections.filter(collection => collection.title !== 'Music');
  return (
    <div>
      {!!firstCollection && 
        <CollectionTile sale destination={`/all-products?c=${encodeURIComponent(firstCollection.shopifyId)}`} title={firstCollection.title} description={firstCollection.description} backgroundImage={firstCollection.image?.localFile.childImageSharp.fluid} />
      }
      <RemainingCollectionsGrid>
        {remainingCollections.map(collection => (
          <CollectionTile title={collection.title} destination={`/all-products?c=${encodeURIComponent(collection.shopifyId)}`} description={collection.description} backgroundImage={collection.image?.localFile.childImageSharp.fluid} key={collection.shopifyId} />
        ))}
      </RemainingCollectionsGrid>
    </div>
  )
}