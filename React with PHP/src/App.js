import './App.css';
import React, { useState, useEffect, useRef, createRef} from 'react';

function App() {
  const adr = "http://localhost:3500";

  const [t1, setT1] = useState("");
  const [t2, setT2] = useState("");
  const [t3, setT3] = useState("");
  const [t4, setT4] = useState("");
  const [t5, setT5] = useState([]);

//Task1
  function task1() {
    fetch(adr, {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        action: 1,
        })
    })
      .then(response => response.text())
      .then(response => {
        console.log(response);
        setT1(response);
      })
  }
//Task2
  let num1Ref = React.useRef();
  let num2Ref = React.useRef();
  function task2(event) {
    event.preventDefault();
    let num_1 = num1Ref.current.value;
    let num_2 = num2Ref.current.value; 
    fetch(adr, {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        action: 2,
        num1: num_1,
        num2: num_2, 
        })
    })
      .then(response => response.text())
      .then(response => {
        console.log(response);
        setT2(response);
      })
  }
//Task3
  const fileName = React.useRef();
  const fileData = React.useRef();

  function task3(event) {
    event.preventDefault();

    let name = fileName.current.value;
    let data = fileData.current.value;

    fetch(adr, {
      mode:'no-cors',
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        action: 3,
        filename: name,
        filedata: data,
        })
    })
      .then(response => response.text())
      .then(response => {
        console.log(response);
        if (response > 0) {
          setT3(<a href={`http://localhost:3500/files/${name}`}>{name}</a>)
        } else {
          setT3(false);
        }
      });

  }
  //Task4
  function task4(event) {
    event.preventDefault();

    fetch(adr, {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        action: 4,
        })
    })
      .then(response => response.text())
      .then(response => {
        console.log(response);
        setT4(response);
      })
  }
  return (
    <div className="container">
       <h1>ItGid.info</h1>
        <div>
          <h2>Время</h2>
          <button onClick={task1}>Time</button>
          <p>{t1}</p>
        </div>
        <hr />
        <div>
        <h2>Случайное число между</h2>
        <form action=""  onSubmit={task2} >
          <div><input type="number" name="num1"  ref={num1Ref}   defaultValue="55" /></div>
          <div><input type="number" name="num2"  ref={num2Ref}   defaultValue="77" /></div>
          <button type="sumbit">Random numb</button>
        </form>
        <p>{t2}</p>
      </div>
      <hr />
      <div>
          <h2>Создание файла</h2>
        <form action=""  onSubmit={task3} >
          <div className="create_input"><label>Filename</label><input type="text" name="filename" ref={fileName}/></div>
          <div className="create_input"><label>Filedata</label><input type="text" name="filedata" ref={fileData}/></div>
          <button type="submit">Created file</button>
        </form>
        <p>{t3}</p>
        </div>
        <hr />
        <h2>Получение данных компьютера</h2>
        <form action=""  onSubmit={task4} >
          <button type="submit">Get data</button>
        </form>
        <p>{t4}</p>
        <hr />
        
    </div>
  );
}

export default App;
