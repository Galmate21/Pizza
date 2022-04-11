import React from 'react'
import {useState } from 'react';
import axios from 'axios';
import {Form,Row,Button} from 'react-bootstrap'

function Ujtermek() {
    const [Nev,SetNev]=useState("")
    const [Ar,SetAr]=useState(0)
    const [Leiras,SetLeiras]=useState("")
    const [Kep,setKep]=useState("https://res.cloudinary.com/gb-web/image/upload/v1649666369/images_xzwoqp.png")
    
    
    const postDentails=(pics)=>{
        if(pics.type==='image/jpeg'||pics.type==='image/png'){
          const adat=new FormData();
          adat.append('file',pics);
          adat.append('upload_preset','szakdoga');
          adat.append('cloud_name','gb-web');
          fetch("https://api.cloudinary.com/v1_1/gb-web/image/upload", {
            method:"post",
            body:adat,
          }).then((res)=>res.json()).then((adat)=>{
            console.log(adat);
            setKep(adat.url.toString())
           
          })
        }
      }

      const feltoltes=async(e)=>{
        e.preventDefault();
        if (window.confirm("Biztos hozzáadod ezt terméket?")){

            try {
                const config={
                  headers:{
                    "Content-type":"application/json"
                  }
                }
                const {data}=await axios.post(`https://localhost:44380/api/termekek`,{
                Nev,Leiras,Ar,Kep
              },config)
              alert("Sikeresen hozzáadtál egy új terméket!")
              window.location.assign("/termekek")
              } catch (error) {
                alert("Hiba!")
              }
              
            }
           
            }  

  
    return (
        <div>
             <Row>
                <Form onSubmit={feltoltes}>
                    <img style={{height:"100px",width:"100px"}} alt='Nincs kiválasztva kép' src={Kep}/>
                    <Form.Group>
                        <Form.Label>Név:</Form.Label>
                        <Form.Control type="text" placeholder="Pl. Szalámis pizza" onChange={(e)=>SetNev(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Leírás:</Form.Label>
                        <Form.Control type="text" placeholder="Leírás" onChange={(e)=>SetLeiras(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Ár:</Form.Label>
                        <Form.Control type="number" placeholder="Pl. (Ft)" onChange={(e)=>SetAr(e.target.value)}/>
                    </Form.Group>
        
                    <Form.Group controlId="pic" className="mb-3">
    <Form.Label>Kép:</Form.Label>
    <Form.Control onChange={(e)=>postDentails(e.target.files[0])}
    
    type="file"
     />
  </Form.Group>
  <Button type="submit">Feltöltés</Button>

                </Form>
            </Row>
            
        </div>
    )
}

export default Ujtermek
