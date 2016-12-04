var React = require('react');

var WheatherMessage = ({temp, location}) => <h4>It's {temp} in {location}</h4>;

module.exports = WheatherMessage;
