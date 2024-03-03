function Button(){


    const handleClick = (e) => e.target.textContent = "Ouch!";
    const handleDoubleClick = (e) => console.log(e);

    return(
        <button onClick={(e) => handleClick(e)} 
        onDoubleClick={(e) => handleDoubleClick(e)}>
        Click me!
        </button>
    );

}

export default Button