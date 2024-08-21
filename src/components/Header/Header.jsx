import './Header.scss'
import ProfilePic from '../../assets/images/Profile.jpg'

const Header = () => {

  return (
    <div className='header'>
        <img src={ProfilePic} alt="Profile Pics" />
        <h1>Welcome to my Page</h1>
    </div>
  )
}

export default Header
