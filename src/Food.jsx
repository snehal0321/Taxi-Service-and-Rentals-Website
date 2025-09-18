function Food(){
    const food1 = "orange ";
    const food2 = "banana";

    return(
        <ul> 
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
        
    );

}

export default Food