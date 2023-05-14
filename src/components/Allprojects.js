import { Container, Row} from "react-bootstrap"
import data from "./data"
import { useState } from "react"
import Project from "./Project"
const Allprojects =() =>{
    const data =[
        {id:1, title:"Hospital Management System", count:20, img:"https://miro.medium.com/max/1200/1*FuFvb10MeQquqXEP0oTB9g.jpeg"},
        {id:2, title:"Loan Management System", count:50, img:"https://www.leadsquared.com/wp-content/uploads/2021/11/Digital-Loan-Management-System.jpg"},
        {id:3, title:"Matrimonial Management System", count:90, img:"https://i0.wp.com/www.lovelycoding.org/wp-content/uploads/2022/09/Online-Matrimonial-Management-System.webp?fit=640%2C427&ssl=1"},
        {id:4, title:"School Management System", count:9, img:"https://sweedu.com/wp-content/uploads/2020/10/sweedu-banner-23-octt-2020.jpg"},
    ]
    const [projects, setProjects]= useState(data)
    return (
        <Container id="work">
            <h3 className="mt-5">Projects</h3>
         <Row>
            {
                projects.map((project)=>{
                    return(
                        <Project title={project.title} img={project.img} count={project.count}/>
                    )
                })
            }
         </Row>
        </Container>
    )
}
export default Allprojects;