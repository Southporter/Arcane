var React = require('react');

var PasswordBox = React.createClass({
   render: function() {
      return <div className="mdl-textfield mdl-js-textfield">
                <input type="password" onchange="{this.passwordControl}" className="mdl-textfield__input" id="{this.props.id}"></input>
                <label className="mdl-textfield__label" for="{this.props.id}">{this.props.label}</label>
             </div>
   }
});

module.exports = PasswordBox;
