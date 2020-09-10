
import React, { Component } from 'react';
import "./style.css"; 
class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick = (event) => {
      alert(event.target.innerText);    // Click Me
      alert(event.target.tagName);      // BUTTON
  }
 
  render() {
    return (
      <div>
        <div className="text-center">
          <button className="btn btn-secondary" onClick={this.handleClick}>
            Click Me
          </button>
        </div>
      </div>
    );
  }
}
 
export default App;