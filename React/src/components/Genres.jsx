import React from 'react';

import Reflux from 'reflux';
import Actions from '../reflux/actions.jsx';
import GenreListStore from '../reflux/genre-list-store.jsx';
import AudioStore from '../reflux/audio-store.jsx';

import Tile from './Tile.jsx';

const Genres = React.createClass({
   mixins:[Reflux.listenTo(GenreListStore, "onChange")],
   getInitialState: function() {
      return { genreList: []};
   },
   componentWillMount: function() {
      Actions.getGenres();
   },
   onChange: function(event, genres) {
      this.setState({ genreList: genres.genreList});
   },
   renderListItems: function() {
      console.info("Current Genre List: ", this.state.genreList);
      var items = [];
      for (var i = 0; i < this.state.genreList.length; i++) {
         var item = this.state.genreList[i];
         items.push(<Tile key={"genreTile" + i} link={"/genre"} name={item.name} icon={"music_note"} click={Actions.play(item.name)} />);
      }
      return items;
   },
   render: function() {
      return (
         <div className="row">
            {this.renderListItems()}
         </div>
      );
   }
});

export default Genres;
