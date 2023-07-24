import { Link } from 'react-router-dom';
import './topbar.css'

export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
        <div className='topLeft'>
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>
                  <a className='link' href='/'>HOME</a>
                </li>
                <li className='topListItem'><a className='link' href='/'>ABOUT</a></li>
                <li className='topListItem'><a className='link' href='/'>CONTACT</a></li>
                <li className='topListItem'><a className='link' href='/write'>WRITE</a></li>
                <li className='topListItem'>
                  {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className='topRight'>
          {user ? 
            <img 
              className='topImg'
              src='https://media.istockphoto.com/id/175009379/photo/giant-panda-bear-eating-bamboo.jpg?s=612x612&w=0&k=20&c=EYUlXKzjxe23OSXHO9jlugQhH_VWtF1-2NUaOSXsijA='
              alt='Profile picture'
            /> 
            : 
            <ul className='topList'>
              <li className='topListItem'>
                <a className='link' href='/login'>LOGIN</a>
              </li>
              <li className='topListItem'>
                <a className='link' href='/register'>REGISTER</a>
              </li>
            </ul>
          }
            <i class="topSearchIcon fa-sharp fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
