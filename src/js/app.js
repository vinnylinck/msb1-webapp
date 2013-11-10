/*global asl*/
// Motorola ASL compatibility

// App title
asl.title('Tlantic');

asl.options([
    {
        'title' : 'Menu Option 1',
        'callback' : function () {
            'use strict';
        }
    },
    {
        'title' : 'Menu Option 2',
        'callback' : asl.exit
    },
    {
        'title' : 'Menu Option 3',
        'callback' : asl.exit
    },
    {
        'title' : 'Menu Option 4',
        'callback' : asl.exit
    }
]);
