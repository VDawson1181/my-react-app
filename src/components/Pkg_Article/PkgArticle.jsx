import React from 'react'
import './PkgArticle.css'

const PkgArticle = () => {
    
  return (
    <div className='pkgArticleMain'>
        <div className="pkgArticle_PackageDescription">
            <aside>
                <h1>Package Name</h1>
                <h2>Sub Header:</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className='featuredText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>  Blanditiis, perferendis eius? Labore at qui ullam, rerum, minima quibusdam porro expedita quia eum velit omnis nemo amet provident, sit unde hic.</p>
                <h2>Sub Header:</h2>
                <p><span className='featuredText'>Lorem ipsum dolor</span> sit amet consectetur adipisicing elit. Blanditiis, perferendis eius? Labore at qui ullam, rerum, minima quibusdam porro expedita quia eum velit omnis nemo amet provident, sit unde hic.</p>
                <h2>Sub Header:</h2>
                <p><span className='featuredText'>Lorem ipsum dolor</span> sit amet consectetur adipisicing elit. Blanditiis, perferendis eius? Labore at qui ullam, rerum, minima quibusdam porro expedita quia eum velit omnis nemo amet provident, sit unde hic.</p>
                <h2>Sub Header:</h2>
                <p><span className='featuredText'>Lorem ipsum dolor</span> sit amet consectetur adipisicing elit. Blanditiis, perferendis eius? Labore at qui ullam, rerum, minima quibusdam porro expedita quia eum velit omnis nemo amet provident, sit unde hic.</p>            
            </aside>
        </div>
        <div className="pkgArticle_PackageRundown">
            <ul>
                <li>
                    <img className="card-image" src='https://picsum.photos/700' alt="Image" loading="lazy"/>                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className='featuredText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> </p>
                </li>
                <li>
                    <img className="card-image" src='https://picsum.photos/700' alt="Image" loading="lazy"/>                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className='featuredText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> </p>
                </li>
                <li>
                    <img className="card-image" src='https://picsum.photos/700' alt="Image" loading="lazy"/>                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className='featuredText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> </p>
                </li>
                <li>
                    <img className="card-image" src='https://picsum.photos/700' alt="Image" loading="lazy"/>                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className='featuredText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> </p>
                </li>
            </ul>    
        </div>
    </div>
  )
}

export default PkgArticle