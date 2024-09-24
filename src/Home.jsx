function Home(){
    const food1 = "Pizza",
          food2 = "Burgers";

    return (
        <div>
            <h2>Portfolio:</h2>
            <ul>
                <li>{food1}</li>
                <li>{food2}</li>
                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium culpa modi, maiores similique accusamus natus pariatur consectetur. Iusto ab deserunt incidunt ratione, perferendis placeat nulla, libero soluta quae commodi cumque.</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi voluptatibus dolores aperiam, quas, dolore, distinctio culpa asperiores quis expedita sunt odio fuga nesciunt aliquam error assumenda quibusdam cumque possimus quia.</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet aspernatur iure odio sint distinctio cupiditate esse eaque optio velit, earum et ipsa exercitationem rem aperiam amet dolorem eius blanditiis. Magnam?</li>
            </ul>
            <p>I like to eat  & {food2} </p>
        </div>
    );
}

export default Home;