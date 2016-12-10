import React, {Component} from 'react';
import annyang from 'annyang';
import voiceCommands from './voiceCommands';
import './App.css';

class App extends Component {
    componentDidMount () {
        annyang.addCommands(voiceCommands);
        annyang.start();
    }
    render () {
        return (
            <div className="App"></div>
        );
    }
}

export default App;
