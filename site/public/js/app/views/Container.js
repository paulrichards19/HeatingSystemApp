define([
    "jquery",
    'backbone',
    'underscore',
    'text!App/templates/Container.html',
    'App/views/cards/Heating',
    'App/views/cards/Debug',
    'App/models/Data'
], function( $, BackBone, _, template, HeatingCard, Debug, Data ){
    'use strict';

    return Backbone.View.extend({

        className: "container",

        template: _.template(template),

        events: {

        },

        initialize: function() {

            var $this = this;


        },


        render: function() {

            var $this = this;


            this.$el.html( this.template() );

            // add the Heating
            var heatingView = new HeatingCard();
            $this.$el.find('.row').append( heatingView.render().$el );

            var debugView = new Debug();
            $this.$el.find('.row').append( debugView.render().$el );


            return this;
        }

    });

});