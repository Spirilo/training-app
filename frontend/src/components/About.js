import './About.css'

const About = ({ user }) => {
  if(user.userInfo === null) {
    return(
      <div className='main'>
        Welcome to FitFlow {user.username}, please update your info on profile page first!
      </div>
    )
  }

  return(
    <div className='main'>
      Welcome back {user.username}!
    </div>
  )
}

export default About