import PropTypes from 'prop-types';
import Button from './button.jsx'
// import profilePic from './assets/react.svg';

function Card(props){


    const category = props.category;
    const userList = props.items;

      const cards = userList.map((item, index) => <div key={index} className={item.isValid ? "card cardValid" : "card cardInvalid"}>
            <p>User #{index+1}</p>
            <img className="card-image" src={item.image} alt="Image" loading="lazy"/>
            <h2 className="card-title">{item.name}</h2>
            <p className="card-text">{item.copy}</p>     
            <p className="card-text">Age: {item.age}</p>     
            <p>{item.isValid ? <Button indexNo={index+1} name={item.name}/> : "Invalid User"}</p> 
        </div>);


        return(
            <>
            <h3>{category}</h3>
            {cards}                                           
            </>
        );
}
Card.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        copy: PropTypes.string,
        age: PropTypes.number,
        isValid: PropTypes.bool,
        image: PropTypes.string,
    })),

    
}
Card.defaultProps = {
    category: "Category",
    items:[],
}
export default Card;