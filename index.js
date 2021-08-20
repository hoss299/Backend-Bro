var rect = require("./rect");

function solveRect(l, b) {
  console.log("Solving for rectangle with l = " + l + " and b = " + b);

  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log("ERROR: ", err.message);
    } else {
      console.log(rectangle.perimeter());
      console.log(rectangle.area());
    }
  });
  console.log("This statement is after the call to rect()");
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);
