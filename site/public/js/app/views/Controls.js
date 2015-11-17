define([
    "jquery",
    'backbone',
    'underscore',
    'text!App/templates/Controls.html',
    'App/models/Data'
], function( $, BackBone, _, template, Data ){
    'use strict';

    return Backbone.View.extend({

        className: "",

        template: _.template(template),

        events: {
            'click button.changeHeating' : 'changeHeating'
        },

        initialize: function(data) {

            var $this = this;

            this.data = data;

            this.dataModel = new Data();


        },


        changeHeating : function(event){

            var $this = this;

            var button = $(event.currentTarget);

            button.prop("disabled", true);

            if( button.data('heat') == 'on' ){ // its on, so it must be turned off

                this.dataModel.switchHeating('off',function(){

                    button.addClass('hidden');
                    $this.$el.find('button.changeHeating').not(button).removeClass('hidden');

                    button.prop("disabled", null);
                    //alert('off');

                });

            }else{

                this.dataModel.switchHeating('on',function(){

                    button.addClass('hidden');
                    $this.$el.find('button.changeHeating').not(button).removeClass('hidden');
                    button.prop("disabled", null);
                    //alert('on');

                });

            }

        },


        render: function() {

            var $this = this;


            this.$el.html( this.template(  { data: this.data } ) );

            // set the correct mode

            if( this.data.today.heat.mode == 'auto' ){
                $this.$el.find('.auto').prop("checked", true).parent().addClass('active');
            }else{
                $this.$el.find('.off').prop("checked", true).parent().addClass('active');
            }


            return this;
        }

    });

});