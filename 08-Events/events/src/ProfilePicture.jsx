function ProfilePicture(){

    const imageUrl = "https://server.gamersdecide.com/sites/default/files/authors/u153316/pokemon-2-charizard.jpg"

    const handleClick = (e) => e.target.style.display = "none"

    return(
    <img className="profilePic" onClick={(e) => handleClick(e)} src={imageUrl}></img>

    );

}

export default ProfilePicture