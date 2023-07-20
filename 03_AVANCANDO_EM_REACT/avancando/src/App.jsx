import { useState } from 'react'
import './App.css'
import praia from '/src/assets/paisagem-01.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import CondicionalRender from './components/CondicionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'

function App() {
  const name = "Joaquim"
  const [userName] = useState("Maria")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0},
    {id: 2, brand: "Ford", color: "Branco", newCar: false, km: 34566},
    {id: 3, brand: "Mitsubishi", color: "Preto", newCar: false, km: 50000}
  ]

  return (
    <>
      {/* 
      <h1>Avançando no React</h1>

      Neste primeiro exemplo de imagem, estamos usando o próprio endereço da imagem para chamá-la. 
      <div>
        <img src="paisagem-02.jpg" alt="Paisagem"/>
      </div>

      Já neste segundo exemplo, estamos chamando a imagem por meio da variável que foi criada no começo do código.
      <div>
        <img src={praia} alt="Praia" />
      </div>
      
      <ManageData/>
      <ListRender/>
      <CondicionalRender/>

      // Props
      <ShowUserName name={userName}/>

      // Desestructuring
      <CarDetails brand='Volvo' km={20000} color="Azul"/>

      // Reaproveitando
      <CarDetails brand="Ford" km={50000} color="Esmeralda"/>
      <CarDetails brand="VW" km={0} color="Azul Turquesa" newCar={true}/>
      <CarDetails brand="Fiat" km={100000} color="Laranja Atômica"/>
      
      // Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        newCar={car.newCar}/>
      ))}
    </>
  )
}

export default App
