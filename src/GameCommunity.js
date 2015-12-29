const React = require('react') ;
const Button = require('react-bootstrap').Button;
const Input = require('react-bootstrap').Input;
//const ButtonGroup = require('react-bootstrap').ButtonGroup;
const Nav = require('react-bootstrap').Nav;
const Navbar = require('react-bootstrap').Navbar;
const NavItem = require('react-bootstrap').NavItem;
const NavDropdown = require('react-bootstrap').NavDropdown;
const MenuItem = require('react-bootstrap').MenuItem;


class GameCommunity extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      usr: 'lin'
    };
  }
  render(){
    const {usr} = this.state;
    return(
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'>Game Community</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href='#'>Irtoduction</NavItem>
            <NavItem eventKey={2} href='#'>News</NavItem>
            <NavDropdown eventKey={3} title="Games">
              <MenuItem eventKey={3.1}>LOL</MenuItem>
              <MenuItem eventKey={3.2}>Hearthstone</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href='#'>{usr}</NavItem>
            <NavItem eventKey={2} href='#'>Home</NavItem>
          </Nav>
          <Navbar.Form pullRight>
            <Input type='text' placeholder="search"/>
            <Button type='submit'>Search</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

module.exports = GameCommunity ;
