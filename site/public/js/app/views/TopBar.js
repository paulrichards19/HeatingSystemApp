define([
    "jquery",
    'backbone',
    'underscore',
    'text!App/templates/TopBar.html'
], function( $, BackBone, _, template ){
    'use strict';

    return Backbone.View.extend({

        className: "myclassNAme",

        template: _.template(template),

        events: {
            'click .home': 'onHomeClicked'
        },

        initialize: function() {

        },

        onHomeClicked : function(){

            app.navigate("/login", {trigger: true});
            return false;
        },

        render: function() {
            this.$el.html( this.template() );

            return this;
        }

    });

});