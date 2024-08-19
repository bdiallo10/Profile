import './Header.scss'
import ProfilePic from '../../assets/images/Profile.jpeg'

const Header = () => {

  return (
    <div className='header'>
        <img src={ProfilePic} alt="Profile Pics" />
        <h1>
        Hello, my name is Boubacar Diallo. 
        I am a highly-motivated employee with desire to 
        take on a new challenges. My strenghts are work ethic, 
        adaptability, interpersonal skills, critical thinking 
        and always willing to learn new technologies.
        </h1>
        <h1>
        I hold professional certification in Front End Web Development,
        Full Stack Web Development, Applied Data Science with Python.
        </h1>
    </div>
  )
}

export default Header
