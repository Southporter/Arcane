var React = require('react');

var TextBox = React.createClass({
   inputControl: function(e) {
      e.preventDefault();
   },

   render: function() {
      return <div className="mdl-textfield mdl-js-textfield">
                <input type="text" onChange={this.inputControl} className="input-text mdl-textfield__input" id="{this.props.id}"></input>
                <label className="input-text mdl-textfield__label" htmlFor="{this.props.id}">{this.props.label}</label>
             </div>
   }
});


module.exports = TextBox;
