import React from 'react'
import ReactDOM from 'react-dom'


let Hello = React.createClass({

  getInitialState: function(){
    return { selectedName: this.getNames()[0] };
  },

  getNames: function(){
    return ["Batman", "Robin", "Alfred", "Joker", "Penguin"];
  },

  handleNameChange: function(name){
    this.setState({ selectedName: name });
  },

  render: function() {
    return (
      <div>
        <NamePicker
          names={this.getNames()}
          onNameChange={this.handleNameChange} />

        <br/> <br/>

        Hello, {this.state.selectedName.toUpperCase()}!!
      </div>
    );
  }
});

let NamePicker = React.createClass({

  propTypes: {
    names: React.PropTypes.array.isRequired,
    onNameChange: React.PropTypes.func.isRequired
  },

  onNameChange: function(event){
    this.props.onNameChange(event.target.value);
  },

  render: function(){
    return (
      <select onChange={this.onNameChange}>
        {this.props.names.map((name) => {
          return <option value={name}>{name}</option>;
        })}
      </select>
    );
  }
});

ReactDOM.render(<Hello />, document.getElementById('root'))
