'use strict';

var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var counter = 0;

module.exports = Backbone.View.extend({
  initialize: function(options) {
    this.component = options.component;
  },

  attributes: function() {
    return {
      'data-react-container': counter++
    };
  },

  render: function() {
    ReactDOM.render(this.wrapChildren(React.createElement(this.component)), this.el);
    return this;
  },

  remove: function() {
    ReactDOM.unmountComponentAtNode(this.el);
  },

  wrapChildren: function(children) {
    return children;
  }
});
