import './App.css';
import AppForm from './AppForm';
import React, {useState} from 'react';
import List from './List';

function App() {
  const [data,setData]=useState([
{
id:1,
title:"Iść do kibla",
added: Date("31 december 2022"),
deadLine: Date("18 april 2022"),
isImportant: false,
done:false,
},
{
  id:2,
  title:"Zrobić kupę",
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
  return (
    <div className='App'>
      <h1>To Do App</h1>
      <AppForm/>
      <h2>Niezrobione zadania</h2>
      <List data={data} tasksActive={false}/>
      <h3>Zrobione zadania</h3>
      <List data={data} setData={setData} tasksActive={true}/>

  </div>
  );
}

export default App;
