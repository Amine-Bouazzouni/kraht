import imagePath from "../assets/logo.jpg"; 

function Header(){

    return(
        <>
        <header>
            <img  className="header-img"src={imagePath} width="60" height="60"></img>
            <h1 className="Title">Table Patients</h1>
            
        </header>
        <hr></hr>
        </>       
    );


}
export default Header