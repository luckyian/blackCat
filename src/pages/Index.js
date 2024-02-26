import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./style.css";


function Index() {
 
  
  
  return (


    <div>
      <div className="mt-5">
        <div className="p-5">
          <Card className="aboutBack">
            <Card.Body>
              <Card.Title><h1><u>About Us</u></h1></Card.Title>
              <div className="float-left" >
                <Card.Img src="./assets/BlackCatLogo.jpeg" className="p-2" alt="Black Cat Technology"></Card.Img>
              </div>
              <div>
             <p><h4> We are a full service business consulting service offering a multitude of options for any size business.
             <br></br>
             <br></br>
             Some of the services that we offer are: Business pricing audits, cyber security solutions, full website creation, social media consulting and support, internet footprint expansion advice and service, and business expansion advice.
             <br></br>
             <br></br>
             We have a vast experience and knowledge spanning four decades, including individuals with Bachelors and Masters Degrees in various business fields, as well as CompTIA certifications in Security+ and CySec+.
             {/* <Card.Img src="./assets/SecurityPlus.jpg" className="p-2" alt="CompTIA"></Card.Img> */}
             <br></br>
             <br></br>
             We want to grow your plans and help you make your business succeed.  We approach every business individually and tackle your challenges with the energy and dedication we would if the business was our own.
             </h4></p>
             <br></br>
             <br></br>
             <br></br>
             <p></p>
             <p>
              <br></br>
                  <h2><u>Contact Info</u></h2>
                  <br></br>
                  <h3>Email: TBD</h3>
                  <h3>Phone: TBD</h3>
                

              </p>

            </div>

            </Card.Body>
          </Card>
        </div>
      </div>
    </div>








  );
}

export default Index;
