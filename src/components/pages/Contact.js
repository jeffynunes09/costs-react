import styles from "./Contact.module.css"

function Contact(){

    return(  <div className={styles.container_principal}>

        <h1>Contate-nos:</h1>
        <div>
            <span>Telefone :</span> 45565-65767
        </div>
        <div>
            <span>E-mail: :</span> costs@costs.com
        </div>
    </div>)
}


export default Contact