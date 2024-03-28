import Message from "../layout/Message"
import {useLocation} from "react-router-dom"
import styles from "./Projects.module.css"
import Container from "../layout/Container"
import Loader from "../layout/Loader"
import LinkButton from "../layout/LinkButton"
import ProjectCard from "../project/ProjectCard"
import { useState,useEffect } from "react"

function Projects(){
    const [removeLoader, setRemoveLoader] = useState(false)
    const [projects, setProjects] = useState([])
    const [ projectMessage, setProjectMessage]= useState('')

    const location = useLocation()
    let message= ''
    if(location.state){
        message = location.state.message
    }

    useEffect(()=>{
      setTimeout (()=>{
        fetch('http://localhost:5000/projects', {
            method:"GET",
            headers: {
                "Content-Type" : "application/json"
            },
        }).then((resp)=> resp.json())
        .then((data)=> {
            setProjects(data)
            console.log(data)
            setRemoveLoader(true)
        })
        .catch((err)=> console.log(err))
      }, 300)
    },[])


    function removeeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method :'DELETE',
            headers: {
                'Content-Type' :'application/json'
            }
        }).then((resp)=> resp.json)
        .then(()=>{
            setProjects(projects.filter((project)=> project.id !==id))
            setProjectMessage('Projeto removido com sucesso')
           
            
        })
        .catch((err)=> console.log(err))
        setProjectMessage("")
    }



    return ( 
        <div className={styles.project_container}>
        <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto"/>
        </div>
       {message && <Message msg={message} type="success"/> }
       {message = ''}
       {projectMessage && <Message msg={projectMessage} type="success"/> }
       
       <Container customClass="start">
        { projects.length > 0 && 
        projects.map((project)=> <ProjectCard 
            id={project.id}
            name={project.name}
            budget={project.budget}
            category={project.category.name}
            key={project.id}
            handleRemove={removeeProject}
             />
        )}
        {!removeLoader && <Loader />}
        {removeLoader && projects.length === 0   && (
            <p>Não há projetos cadastrados!</p>
        )}
         
       </Container>
       
       
    </div>)
}


export default Projects