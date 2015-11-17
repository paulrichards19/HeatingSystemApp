define([
    "jquery",
    'backbone',
    'underscore'
], function( $, BackBone, _ ){
    'use strict';

    var server_url = "http://heating.katy19.com:3001/api/";

    return {

        server : {
            username : 'heatingcontrol',
            password : 'Roastdinner1',
            mobile_register : server_url + "mobile/register/",
            change_mode : server_url + "mode/",
            change_heat : server_url + "heat/"
        },

        push : {
            gcm : {
                senderID : '731223289944'
            }
        }

    };

});