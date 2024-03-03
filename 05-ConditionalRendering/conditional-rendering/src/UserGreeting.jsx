function UserGreeting(props){

    if(props.isLoggedIn){
        return <h2 className="welcome-message"> Welcome {props.userName} </h2>
    }
    else{
        return <h2 className="login-warning">Please login to continue</h2>
    }

}

UserGreeting.defaultProps={
    isLoggedIn : false,
    userName : "guest",
}

export default UserGreeting