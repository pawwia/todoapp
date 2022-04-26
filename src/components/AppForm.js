import React, {useState} from 'react';
import './appForm.css';

const AppForm = (props) => {
    const d=new Date();
    const dYear=d.getFullYear();
    const dmonth=(d.getMonth()+1)<10?"0"+parseInt(d.getMonth()+1):parseInt(d.getMonth()+1)
    const dday=(d.getDate())<10?"0"+parseInt(d.getDate()):parseInt(d.getDate());
    const dateMin=String(dYear+'-'+dmonth+'-'+dday)
    const dateMax=String(dYear+1+'-'+dmonth+'-'+dday)

    const [whatToDo,setWhatToDo]=useState('');
    const [finishDate,setFinishDate]=useState(dateMin);
    const [isImportant,setIsImportant]=useState(false);



const [errorWhatToDo,setErrorWhatToDo]=useState(false);
const [errorFinishDate, setErrorFinishDate]=useState(false);

const handleSubmit=e=>{
e.preventDefault();
setErrorWhatToDo(false)
setErrorFinishDate(false);
if (!whatToDo) setErrorWhatToDo(true)
if (!errorFinishDate)setErrorFinishDate(true);
console.log(errorFinishDate)
console.log(errorWhatToDo)
if (whatToDo&&errorFinishDate){
props.add(whatToDo,finishDate,isImportant);
setIsImportant(false);
setFinishDate(dateMin);
setWhatToDo('')
}
}
    return ( 
        <form className={"FormAppClass"} onSubmit={handleSubmit}>
<label htmlFor="finishDate">Do kiedy?</label><input type="date" min={dateMin} max={dateMax}id="finishDate"  value={finishDate} onChange={e=>setFinishDate(e.target.value)} />{errorFinishDate?<p className="errorValidation">Nie wprowadziłeś poprawnej daty. Popraw datę i spóbuj ponownie.</p>:null}<br/>
<label htmlFor="whatToDo">Zadanie?</label><input type="text" id="whatToDo" value={whatToDo} onChange={e=>setWhatToDo(e.target.value)}/>{errorWhatToDo?<p className="errorValidation"> Nie wpisałeś zadania do zrobienia. Wpisz co zamierzasz robić.</p>:null}<br/>
<label htmlFor="isImportnat">Czy bardzo ważne?</label><input type="checkbox" checked={isImportant} onChange={e=>!setIsImportant(e.target.checked)} id="isImportant"/>
<input type="submit" value="Dodaj zadanie"/>

        </form>
     );
}
 
export default AppForm;