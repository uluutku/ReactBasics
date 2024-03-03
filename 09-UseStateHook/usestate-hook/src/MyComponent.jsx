import React, {useState} from "react"

function MyComponent(){

const [name, setName] = useState("Guest");
const [age, setAge] = useState(0);
const [isEmployed, setIsEmployed] = useState(false);

const updateName = () => {
    setName("Spongebob")
}

const updateAge = () => {
    setAge(age + 1);
}

const updateEmploy = () => {
    setIsEmployed(!isEmployed);
}

return(
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={updateAge}>Set Name</button>,

        <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={updateEmploy}>Set Name</button>
    </div>
);

}

export default MyComponent