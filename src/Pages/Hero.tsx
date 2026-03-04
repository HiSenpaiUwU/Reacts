import profile from '../assets/profile.jpg'

function Hero() {
  return (
    <section id="hero" className="hero">
      <img src={profile} alt="Profile" className="profile-img" />

      <h1>Hello, I’m Your Name</h1>
      <p>Frontend Developer | React | TypeScript</p>
      <a href="#contact" className="btn-primary">Contact Me</a>
    </section>
  )
}

export default Hero