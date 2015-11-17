require.config({
    baseUrl: 'js/',
    paths: {

        almond:         'lib/almond',
        jquery:         'lib/jquery-1.11.2.min',
        backbone:       'lib/backbone-min',
        underscore:     'lib/underscore-min',
        domReady:       'lib/domReady',
        text:           'lib/text',

        bootstrap:      'lib/bootstrap.min',

        Main:           'main',
        requireLib:     'lib/require'

    },

    shim : {
        "backbone"      : {
            deps : ["jquery", "underscore"]
        },

        "bootstrap" : { "deps" : ['jquery'] }
    },
    deps: ['bootstrap', 'app/App']

});