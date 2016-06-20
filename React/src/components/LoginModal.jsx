var React = require('react');
var PasswordBox = require('./components/PasswordBox.jsx');
var TextBox = require('./components/TextBox.jsx');

var LoginModal = React.createClass({
   render: function() {
      return <div className="form">
                <TextBox id="enter_user_name" label="Username"/>
                <PasswordBox id="enter_password" label="Password"/>

             </div>
   }
});

module.exports = LoginModal;
