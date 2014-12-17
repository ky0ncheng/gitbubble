var $ = require('zepto-browserify').$;
var _ = require('underscore');
var Backbone = require('backbone');
var AppConfig = window.AppConfig;

module.exports = Backbone.View.extend({

  initialize: function (options) {
    _.extend(this, options);
    this.on('loadEnded', this.onLoadEnded);
    this.render();
  },

  onLoadEnded: function () {
    this.$el.find('.loading').hide();
    this.$el.find('.team').hide();
    this.$el.css({
      top: '7%'
    });
  },

  hideLogo: function () {
    this.$el.css({
      top: '-20%'
    });
    // todo: on transition end, remove welcome element
  },

  updateLoadingProcess: function (percentage) {
    this.$santa.css({
      backgroundPositionX: percentage + '%'
    });
    this.$blood.css({
      width: percentage + '%'
    });
  },

  render: function () {
    this.setElement(this.$welcome);
    this.$blood = this.$el.find('.loading-process');
    this.$santa = this.$el.find('.loading-process-santa');
    return this;
  }
});