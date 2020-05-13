import React, { Component } from "react";
import ReactDOM from "react-dom";

// For the marked.js library, allow line breaks.
// This achieves the optional challenge in the FCC guidelines.
marked.setOptions({
  breaks: true,
});

// Create initial markdown text.
const initialEditorText = `
# This is markdown as h1 heading.

## This is markdown as h2 heading.

Here are some span tags inline code \`<span></span>\` between back ticks.
This text will appear **bold** with asterisks.
> This is a block quote.
This is a link to the marked.js documentation [links](https://marked.js.org/#/README.md#README.md)

\`\`\`
// This is a code block

function sayHello(firstLine, lastLine) {
    console.log("hello!");
}
\`\`\`
  
- This is a list
  - With items.
  - and sub-item
And this is an embedded image of the React logo:						      
![React Logo w/ Text](https://goo.gl/Umyytc)
`;







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
	        value={props.editorText}
	        onChange={props.handleChange}
	      />
	      </form>
	  </div>
    );
}


function Previewer(props) {
      return (
	  <div>
	      <h2>Previewer</h2>
	      {/*Call React dangerouslySetInnerHTML function*/}
        <div 
          id="preview"
          dangerouslySetInnerHTML = {{ __html: props.markdownText }}
	      />
       </div>
    );
}



class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
	  editorText: initialEditorText,
	  markdownText: marked(initialEditorText)
      };      
    this.handleChange = this.handleChange.bind(this);      
  }
  
    handleChange(event) {

      this.setState({
	  editorText: event.target.value,
	  markdownText: marked(event.target.value)
      }); 


    }
    
    render() {
      return (
	  <div>
              <PageTitle />
	      <Editor editorText={this.state.editorText} handleChange={this.handleChange}/>	      
	      <Previewer markdownText={this.state.markdownText} handleChange={this.handleChange} />
	  </div>
      )
  }
}

export default App;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
