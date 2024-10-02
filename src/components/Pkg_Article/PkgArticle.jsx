import React from 'react'
import './PkgArticle.css'

// name: "\"Good Things Are Headed Your Way\"- Ecommerce Direct Marketing Package", 
// objective: "This is part of a new email series that I pitched to the marketing team to help generate incremental revenue for the company.  It performs very well, bringing in approximately $1.2 Million in unplanned revenue annually. The overall idea was to thank recent orderers for their patronage by “surprising and delighting” them with an exciting savings opportunity that no other customers were getting. We currently have 5 other creatives rotating in the series.",
// copy: "The idea for this version: Show a modern, animated email that gives a bold statement regarding this recent order and teases a special reward incentive that's waiting for them on the landing page. It's an interactive balloon pop experience on the LP that reveals the discount.", 
// isValid: true, 
// image: ["https://picsum.photos/150/150","https://picsum.photos/150/150","https://picsum.photos/150/150","https://picsum.photos/150/150"]

const PkgArticle = (props) => {

const userList = props.items;
const imageList = props.images;

{/* <p>User #{index+1}</p>
    <img className="card-image" src={item.image} alt="Image" loading="lazy"/>
    <h2 className="card-title">{item.name}</h2>
    <p className="card-text">{item.copy}</p>     
    <p className="card-text">Age: {item.age}</p>     
    <p>{item.isValid ? <Button indexNo={index+1} name={item.name}/> : "Invalid User"}</p>  */}
    // <div key={index} className={item.isValid ? "card cardValid" : "card cardInvalid"}>
    
    const cards = userList.map((item, index) => <div key={index}>
                <aside>
                <h1>{item.name}</h1>
                <h2>Objective:</h2>
                <p>{item.copy}</p>                
                </aside>
    </div>);

    const images = imageList.map( (image, index) => <ul key={index}>
        <li>
            <img key={index} className="card-image" src={ image.url } alt="Image" loading="lazy"/>
            <p>{image.blurb}</p>
        </li>
    </ul>);

// const images = userImages.map((item, index) => <div key={index} className="pkgArticle_PackageDescription">        
//         <div key={index} className="pkgArticle_PackageRundown">
//             <ul>
//                 <li>
//                     <img className="card-image" src={item.image} alt="Image" loading="lazy"/>                
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className='featuredText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> </p>
//                 </li>
//                 {/* <li>
//                     <img className="card-image" src='https://picsum.photos/700' alt="Image" loading="lazy"/>                    
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className='featuredText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> </p>
//                 </li>
//                 <li>
//                     <img className="card-image" src='https://picsum.photos/700' alt="Image" loading="lazy"/>                    
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className='featuredText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> </p>
//                 </li>
//                 <li>
//                     <img className="card-image" src='https://picsum.photos/700' alt="Image" loading="lazy"/>                    
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className='featuredText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> </p>
//                 </li> */}
//             </ul>    
//         </div>
//         </div>);
    
  return (
    <div className='pkgArticleMain'>
        <div className="pkgArticle_PackageDescription">
            {cards} 
        </div>
        <div className="pkgArticle_PackageRundown">
            {images}
        </div>        
    </div>
  )
}

export default PkgArticle