var scores = [ 11,22,33,44,55,66,77 ];
var total: number = 0;
for (var score of scores) {
  console.log(score);
  total += score;
}
console.log(total);

var mean = total / scores.length;

console.log(mean);