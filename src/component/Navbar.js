import {Link} from "react-router-dom";

export default function Navbar() {
    return(
        <>
            <div className="row">
                <div className='col-12'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/home">Home</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/home/add-blog">Add blog <span className="sr-only">(current)</span></Link>
                                </li>
                            </ul>

                        </div>
                        <form className="form-inline my-2 my-lg-0">
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Loging</button>
                        </form>
                    </nav>
                </div>
            </div>
        </>
    )
}