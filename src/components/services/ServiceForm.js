import styles from "../project/ProjectForm.module.css"
import Input from "../form/Input"
import {useState} from "react"
import SubmitButton from "../form/SubmitButton"

function ServiceForm({handleSubmit, btnText, projectData}){

    const [services,setService] = useState([])

    function submit (e){

        e.preventDefault()
        projectData.services.push(services)
        handleSubmit(projectData)

    }

    function handleChange(e) {

        setService({...services, [e.target.name] : e.target.value})

    }
    
        

    

    return (
    
          <form  onSubmit={submit} className={styles.form}>
            <Input 
             type="text"
             text="Nome do serviço "
             name="name"
             placeholder="Insira o nome do serviço"
             handleOnChange={handleChange}/>
            <Input 
             type="number"
             text="Custo do serviço "
             name="cost"
             placeholder="Insira o valor total"
             handleOnChange={handleChange}/>
            <Input 
             type="text"
             text="Descrição do serviço "
             name="description"
             placeholder="Insira uma descrição do serviço"
             handleOnChange={handleChange}
             />
             <SubmitButton text={btnText}/>
          
        </form>
    
    
    )
      
}

export default ServiceForm