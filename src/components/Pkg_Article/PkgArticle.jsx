import React from 'react'
import './PkgArticle.css'

const PkgArticle = (props) => {
const pkgId = props.id;
const userList = props.items;
const imageList = props.images;
    
    const cards = userList.map((item, index) => <aside key={index}>
                <h1>{item.name}</h1>
                <h2>Objective:</h2>
                <p className='pkgObj'>{item.objective}</p>                
                <h2>Inspiration:</h2>
                <p className='pkgInspo'>{item.inspiration}</p>  
                <p className='pkgResult'>{item.result}</p>              
                </aside>);

    const images = imageList.map( (image, index) => <div key={index}>
            <img key={index} className="card-image" src={ image.url } alt="Image" loading="lazy"/>
            <p>{image.blurb}</p>
        </div>);
    
  return (
    <div id={pkgId} className='pkgArticleMain'>
        <div className="pkgArticle_PackageDescription">
            {cards} 
        </div>
        <div className="pkgArticle_PackageRundown">
            <ul>
                <li>
                    {images}
                </li>
            </ul>
        </div>        
    </div>
  )
}

export default PkgArticle