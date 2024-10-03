
import React, {useState} from 'react'
import './PkgArticle.css'

const PkgArticle = (props) => {
const pkgId = props.id;
const userList = props.items;
const imageList = props.images;


    const images = imageList.map( (image, index) => <div key={index}>
                <img className="card-image" src={ image.url } alt="Image" loading="lazy"/>
                <p>{image.blurb}</p>
                </div>);
    
    const packages = userList.map((item, index) => <div id={pkgId} key={pkgId} className='pkgArticleMain'>
        <h2 className='clicker'>{item.title}</h2>
        <div className="pkgArticleInner">
            <div className="pkgArticle_PackageDescription">
                    <aside>
                        <h1>"{item.title}" - <span>{item.type}</span></h1>
                        <h2>Objective:</h2>
                        <p className='pkgObj'>{item.objective}</p>                
                        <h2>Inspiration:</h2>
                        <p className='pkgInspo'>{item.inspiration}</p>  
                        <p className='pkgResult'>{item.result}</p>              
                    </aside>
            </div>

            <div className="pkgArticle_PackageRundown">
                <ul>
                    <li>
                        {images}
                    </li>
                </ul>
            </div> 
        </div>
    </div>
    );


    
  return (<>
  {packages} 
  </>

  )
}

export default PkgArticle