import React, { Component } from 'react';
import {Card, Header, Hero, Sidebar, DocumentTheme} from './main';

class App extends Component {
  render() {
    return (
      <div>
        <DocumentTheme 
          header={<Header title="Horic Design" items={[{label:'menu1',url:'#menu1'},{label:'menu2',url:'#menu2'}]} modifier="fixed"/>}
          sidebar={<Sidebar items={[{label:'menu'},{label:'menu1',url:'#menu1'},{label:'menu2',url:'#menu2',current:true}]} />}
          main={<Hero title="Horic Design" image="https://source.unsplash.com/9kbmpWBTk9A/1600x900/" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima assumenda facere iusto eligendi similique, saepe necessitatibus amet non consectetur, esse inventore, laboriosam ratione consequuntur ducimus. Inventore soluta et, quibusdam! Aperiam?"/>}
        />
      </div>
    );
  }
}

export default App;
