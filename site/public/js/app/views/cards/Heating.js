define([

    "jquery",
    'backbone',
    'underscore',
    'text!App/templates/Heating.html',
    'App/models/Data',
    'App/views/Controls'

], function( $, BackBone, _, template, HeatingData, Controls ){
    'use strict';

    return Backbone.View.extend({

        className: "col-md-12 heating",

        template: _.template(template),

        events: {

        },


        initialize: function(options) {

            _.bindAll(this, "onDeviceReady", "onResume");

            this.dataModel = new HeatingData();

            document.addEventListener("deviceready", this.onDeviceReady, false);


        },

        onDeviceReady : function(){

            console.log('onResume');

            document.addEventListener("resume", this.onResume, false);

        },


        onResume : function(){

            console.log('on resume');

            var $this = this;

            $this.render( function(){

                $this.showNotification( 'Updated', 'updated', 3000 );

            });


        },

        showNotification : function(text,type,timeout){

            var $this = this;
            var context = this.$el.find('#alertbottomleft');

            switch( type ){

                default:
                    context.html('<i class="fa fa-refresh"></i> '+text).show();
                    break;

            }

            if(timeout){
                setTimeout(function(){
                    $this.hideNotification();
                },timeout);
            }


        },

        hideNotification : function(){

            this.$el.find('#alertbottomleft').hide();

        },


        render: function(callback) {

            var $this = this;

            this.dataModel.getData(function(data){

                console.log(data);

                $this.$el.html( $this.template( { data: data } ) );

                var controls = new Controls( data );


                $this.$el.find('.controlsHolder').html( controls.render().$el );

                if(callback){
                    callback();
                }

            });


            return this;
        }

    });

});