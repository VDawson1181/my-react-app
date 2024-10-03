
import React, {useState} from 'react'
import './PkgBlog.css'

const PkgBlog = (props) => {
const pkgId = props.id;
const userList = props.items;
const imageList = props.images;
const markup = props.markup;

    
    const packages = userList.map((item, index) => <div id={pkgId} key={pkgId} className='PkgBlogMain'>
        <h2 className='clicker'>{item.title}</h2>
        <div className="PkgBlogInner">

            <div className="PkgBlog_PackageRundown">
                    <div dangerouslySetInnerHTML={markup} />
            </div> 
        </div>
        <hr />
    </div>
    );


    
  return (<>
  {packages} 
  </>

  )
}

export default PkgBlog