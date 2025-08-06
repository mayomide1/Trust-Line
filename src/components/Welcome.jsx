import logo from '../assets/logo.png'
import '../css/Welcome.css'

const Welcome = () => {
  return (
    <div className='welcome-screen'>
        <div className='container'>
            <img src={logo} alt='image'/>
            <button>Login As Administrator</button>
        </div>
    </div>
  )
}

export default Welcome