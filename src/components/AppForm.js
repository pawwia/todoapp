import React, {useState} from 'react';

const AppForm = () => {
   
    const [whatToDo,setWhatToDo]=useState('');
    const [finishDate,setFinishDate]=useState();
    const [isImportant,setIsImportant]=useState(false);

const d=new Date();
const dYear=d.getFullYear();
const dmonth=(d.getMonth()+1)<10?"0"+parseInt(d.getMonth()+1):parseInt(d.getMonth()+1)
const dday=(d.getDate())<10?"0"+parseInt(d.getDate()):parseInt(d.getDate());
const dateMin=String(dYear+'-'+dmonth+'-'+dday)
const dateMax=String(dYear+1+'-'+dmonth+'-'+dday)

console.log(dateMax);


const handleSubmit=e=>{
e.preventDefault();    
}
    return ( 
        <form onSubmit={handleSubmit}>
<label htmlFor="finishDate">Do kiedy?</label><input type="date" min={dateMin} max={dateMax}id="finishDate"  value={finishDate} onChange={e=>setFinishDate(e.target.value)} /><br/>
<label htmlFor="whatToDo">Zadanie?</label><input type="text" id="whatToDo" value={whatToDo} onChange={e=>setWhatToDo(e.target.value)}/><br/>
<label htmlFor="isImportnat">Czy bardzo ważne?</label><input type="checkbox" checked={isImportant} onChange={e=>!setIsImportant(e.target.checked)} id="isImportant"/>
<input type="submit" value="Dodaj zadanie"/>

        </form>
     );
}
 
export default AppForm;