import './header.scss';
import Cart from '../cart/cart';
import ProfileIMG from '../../assets/download.png';

const Header = () => {
    return (
        <header className="header-container">
            <div className="collapse bg-dark" id="navbarHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 py-4"></div>
                        <div className="col-sm-4 offset-md-1 py-4">
                            <h4 className="text-white">Cart</h4>
                            <Cart />
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">
                    <img src={ProfileIMG} alt="profile pic"/>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </header>
    )
}
export default Header;