import React from 'react'
import ReactDOM from 'react-dom'

class HelloWorld extends React.Component {
  render: function(){
    return (
    <div>
      Hello World!
    </div>
    );
  }

}

ReactDOM.render(<HelloWorld />, document.getElementById('root'))
