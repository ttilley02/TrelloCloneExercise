import React, { Component } from 'react';
import List from './List'
import './App.css';
import STORE from './STORE.js'


const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  let {[keyToOmit]: _, ...rest} = obj;
  return rest;
}

class App extends Component {
  constructor(){
    super()
    this.state = STORE
  }


deleteCard = (cardId) => {
  
     const { lists, allCards } = this.state;
     const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));
    
    
    const newCards = omit(allCards, cardId);
    
    this.setState({
      lists: newLists,
      allCards: newCards
  })
};
    



addRandomCard = (listId) => {
  console.log("You! look at this")
  const newCard= newRandomCard()

  const newList= this.state.lists.map((item)=>{
    if(listId === item.id){
      return{
        ...item,
        cardIds: [...item.cardIds, newCard.id]

      }
      
    }
    return item
  })
console.log(newList)

  this.setState({
      lists: newList,
      allCards: {
        ...this.state.allCards,
        [newCard.id]: newCard
      }
  })

  console.log(this.state)
};










  render() {
    
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className ='App-list'>
          {this.state.lists.map(list => (
            <List
              id={list.id}
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
              onClickRandom = {this.addRandomCard}
              onClickDelete ={this.deleteCard}
             
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
