import React from 'react';
import './ListElement.css';
const ListElement = (props) => {
let {id,title,addDate,deadline,done,active, isImportant}=props;
 deadline=new Date(deadline);
 addDate=new Date(addDate)

 const handleDoneButton=(e)=>{
     e.props.setData(!e.props.done)
 }
    return ( 
       done===active ?(<li className={isImportant?"importantTask":"notImportantTask"}>
            Zadanie {id},<br/><b> {title}</b><br/>
           <i> zrób to do: {deadline.getFullYear()}-{deadline.getMonth()}-{deadline.getDate()}<br/></i>
           <i> Dodano: {addDate.getFullYear()}-{addDate.getMonth()}-{addDate.getDate()}<br/></i>
            <button onClick={handleDoneButton}>{!done?"Zrobione": "Jednak nie zrobione"}</button>
            <button> Usuń</button>
        </li>):null
     );
}
 
export default ListElement;