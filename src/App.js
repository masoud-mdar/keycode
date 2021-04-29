import React from "react"
import "./styles.css"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      keyCode:"",
      keyName:"",
      keyCodeName:""
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown",this.handleKeyPress);
  }
  
  handleKeyPress(event){
    event.preventDefault();
    const keyCode = event.keyCode;
    const keyName = event.key;
    const keyCodeName = event.code;
    this.setState({
      keyCode:keyCode,
      keyName:keyName,
      keyCodeName:keyCodeName,
    })
  }


  render() {
    

    return(
      <div>
        <div id="title">
        <h1>KeY CoDeS</h1>
        <h2>Press a key</h2>
        </div>
        <div id="main">
          <div id="keyCodeNum" className="holder">
            <p>{this.state.keyCode}</p>
          </div>
          <div id="keyName" className="holder">
            <p>{this.state.keyName}</p>
          </div>
          <div id="keyCodeName" className="holder">
            <p>{this.state.keyCodeName}</p>
          </div>
        </div>
        </div>
    )
  }
}

export default App;
