import React from 'react'
import PkgArticle from '../components/Pkg_Article/PkgArticle';

const Portfolio = () => {

  const users = [
    {
      name: "\"Good Things Are Headed Your Way\"- Ecommerce Direct Marketing Package", 
      objective: "This is part of a new email series that I pitched to the marketing team to help generate incremental revenue for the company.  It performs very well, bringing in approximately $1.2 Million in unplanned revenue annually. The overall idea was to thank recent orderers for their patronage by “surprising and delighting” them with an exciting savings opportunity that no other customers were getting. We currently have 5 other creatives rotating in the series.",
      copy: "The idea for this version: Show a modern, animated email that gives a bold statement regarding this recent order and teases a special reward incentive that's waiting for them on the landing page. It's an interactive balloon pop experience on the LP that reveals the discount.", 
      isValid: true, 
    },
  ];

  const images = [
    {url: "https://picsum.photos/150/150", blurb: "Lorem ipsum dolor sit amet consectetur adipisicing elit!"},
    {url: "https://picsum.photos/150/150", blurb: "Lorem ipsum dolor sit amet consectetur adipisicing elit!"},
    {url: "https://picsum.photos/150/150", blurb: "Lorem ipsum dolor sit amet consectetur adipisicing elit!"},
    {url: "https://picsum.photos/150/150", blurb: "Lorem ipsum dolor sit amet consectetur adipisicing elit!"},
  ];

  return (
    <>
      <h2>Portfolio</h2>
      <PkgArticle items={users} images={images}/>
    </>
  )
}

export default Portfolio