var React = require('react');
//var List = require('./List.jsx');

var DropdownHardCode = React.createClass({
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

   render: function() {

      return (
         <div>
            <select id={this.props.id} className="form-control" value={this.props.selected} >
               <option onClick={this.select.bind(null, 1)} >Alternative</option>
               <option onClick={this.select.bind(null, 2)} >Blues</option>
               <option onClick={this.select.bind(null, 3)} >Orchestral</option>
               <option onClick={this.select.bind(null, 4)} >Classic Rock</option>
               <option onClick={this.select.bind(null, 5)} >Country</option>
               <option onClick={this.select.bind(null, 6)} >Dance</option>
               <option onClick={this.select.bind(null, 7)} >Electronic</option>
               <option onClick={this.select.bind(null, 8)} >Folk</option>
               <option onClick={this.select.bind(null, 9)} >Pop</option>
               <option onClick={this.select.bind(null, 11)} >Indie</option>
               <option onClick={this.select.bind(null, 12)} >Hip Hop</option>
               <option onClick={this.select.bind(null, 13)} >Rap</option>
               <option onClick={this.select.bind(null, 14)} >Asian Pop</option>
               <option onClick={this.select.bind(null, 15)} >Jazz</option>
               <option onClick={this.select.bind(null, 16)} >Latin</option>
               <option onClick={this.select.bind(null, 17)} >New Age</option>
               <option onClick={this.select.bind(null, 18)} >R&B</option>
               <option onClick={this.select.bind(null, 19)} >Reggae</option>
               <option onClick={this.select.bind(null, 20)} >Rock</option>
            </select>
         </div>
      );
   }
});


module.exports = DropdownHardCode;
