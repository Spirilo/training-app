import './About.css'

const About = ({ user }) => {
  return(
    <div className='main'>
      Welcome back {user.username}!
    </div>
  )
}

export default About