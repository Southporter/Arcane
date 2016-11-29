import React from 'react';

import Reflux from 'reflux';
import Actions from '../reflux/actions.jsx';
import MenuStore from '../reflux/menu-store.jsx';

import Tile from './Tile.jsx';

const Menu = React.createClass({
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
   closeDrawer: function() {
      var layout = document.querySelector('.mdl-layout');
      layout.MaterialLayout.toggleDrawer();
   },
   renderListItems: function() {
      var items = [];
      for (var i = 0; i < this.state.menuList.length; i++) {
         var item = this.state.menuList[i];
         items.push(<Tile key={"menuTile" + i} link={item.url} name={item.name} icon={item.icon} click={this.closeDrawer} />);
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

export default Menu;
