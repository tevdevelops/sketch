/**
 * Created by tevdevelops on 4/17/17.
 */
var defaultGrid = 16;

function drawGrid(num) {
    var counter = 0;
    $('.container').css('width', num * 20);
    var loops = num * num;
    for (i = 0; i < loops; i++) {
        if (i % num === 0) {
            $("<div class='unit'></div>").appendTo('.container');
        }
        else {
            $("<div class='unit'></div>").appendTo('.container');
        }
        counter ++
    }
    console.log(num);
    console.log(loops);
    console.log(counter);
}
$(document).ready(function () {
   drawGrid(defaultGrid);
});