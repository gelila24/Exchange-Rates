
import '../../App.css';
import { Link } from "react-router-dom"
 const Navbar =() => {
    return (
        <div className="nav">
                <div className="navlist">
                    <div className="navlistitem"><Link  to="/" className="link"> Currency Converter </Link></div>
                    <div className="navlistitem"><Link to="/exchange" className="link"> Current Exchange Rates </Link></div>
                </div>

        </div>
    )
}
export default Navbar;