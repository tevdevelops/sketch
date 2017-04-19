/**
 * Created by tevdevelops on 4/17/17.
 */
var defaultGrid = 16;
var color = '#000000'; /* Default color is black*/
function drawGrid(num) {
    $('.unit').css({'width': 500 / num, 'height': 500 / num});
    var loops = num * num;
    for (i = 0; i < loops; i++) {
        if (i % num === 0) {
            $("<div class='unit'></div>").appendTo('.container');
        }
        else {
            $("<div class='unit'></div>").appendTo('.container');
        }
    }
    $('.unit').css({'width': 500 / num, 'height': 500 / num});
}
function changeColor() {
    var letters = '0123456789ABCDEF';
    var colour = '#';
    for (var i = 0; i < 6; i++ ) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    color = colour;
}

function resetDisplay() {
    $('.unit').css('background-color', '#DEB887');
}

function changeGrid() {
    $('.container').empty();
    var gridSize = 0;
    while (gridSize < 1 || gridSize > 100) {
        gridSize = prompt("Select a grid size between 1 - 100: ");
    }
    sketchpad(gridSize);

}
function sketchpad(num) {
    drawGrid(num);
    $('.unit').mouseenter(function(){
        $(this).css('background-color', color);
    });
    $('.unit').mouseleave(function () {
        changeColor()
    });

}
$(document).ready(function () {
   sketchpad(defaultGrid);
});