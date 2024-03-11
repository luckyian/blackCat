import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';


function Bios() {

  return (
    <div>
      <br></br>
      <Container className="teamTitle">
      <h1>Our Team</h1>
      <br></br>
      <br></br>
    <Card className="biosText">
      <Card.Body>
        <Card.Title>
          <h2>Cary Webb</h2>

        </Card.Title>

        <Card.Img src="./assets/Cary.jpg" className="p-2" alt="Cary Webb"></Card.Img>
        <br></br>
        <br></br>
        <h3>CEO of Black Cat Technology with more than two decades of business experience working for both private and public companies, etc.  A little bit of filler
          to check text sizing and debug any issues related to text.
        </h3>

      </Card.Body>
      <br></br>



    </Card>
    <br></br>
    <br></br>
    <Card className="biosText">
      <Card.Body>
        <Card.Title>
        <h2>Cyle Webb</h2>

        </Card.Title>
        <Card.Img src="./assets/Cyle.png" className="p-2" alt="Cyle Webb"></Card.Img>
        <br></br>
        <br></br>
        <h3>CFO of Black Cat Technology and our lead design and innovation manager.  He has been a part of various creative and innovative projects that
          gives us unique perspectives and creative solutions to this modern and evolving world.  More text to test text sizing and debug any issues involving 
          spacing.
        </h3>

        

      </Card.Body>
      <br></br>



    </Card>
    <br></br>
    <br></br>
    <Card className="biosText">
      <Card.Body>
        <Card.Title>
        <h2>Kevin Wren</h2>

        </Card.Title>
        <Card.Img src="./assets/KevinW.png" className="p-2" alt="Kevin Wren"></Card.Img>
        <br></br>
        <br></br>
        <h3>The head of our marketing division, Kevin has more the 15 years experience in marketing.  He boasts a Bachlors in Strategic Communication, and has a Masters in Public Affairs.  He
          has led several social justice media campaigns and has been invited to speak before both the Washington State and California State Legislatures.  He was 
          most recently personally invited to the 2024 State of the Union in Washington DC.  Some of his former employers include Publicis Consultants, Waggener Edstrom, and 
          Porter Novelli.  His insight helps us navigate the current state of business and develop solutions to growing businesses.
        </h3>

        

      </Card.Body>
      <br></br>



    </Card>
    <br></br>
    <br></br>
    <Card className="biosText">
      <Card.Body>
        <Card.Title>
        <h2>Ian Wren</h2>

        </Card.Title>
        <Card.Img src="./assets/Ian.jpg" className="p-2" alt="Ian Wren"></Card.Img>
        <br></br>
        <br></br>
        <h3>Ian is our CTO and devlops and designs web based products for our clients.  He has several years designing and lauching websites for various businesses, and 
          has worked on several mobile applications available in both the Apple Store and Android Play Store.  He is also CompTIA certified Security+ and CySA+ adding a layer
          of understanding and experience into the ever evolving world of Cyber Security.  He works with both our clients and the internal teams to develop, design, and troubleshoot
          everything internet.

        </h3>

        

      </Card.Body>
      <br></br>



    </Card>
    </Container>
    <br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
    
    </div>

  );

}

export default Bios;
