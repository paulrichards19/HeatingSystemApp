define([
    "jquery",
    'backbone',
    'underscore',
    'text!App/templates/Debug.html'
], function( $, BackBone, _, template ){
    'use strict';

    return Backbone.View.extend({

        className: "col-md-12 debug",

        template: _.template(template),

        events: {

        },

        initialize: function() {

        },

        render: function() {
            this.$el.html( this.template() );

            return this;
        }

    });

});