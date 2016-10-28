var React = require('react');

var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var MenuStore = require('../reflux/menu-store.jsx');

var MenuTile = require('./MenuTile.jsx');

var Menu = React.createClass({
   mixins:[Reflux.listenTo(MenuStore, "onChange")],
   getInitialState: function() {
      return {menuList: []};
   },
   componentWillMount: function() {
      Actions.getMenuItems();
   },
   onChange: function(event, menuItems) {
      this.setState({ menuList: menuItems});
   },
   renderListItems: function() {
      var items = [];
      for (var i = 0; i < this.state.menuList.length; i++) {
         var item = this.state.menuList[i];
         items.push(<MenuTile key={"menuTile" + i} link={item.url} name={item.name} icon={item.icon} />);
      }
      return items;
   },
   render: function() {

      return (
         <div>
            <span className="company_name mdl-layout-title">Arcane</span>
            <nav className="mdl-navigation">
               <div className="row">
                  {this.renderListItems()}
               </div>
            </nav>
         </div>
      );
   }
});

module.exports = Menu;
