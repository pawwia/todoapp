import React from 'react';
import ListElement from './ListElement';
const List = (props) => {
    const tasksActive=props.tasksActive;
const showAll=props.data.map((d)=><ListElement delete={props.delete} setDone={props.setDone} active={tasksActive} id={d.id} title={d.title} addDate={d.added} deadline={d.deadLine} isImportant={d.isImportant} done={d.done} />)
    return ( 
        <ul>
{showAll}

        </ul>
     );
}
 
export default List;