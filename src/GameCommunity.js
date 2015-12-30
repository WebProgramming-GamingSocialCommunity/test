const React = require('react') ;
const Button = require('react-bootstrap').Button;
const Input = require('react-bootstrap').Input;
const ButtonGroup = require('react-bootstrap').ButtonGroup;
const ButtonInput = require('react-bootstrap').ButtonInput;
const Nav = require('react-bootstrap').Nav;
const Navbar = require('react-bootstrap').Navbar;
const NavItem = require('react-bootstrap').NavItem;
const NavDropdown = require('react-bootstrap').NavDropdown;
const MenuItem = require('react-bootstrap').MenuItem;
const Tabs = require('react-bootstrap').Tabs;
const Tab = require('react-bootstrap').Tab;
const ListGroup = require('react-bootstrap').ListGroup;
const ListGroupItem = require('react-bootstrap').ListGroupItem;
const Grid = require('react-bootstrap').Grid;
const Row = require('react-bootstrap').Row;
const Col = require('react-bootstrap').Col;
const form = require('react-bootstrap').form;

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
      <Grid fluid>
        <Row className = 'Toolbar'>
          <Navbar inverse>
            <Col lg={11}>
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
                  <Navbar.Form pullLeft>
                    <Input type='text' placeholder="search"/>
                    <Button type='submit'>Search</Button>
                  </Navbar.Form>
                </Nav>
                <Nav pullRight>
                  <NavItem eventKey={1} href='#'>{usr}</NavItem>
                  <NavItem eventKey={2} href='#'>Home</NavItem>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Navbar>
        </Row>
        <Col lg={10} className = 'Features'>
          <Tabs position='left' tabWidth={2}>
            <Tab eventKey={1} title="News Feed">
              <form>
                <Input type='textarea' label='Update Status' placeholder='What do you want to post ?'/>
                <ButtonInput type='submit' value='post'/>
              </form>
            </Tab>
            <Tab eventKey={2} title="Messages"> Alice: Hello! </Tab>
            <Tab eventKey={3} title="Groups"> LOL fights! </Tab>
          </Tabs>
        </Col>
        <Col lg={2} className = 'UndefineFeatures'>
          <ListGroup>
            <ListGroupItem href='#'>Item 1 </ListGroupItem>
            <ListGroupItem href='#'>Item 2 </ListGroupItem>
            <ListGroupItem href='#'>Item 3 </ListGroupItem>
          </ListGroup>
        </Col>
      </Grid>
    );
  }
}

module.exports = GameCommunity ;
