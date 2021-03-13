import React from 'react';
import {CategoryFilterItemWrapper} from './styles';
import {Checkbox} from 'components';
import {navigate, useLocation} from '@reach/router';
import queryString from 'query-string';

export function CategoryFilterItem({title, id}) {
  const {search} = useLocation();
  const qs = queryString.parse(search);
  const collectionIds = qs.c?.split(',').filter(c => !!c) || [];
  const checked = collectionIds?.find(cId => cId === id);
  const searchTerm = qs.s;
  // console.log('collectionsIds');
  // console.log(collectionIds)

  const onClick = () => {
    let navigateTo = '/all-products';
    // let newCollectionIds = [];
    let newCollectionIds = [];
    if (checked){
      newCollectionIds = collectionIds.filter(cId => cId !== id).map(cId => encodeURIComponent(cId));
    } else {
      collectionIds.push(id);
      newCollectionIds = collectionIds.map(cId => encodeURIComponent(cId));
    }

    if (newCollectionIds.length && !searchTerm){
      navigate(`${navigateTo}?c=${newCollectionIds.join(',')}`);
    } else if(newCollectionIds.length && !!searchTerm){
      navigate(`${navigateTo}?c=${newCollectionIds.join(',')}&s=${encodeURIComponent(searchTerm)}`);
    } else if(!newCollectionIds.length && !!searchTerm){
      navigate(`${navigateTo}?s=${encodeURIComponent(searchTerm)}`);
    } else {
      navigate(`${navigateTo}`);
    }

    // console.log('newCollectionIds');
    // console.log(newCollectionIds)
  
  }
  return (
    <CategoryFilterItemWrapper onClick={onClick}>
      <Checkbox checked={checked}/>
      <div>{title}</div>
    </CategoryFilterItemWrapper>
  )
}
