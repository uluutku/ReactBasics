function TernaryGreeting(props){


    const v2welcomeMessage = <h2 className="v2-welcome-message">
                            Welcome {props.userName}!
                            </h2>

    const v2alertMessage = <h2 className="v2-warning-message">
                            Please Login to Continue!
                            </h2>

    return(props.isLoggedIn ? v2welcomeMessage : v2alertMessage);


}

export default TernaryGreeting