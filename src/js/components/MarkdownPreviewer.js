import React, { Component } from "react";
import ReactDOM from "react-dom";


function PageTitle() {
    return  <h1>Markdown Previewer</h1>;
}


function Editor(props) {
      return (
	  <div>
	      <h2>Editor</h2>
              <form>
              <textarea
	        id = "editor"
	        type="text"
	        value={props.editorText}//{this.state.editorText}
	        onChange={props.handleChange}//onChange={this.handleChange}
	      />
	      </form>
	  </div>
    );
}


function Previewer(props) {
      return (
	  <div>
	      <h2>Previewer</h2>
              <div id="preview">{props.markdownText}</div>	      
	  </div>
    );
}



class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
	  editorText: 'Will enter markdown text here...',
	  markdownText: 'Results will appear here...'
      };      
    this.handleChange = this.handleChange.bind(this);      
  }
  
    handleChange(event) {

      this.setState({
	  editorText: event.target.value,
	  markdownText: this.state.editorText
      }); // TODO: need to fix lag in upadate for markdownText in Previewer function


    }
    
  render() {
      return (
	  <div>
              <PageTitle />
	      <Editor editorText={this.state.editorText} handleChange={this.handleChange}/>	      
	      <Previewer markdownText={this.state.markdownText}  />
	  </div>
      )
  }
}

export default App;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
