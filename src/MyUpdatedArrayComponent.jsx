import React, {useState} from "react";

function MyUpdatedArrayComponent(){

    // const [foods, setFoods] = useState(["Apple","Orange","Banana"]);
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
        const newCar = {year: carYear, make: carMake, model: carModel}
        setCars(c => [...c, newCar])

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");    
    }



    function handleRemoveCar(index){
        setCars(c => c.filter((_,i) => i !== index));
    }
    function handleYearChange(e){
        setCarYear(e.target.value);
    }
    function handleMakeChange(e){
        setCarMake(e.target.value);
    }
    function handleModelChange(e){
        setCarModel(e.target.value);
    }


    // function handleAddFood(){
    //     const newFood = document.querySelector("#foodInput").value;
    //     document.querySelector("#foodInput").value = "";

    //     //f is the previous state of foods (Common naming convention is to use the first letter of the state variable)
    //     setFoods(f => [...f, newFood])
    // }

    // function handleRemoveFood(index){
    //     // underscore is for ignored argument (element)
    //     setFoods(foods.filter((_, i) => i !== index));
    // }

    return(
    <div>
        <h2>List of Car Objects</h2>
        <ul>
            {cars.map((car,index) => 
                <li key={index} onClick={() => handleRemoveCar(index)}>
                    {car.year} {car.make} {car.model}
                </li>)}
        </ul>
        <input type="number" value={carYear} id="carYear" onChange={handleYearChange} />
        <input type="text" value={carMake} id="carMake" onChange={handleMakeChange}  placeholder="Enter Car Make"/>
        <input type="text" value={carModel} id="carModel" onChange={handleModelChange}  placeholder="Enter Car Model"/>
        <button onClick={handleAddCar}>Add Car</button>
        {/* <h2>List of Food</h2>
        <ul>
        {foods.map((food,index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter Food Name" />
        <button onClick={handleAddFood}>Add Food</button> */}
    </div>
    );
}

export default MyUpdatedArrayComponent;