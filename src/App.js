import React, { Component } from 'react';
import logo from './logo.png';
import unisi from './unisi.jpg';
import unito from './unito.png';
import unimib from './unimib.jpg';
import scm from './scm.png';
import consoft from './consoft.png';
import image from './Gradient.jpg';
import mean from './mean.png';
import matlab from './matlab.png';
import phyton from './phyton.png';
import java from './java.png';
import wpf from './wpf.png';
import ueb from './ueb.png';
import british from './british.png';
import scrum from './scrum.png';
import shaping from './shaping.png';
import overnet from './overnet.jpg';
import whatsapp from './whatsapp.png';
import linkedin from './linkedin.png';
import monster from './monster.png';
import twitter from './twitter.png';
import cucina from './Simone Caneponi - Design Cucina.png';
import loungeroom from './loungeroom.bmp';
import bicchiere from './bicchiere.png'
import './App.css';
import './fade.css';
import Button from '../node_modules/react-bootstrap/lib/Button';
import Panel from '../node_modules/react-bootstrap/lib/Panel';
import Col from '../node_modules/react-bootstrap/lib/Col';
import Row from '../node_modules/react-bootstrap/lib/Row';
import Fade from '../node_modules/react-bootstrap/lib/Fade';
import ListGroup from '../node_modules/react-bootstrap/lib/ListGroup';
import ListGroupItem from '../node_modules/react-bootstrap/lib/ListGroupItem';
import Carousel from '../node_modules/react-bootstrap/lib/Carousel';
import {BrowserRouter as Router, Route,Link,Redirect} from 'react-router-dom';
import Image from '../node_modules/react-bootstrap/lib/Image';
import Navbar from '../node_modules/react-bootstrap/lib/Navbar';
import Nav from '../node_modules/react-bootstrap/lib/Nav';
import MenuItem from '../node_modules/react-bootstrap/lib/MenuItem';
import NavItem from '../node_modules/react-bootstrap/lib/NavItem';
import NavDropdown from '../node_modules/react-bootstrap/lib/NavDropdown';
import Media from '../node_modules/react-bootstrap/lib/Media';
import OverlayTrigger from  '../node_modules/react-bootstrap/lib/OverlayTrigger';
import Tooltip from  '../node_modules/react-bootstrap/lib/Tooltip';
import ReactCSSTransitionGroup from '../node_modules/react-addons-css-transition-group';
import DropdownButton from '../node_modules/react-bootstrap/lib/DropdownButton';
import Dropdown from '../node_modules/react-bootstrap/lib/Dropdown';


export class Header extends Component
{
  render()
  {
        function formatName(user) {
          return user.firstName + ' ' + user.lastName;
    }
    const user = {
                  firstName: 'Stefano',
                  lastName: 'Perez'
                }

        function dwnLoadITA(){
          setTimeout(() => {
          const response = {
            file: 'https://files.fm/down.php?i=5r3yzz43&n=CV2017IT.pdf',
          };
          window.open(response.file);
          }, 100);
        }
        function dwnLoadENG(){
          setTimeout(() => {
          const response = {
            file: 'https://files.fm/down.php?i=5r3yzz43&n=CV2017EN.pdf',
          };
          window.open(response.file);
          }, 100);
        }
    return (



      <div className="App">

        <div style={{textAlign:"left" , paddingTop:"30px" , paddingLeft:"100px"}}>

          <Dropdown id="dropdown-custom-1"  bsStyle="success" >
            <Dropdown.Toggle  bsStyle="success" >
              {/* <Glyphicon glyph="star" /> */}
              Download my CV
            </Dropdown.Toggle>
            <Dropdown.Menu className="super-colors">
              <MenuItem eventKey="1" onClick={dwnLoadITA}>ITA Version</MenuItem>
              <MenuItem eventKey="2" onclick={dwnLoadENG}>ENG Version</MenuItem>
            </Dropdown.Menu>
          </Dropdown>

        </div>


        <div style={{paddingTop:"10px"}}>
          <img src={logo} height="120" width="60" />
          <h2></h2>
        </div>
        <h1>
          Welcome
        </h1>
        <Row>
          <label>This is my personal Website where you can find my personal project and information about to contact me.</label>

        </Row>
        <Row>
          <label>Enjoy to surf in my website. </label>
        </Row>
      </div>
    );
  }
}

export class Prova extends React.Component
{
  render()
  {
    const title = (<h3>My Accademic life</h3>);
     const tooltipUnisi = (<Tooltip id="tooltip"><strong>Bechelor Degree Computer Science</strong></Tooltip>);
     const tooltipUnito = (<Tooltip id="tooltip"><strong>Master Degree Computer Science</strong></Tooltip>);
     const tooltipUnimib = (<Tooltip id="tooltip"><strong>MBA Management</strong></Tooltip>);
   return(
  <Col sm={6} md={4}>
     <div style={{boxShadow: "10px 10px 5px #888888" }}>
        <Panel collapsible defaultExpanded header={title} bsStyle="danger" style={{cursor: "pointer"}}>
          <div style={{cursor: "default"}}>
            <label style={{color : "#626B60"}}>
              I was born in 14/03/1988 in a town called Viterbo. When I was 8 my interest for Computer Science start and I recieve my firt Personal Computer as a gift.
              I attempt to the college that specialized in Computer Science between 2002 - 2008. After that I start the accademic life in Siena at the Università degli Studi di
              Siena , Computer Science departement. I take may bechelor degree in 2013. In the same year I have a new beginning on Torino at Università di Torino with specialization
              in Virtual Reality and Multimedia. Finally I take my Master Degree in 2015 with a Virtual Reality thesi based on Oculus Rift technology. Now I have begun a MBA
              focuse on ICT and Management in Milan at Università Bicocca di Milano.
            </label>
          </div>
          <a href="https://www.unisi.it/" target="_blank">
            <OverlayTrigger placement="bottom" overlay={tooltipUnisi}>
            <img src={unisi} height="100" width="100" />
          </OverlayTrigger>
          </a>
          <a href="https://www.unito.it/" target="_blank">
          <OverlayTrigger placement="bottom" overlay={tooltipUnito}>
            <img src={unito} height="80" width="200"/>
          </OverlayTrigger>
          </a>
          <a href="https://www.unimib.it/" target="_blank">
          <OverlayTrigger placement="bottom" overlay={tooltipUnimib}>
            <img src={unimib} height="100" width="100"/>
          </OverlayTrigger>
          </a>
        </Panel>
        </div>
      </Col>

    );
  }
};

var divStyle = null;
export class NameForm extends React.Component
{
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.cambiamento = this.cambiamento.bind(this);
      this.sottomissione = this.sottomissione.bind(this);
    }

    cambiamento(event) {
      this.setState({value: event.target.value} );
    if (this.state.value === 'davide')
      {
         divStyle={color: 'green'};
      }
    if (this.state.value != 'davide')
      {
         divStyle={color: 'red'};
      }
    }

    sottomissione(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    render()
    {
   const title2 = (<h3 >My Work life</h3>);
   const tooltipConsoft = (<Tooltip id="tooltip"><strong>Consoft S.p.a</strong></Tooltip>);
   const tooltipSCMGroup = (<Tooltip id="tooltip"><strong>SCM Group S.p.a</strong></Tooltip>);
    return (

       <Col sm={6} md={3}   >
       <div style={{boxShadow: "10px 10px 5px #888888" }}>
        <Panel collapsible defaultExpanded header={title2}  bsStyle = "danger "  style={{cursor: "pointer"}} >
          <div style={{cursor: "default"}}>
            <label style={{color : "#626B60"}}>
              My First work begin in July 2015 for a consultant company Consoft S.p.a. I found a great olace to work for the very good stuff but a few possibilities
              to professional grow up. In June 2016 I change job and city, from Torino to Rimini and still work there. The company for which work is called SCM Group S.p.a.
              , it's specialized in Machine wich work on wood, transform raw wood to windows, chairs, ecc...
              My current work position is Human Machine Interface Designer and Developer
            </label>
          </div>

          <a href="https://www.consoft.it/index.php/it/" target="_blank" >
          <OverlayTrigger placement="bottom" overlay={tooltipConsoft}>
            <img src={consoft} height="50" width="50"/>
          </OverlayTrigger>
          </a>
          <a href="https://www.scmgroup.com/it" target="_blank">
          <OverlayTrigger placement="bottom" overlay={tooltipSCMGroup}>
            <img src={scm} height="50" width="50"/>
          </OverlayTrigger>
          </a>
        </Panel>
      </div>

    </Col>

    );
  }
};

export class Forth extends React.Component
{

  render()
  {
    function ciccio()
    {
      //console.log("sono enstrato");
    }
    const title4 = (<h3 >Skill</h3>);
    const ComputerScience = () =>
    (
      <div className="animated fadeIn" style={{cursor: "default"}}>
        <Col sm={6} md={6} style={{color : "#626B60",fontWeight:"bold"}} >
        <ul style={{paddingLeft: "10px" , paddingTop:"10px"}}>C/C++/C#</ul>
        <ul style={{paddingLeft: "10px"}}>Java/JavaEE</ul>
        <ul style={{paddingLeft: "10px"}}>Phyton</ul>
        <ul style={{paddingLeft: "10px"}}>Javascript</ul>
        <ul style={{paddingLeft: "10px"}}>AngularJS/ReactJS</ul>
        <ul style={{paddingLeft: "10px"}}>NodeJS</ul>
        <ul style={{paddingLeft: "10px"}}>PHP</ul>
        <ul style={{paddingLeft: "10px"}}>SQL/NoSQL</ul>
        <ul style={{paddingLeft: "10px"}}>XAML/HTML/CSS</ul>
        <ul style={{paddingLeft: "10px"}}>Unity/UnrealEngine4</ul>
        <ul style={{paddingLeft: "10px"}}>3DSMax/Blender/Maya</ul>
        </Col>
        <Col sm={6} md={3} style={{color : "#626B60" , paddingTop:"9px"}} >
        <ul>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
        </ul>
        <ul style={{textAlign:"Right"}}>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
        </ul>
        <ul>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
        </ul>
        <ul>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
        </ul>
        <ul>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
        </ul>
        <ul>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
        </ul>
        <ul>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
        </ul>
        <ul>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
        </ul>
        <ul>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
        </ul>
        <ul>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
        </ul>
        <ul>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
        </ul>
        </Col>
      </div>
    )
      const Language = () =>
    (
      <div className="animated fadeIn" style={{cursor: "default"}}>
        <Col sm={6} md={6} style={{color : "#626B60",fontWeight:"bold"}}>
          <ul style={{paddingLeft: "10px", paddingTop:"10px"}}>English</ul>
          <ul style={{paddingLeft: "10px"}}>French</ul>
        </Col>
        <Col sm={6} md={3} style={{color : "#626B60" , paddingTop:"9px" , paddingRight:"30px"}}>
        <ul>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
        </ul>
        <ul>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
        </ul>
        </Col>
      </div>
    )
      const Design = () =>
    (
      <div className="animated fadeIn" style={{cursor: "default"}}>
        <Col sm={6} md={6} style={{color : "#626B60",fontWeight:"bold"}}>
          <ul style={{paddingLeft: "10px"  , paddingTop:"10px"}}>Photoshop</ul>
          <ul style={{paddingLeft: "10px"}}>InDesign</ul>
          <ul style={{paddingLeft: "10px"}}>LightRoom</ul>
          <ul style={{paddingLeft: "10px"}}>Premiere</ul>
          <ul style={{paddingLeft: "10px"}}>AfterEffect</ul>
        </Col>
        <Col sm={6} md={3} style={{color : "#626B60",   paddingTop:"9px"}}>
          <ul>
            <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
            <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
            <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
            <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
            <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
          </ul>
        <ul>
            <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
            <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
            <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
            <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
            <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
        </ul>
        <ul>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
        </ul>
        <ul>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
        </ul>
        <ul>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
          <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
        </ul>
        </Col>
      </div>
    )
    const Management = () =>
  (
    <div className="animated fadeIn"  style={{cursor: "default"}}>
      <Col sm={6} md={6} style={{color : "#626B60", fontWeight:"bold" }}>
        <ul style={{paddingLeft: "10px"  , paddingTop:"10px"}}>ProjectManagement</ul>
        <ul style={{paddingLeft: "10px"}}>BusinnessModel</ul>
        <ul style={{paddingLeft: "10px"}}>BudgetReporting</ul>
        <ul style={{paddingLeft: "10px"}}>KnowledgeManagement</ul>
        <ul style={{paddingLeft: "10px"}}>ChangeManagement</ul>
        <ul style={{paddingLeft: "10px"}}>ICTManagement</ul>
      </Col>
      <Col sm={6} md={3} style={{color : "#626B60"  , paddingTop:"9px" }}>
      <ul>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
      </ul>
      <ul>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
      </ul>
      <ul>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
      </ul>
      <ul>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
      </ul>
      <ul>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
      </ul>
      <ul>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26ab;</span>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "10pt"}}>&#x26aa;</span>
      </ul>
      </Col>
    </div>
  )

   return(
      <Col sm={5} md={5}>
         <div style={{boxShadow: "10px 10px 5px #888888" , cursor: "default"}}>
        <Panel collapsible defaultExpanded header={title4} bsStyle="danger"  style={{cursor: "pointer"}}>
          <div style={{cursor: "default"}}>
            <label style={{color : "#626B60"}}>
              This is the main macroArea skill:
            </label>
          </div>
            <Router style={{cursor: "default"}}>
              <div style={{textAlign : "left" , fontWeight:"bold" , cursor: "default"}}>
                <Col sm={4} md={4}>

                  <ListGroup style={{paddingBottom:"30px" , paddingTop:"30px"}}>
                    <Link to="/ComputerScience">
                      <ListGroupItem onClick={ciccio} style={{paddingTop:"25px", paddingBottom:"25px",textAlign:"center"}} >
                      ComputerScience
                      </ListGroupItem>
                    </Link>
                    <Link to="/Management">
                      <ListGroupItem  onClick={ciccio} style={{paddingTop:"25px", paddingBottom:"25px",textAlign:"center"}}>
                        Management
                      </ListGroupItem>
                    </Link>
                    <Link to="/Language">
                      <ListGroupItem   onClick={ciccio}  style={{paddingTop:"25px", paddingBottom:"25px",textAlign:"center"}}>
                        Language
                      </ListGroupItem>
                    </Link>
                    <Link to="/Design">
                      <ListGroupItem onClick={ciccio} style={{paddingTop:"25px", paddingBottom:"25px",textAlign:"center"}}>
                        Design
                      </ListGroupItem>
                    </Link>
                  </ListGroup>
              </Col>
                <Col sm = {7} md={7}>
                  <Route exact path="/ComputerScience" component={ComputerScience}/>
                  <Route path="/Management" component={Management}/>
                  <Route path="/Language" component={Language}/>
                  <Route path="/Design" component={Design}/>
                  {/* <Redirect from="/" exact to="/ComputerScience" /> */}
                  </Col>
              </div>
            </Router>
          </Panel>
       </div>
      </Col>
    );
  }
};

export class Fifth extends React.Component
{
  render()
  {
  const title3 = (<h3>Some Photographic projects</h3>);
  const title4 = (<h3>Some Graphic projects</h3>);
      return(
        <Row>
         <Col sm={8} md={8}>
            <div style={{boxShadow: "10px 10px 5px #888888" }}>
                <Panel collapsible defaultExpanded header={title3} bsStyle="danger"  style={{cursor: "pointer"}}>
                 <div>
                   <Carousel>
                    <Carousel.Item>
                      <img width={200} height={100}  src={linkedin}/>
                      <Carousel.Caption>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width={200} height={100} src={linkedin}/>
                      <Carousel.Caption>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={200} height={100} src={whatsapp}/>
                      <Carousel.Caption>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                 </div>
               </Panel>
               </div>
             </Col>
             <Col sm={4} md={4}>
             <div style={{boxShadow: "10px 10px 5px #888888" }}>
                <Panel collapsible defaultExpanded header={title4} bsStyle="danger"  style={{cursor: "pointer"}}>
                  <div>
                    <Carousel>
                     <Carousel.Item>
                       <img width={1000} height={500}  src={cucina}/>
                       <Carousel.Caption>
                         <p>Design Kitchen (Blender)</p>
                       </Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item>
                       <img width={850} height={500} src={loungeroom}/>
                       <Carousel.Caption>
                         <p>Lounge room design (Blender, Photoshop)</p>
                       </Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item>
                         <img width={1050} height={500} src={bicchiere}/>
                       <Carousel.Caption>
                         <p>Glass and water (Blender,Realfow,MaxwellRender)</p>
                       </Carousel.Caption>
                     </Carousel.Item>
                   </Carousel>
                  </div>
                </Panel>
                </div>
              </Col>
            </Row>
    );
  }
};

export class Sixth extends React.Component
{

  render()
  {
    const tooltipBrititsh = (<Tooltip id="tooltip"><strong>KET Certification</strong></Tooltip>);
    const tooltipAngular = (<Tooltip id="tooltip"><strong>Shaping Up With AngularJS</strong></Tooltip>);
    const tooltipSFC = (<Tooltip id="tooltip"><strong>Scrum Foundamental Certified (SFC)</strong></Tooltip>);
    const tooltipWPF = (<Tooltip id="tooltip"><strong>Windows Presentation Foundation (WPF)</strong></Tooltip>);
      return(
        <Row>
        <Col sm={8} md={8}>
          <div style={{boxShadow: "10px 10px 5px #888888"}}>
             <Panel collapsible defaultExpanded header="My Hobbies" bsStyle="danger"  style={{cursor: "pointer"}} >
               <div>
                 <label style={{color : "#626B60"}}>
                   I have a lot of hobbies and various, I like to play music with my saxophone, take care myself with a lot of sport activity, watch a lot of movie,
                   ride my byke and do a lot of kilometers for watch the nature. My second elemt is the water, I like so much to go to fishing upper and under the sea.
                   Yes I think there are a lot but I don't leave anything behind because the life is too short to get back in the face of opportunities.
                 </label>
               </div>
             </Panel>
           </div>
         </Col>
        <Col sm={4} md={4}>
        <div style={{boxShadow: "10px 10px 5px #888888" }}>
           <Panel collapsible defaultExpanded header="My Certification" bsStyle="danger"  style={{cursor: "pointer"}} >
             <div style={{cursor: "default"}}>
              <Col sm={3} md={3}>
                <OverlayTrigger placement="bottom" overlay={tooltipBrititsh}>
                     <img src={british} height="100" width="65" style={{cursor: "default"}}/>
                </OverlayTrigger>
              </Col>
                <Col sm={3} md={3}>
                    <OverlayTrigger placement="bottom" overlay={tooltipSFC} style={{cursor: "default"}}>
                 <img src={scrum} height="100" width="100" />
               </OverlayTrigger>
               </Col>
               <Col sm={3} md={3}>
                   <OverlayTrigger placement="bottom" overlay={tooltipAngular} style={{cursor: "default"}}>
                 <img src={shaping} height="100" width="100"/>
               </OverlayTrigger>
               </Col>
               <Col sm={3} md={3}>
                   <OverlayTrigger placement="bottom" overlay={tooltipWPF} style={{cursor: "default"}}>
                 <img src={overnet} height="80" width="100"/>
               </OverlayTrigger>
               </Col>
             </div>
           </Panel>
         </div>
       </Col>
     </Row>
    );
  }
};

export class Footer extends React.Component
{

  render()
  {
           return(
             <Row >

               <Col sm={12} md={12} style={{backgroundColor:"#f2dede"}}>
                 <div style={{boxShadow: "-5px -5px 5px 5px #343434" , backgroundColor:"#343434" , borderColor:"transparent", paddingTop:"10px" , marginTop:"20px" }}>
                   <Row style={{backgroundColor:"#343434" }}>
                    <Col sm={4} md={3}>
                      <label style={{color : "white", paddingLeft:"20px" , paddingBottom:"20px", paddingTop:"10px"  }}> How to contact me:</label>
                    </Col>
                    <Col sm={2} md={2}>
                      <div>
                        <a href="https://api.whatsapp.com/send?phone=393476746516&text=Hello%20,%20I%20send%20you%20this%20message%20for%20a%20job%20opportunity%20.%20Please%20contact%20me%20at%20this%20telephone%20number%20 "
                          target="_blank" >
                         <img src={whatsapp} height="35" width="35" style={{cursor: "pointer"}}/>
                        </a>
                        <a style={{color : "white", paddingLeft:"20px" , fontWeight:"bold" }}
                           href="https://it.linkedin.com/in/simone-caneponi-7b3442a7" target="_blank">
                           <img src={linkedin} height="35" width="35" style={{cursor: "pointer"}}/>
                        </a>
                        <a style={{color : "white" ,paddingLeft:"20px" , fontWeight:"bold" }}
                          href="https://it.linkedin.com/in/simone-caneponi-7b3442a7" target="_blank">
                          <img src={monster} height="35" width="35" style={{cursor: "pointer"}}/>
                        </a>
                        <a class="twitter-share-button" style={{color : "white" ,paddingLeft:"20px" , fontWeight:"bold" }}
                          href="https://twitter.com/intent/tweet?text=I%20am%20watching%20Simone%20Caneponi%20website%20and%20I%20like%20the%20" target="_blank"
                          data-size="large">
                          <img src={twitter} height="35" width="35" style={{cursor: "pointer"}}/>
                        </a>
                      </div>
                    </Col>
                    <Col sm={3} md={3}>
                      <div style={{border:"2px solid", borderRadius:"4", color:"white"}}>
                        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "14pt", color:"white", paddingLeft:"20px"}}>&#x2709;</span>
                        <label style={{color : "white", paddingLeft:"25px" }}>
                          simonecaneponi@gmail.com
                        </label>
                      </div>
                    </Col>
                    <Col sm={3} md={2}>
                      <div style={{border:"2px solid", borderRadius:"4", color:"white"}}>
                        <span style={{fontFamily: "Segoe UI Symbol", fontSize: "14pt", color:"white" , paddingLeft:"20px"}}>&#x260e;</span>
                        <label style={{color : "white", paddingLeft:"20px" }}>+39 347 6746516</label>
                      </div>
                    </Col>
                  </Row>
                 </div>
               </Col>
             </Row>
  );
  }
};

export class Seventh extends React.Component
{
  render()
  {
      return(
        <Row>
        <Col sm={11} md={11}>
          <div style={{boxShadow: "10px 10px 5px #888888" }}>
             <Panel collapsible defaultExpanded header="My Application Project Accademic, Work and FreeTime" bsStyle="danger"  style={{cursor: "pointer"}}>
                 <div  style={{cursor: "default"}}>
                  <Media>
                   <Media.Left>
                      <img width={64} height={64} src={mean} alt="Image" rounded style={{cursor: "default"}}/>
                    </Media.Left>
                    <Media.Body>
                      <Media.Heading style={{color : "#626B60" , cursor: "default"}}>
                        Html/Css/Javascript/AngularJS/MongoJS/NodeJS/PHP (Accademic - Work - FreeTime)
                      </Media.Heading>
                      <label style={{color : "#626B60"}}>
                        It was my fisrt real project for the University, wich concern to programming a few web pages with a simple method of login and a simple navigatiion flow.
                        For this project I used a lot of scripting language and a few interaction with the user. (2009)
                      </label>
                      <Media>
                        <Media.Body>
                          <label style={{color : "#626B60"}}>
                          It was a Work's project and It concern n a web application based on MEAN stack with API Rest-Full call to have communication client-server.
                          We used a mongoDB to stock data from smart watch and create report from the data collected by every device. It was a clinical trial for a
                          particular desease. (2015)
                          </label>
                        </Media.Body>
                      </Media>
                      <Media>
                        <Media.Body>
                          <label style={{color : "#626B60"}}>
                           It was a a Work's project based on a web application based on PHP in frontend and backend, and was focused on merchandising.This is a prize-based competition that allows
                           you to collect them through purchases of certain brands of product . (2016)
                          </label>
                        </Media.Body>
                      </Media>
                    </Media.Body>
                  </Media>
                  <Media>
                    <Media.Left>
                      <img width={64} height={64} src={matlab} alt="Image" rounded style={{cursor: "default"}}/>
                    </Media.Left>
                    <Media.Body>
                      <Media.Heading style={{color : "#626B60" , cursor: "default"}}>
                        Matlab/Simulink (Accademic)
                      </Media.Heading>
                      <label style={{color : "#626B60"}}>
                      It was a very immersive project who concern a lot of math knowledge and it focused to create a custom method to calculate Integrals and represent the symbolic
                      result of the Integrals and numeric result. The delivery was divided into three milestones with bimonthly cadence. (2011)
                      </label>
                      <Media>
                        <Media.Body>
                          <label style={{color : "#626B60"}}>
                          It was a Mater's project and It concern in artificial vision. I modified ah HDR algorithm to improve the number of shot with a more step of
                          contrast of the same scene and produce a best calibration of light in the merged photo. I used a graphic library to acquisition Image in Matlab. (2013)
                          </label>
                        </Media.Body>
                      </Media>
                    </Media.Body>
                  </Media>
                  <Media>
                    <Media.Left>
                      <img width={64} height={64} src={phyton} alt="Image" rounded style={{cursor: "default"}}/>
                    </Media.Left>
                    <Media.Body>
                      <Media.Heading style={{color : "#626B60" , cursor: "default"}}>
                      Phyton (Accademic)
                      </Media.Heading>
                      <label style={{color : "#626B60"  }}>
                        It was a bioinformatic project based on a pattern recognition, and in that project the focus was to recognize the longest sequence of character in file
                        made by ATCG characters. It was similar a DNA sequencing. (2011)
                      </label>
                    </Media.Body>
                  </Media>
                  <Media>

                    <Media.Body>
                      <Media.Heading style={{color : "#626B60" , cursor: "default"}}>
                      Java/JavaEE/Servlet (Accademic - FreeTime)
                      </Media.Heading>
                      <label style={{color : "#626B60"}}>
                        It was Master's project in web field. It was composed from two part: Server and Client, it works with a MVC paradigm in strict mode and divide clearly
                        frontend to backend. The calls from client to server adn back was API Rest-Full. (2013)
                      </label>
                    </Media.Body>
                    <Media.Right>
                      <img width={64} height={64} src={java} alt="Image" rounded style={{cursor: "default"}}/>
                    </Media.Right>
                  </Media>
                  <Media>
                    <Media.Left>
                      <img width={64} height={64} src={ueb} alt="Image" rounded style={{cursor: "default"}}/>
                    </Media.Left>
                    <Media.Body>
                      <Media.Heading style={{color : "#626B60" , cursor: "default"}}>
                       Bender/Maya/UnrealEngine4/C# (Accademic - FreeTime)
                      </Media.Heading>
                      <label style={{color : "#626B60" }}>
                      It was ma Thesis project to define how is powerfull the Immersive Virtual Reality whit Oculus Rift device. I produce a simulation with 2 Render Maping, both developed
                      in C# on UE4, to define wich is the future of Immersive Virtual Reality games. I produced work at one stage from startup in Torino (TinyBullStudios). (2015)
                      </label>
                    </Media.Body>
                  </Media>
                  <Media>
                    <Media.Body>
                      <Media.Heading style={{color : "#626B60" , cursor: "default"}}>
                       C#/SOAP/DBMS/XAML (Accademic - Work)
                      </Media.Heading>
                      <label style={{color : "#626B60"}}>
                        It is my actual project to design and devolop embedded Human Machine Iterface Application for robotic machine who work in wood field. The develop paragigm
                        is MVVM with WPF framework and the design paradigm is User Friendly, to make HMI more usable as possible. (2017)
                      </label>
                    </Media.Body>
                    <Media.Right>
                      <img width={64} height={64} src={wpf} alt="Image" rounded style={{cursor: "default"}}/>
                    </Media.Right>
                  </Media>
                </div>
             </Panel>
           </div>
        </Col>
        <Col sm={1} md={1}>
        <span/>
       </Col>
     </Row>
    );
  }
};
