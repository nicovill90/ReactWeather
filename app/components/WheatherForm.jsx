var React = require('react');

var WheatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },

  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location"/>
          <button>Submit</button>
      </form>
    )
  }
});

module.exports = WheatherForm;
