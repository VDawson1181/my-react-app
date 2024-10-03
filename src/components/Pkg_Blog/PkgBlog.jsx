
import React, {useState} from 'react'
import './PkgBlog.css'

const PkgBlog = (props) => {
const blogId = props.id;
const blogList = props.items;
const markup = props.markup;

    
    const packages = blogList.map((item, index) => <div id={blogId} key={blogId} className='PkgBlogMain'>
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