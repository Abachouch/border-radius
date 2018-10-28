module.exports = {

    width: document.getElementById('bubbleWraper').offsetWidth + 2,

    shapes: [{
            'title': 'circle',
            'border': {
                't': 50,
                'r': 50,
                'b': 50,
                'l': 50
            }
        },
        {
            'title': 'squar',
            'border': {
                't': 100,
                'r': 100,
                'b': 0,
                'l': 0
            }
        },
        {
            'title': 'ball',
            'border': {
                't': 100,
                'r': 0,
                'b': 0,
                'l': 100
            }
        },
        {
            'title': 'leaf',
            'border': {
                't': 100,
                'r': 0,
                'b': 0,
                'l': 70
            }
        },
        {
            'title': 'pizza',
            'border': {
                't': 100,
                'r': 0,
                'b': 100,
                'l': 0
            }
        },
        {
            'title': 'egg',
            'border': {
                't': 25,
                'r': 50,
                'b': 50,
                'l': 25
            }
        },
        {
            'title': '!!!',
            'border': {
                't': 28,
                'r': 35,
                'b': 30,
                'l': 50
            }
        },
        {
            'title': '!!',
            'border': {
                't': 80,
                'r': 80,
                'b': 20,
                'l': 20
            }
        }
    ],

    //const colors : ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#1548FF', '#a25369', '#0e242F', '#8750FF', '#123456', '#ae25a5', '#145487', '#954753'];
    colors: [{
            'title': 'solid',
            'color': " #cf7a35"
        },
        {
            'title': 'solid',
            'color': " #e06262"
        },
        {
            'title': 'solid ',
            'color': "#d6a334 "
        },
        {
            'title': 'solid',
            'color': "#eaff30"
        },
        {
            'title': 'solid',
            'color': "#23aa4c"
        },
        {
            'title': 'solid',
            'color': "#38dbd3"
        },
        {
            'title': 'solid',
            'color': "#9bcc84"
        },
        {
            'title': 'solid ',
            'color': "#3892db "
        },
        {
            'title': 'solid',
            'color': "#ac3c3c"
        },


        {
            'title': 'radial',
            'color': " radial-gradient(at top left, rgb(144, 150, 238), rgb(0, 23, 100))"
        },
        {
            'title': 'radial',
            'color': " radial-gradient(at top left, rgb(235, 144, 238), rgb(100, 0, 87))"
        },
        {
            'title': 'radial',
            'color': " radial-gradient(at top left, rgb(238, 200, 144), rgb(100, 77, 0)) "
        },
        {
            'title': 'radial',
            'color': " radial-gradient(at top left, rgb(238, 144, 144), rgb(100, 0, 0)) "
        },
        {
            'title': 'radial',
            'color': " radial-gradient(at top left, rgb(255, 0, 200), rgb(3, 100, 245))  "
        },
        {
            'title': 'radial',
            'color': "radial-gradient(at top left, rgb(218, 238, 144), darkgreen) "
        },
        {
            'title': 'radial',
            'color': " radial-gradient(at top left, rgb(238, 186, 144), rgb(27, 0, 100))  "
        },

    ],

    brad: {
        't': 10,
        'r': 20,
        'b': 30,
        'l': 40
    },


    // 
    topControl: document.getElementById('top'),
    rightControl: document.getElementById('right'),
    bottomControl: document.getElementById('bottom'),
    leftControl: document.getElementById('left'), 
    bubble: document.getElementById('bubble'),

}