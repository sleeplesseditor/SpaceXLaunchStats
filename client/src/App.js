import React, { Component } from 'react';
import logo from './logo.png';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches';
import './App.css';

const client = new ApolloClient({
  uri: `http://localhost:5000/graphql`
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <img 
            src={logo} 
            alt="SpaceX" 
            className="spacex_logo" 
            style={{ width: 300 }} 
          />
          <Launches />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
