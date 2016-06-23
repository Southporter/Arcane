var React = require('react');

var PasswordBox = React.createClass({
   passwordControl: function (e) {

   },

   render: function() {
      return <div className="mdl-textfield mdl-js-textfield">
                <input type="password" onchange="{this.passwordControl}" className="input-text mdl-textfield__input" id="{this.props.id}"></input>
                <label className="input-text mdl-textfield__label" htmlFor="{this.props.id}">{this.props.label}</label>
             </div>
   }
});

module.exports = PasswordBox;
