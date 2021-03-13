import React from 'react';
import Img from 'gatsby-image';
import {useStaticQuery, graphql} from 'gatsby';

export function Logo() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "logo.png"}) {
        childImageSharp{
          fixed(width: 180){
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }  
  `);
  return <Img fixed={data.file.childImageSharp.fixed}/>
}
