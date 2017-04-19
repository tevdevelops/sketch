/**
 * Created by tevdevelops on 4/17/17.
 */
var defaultGrid = 16;
var color = '#000000'; /* Default color is black*/
function drawGrid(num) {
    $('.container').css('width', num * 20);
    var loops = num * num;
    for (i = 0; i < loops; i++) {
        if (i % num === 0) {
            $("<div class='unit'></div>").appendTo('.container');
        }
        else {
            $("<div class='unit'></div>").appendTo('.container');
        }
    }
}
function changeColor() {

}

function resetDisplay() {

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

}
$(document).ready(function () {
   sketchpad(defaultGrid);
});