import React,{ useEffect, useState } from 'react';
import styled from 'styled-components';

const App = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const data = await fetch(`https://rickandmortyapi.com/api/character`) 
    const user = await data.json()
    setItems(user.results)
  }
  console.log(items.results);
  
  const people = items.map(item => (
    <Square key={item.id}>
      <Title>
        {item.name}
      </Title>
      
      <Image src={item.image} alt="personajes" />
      
      <FlexInfo>
        <FigureStatus style={{background: item.status === "Alive" ? "#00FF00" :
            item.status === "Dead" ? "#FF0000" :
              "#808080"}} />
        <InfoCharacter>
          {item.species} - {item.gender}
        </InfoCharacter>
      </FlexInfo>
      
      <div>
        <Location>
          Possible location:
        </Location>
        <DataLocation>
          {item.location.name}
        </DataLocation>
      </div>
    </Square>
  ))

  return (
    <List>
      {people}
    </List>
  )
}

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const Square = styled.div`
  margin: 10px;
  text-align: center;
  border: 2px solid #0089FF;
  border-radius: 10px;
`

const Title = styled.h1`
  color: #D6DBFF;
`

const Image = styled.img`
  width: 200px;
  border-radius: 10px;
`

const FlexInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
`

const FigureStatus = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
`

const InfoCharacter = styled.p`
  color: #FFF;
`

const Location = styled.h3`
  color: #129EAC;
`

const DataLocation = styled.p`
  color: #ADEF12;
`


export default App;
