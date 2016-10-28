var React = require('react');
var List = require('./List.jsx');

var Dropdown = React.createClass({
   getInitialState: function() {
      return { list: this.props.list
             , listVisible: false
             , selected: "None"
             };
   },

   select: function(item) {
      this.setState({selected: item.name});
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
         items.push(<div key={item.id} className="dropdown-item" onClick={this.select.bind(null, item)} >
               <span>{item.name}</span>
            </div>);
      }
      return items;
   },

   render: function() {

      return (
         <div className={"dropdown" + (this.state.listVisible ? " open" : "")}>
            <button type="button" className={"rectangle-button dropdown-toggle mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect" + (this.state.listVisible ? " clicked": "")}
                    onClick={this.show} data-toggle="dropdown" style={{margin: '5px'}}>
               {this.state.selected}
            </button>
            <div className="dropdown-menu arcane-dropdown">
               {this.renderListItems()}
            </div>
         </div>
      );
   }
});


module.exports = Dropdown;
