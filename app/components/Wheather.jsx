var React = require('react');
var WheatherForm = require('WheatherForm');
var WheatherMessage = require('WheatherMessage');
var openWheatherMap = require('openWheatherMap');

var Wheather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },

  handleSearch: function (location) {
    var _this = this;
    this.setState({isLoading: true});

    openWheatherMap.getTemp(location)
      .then(function (temp) {
        _this.setState({
          location: location,
          temp: temp,
          isLoading: false
        });
      }, function (error) {
        _this.setState({isLoading: false});
        alert(error);
    });
  },

  render: function () {
    var {isLoading, location, temp} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching data...</h3>
      } else if (temp && location) {
        return <WheatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h3>Wheather component</h3>
        <WheatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Wheather;
