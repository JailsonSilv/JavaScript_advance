import './App.css';
import Natu from "./assets/natu.jfif"
import CondtionalRender from './components/CondtionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import { useState } from "react";
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import { Container } from './components/Container';
import ExecuteFuncao from './components/ExecuteFuncao';
import UserDetails from './components/UserDetails';



function showMessage() {
  console.log("Evento do componente pai!")
}

const users = [
  { id: 1, name: "Jailson", job: "Programador", age: 21},
  { id: 2, name: "Maria", job: "Advogada", age: 39},
  { id: 3, name: "João", job: "Professor", age: 50},
  { id: 4, name: "Miguel", job: "Estudante", age: 16},
];


function App() {
 // const name = "João"
  const [userName] = useState("Lucas")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "Kia", color: "Preto", newCar: true, km: 0},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 50000},
  ]
  
  return (
    <div className="App">
      <h1>Avançando em   React </h1>

      {/*Img em public*/}

      <div className="Public">
        <p>Img que estava dentro da pasta public </p>
        <img src="/rony.jpg" alt='img'/>
      </div>

      {/*Img fora da pasta public- em assets ou image*/}

      <div className='Assets'>
        <p>Img que estava fora da pasta public, dentro de uma assets</p>
        <img src={Natu} alt="natu"/>
      </div>  

        <ManageData />
        <ListRender />
        <CondtionalRender />
        {/* PROPS */}
        <ShowUserName name={userName} />
        {/* DESTRUCTURING */}
        <CarDetails brand="VW" km={10000} color="Azul" newCar={false} />
        {/* REAPROVEITANDO */}
        <CarDetails brand="Ford" km="15000" color="Preto" newCar={false} />
        <CarDetails brand="Fiat" km="0" color="Branco" newCar={true} />
        <CarDetails brand="Ford" color="Verde" km="0" newCar={true}/>
        {/*LOOP EM ARRAY DE OBJETOS*/}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand} 
            color={car.color} 
            km={car.km} 
            newCar={car.newCar}
          />
        ))}
      
          {/* FRAGMENT*/}
          <Fragments propFragment="teste"/>
          {/* CHILDREN */}
          <Container myValue="Testing"> {/*Assim quando tem vai ter html dentro*/}
            <p>Texto que testa o children</p>
          </Container>
          <Container myValue="Testing2"> 
            <h5>Testando container</h5>
          </Container>
          {/*EXECUTAR FUNÇÃO*/}
          <ExecuteFuncao myFunction={showMessage}/>
          {/*<<<<<<<<DESAFIO>>>>>>>>*/}
          {users.map((user) => {
            <UserDetails 
              key={user.id}
              name={user.name}
              job={user.job}
              age={user.age}
            />
          })}
    </div>
  );
}

export default App;
