import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

export default function Settings() {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>Delete Account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className='settingsPP'>
            <img
              src='https://media.istockphoto.com/id/175009379/photo/giant-panda-bear-eating-bamboo.jpg?s=612x612&w=0&k=20&c=EYUlXKzjxe23OSXHO9jlugQhH_VWtF1-2NUaOSXsijA='
              alt='Profile picture'
            />
            <label htmlFor='fileInput'>
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type='file' id='fileInput' style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type='text' placeholder='Prateek' />
          <label>Email</label>
          <input type='email' placeholder='prateek@gmail.com' />
          <label>Password</label>
          <input type='password' />
          <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
