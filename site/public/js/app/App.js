define([
    "jquery",
    'backbone',
    'underscore',
    'App/views/TopBar',
    'App/views/Container',
    'App/Notification',
    'App/config',
    'domReady!'
], function( $, BackBone, _, TopBarView, ContainerView, Notification, config ){
    'use strict';

    // including notification will add the event handlers

    var container = new ContainerView();


    $('body').append( container.render().$el );

    var topbar = new TopBarView();
    $('body').append( topbar.render().$el );


});