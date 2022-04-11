import axios from 'axios';
import { useEffect,useState } from 'react';
import {Card, Row} from 'react-bootstrap';

function Termekek() {
   
const [Products,setProducts]=useState([])
 useEffect(()=>{
  axios({
    method: 'get',
    url: 'https://localhost:44380/api/Termekek',
    responseType: 'json'
  })
    .then((response)=> {
      setProducts(response.data)
      
    });
 },[])
 
  return (
    <div className="App">
       <Row>
     {Products.map((value)=>{
       return(

           <div>
               <Card className="Termekek">
               <Card.Img variant="top" className="img-thumbnail" style={{height:"100px",width:"100px"}}  img src={value.Kep} />
                <Card.Title>{value.Nev}</Card.Title>
                <Card.Body>
                    <Card.Text>{value.Leiras}</Card.Text>
                    <h6>{value.Ar} Ft</h6>
                </Card.Body>

               </Card>
           </div>
       )
            
             
   
       
      
     })}
     </Row>
    </div>
  );
            
        
    
}

export default Termekek
