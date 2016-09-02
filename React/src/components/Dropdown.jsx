var React = require('react');
var List = require('./List.jsx');

var Dropdown = React.createClass({
   getInitialState: function() {
      return { list: this.props.list
             , listVisible: false
             };
   },

   select: function(item) {
      this.props.selected = item;
   },
   show: function(item) {
      this.setState({ listVisible: true });
      document.addEventListener("click", this.hide);
   },
   hide: function(item) {
      this.setState({ listVisible: false });
      document.removeEventListener("click", this.hide);
   },
   renderListItems: function() {
      var items = [];
      for (var i = 0; i < this.props.list.length; i++) {
         var item = this.props.list[i];
         items.push(<div onClick={this.select.bind(null, item)}>
                <span>{item.name}</span>
            </div>);
      }
   },

   render: function() {

      return (
         <div className={"dropdown" + (this.state.listVisible ? " show" : "")}>
            <button className={"rectangle-button mdl-button mdl-js-button mdl-button__raised mdl-js-ripple-effect" + (this.state.listVisible ? " clicked": "")}
                    onClick={this.show} data-toggle="dropdown">
               {this.props.selected}
            </button>
            <ul className="dropdown-menu">
               {this.renderListItems()}
            </ul>
         </div>
      );
   }
});


module.exports = Dropdown;
