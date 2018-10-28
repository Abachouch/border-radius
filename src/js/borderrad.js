import Draggable from '../../node_modules/draggable';

import {
    brad,
    topControl,
    width,
    rightControl,
    bottomControl,
    leftControl,
    colors,
    shapes
} from './data.js';
import { SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER } from 'constants';

function initUiBorderRaduis() {
    bubble.style.height = bubble.offsetWidth + 'px';
    brad.t = Math.ceil((topControl.offsetLeft * 100) / width);
    brad.r = Math.ceil((rightControl.offsetTop * 100) / width);
    brad.b = Math.ceil((bottomControl.offsetLeft * 100) / width);
    brad.l = Math.ceil((leftControl.offsetTop * 100) / width);

    drawBubble();
};


function initControls() {
    var width =  document.getElementById('bubbleWraper').offsetWidth + 2 ;

    

    topControl.style.left = (width * brad.t / 100) + 'px';
    topControl.style.top = '0';
    //
    rightControl.style.top = (width * brad.r / 100) + 'px';
    rightControl.style.left = width-2 +'px';
    //
    bottomControl.style.left = (width * brad.b / 100) + 'px';
    bottomControl.style.top = width-2 +"px";
    //
    leftControl.style.top = (width * brad.l / 100) + 'px';
    leftControl.style.left = '0';
}



function addDragable() {
    var width =  document.getElementById('bubbleWraper').offsetWidth + 2 ;
    new Draggable(topControl, {

        onDrag: function (el, x, y, e) {
            brad.t = Math.ceil((x * 100) / width);
            drawBubble();

        },
        limit: {
            x: [0, width - 2],
            y: 0 
        }
    });
    new Draggable(rightControl, {

        onDrag: function (el, x, y, e) {
            brad.r = Math.ceil((y * 100) / width);
            drawBubble();

        },
        limit: {
            x: width - 2,
            y: [0, width - 2]
        }
    });
    new Draggable(bottomControl, {

        onDrag: function (el, x, y, e) {
            brad.b = Math.ceil((x * 100) / width);
            drawBubble();

        },
        limit: {
            x: [0, width - 2],
            y: width - 2
        }
    });
    new Draggable(leftControl, {
        onDrag: function (el, x, y, e) {
            brad.l = Math.ceil((y * 100) / width);
            drawBubble();

        },
        limit: {
            x: 0,
            y: [0, width - 2]
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
    content.style.borderRadius = getBorderRadisCSS(shape.border);
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
    brad.t = shape.border.t;
    brad.r = shape.border.r;
    brad.b = shape.border.b;
    brad.l = shape.border.l;

    drawBubble();
    initControls();
}


function showSimples(type) {
    const wrapper = document.getElementById('simpleContainer');
    const container = document.getElementById('simplesBody');
    const tabColor = document.getElementById('tabColor');
    const tabShape = document.getElementById('tabShape');
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

            tabShape.classList.remove('active');
            tabColor.classList.add('active');

            for (var i = 0; i < colors.length; i++) {

                container.appendChild(uiColor(colors[i]));
            }
            break;

        case 'shapes':

            tabColor.classList.remove('active');
            tabShape.classList.add('active');
            for (var i = 0; i < 8; i++) {
                const el = uiShape(shapes[i]);
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
    simple.addEventListener('click', function () {
        onColorClick(color);
    });
    simple.addEventListener('mouseenter', function () {
        content.style.borderRadius = getBorderRadisCSS(brad);
    });
    simple.addEventListener('mouseleave', function () {
        content.style.borderRadius = "50%";
    });
    simple.appendChild(title);
    return simple;
}

var onColorClick = function (color) {
    bubble.style.background = color.color;
    document.getElementById('bgValue').innerHTML = color.color + ';';
}


function drawBubble() {
    const cssCode = getBorderRadisCSS(brad);
    bubble.style.borderRadius = cssCode;

    document.getElementById('brValue').innerHTML = cssCode + ';';
};

function getBorderRadisCSS(brad) {
    return brad.t + '%' +
        ' ' + (100 - brad.t) + '%' +
        ' ' + (100 - brad.b) + '%' +
        ' ' + brad.b + '% / ' +
        ' ' + brad.l + '%' +
        ' ' + brad.r + '%' +
        ' ' + (100 - brad.r) + '%' +
        ' ' + (100 - brad.l) + '%';
};

if(document.body.parentNode.offsetWidth > 700) showSimples('shapes');

document.getElementById('tabColor').addEventListener('click', function () {
    showSimples('colors');
});

document.getElementById('tabShape').addEventListener('click', function () {
    showSimples('shapes');
});


window.onresize = function(){
        var widget = document.getElementById('widget');
    bubble.style.height = bubble.offsetWidth + 'px';
    widget.style.height = widget.offsetWidth + 'px';
   
    
    addDragable() ;
    initControls();
    document.getElementById('right').style.right = '0'  ;
}

