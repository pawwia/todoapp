import './App.css';
import AppForm from './AppForm';
import React, {useState} from 'react';
import List from './List';

function App() {
  const [data,setData]=useState([
{
id:1,
title:"Zjeść śniadanie",
added: Date("31 december 2022"),
deadLine: Date("18 april 2022"),
isImportant: false,
done:false,
},
{
  id:2,
  title:"Obejrzeć serial",
  added:  Date("2 february 2022"),
  deadLine: Date("18 april 2022"),
  isImportant: false,
  done:true,
  },
  {
    id:3,
    title:"Wyjść z psem",
    added: Date("1 may 2022"),
    deadLine: Date("20 september 2022"),
    isImportant: true,
    done:false,
    },

]);
const counter=data.length;

const addElement=(whatToDo,finishDate,isImportant)=>{
const task=Array.from(data);
const newElement= {
  id:counter+1,
  title:whatToDo,
  added:Date(),
  deadLine:finishDate,
  isImportant:isImportant,
  done:false,
  }
  task.push(newElement)
  setData(task)
}
const setDone=(id)=>{
const task=Array.from(data) ;

task.forEach(task=>{
  if(task.id===id){
    task.done=!task.done;
  }
})

setData(task);

}

const deleteListElement=(id)=>{
const task=Array.from(data);

task.map(element=>{
  if(element.id===id){
const ino=element.indexOf;
task.splice(ino,1);

  }
})


  setData(task)

}
  return (
    <div className='App'>
      <h1>To Do App</h1>
      <AppForm add={addElement}/>
      <h2>Niezrobione zadania</h2>
      <List data={data} delete={deleteListElement} setDone={setDone} tasksActive={false}/>
      <h3>Zrobione zadania</h3>
      <List data={data} delete={deleteListElement} setDone={setDone} tasksActive={true}/>

  </div>
  );
}

export default App;
