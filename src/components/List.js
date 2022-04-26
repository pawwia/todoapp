import React from 'react';
import ListElement from './ListElement';
import './List.css';
const List = (props) => {
    const tasksActive=props.tasksActive;
const showAll=props.data.map((d)=><ListElement key={d.id} delete={props.delete} setDone={props.setDone} active={tasksActive} id={d.id} title={d.title} addDate={d.added} deadline={d.deadLine} isImportant={d.isImportant} done={d.done} />)
const showLength=showAll.length;  
return ( 
        <ul className='ListToDo'>
 

  {
tasksActive?
showLength?showAll:"Nie masz nic więcej do roboty. Zazdroszczę... "
:
showLength?showAll:"Niczego jeszcze nie zrobiłeś:) Do roboty.. "

  }

        </ul>
     );
}
 
export default List;