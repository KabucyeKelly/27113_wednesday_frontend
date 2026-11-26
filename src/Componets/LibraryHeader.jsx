import { Link } from "react-router"

function LibraryHeader() {

    const libraryHeader = "LIBRARY MANAGEMENT SYSTEM"

    return(
        <>
        
        <header>
            <div> {libraryHeader}</div>
        </header>
        <nav>
            <Link to="/Main" style={{paddingRight: "10px"}}>DASHBOARD</Link>
            <Link to="/offices" style={{paddingRight: "10px"}}>OFFICE</Link>
            <Link to="/" style={{paddingRight: "10px"}}>LOGIN</Link>
        </nav>
        </>
    )
}

export default LibraryHeader