import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [], name: [] };
  }

  componentWillMount() {
    fetch("https://randomuser.me/api/?results=504")
      .then(results => {
        const people = results.json();
        return people;
      })
      .then(people => {
        let pictures = people.results.map(pic => {
          return (
            <div className="imgg" key={pic.email}>
              <img src={pic.picture.medium} />
            </div>
          );
        });
        this.setState({ pictures: pictures });
        console.log("state", this.state.pictures);
      });
  }

  render() {
    return <div className="App">{this.state.pictures}</div>;
  }
}

export default App;
