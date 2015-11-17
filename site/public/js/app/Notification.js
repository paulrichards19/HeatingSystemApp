define([
    "jquery",
    'backbone',
    'underscore',
    'App/config'
], function ($, BackBone, _, config) {
    'use strict';

    var showDebug = false;

    function debug(content){
        if(showDebug){
            $("body").append( content );
        }
    };

    document.addEventListener('deviceready', function(){


        var push = PushNotification.init({
            "android": {
                "senderID": config.push.gcm.senderID,
                "iconColor": "#f96900",
                icon: 'notification'
            }
        });

        push.on('registration', function (data) {
            // data.registrationId

            debug('<li>REGISTERED -> REGID:' + data.registrationId + "</li>");

            $.ajax
            ({
                type: "GET",
                url: "http://heating.katy19.com:3001/api/mobile/register",
                //dataType: 'json',
                async: false,
                //username: 'heatingcontrol',
                //password: 'Roastdinner1',
                data: { regid: data.registrationId },
                success: function () {
                    if(showDebug){
                        debug('<li>Registered push id on server</li>');
                    }
                }
            });

        });

        push.on('notification', function (data) {
            // data.message,
            // data.title,
            // data.count,
            // data.sound,
            // data.image,
            // data.additionalData
            debug( JSON.stringify( data ) );
        });

        push.on('error', function (e) {
            // e.message
            debug( JSON.stringify( e ) );
        });


    });


});