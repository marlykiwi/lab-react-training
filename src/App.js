import React from 'react';
import './App.css';
import IdCard from './components/IdCard.js';
import Greetings from './components/Greetings.js';
import Random from './components/Random.js';
import CreditCard from './components/CreditCard.js';
import Rating from './components/Rating.js';
import DriverCard from './components/DriverCard.js';
import LikeButton from './components/LikeButton.js';
import ClickablePicture from './components/ClickablePicture.js';
import Carousel from './components/Carousel.js';
import NumbersTable from './components/NumbersTable.js';
import profiles from './data/berlin.json';



function App() {
  return (
    <div className="App">
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={176}
        birth={new Date("1990-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings
        lang='de'
        children='Hans '
      />
      <Greetings
        lang='en'
        children='Thomas '
      />
      <Greetings
        lang='es'
        children='Pedro '
      />
      <Greetings
        lang='fr'
        children='Francois '
      />
      <Random
        min={1} max={6}
        min={1} max={100}
      />
      <BoxColor
        r={255}
        g={0}
        b={0}
      />
      <BoxColor
        r={128}
        g={255}
        b={0}
      />
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222" />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" />
      <Rating
        children="0" />
      <Rating
        children="1.49" />
      <Rating
        children="1.5" />
      <Rating
        children="3" />
      <Rating
        children="4" />
      <Rating
        children="5" />
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }} />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }} />
      <LikeButton
      />
      <ClickablePicture
        img='/img/persons/maxence.png'
        imgClicked='/img/persons/maxence-glasses.png'
      />
      <Dice
        img='/img/dice3.png'
        imgClicked='/img/dice-empty.png'
        img='/img/dice6.png'
      />
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
      <NumbersTable
        limit={12}
      />
      <FaceBook />
    </div>
  );
}

export default App;
