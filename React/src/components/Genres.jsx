import React from 'react';

import Reflux from 'reflux';
import Actions from '../reflux/actions.jsx';
import GenreListStore from '../reflux/genre-list-store.jsx';

import TableContent from './TableContent.jsx';

const Genres = React.createClass({
   mixins:[Reflux.listenTo(GenreListStore, "onChange")],
   getInitialState: function() {
      return { genreList: []};
   },
   componentWillMount: function() {
      Actions.getGenres();
   },
   onChange: function(event, genres) {
      this.setState({ genreList: genres});
   },
   render: function() {
      return (
         <div>
            <TableContent data={this.state.genreList} />
         </div>
      );
   }
});

export default Genres;
