import styles from "./Select.module.css"

function Select({name,text,options,handleOnChange, value}){

    return(
        <div className={styles.form_control}>
            <label htmlfor={name}>{text}:</label>
            <select required name={name} id={name} onChange={handleOnChange} value={value}>
                <option value=''>Selecione uma opção</option>
                {options.map((option)=> (
                <option required value={option.id} key={option.id}>
                    {option.name}
                </option>
                ))}
            </select>
           
                
        </div>
    )
}

export default Select