import logo from '../../assets/logo/BrainFlix-logo.svg';
import searchIcon from '../../assets/images/search.svg';
import uploadIcon from '../../assets/images/upload.svg';

const Header = () => {
    return (
        <header className="header">
            <nav className="primary-nav">
                <a href="#">
                    <img className="primary-nav__logo" src={logo} alt="Brainflix Logo" />
                </a>
                <div className='primary-nav__container'>
                    <div className='primary-nav__search'>
                        <img className='primary-nav__search-icon' src={searchIcon} alt="Search Icon" />
                        <input className='primary-nav__search-input' type="text" placeholder='Search' name='search'/>
                    </div>
                    <div className='primary-nav__avatar'></div>
                    <a className='primary-nav__button' href="#">
                        <img className='primary-nav__upload-icon' src={uploadIcon} alt="Upload Icon" />
                        Upload
                    </a>
                </div>
            </nav>
        </header>
    )
}