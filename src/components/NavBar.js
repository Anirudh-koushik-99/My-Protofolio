
import { useState, useEffect } from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import navIcon4 from '../assets/img/nav-icon4.svg'


export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', onScroll);
        return() => window.removeEventListener('scroll', onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <div>
      <Navbar expand="md" className={scrolled ? "scrolled" : "" }>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
        <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="https://github.com/Anirudh-koushik-99"><img src={navIcon4} alt="" /></a>
                <a href="https://www.linkedin.com/in/anirudh-koushik-b-a-2aa147176/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/anirudh.ani.7798"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/anirudh_koushik_/"><img src={navIcon3} alt="" /></a>
            </div>
            <button className='vvd' onClick={() =>
            console.log('connect')}><span>Let's Connnect</span></button>
          </span>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    )
}
