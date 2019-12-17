var scores = [11, 22, 33, 44, 55, 66, 77];
var total = 0;
for (var _i = 0, scores_1 = scores; _i < scores_1.length; _i++) {
    var score = scores_1[_i];
    console.log(score);
    total += score;
}
console.log(total);
var mean = total / scores.length;
console.log(mean);
