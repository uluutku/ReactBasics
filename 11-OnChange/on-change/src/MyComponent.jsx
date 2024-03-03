import React, {useState} from "react";

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("Pick Up");

    function handleShippingChange(event){
        setShipping(event.target.value)
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleNameChange(event){
        setName(event.target.value);
    
    

    }
    return(
        <>
        <div>
            <input value={name} onChange={handleNameChange}/>   
            <p>Name: {name}</p>
        <input value={quantity} onChange={handleQuantityChange} type="number"/>
        <p>Quantity: {quantity}</p>
        </div>

        <div>
            <textarea value={comment} onChange={handleCommentChange} placeholder="Please make a comment."></textarea>
            <p>Comment: {comment}</p>
        </div>

        <div>
            <h4>Payment</h4>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select a option</option>
                <option value="visa">Visa</option>
                <option value="mastercard">Master Card</option>
                <option value="giftcard">Gift Card</option>
            </select>
            <p>Payment Type: {payment}</p>
        </div>

        <div>

            <label>
                <input type="radio" value="Pick Up"
                checked = {shipping === "Pick Up"}
                onChange={handleShippingChange}></input>
            Pick Up
            </label>

            <br></br>

            <label>
                <input type="radio" value="Cargo"
                checked = {shipping === "Cargo"}
                onChange={handleShippingChange}></input>
            Cargo
            </label>

            <p>Shipping Type: {shipping}</p>


        </div>
       </>
    );

}

export default MyComponent