var React = require('react');
var List = require('./List.jsx');

var DropdownSelect = React.createClass({
   updateText: function(value, index) {
      var id = this.props.id + "_text";
      $('#' + id).val( value );
   },

   render: function() {

      return (
         <div>
            <div className="mdl-button mdl-js-button" id={this.props.id}>
               <input className="mdl-textfield__input" type="text" id={this.props.id + "_text"} />
               <label className="mdl-textfield__label" htmlFor={this.props.id + "Text"}>{this.props.label}</label>
            </div>
            <div>
               <List ulClasses="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect" liClasses="mdl-menu__item" list={this.props.list} onClick={this.updateText} for={this.props.id} />
            </div>
         </div>
      );
   }
});


module.exports = DropdownSelect;
