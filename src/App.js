import ImageAddress from './components/ImageAddress/ImageAddress'
import Profile from './components/Profile/Profile'
import 'tachyons'
import './App.css';
import { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className='cvflex'>
        <ImageAddress />
        <Profile />
      </div>
    );
  }
  
}

export default App;
