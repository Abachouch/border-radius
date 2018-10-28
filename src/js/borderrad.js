var Draggable = require('../../node_modules/draggable');

var data = require('./data.js');

function initUiBorderRaduis() {
    bubble.style.height = bubble.offsetWidth + 'px';
    data.brad.t = Math.ceil((data.topControl.offsetLeft * 100) / data.width);
    data.brad.r = Math.ceil((data.rightControl.offsetTop * 100) / data.width);
    data.brad.b = Math.ceil((data.bottomControl.offsetLeft * 100) / data.width);
    data.brad.l = Math.ceil((data.leftControl.offsetTop * 100) / data.width);

    data.drawBubble();
};



// $(window).resize(function () {
//     $(".bubble").height($(".bubble").width());
//     initControls();
// });


function initControls() {
    data.topControl.style.left = (data.width * data.brad.t / 100) + 'px';
    data.topControl.style.top = '0px';
    //
    data.rightControl.style.top = (data.width * data.brad.r / 100) + 'px';
    data.rightControl.style.right = 0;
    //
    data.bottomControl.style.left = (data.width * data.brad.b / 100) + 'px';
    data.bottomControl.style.bottom = 0;
    //
    data.leftControl.style.top = (data.width * data.brad.l / 100) + 'px';
    data.leftControl.style.left = 0;
}



function addDragable() {
    new Draggable(data.topControl, {
   
        onDrag: function (el, x, y, e) {
            data.brad.t = Math.ceil((x * 100) / data.width);
            data.drawBubble();
            
        },
        limit: {
            x: [0, data.width - 2],
            y: 0
        }
    });
    new Draggable(data.rightControl, {
       
        onDrag: function (el, x, y, e) {
            data.brad.r = Math.ceil((y * 100) / data.width);
            data.drawBubble();
            
        },
        limit: {
            x: data.width - 2,
            y: [0, data.width - 2]
        }
    });
    new Draggable(data.bottomControl, {
  
        onDrag: function (el, x, y, e) {
            data.brad.b = Math.ceil((x * 100) / data.width);
            data.drawBubble();
           
        },
        limit: {
            x: [0, data.width - 2],
            y: data.width - 2
        }
    });
    new Draggable(data.leftControl, {
        onDrag: function (el, x, y, e) {
            data.brad.l = Math.ceil((y * 100) / data.width);
            data.drawBubble();
            
        },
        limit: {
            x: 0,
            y: [0, data.width - 2]
        }
    });
}


initUiBorderRaduis();
addDragable();


// shapes


function uiShape(shape) {
    var simple = document.createElement('DIV');
    simple.classList.add('simple');
    //
    var content = document.createElement('DIV');
    content.classList.add('simple-content');
    content.style.borderRadius = data.getBorderRadisCSS(shape.border);
    //
    var title = document.createElement('H3');
    title.classList.add('simple-title');
    title.innerHTML = shape.title;
    //
    simple.appendChild(content);
    content.addEventListener('click', function () {
        onShapeClick(shape);
    });
    simple.appendChild(title);
    return simple;
}

const onShapeClick = function (shape) {
    data.brad.t = shape.border.t;
    data.brad.r = shape.border.r;
    data.brad.b = shape.border.b;
    data.brad.l = shape.border.l;

    data.drawBubble();
    initControls();
}


function showSimples(type) {
    const wrapper = document.getElementById('simpleContainer');
    const container = document.getElementById('simplesBody');
    container.innerHTML = '';

    if (document.body.parentNode.offsetWidth < 700) {
        if (type === wrapper.dataset.tab) {
            wrapper.dataset.tab = null;
            container.classList.remove('show');
        } else {
            wrapper.dataset.tab = type;
            container.classList.add('show');
        }
    }

    switch (type) {
        case 'colors':

            document.getElementsByClassName('simple-tab')[0].classList.remove('active');
            document.getElementsByClassName('simple-tab')[1].classList.add('active');

            for (var i = 0; i < data.colors.length; i++) {

                container.appendChild(uiColor(data.colors[i]));
            }
            break;

        case 'shapes':

            document.getElementsByClassName('simple-tab')[1].classList.remove('active');
            document.getElementsByClassName('simple-tab')[0].classList.add('active');
            for (var i = 0; i < 8; i++) {
                const el = uiShape(data.shapes[i]);
                el.dataset.index = i;
                container.appendChild(el);
            }
            break;
    }
}


// colors

function uiColor(color) {
    var simple = document.createElement('DIV');
    simple.classList.add('simple');

    var content = document.createElement('DIV');
    content.classList.add('simple-content');
    content.classList.add('color');
    content.style.borderRadius = "50%";
    content.style.background = color.color;
    //
    var title = document.createElement('H3');
    title.classList.add('simple-title');
    title.innerHTML = color.title;
    simple.appendChild(content);
    content.addEventListener('click', function () {
        onColorClick(color);
    });
    simple.appendChild(title);
    return simple;
}


var onColorClick = function (color) {
    bubble.style.background = color.color;
    document.getElementById('bgValue').innerHTML = color.color + ';';
}


showSimples('shapes');

document.getElementById('tabColor').addEventListener('click', function () {
    showSimples('colors');
});
document.getElementById('tabShape').addEventListener('click', function () {
    showSimples('shapes');
});