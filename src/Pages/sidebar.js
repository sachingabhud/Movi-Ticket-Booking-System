import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { AiFillCalendar,AiFillHome,AiOutlineTeam, } from "react-icons/ai";
import { TbMovie } from "react-icons/tb";
import { BsCalendar4Event } from "react-icons/bs";
import { BiTask,BiLogOut,BiLogIn } from "react-icons/bi";
import { GrDocumentText } from "react-icons/gr";
import { MdOutlineAppRegistration } from "react-icons/md";
import '../component/dashboard.css'


function Sidebar({...props}) {
  function logout(){
    localStorage.clear();
  }
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />  
            <Button variant="outline-success">Search</Button>
                </Form>
            <div className='d-flex p-2'>
            <div><AiFillCalendar/></div>
            <p class="mx-1 fs-5">Jan 13</p>
            </div>    
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <p className="heading">Booking</p> 
                <p className="heading">&emsp;&emsp;Window</p>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 mr-auto nav">
                  {
                    localStorage.getItem('user-info')?
                    <>
                  <div className='navItems'>
                  <AiFillHome/>
                  <Link to='/dashboard'>Dashboard</Link>
                  </div>
                  <div className='navItems'>
                  <AiOutlineTeam/>
                  <Link to='/team'>Team</Link>
                  </div>
                  <div className='navItems'>
                  <TbMovie/>
                  <Link to='/movies'>Movies</Link>
                  </div>
                  <div className='navItems'>
                  <BsCalendar4Event/>
                  <Link to='/events'>Events</Link>
                  </div>
                  <div className='navItems'>
                  <BiTask/>
                  <Link to='/task'>Task</Link>
                  </div>
                  <div className='navItems'>
                  <GrDocumentText/>
                  <Link to='/documentation'>Documentation</Link>
                  </div>
                  <div class="logoutbtn">
                  <BiLogOut/>
                  <Button onClick={logout} variant="outline-success"><Link to='/logout'>Logout</Link></Button>
                  </div>
                    </>:
                  <>
                  <div className='navItems'>
                  <BiLogIn/>
                  <Link to='/login'>Log In</Link>
                  </div>
                  <div className='navItems'>
                  <MdOutlineAppRegistration/>
                  <Link to='/register'>Sign Up</Link>
                  </div>
                  </>
                    
                  }  
                  
                  
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        
        </Navbar>
      ))}
    {props.children}  
    </>
  );
}

export default Sidebar;