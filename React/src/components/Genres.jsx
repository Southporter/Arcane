var React = require('react');

var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var GenreListStore = require('../reflux/genre-list-store.jsx');

var Content = require('./TableContent.jsx');

var Genres = React.createClass({
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
            <Content data={this.state.genreList} />
         </div>
      );
   }
});

module.exports = Genres;
