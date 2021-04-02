import React, { Component } from "react"
import {Card, Nav,Button} from "react-bootstrap"



export class HomePage2 extends Component{
    render(){
        return(
            <div className="container-fluid col-lg-10" data-column-margin='dark' style={{paddingTop:"0px", paddingBottom:"0px" }}>
            <div id="fws_header" className="x-col x-md x-x-1" data-midnight="dark">
              <Card>
                <Card.Header>
              <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
              <Nav.Link href="#first">Book Flight</Nav.Link>
             </Nav.Item>
             <Nav.Item>
             <Nav.Link href="#link">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
             <Nav.Link href="#link">Link</Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>  
            </div> 
            </div>
        )
    }
}


export default HomePage2;