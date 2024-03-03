function Button(){

    // const handleClick = () => console.log("Ouch!")

    // const handleClick2 = (name) => console.log({name} , "stop clicking me");

    let count = 0;

   const handleClick3 = (name) => {
    if(count<3){
        count++;
        console.log({name} , "you clicked me" , {count} , "times." )
    }
    else{
        count = 0;
        console.log({name} , "you clicked me" , {count} , "times." )
    }
   };

    return(<button onClick={() => handleClick3("Utku")}>Click Me! 😀</button>);
    
}

export default Button