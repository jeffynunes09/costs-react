import styles from "./Input.module.css"

function Input({type,name,text,placeholder,handleOnChange, value}){

    return(
        <div className={styles.form_control}>
            <label htmlfor={name}>{text}:</label>
            <input 
            required
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange= {handleOnChange}
            value={value}
                />
        </div>
    )
}

export default Input