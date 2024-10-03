
import React, {useState, useEffect, useRef} from 'react';
import './PkgArticle.css'

const PkgArticle = (props) => {
const pkgId = props.id;
const userList = props.items;
const imageList = props.images;

const [isEmployed, setIsEmployed] = useState(false);

const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
}

const inputRef = useRef(null);

const handleClick = () => {
    // e.preventDefault();
    // e.target.textContent = "Clicked!";
    // e.target.style.opacity = "0.5";
    // e.target.style.cursor = "default";
    // e.target.disabled = true;

    // e.target.nextElementSibling.style.opacity = "0.5";
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";

    // console.log(e.target.nextElementSibling);
}


// const [selected, setSelected] = useState(null);
// const toggle = () => index => {
//     if(selected == index){
//         return setSelected(null);
//     }
    
//     console.log(selected)
//     setSelected(index);
// }


    const images = imageList.map( (image, index) => <div key={index}>
                <img className="card-image" src={ image.url } alt="Image" loading="lazy"/>
                <p>{image.blurb}</p>
                </div>);
    
    const packages = userList.map((item, index) => <div id={pkgId} key={pkgId} className='pkgArticleMain'>
        <h2 className='clicker' onClick={toggleEmployedStatus}>{item.title}</h2>
        <div className={isEmployed ? "pkgArticleInner pkgOpen" : "pkgArticleInner pkgClosed"}>
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