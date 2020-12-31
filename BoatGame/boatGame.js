var moving = false;
var manual = false;
var start = 0;
var moved = 0;
var roll = 0;
var trainn = 0;
var played = 0;
var player = 0;
var test = 0;
var board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var justWon = false;
var tie = randInt(0, 1);
var killsAvail = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
var kills = ["", document.getElementById("killOne"), document.getElementById("killTwo"), document.getElementById("killThree"), document.getElementById("killFour"), document.getElementById("killFive"), document.getElementById("killSix"), document.getElementById("killSeven"), document.getElementById("killEight"), document.getElementById("killNine"), document.getElementById("killTen"), document.getElementById("killEleven"), document.getElementById("killTwelve"), document.getElementById("killThirteen"), document.getElementById("killFourteen"), document.getElementById("killFifteen"), document.getElementById("killSixteen"), document.getElementById("killSeventeen"), document.getElementById("killEighteen"), document.getElementById("killNineteen"), document.getElementById("killTwenty"), document.getElementById("killTwentyone"), document.getElementById("killTwentytwo"), document.getElementById("killTwentythree")];
var players = [{name:"", boats:14, order:"low", playing:false, gone:false}, {name:"", boats:14, order:"high", playing:false, gone:false}];
var hexes = [{name:"", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["none", "none", "none", "none", "none", "none", "none"]}, {name:"hexOne", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexTwo", "hexThree", "hexFour", "none", "none", "none", "none"]}, {name:"hexTwo", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexOne", "hexFour", "hexFive", "none", "none", "none", "none"]}, {name:"hexThree", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexOne", "hexFour", "hexSix", "hexSeven", "none", "none", "none"]}, {name:"hexFour", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:14, going:0, adjacent:["hexOne", "hexTwo", "hexThree", "hexFive", "hexSeven", "hexEight", "none"]}, {name:"hexFive", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexTwo", "hexFour", "hexEight", "hexNine", "none", "none", "none"]}, {name:"hexSix", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexThree", "hexSeven", "hexTen", "hexEleven", "none", "none", "none"]}, {name:"hexSeven", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexThree", "hexFour", "hexSix", "hexEight", "hexEleven", "hexTwelve", "none"]}, {name:"hexEight", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexFour", "hexFive", "hexSeven", "hexNine", "hexTwelve", "hexThirteen", "none"]}, {name:"hexNine", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexFive", "hexEight", "hexThirteen", "hexFourteen", "none", "none", "none"]}, {name:"hexTen", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexSix", "hexEleven", "hexFifteen", "none", "none", "none", "none"]}, {name:"hexEleven", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexSix", "hexSeven", "hexTen", "hexTwelve", "hexFifteen", "hexSixteen", "none"]}, {name:"hexTwelve", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexSeven", "hexEight", "hexEleven", "hexThirteen", "hexSixteen", "hexSeventeen", "none"]}, {name:"hexThirteen", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexEight", "hexNine", "hexTwelve", "hexFourteen", "hexSeventeen", "hexEighteen", "none"]}, {name:"hexFourteen", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexNine", "hexThirteen", "hexEighteen", "none", "none", "none", "none"]}, {name:"hexFifteen", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexTen", "hexEleven", "hexSixteen", "hexNineteen", "none", "none", "none"]}, {name:"hexSixteen", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexEleven", "hexTwelve", "hexFifteen", "hexSeventeen", "hexNineteen", "hexTwenty", "none"]}, {name:"hexSeventeen", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexTwelve", "hexThirteen", "hexSixteen", "hexEighteen", "hexTwenty", "hexTwentyone", "none"]}, {name:"hexEighteen", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexThirteen", "hexFourteen", "hexSeventeen", "hexTwentyone", "none", "none", "none"]}, {name:"hexNineteen", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexFifteen", "hexSixteen", "hexTwenty", "hexTwentytwo", "none", "none", "none"]}, {name:"hexTwenty", useBoats:14, newBoats:{}, home:14, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexSixteen", "hexSeventeen", "hexNineteen", "hexTwentyone", "hexTwentytwo", "hexTwentythree", "none"]}, {name:"hexTwentyone", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexSeventeen", "hexEighteen", "hexTwenty", "hexTwentythree", "none", "none", "none"]}, {name:"hexTwentytwo", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexNineteen", "hexTwenty", "hexTwentythree", "none", "none", "none", "none"]}, {name:"hexTwentythree", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexTwenty", "hexTwentyone", "hexTwentytwo", "none", "none", "none", "none"]}];
arrange();
document.getElementById("done").style.display = "none";

function train(num) {
  manual = false;
  trainn = num;
  if (played < trainn) {
    played += 1;
    startt();
  } else {
    played = 0;
    trainn = 0;
    killsAvail = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  }
}

function cont() {
  if (played < trainn) {
    jsutWon = false;
    played += 1;
    startt();
  } else {
    played = 0;
    trainn = 0;
    killsAvail = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  }
}

function startt() {
  console.log("starting with " + played);
  justWon = false;
  var rand = Math.random();
  if (rand < 0.5) {
    players[0]["name"] = "ai";
    players[1]["name"] = "comp";
    player = 1;
  } else {
    players[0]["name"] = "comp";
    players[1]["name"] = "ai";
    player = 0;
  }
  rolll();
}

function end() {
  players[0]["playing"] = false;
  players[1]["playing"] = false;
  players[0]["gone"] = false;
  players[1]["gone"] = false;
  var e = 1;
  while (e < 24) {
    hexes[e]["newBoats"] = {};
    hexes[e]["fromHome"] = 0;
    hexes[e]["newBoatsFrom"] = 0;
    hexes[e]["going"] = 0;
    if (hexes[e]["useBoats"] > 0) {
      hexes[e]["home"] = hexes[e]["useBoats"];
    } else {
      hexes[e]["home"] = 0;
    }
    e += 1;
  }
  arrange();
  rolll();
}

function kill() {
  var i = 1;
  while (i < 24) {
    if (hexes[i]["useBoats"] > hexes[i]["opBoats"] && hexes[i]["opBoats"] > 0) {
      var ad = hexes[i]["useBoats"] - hexes[i]["opBoats"];
      if (player == 0) {
        if (roll < (7+ad)) {
          kills[i].style.display = "block";
        }
      } else if (player == 1) {
        if (roll > (7-ad)) {
          kills[i].style.display = "block";
        }
      }
    }
    i += 1;
  }
}

function trainKill() {
  var i = 1;
  while (i < 24) {
    if (hexes[i]["useBoats"] > hexes[i]["opBoats"] && hexes[i]["opBoats"] > 0) {
      var ad = hexes[i]["useBoats"] - hexes[i]["opBoats"];
      if (player == 0) {
        if (roll < (7+ad)) {
          killsAvail[i] = true;
        }
      } else if (player == 1) {
        if (roll > (7-ad)) {
          killsAvail[i] = true;
        }
      }
    }
    i += 1;
  }
}

function arrange() {
  var t = 1;
  var m = 0;
  while (t < 24) {
    m = 0;
    while (m < 7) {
      hexes[t]["newBoats"][(hexes[t]["adjacent"][m])] = 0;
      m += 1;
    }
    t += 1;
  }
}

function win(who) {
  moving = false;
  start = 0;
  moved = 0;
  roll = 0;
  player = 0;
  killsAvail = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  tie = randInt(0, 1);
  players = [{name:"", boats:14, order:"low", playing:false, gone:false}, {name:"", boats:14, order:"high", playing:false, gone:false}];
  hexes = [{name:"", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["none", "none", "none", "none", "none", "none", "none"]}, {name:"hexOne", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexTwo", "hexThree", "hexFour", "none", "none", "none", "none"]}, {name:"hexTwo", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexOne", "hexFour", "hexFive", "none", "none", "none", "none"]}, {name:"hexThree", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexOne", "hexFour", "hexSix", "hexSeven", "none", "none", "none"]}, {name:"hexFour", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:14, going:0, adjacent:["hexOne", "hexTwo", "hexThree", "hexFive", "hexSeven", "hexEight", "none"]}, {name:"hexFive", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexTwo", "hexFour", "hexEight", "hexNine", "none", "none", "none"]}, {name:"hexSix", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexThree", "hexSeven", "hexTen", "hexEleven", "none", "none", "none"]}, {name:"hexSeven", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexThree", "hexFour", "hexSix", "hexEight", "hexEleven", "hexTwelve", "none"]}, {name:"hexEight", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexFour", "hexFive", "hexSeven", "hexNine", "hexTwelve", "hexThirteen", "none"]}, {name:"hexNine", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexFive", "hexEight", "hexThirteen", "hexFourteen", "none", "none", "none"]}, {name:"hexTen", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexSix", "hexEleven", "hexFifteen", "none", "none", "none", "none"]}, {name:"hexEleven", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexSix", "hexSeven", "hexTen", "hexTwelve", "hexFifteen", "hexSixteen", "none"]}, {name:"hexTwelve", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexSeven", "hexEight", "hexEleven", "hexThirteen", "hexSixteen", "hexSeventeen", "none"]}, {name:"hexThirteen", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexEight", "hexNine", "hexTwelve", "hexFourteen", "hexSeventeen", "hexEighteen", "none"]}, {name:"hexFourteen", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexNine", "hexThirteen", "hexEighteen", "none", "none", "none", "none"]}, {name:"hexFifteen", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexTen", "hexEleven", "hexSixteen", "hexNineteen", "none", "none", "none"]}, {name:"hexSixteen", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexEleven", "hexTwelve", "hexFifteen", "hexSeventeen", "hexNineteen", "hexTwenty", "none"]}, {name:"hexSeventeen", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexTwelve", "hexThirteen", "hexSixteen", "hexEighteen", "hexTwenty", "hexTwentyone", "none"]}, {name:"hexEighteen", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexThirteen", "hexFourteen", "hexSeventeen", "hexTwentyone", "none", "none", "none"]}, {name:"hexNineteen", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexFifteen", "hexSixteen", "hexTwenty", "hexTwentytwo", "none", "none", "none"]}, {name:"hexTwenty", useBoats:14, newBoats:{}, home:14, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexSixteen", "hexSeventeen", "hexNineteen", "hexTwentyone", "hexTwentytwo", "hexTwentythree", "none"]}, {name:"hexTwentyone", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexSeventeen", "hexEighteen", "hexTwenty", "hexTwentythree", "none", "none", "none"]}, {name:"hexTwentytwo", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexNineteen", "hexTwenty", "hexTwentythree", "none", "none", "none", "none"]}, {name:"hexTwentythree", useBoats:0, newBoats:{}, home:0, fromHome:0, newBoatsFrom:0, opBoats:0, going:0, adjacent:["hexTwenty", "hexTwentyone", "hexTwentytwo", "none", "none", "none", "none"]}];
  arrange();
  document.getElementById("done").style.display = "none";
  if (manual == true) {
    console.log(who + " won");
    //learn
  } else if (manual == false) {
    console.log(who + " won");
    //learn
    cont();
  }
}

function rolll() {
  if (manual == false) {
    test += 1;
    console.log(test);
    if (test > 30) {
      test = 0;
      win("comp");
      justWon = true;
    }
  }
  moved = 0;
  killsAvail = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  roll = randInt(2, 12);
  console.log(roll);
  if (roll == 11 || roll == 12) {
    if (player == 0) {
      if (hexes[20]["opBoats"] > 0 && hexes[20]["useBoats"] == 0) {
        win("ai");
        justWon = true;
      }
    } else if (player == 1) {
      if (hexes[4]["useBoats"] > 0 && hexes[4]["opBoats"] == 0) {
        win("comp");
        justWon = true;
      }
    }
  } else if (roll == 1 || roll == 2) {
    if (player == 0) {
      if (hexes[4]["useBoats"] > 0 && hexes[4]["opBoats"] == 0) {
        win("comp");
        justWon = true;
      }
    } else if (player == 1) {
      if (hexes[20]["opBoats"] > 0 && hexes[20]["useBoats"] == 0) {
        win("ai");
        justWon = true;
      }
    }
  }
  if (manual == true) {
    document.getElementById("roll").innerHTML = "Roll: " + roll;
  }
  if (justWon == false) {
    if (manual == true) {
      kill();
    } else {
      trainKill();
    }
    if (roll < 7) {
      if (players[0]["name"] == "ai") {
        turnEval();
      } else if (players[0]["name"] == "comp" && manual == true) {
        var number = 0;
        number = (function ask() {
          var n = prompt('Who plays first: (0-AI, 1-Comp)');
          return (+n != 0 && +n != 1) ? ask() : n;
        }());
        if (number == 0) {
          placeEval();
        } else if (number == 1) {
          compPlace();
        }
      } else if (players[0]["name"] == "comp" && manual == false) {
        compTurn();
      }
    } else if (roll > 7) {
      if (players[1]["name"] == "ai") {
        turnEval();
      } else if (players[1]["name"] == "comp" && manual == true) {
        var number = 0;
        number = (function ask() {
          var n = prompt('Who plays first: (0-AI, 1-Comp)');
          return (+n != 0 && +n != 1) ? ask() : n;
        }());
        if (number == 0) {
          placeEval();
        } else if (number == 1) {
          compPlace();
        }
      } else if (players[1]["name"] == "comp" && manual == false) {
        compTurn();
      }
    } else if (roll == 7) {
      if (players[tie]["name"] == "ai") {
        turnEval();
      } else if (players[tie]["name"] == "comp" && manual == true) {
        var number = 0;
        number = (function ask() {
          var n = prompt('Who plays first: (0-AI, 1-Comp)');
          return (+n != 0 && +n != 1) ? ask() : n;
        }());
        if (number == 0) {
          placeEval();
        } else if (number == 1) {
          compPlace();
        }
      } else if (players[tie]["name"] == "comp" && manual == false) {
        compTurn();
      }
      if (tie == 0) {
        tie = 1;
      } else {
        tie = 0;
      }
    }
  }
}

function placeEval() {
  if (player == 0) {
    players[1]["playing"] = true;
  } else if (player == 1) {
    players[0]["playing"] = true;
  }
  var first;
  if (players[player]["gone"] == true) {
    first = 1;
  } else {
    first = 0;
  }
  board = [first, roll, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var q = 2;
  while (q < 48) {
    if (q % 2 == 0) {
      board[q] = hexes[(q/2)]["useBoats"];
    } else {
      board[q] = hexes[((q-1)/2)]["opBoats"];
    }
    q += 1;
  }
  console.log(board);
  var move = pythonPlay(board);
  board = move;
  setBoard(board);
  if (player == 0) {
    players[1]["gone"] = true;
    players[1]["playing"] = false;
  } else if (player == 1) {
    players[0]["gone"] = true;
    players[0]["playing"] = false;
  }
  console.log("AI moved");
  if (players[player]["gone"] == true) {
    end();
  } else {
    compPlace();
  }
}

function setBoard(board) {
  var n = 0;
  while (n < 46) {
    if (n % 2 == 0) {
      hexes[(q/2)]["useBoats"] = board[n];
    } else {
      hexes[((q-1)/2)]["opBoats"] = board[n];
    }
    n += 1;
  }
  update();
}

function pythonPlay(board) {
  $.ajax({
    type: "POST",
    url: "~/NeuralNetwork.py",
    data: { param: JSON.stringify(board)}
  }).done(function( o ) {
     //do something
  });
  var next = board; // add python call
  if (legal(next) == true) {
    return next;
  }
}

function legal(board) {
  // check if board is legal
}

function turnEval() {
  board = [2, roll, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var q = 2;
  while (q < 48) {
    if (q % 2 == 0) {
      board[q] = hexes[(q/2)]["useBoats"];
    } else {
      board[q] = hexes[((q-1)/2)]["opBoats"];
    }
    q += 1;
  }
  console.log(board);
  if (python(board) == 0) {
    placeEval();
  } else {
    compPlace();
  }
}

// $.ajax({
//   type: "POST",
//   url: "~/NeuralNetwork.py",
//   data: { param: text}
// }).done(function( o ) {
//    // do something
// });

function python(board) {
  var rr = Math.random(); // put in python call
  if (rr < 0) {
    return 0;
  } else {
    return 1;
  }
}

function compTurn() {
  var rr = Math.random();
  if (rr < 0.5) {
    compPlace();
  } else {
    placeEval();
  }
}

function compPlace() {
  if (manual == true) {
    document.getElementById("done").style.display = "block";
  }
  players[player]["playing"] = true;
  if (manual == false) {
    console.log("trainer moved");
    // add trainer
    players[player]["playing"] = false;
    players[player]["gone"] = true;
    if (player == 0) {
      if (players[1]["gone"] == true) {
        end();
      } else {
        placeEval();
      }
    } else if (player == 1) {
      if (players[0]["gone"] == true) {
        end();
      } else {
        placeEval();
      }
    }
  }
}

function randInt(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function transfer(from, to) {
  console.log(from + " " + to);
  var fromm = hexes[from]["name"];
  var trap = false;
  rest();
  moving = false;
  start = 0;
  if (hexes[from]["useBoats"] > 0 && (hexes[from]["home"] > 0 || (hexes[from]["home"] == 0 && (hexes[from]["going"] == to || hexes[from]["going"] == 0)))) {
    if (hexes[from]["opBoats"] > hexes[from]["useBoats"]) {
      trap = true;
    }
    hexes[from]["going"] = to;
    if (hexes[from]["home"] > 0) {
      var number = 0;
      number = (function ask() {
        var n = prompt('Enter how many boats to transfer:');
        return (moved + (+n)) > roll || isNaN(n) || +n > (hexes[from]["useBoats"]) || +n < (0) || (hexes[from]["fromHome"] + (+n)) > (hexes[from]["home"]) ? ask() : n;
      }());
      hexes[from]["fromHome"] += number;
      moved += JSON.parse(number);
    } else if (hexes[from]["home"] == 0 || (hexes[from]["home"] == hexes[from]["fromHome"] && hexes[from]["newBoatsFrom"] > 0)) {
      var number = 0;
      number = (function ask() {
        var n = prompt('Enter how many boats to transfer:');
        console.log(((hexes[from]["newBoatsFrom"] - (+n)) <= (hexes[to]["newBoats"][fromm] + (+n))));
        console.log(((hexes[from]["newBoatsFrom"] - (+n))));
        console.log((hexes[to]["newBoats"][fromm] + (+n)));
        return isNaN(n) || +n > (hexes[from]["useBoats"]) || +n < (0) || (((hexes[from]["newBoatsFrom"] - (+n)) <= (hexes[to]["newBoats"][fromm] + (+n))) && ((hexes[from]["newBoatsFrom"] - (+n)) <= (hexes[to]["useBoats"] + (+n)))) ? ask() : n;
      }());
    }
    number = JSON.parse(number);
    hexes[from]["useBoats"] -= number;
    hexes[from]["newBoatsFrom"] -= number;
    hexes[to]["useBoats"] += number;
    hexes[to]["newBoats"][fromm] += number;
    hexes[to]["newBoatsFrom"] += number;
    if (trap == true) {
      if (hexes[from]["useBoats"] > 0) {
        hexes[from]["useBoats"] -= 1;
      } else {
        hexes[to]["useBoats"] -= 1;
      }
      trap = false;
    }
    update();
  } else {
    rest();
    moving = false;
    start = 0;
  }
}

function update() {
  document.getElementById("hexOneUse").innerHTML = hexes[1]["useBoats"];
  document.getElementById("hexTwoUse").innerHTML = hexes[2]["useBoats"];
  document.getElementById("hexThreeUse").innerHTML = hexes[3]["useBoats"];
  document.getElementById("hexFourUse").innerHTML = hexes[4]["useBoats"];
  document.getElementById("hexFiveUse").innerHTML = hexes[5]["useBoats"];
  document.getElementById("hexSixUse").innerHTML = hexes[6]["useBoats"];
  document.getElementById("hexSevenUse").innerHTML = hexes[7]["useBoats"];
  document.getElementById("hexEightUse").innerHTML = hexes[8]["useBoats"];
  document.getElementById("hexNineUse").innerHTML = hexes[9]["useBoats"];
  document.getElementById("hexTenUse").innerHTML = hexes[10]["useBoats"];
  document.getElementById("hexElevenUse").innerHTML = hexes[11]["useBoats"];
  document.getElementById("hexTwelveUse").innerHTML = hexes[12]["useBoats"];
  document.getElementById("hexThirteenUse").innerHTML = hexes[13]["useBoats"];
  document.getElementById("hexFourteenUse").innerHTML = hexes[14]["useBoats"];
  document.getElementById("hexFifteenUse").innerHTML = hexes[15]["useBoats"];
  document.getElementById("hexSixteenUse").innerHTML = hexes[16]["useBoats"];
  document.getElementById("hexSeventeenUse").innerHTML = hexes[17]["useBoats"];
  document.getElementById("hexEighteenUse").innerHTML = hexes[18]["useBoats"];
  document.getElementById("hexNineteenUse").innerHTML = hexes[19]["useBoats"];
  document.getElementById("hexTwentyUse").innerHTML = hexes[20]["useBoats"];
  document.getElementById("hexTwentyoneUse").innerHTML = hexes[21]["useBoats"];
  document.getElementById("hexTwentytwoUse").innerHTML = hexes[22]["useBoats"];
  document.getElementById("hexTwentythreeUse").innerHTML = hexes[23]["useBoats"];
  document.getElementById("hexOneOp").innerHTML = hexes[1]["opBoats"];
  document.getElementById("hexTwoOp").innerHTML = hexes[2]["opBoats"];
  document.getElementById("hexThreeOp").innerHTML = hexes[3]["opBoats"];
  document.getElementById("hexFourOp").innerHTML = hexes[4]["opBoats"];
  document.getElementById("hexFiveOp").innerHTML = hexes[5]["opBoats"];
  document.getElementById("hexSixOp").innerHTML = hexes[6]["opBoats"];
  document.getElementById("hexSevenOp").innerHTML = hexes[7]["opBoats"];
  document.getElementById("hexEightOp").innerHTML = hexes[8]["opBoats"];
  document.getElementById("hexNineOp").innerHTML = hexes[9]["opBoats"];
  document.getElementById("hexTenOp").innerHTML = hexes[10]["opBoats"];
  document.getElementById("hexElevenOp").innerHTML = hexes[11]["opBoats"];
  document.getElementById("hexTwelveOp").innerHTML = hexes[12]["opBoats"];
  document.getElementById("hexThirteenOp").innerHTML = hexes[13]["opBoats"];
  document.getElementById("hexFourteenOp").innerHTML = hexes[14]["opBoats"];
  document.getElementById("hexFifteenOp").innerHTML = hexes[15]["opBoats"];
  document.getElementById("hexSixteenOp").innerHTML = hexes[16]["opBoats"];
  document.getElementById("hexSeventeenOp").innerHTML = hexes[17]["opBoats"];
  document.getElementById("hexEighteenOp").innerHTML = hexes[18]["opBoats"];
  document.getElementById("hexNineteenOp").innerHTML = hexes[19]["opBoats"];
  document.getElementById("hexTwentyOp").innerHTML = hexes[20]["opBoats"];
  document.getElementById("hexTwentyoneOp").innerHTML = hexes[21]["opBoats"];
  document.getElementById("hexTwentytwoOp").innerHTML = hexes[22]["opBoats"];
  document.getElementById("hexTwentythreeOp").innerHTML = hexes[23]["opBoats"];
  reset();
}

function reset() {
	var elements = document.getElementsByClassName('hexLink'); // get all elements
	for(var i = 0; i < elements.length; i++){
		elements[i].style.background = "blue";
	}
  document.getElementById("hexFour").style.background = "red";
  document.getElementById("hexTwenty").style.background = "red";
}

var f = 1;
while (f < 24) {
  kills[f].onclick = killer, this.id;
  f += 1;
}

function killer(id) {
  if (manual == true) {
    var iid = id.srcElement.id;
    document.getElementById(iid).style.display = "none";
    var l = 0;
    var p = 1;
    while (p < 24) {
      if (kills[p].id == iid) {
        l = p;
      }
      p += 1;
    }
    if ((moved+3) <= roll) {
      moved += 3;
      hexes[l]["opBoats"] -= 1;
      if (player == 0) {
        players[1]["boats"] -= 1;
      } else if (player == 1) {
        players[0]["boats"] -= 1;
      }
      setTimeout(update, 10);
    }
  }
}

document.getElementById("done").addEventListener("click", function() {
  if (manual == true) {
    console.log("done");
    document.getElementById("done").style.display = "none";
    players[player]["playing"] = false;
    players[player]["gone"] = true;
    if (player == 0) {
      if (players[1]["gone"] == true) {
        end();
      } else {
        placeEval();
      }
    } else if (player == 1) {
      if (players[0]["gone"] == true) {
        end();
      } else {
        placeEval();
      }
    }
  }
});

document.getElementById("hexOne").addEventListener("click", function() {
  if (manual == true) {
    if (moving == false && players[player]["playing"] == true) {
      rest();
      document.getElementById("hexOne").style.background = "#add8e6";
      moving = true;
      start = 1;
    } else if (moving == true) {
      var i = 0;
      var valid = false;
      while (i < 7 && valid == false) {
        if (hexes[start]["adjacent"][i] == "hexOne") {
          valid = true;
        }
        i += 1;
      }
      if (valid == true) {
        transfer(start, 1);
      } else {
        rest();
        moving = false;
        start = 0;
      }
    }
  }
});

document.getElementById("hexTwo").addEventListener("click", function() {
  if (manual == true) {
    if (moving == false && players[player]["playing"] == true) {
      rest();
      document.getElementById("hexTwo").style.background = "#add8e6";
      moving = true;
      start = 2;
    } else if (moving == true) {
      var i = 0;
      var valid = false;
      while (i < 7 && valid == false) {
        if (hexes[start]["adjacent"][i] == "hexTwo") {
          valid = true;
        }
        i += 1;
      }
      if (valid == true) {
        transfer(start, 2);
      } else {
        rest();
        moving = false;
        start = 0;
      }
    }
  }
});

document.getElementById("hexThree").addEventListener("click", function() {
  if (manual == true) {
    if (moving == false && players[player]["playing"] == true) {
      rest();
      document.getElementById("hexThree").style.background = "#add8e6";
      moving = true;
      start = 3;
    } else if (moving == true) {
      var i = 0;
      var valid = false;
      while (i < 7 && valid == false) {
        if (hexes[start]["adjacent"][i] == "hexThree") {
          valid = true;
        }
        i += 1;
      }
      if (valid == true) {
        transfer(start, 3);
      } else {
        rest();
        moving = false;
        start = 0;
      }
    }
  }
});

document.getElementById("hexFour").addEventListener("click", function() {
  if (manual == true) {
    if (moving == false && players[player]["playing"] == true) {
      rest();
      document.getElementById("hexFour").style.background = "#ffcccb";
      moving = true;
      start = 4;
    } else if (moving == true) {
      var i = 0;
      var valid = false;
      while (i < 7 && valid == false) {
        if (hexes[start]["adjacent"][i] == "hexFour") {
          valid = true;
        }
        i += 1;
      }
      if (valid == true) {
        transfer(start, 4);
      } else {
        rest();
        moving = false;
        start = 0;
      }
    }
  }
});

document.getElementById("hexFive").addEventListener("click", function() {
  if (manual == true) {
    if (moving == false && players[player]["playing"] == true) {
      rest();
      document.getElementById("hexFive").style.background = "#add8e6";
      moving = true;
      start = 5;
    } else if (moving == true) {
      var i = 0;
      var valid = false;
      while (i < 7 && valid == false) {
        if (hexes[start]["adjacent"][i] == "hexFive") {
          valid = true;
        }
        i += 1;
      }
      if (valid == true) {
        transfer(start, 5);
      } else {
        rest();
        moving = false;
        start = 0;
      }
    }
  }
});

document.getElementById("hexSix").addEventListener("click", function() {
  if (manual == true) {
    if (moving == false && players[player]["playing"] == true) {
      rest();
      document.getElementById("hexSix").style.background = "#add8e6";
      moving = true;
      start = 6;
    } else if (moving == true) {
      var i = 0;
      var valid = false;
      while (i < 7 && valid == false) {
        if (hexes[start]["adjacent"][i] == "hexSix") {
          valid = true;
        }
        i += 1;
      }
      if (valid == true) {
        transfer(start, 6);
      } else {
        rest();
        moving = false;
        start = 0;
      }
    }
  }
});

document.getElementById("hexSeven").addEventListener("click", function() {
  if (manual == true) {
    if (moving == false && players[player]["playing"] == true) {
      rest();
      document.getElementById("hexSeven").style.background = "#add8e6";
      moving = true;
      start = 7;
    } else if (moving == true) {
      var i = 0;
      var valid = false;
      while (i < 7 && valid == false) {
        if (hexes[start]["adjacent"][i] == "hexSeven") {
          valid = true;
        }
        i += 1;
      }
      if (valid == true) {
        transfer(start, 7);
      } else {
        rest();
        moving = false;
        start = 0;
      }
    }
  }
});

document.getElementById("hexEight").addEventListener("click", function() {
  if (manual == true) {
    if (moving == false && players[player]["playing"] == true) {
      rest();
      document.getElementById("hexEight").style.background = "#add8e6";
      moving = true;
      start = 8;
    } else if (moving == true) {
      var i = 0;
      var valid = false;
      while (i < 7 && valid == false) {
        if (hexes[start]["adjacent"][i] == "hexEight") {
          valid = true;
        }
        i += 1;
      }
      if (valid == true) {
        transfer(start, 8);
      } else {
        rest();
        moving = false;
        start = 0;
      }
    }
  }
});

document.getElementById("hexNine").addEventListener("click", function() {
  if (manual == true) {
    if (moving == false && players[player]["playing"] == true) {
      rest();
      document.getElementById("hexNine").style.background = "#add8e6";
      moving = true;
      start = 9;
    } else if (moving == true) {
      var i = 0;
      var valid = false;
      while (i < 7 && valid == false) {
        if (hexes[start]["adjacent"][i] == "hexNine") {
          valid = true;
        }
        i += 1;
      }
      if (valid == true) {
        transfer(start, 9);
      } else {
        rest();
        moving = false;
        start = 0;
      }
    }
  }
});

document.getElementById("hexTen").addEventListener("click", function() {
  if (manual == true) {
    if (moving == false && players[player]["playing"] == true) {
      rest();
      document.getElementById("hexTen").style.background = "#add8e6";
      moving = true;
      start = 10;
    } else if (moving == true) {
      var i = 0;
      var valid = false;
      while (i < 7 && valid == false) {
        if (hexes[start]["adjacent"][i] == "hexTen") {
          valid = true;
        }
        i += 1;
      }
      if (valid == true) {
        transfer(start, 10);
      } else {
        rest();
        moving = false;
        start = 0;
      }
    }
  }
});

document.getElementById("hexEleven").addEventListener("click", function() {
  if (manual == true) {
    if (moving == false && players[player]["playing"] == true) {
      rest();
      document.getElementById("hexEleven").style.background = "#add8e6";
      moving = true;
      start = 11;
    } else if (moving == true) {
      var i = 0;
      var valid = false;
      while (i < 7 && valid == false) {
        if (hexes[start]["adjacent"][i] == "hexEleven") {
          valid = true;
        }
        i += 1;
      }
      if (valid == true) {
        transfer(start, 11);
      } else {
        rest();
        moving = false;
        start = 0;
      }
    }
  }
});

document.getElementById("hexTwelve").addEventListener("click", function() {
  if (manual == true) {
    if (moving == false && players[player]["playing"] == true) {
      rest();
      document.getElementById("hexTwelve").style.background = "#add8e6";
      moving = true;
      start = 12;
    } else if (moving == true) {
      var i = 0;
      var valid = false;
      while (i < 7 && valid == false) {
        if (hexes[start]["adjacent"][i] == "hexTwelve") {
          valid = true;
        }
        i += 1;
      }
      if (valid == true) {
        transfer(start, 12);
      } else {
        rest();
        moving = false;
        start = 0;
      }
    }
  }
});

document.getElementById("hexThirteen").addEventListener("click", function() {
  if (manual == true) {
    if (moving == false && players[player]["playing"] == true) {
      rest();
      document.getElementById("hexThirteen").style.background = "#add8e6";
      moving = true;
      start = 13;
    } else if (moving == true) {
      var i = 0;
      var valid = false;
      while (i < 7 && valid == false) {
        if (hexes[start]["adjacent"][i] == "hexThirteen") {
          valid = true;
        }
        i += 1;
      }
      if (valid == true) {
        transfer(start, 13);
      } else {
        rest();
        moving = false;
        start = 0;
      }
    }
  }
});

document.getElementById("hexFourteen").addEventListener("click", function() {
  if (manual == true) {
    if (moving == false && players[player]["playing"] == true) {
      rest();
      document.getElementById("hexFourteen").style.background = "#add8e6";
      moving = true;
      start = 14;
    } else if (moving == true) {
      var i = 0;
      var valid = false;
      while (i < 7 && valid == false) {
        if (hexes[start]["adjacent"][i] == "hexFourteen") {
          valid = true;
        }
        i += 1;
      }
      if (valid == true) {
        transfer(start, 14);
      } else {
        rest();
        moving = false;
        start = 0;
      }
    }
  }
});

document.getElementById("hexFifteen").addEventListener("click", function() {
  if (manual == true) {
    if (moving == false && players[player]["playing"] == true) {
      rest();
      document.getElementById("hexFifteen").style.background = "#add8e6";
      moving = true;
      start = 15;
    } else if (moving == true) {
      var i = 0;
      var valid = false;
      while (i < 7 && valid == false) {
        if (hexes[start]["adjacent"][i] == "hexFifteen") {
          valid = true;
        }
        i += 1;
      }
      if (valid == true) {
        transfer(start, 15);
      } else {
        rest();
        moving = false;
        start = 0;
      }
    }
  }
});

document.getElementById("hexSixteen").addEventListener("click", function() {
  if (manual == true) {
    if (moving == false && players[player]["playing"] == true) {
      rest();
      document.getElementById("hexSixteen").style.background = "#add8e6";
      moving = true;
      start = 16;
    } else if (moving == true) {
      var i = 0;
      var valid = false;
      while (i < 7 && valid == false) {
        if (hexes[start]["adjacent"][i] == "hexSixteen") {
          valid = true;
        }
        i += 1;
      }
      if (valid == true) {
        transfer(start, 16);
      } else {
        rest();
        moving = false;
        start = 0;
      }
    }
  }
});

document.getElementById("hexSeventeen").addEventListener("click", function() {
  if (manual == true) {
    if (moving == false && players[player]["playing"] == true) {
      rest();
      document.getElementById("hexSeventeen").style.background = "#add8e6";
      moving = true;
      start = 17;
    } else if (moving == true) {
      var i = 0;
      var valid = false;
      while (i < 7 && valid == false) {
        if (hexes[start]["adjacent"][i] == "hexSeventeen") {
          valid = true;
        }
        i += 1;
      }
      if (valid == true) {
        transfer(start, 17);
      } else {
        rest();
        moving = false;
        start = 0;
      }
    }
  }
});

document.getElementById("hexEighteen").addEventListener("click", function() {
  if (manual == true) {
    if (moving == false && players[player]["playing"] == true) {
      rest();
      document.getElementById("hexEighteen").style.background = "#add8e6";
      moving = true;
      start = 18;
    } else if (moving == true) {
      var i = 0;
      var valid = false;
      while (i < 7 && valid == false) {
        if (hexes[start]["adjacent"][i] == "hexEighteen") {
          valid = true;
        }
        i += 1;
      }
      if (valid == true) {
        transfer(start, 18);
      } else {
        rest();
        moving = false;
        start = 0;
      }
    }
  }
});

document.getElementById("hexNineteen").addEventListener("click", function() {
  if (manual == true) {
    if (moving == false && players[player]["playing"] == true) {
      rest();
      document.getElementById("hexNineteen").style.background = "#add8e6";
      moving = true;
      start = 19;
    } else if (moving == true) {
      var i = 0;
      var valid = false;
      while (i < 7 && valid == false) {
        if (hexes[start]["adjacent"][i] == "hexNineteen") {
          valid = true;
        }
        i += 1;
      }
      if (valid == true) {
        transfer(start, 19);
      } else {
        rest();
        moving = false;
        start = 0;
      }
    }
  }
});

document.getElementById("hexTwenty").addEventListener("click", function() {
  if (manual == true) {
    if (moving == false && players[player]["playing"] == true) {
      rest();
      document.getElementById("hexTwenty").style.background = "#ffcccb";
      moving = true;
      start = 20;
    } else if (moving == true) {
      var i = 0;
      var valid = false;
      while (i < 7 && valid == false) {
        if (hexes[start]["adjacent"][i] == "hexTwenty") {
          valid = true;
        }
        i += 1;
      }
      if (valid == true) {
        transfer(start, 20);
      } else {
        rest();
        moving = false;
        start = 0;
      }
    }
  }
});

document.getElementById("hexTwentyone").addEventListener("click", function() {
  if (manual == true) {
    if (moving == false && players[player]["playing"] == true) {
      rest();
      document.getElementById("hexTwentyone").style.background = "#add8e6";
      moving = true;
      start = 21;
    } else if (moving == true) {
      var i = 0;
      var valid = false;
      while (i < 7 && valid == false) {
        if (hexes[start]["adjacent"][i] == "hexTwentyone") {
          valid = true;
        }
        i += 1;
      }
      if (valid == true) {
        transfer(start, 21);
      } else {
        rest();
        moving = false;
        start = 0;
      }
    }
  }
});

document.getElementById("hexTwentytwo").addEventListener("click", function() {
  if (manual == true) {
    if (moving == false && players[player]["playing"] == true) {
      rest();
      document.getElementById("hexTwentytwo").style.background = "#add8e6";
      moving = true;
      start = 22;
    } else if (moving == true) {
      var i = 0;
      var valid = false;
      while (i < 7 && valid == false) {
        if (hexes[start]["adjacent"][i] == "hexTwentytwo") {
          valid = true;
        }
        i += 1;
      }
      if (valid == true) {
        transfer(start, 22);
      } else {
        rest();
        moving = false;
        start = 0;
      }
    }
  }
});

document.getElementById("hexTwentythree").addEventListener("click", function() {
  if (manual == true) {
    if (moving == false && players[player]["playing"] == true) {
      rest();
      document.getElementById("hexTwentythree").style.background = "#add8e6";
      moving = true;
      start = 23;
    } else if (moving == true) {
      var i = 0;
      var valid = false;
      while (i < 7 && valid == false) {
        if (hexes[start]["adjacent"][i] == "hexTwentythree") {
          valid = true;
        }
        i += 1;
      }
      if (valid == true) {
        transfer(start, 23);
      } else {
        rest();
        moving = false;
        start = 0;
      }
    }
  }
});

function rest() {
  document.getElementById("hexTwentythree").style.background = "blue";
  document.getElementById("hexTwentytwo").style.background = "blue";
  document.getElementById("hexTwentyone").style.background = "blue";
  document.getElementById("hexTwenty").style.background = "red";
  document.getElementById("hexNineteen").style.background = "blue";
  document.getElementById("hexEighteen").style.background = "blue";
  document.getElementById("hexSeventeen").style.background = "blue";
  document.getElementById("hexSixteen").style.background = "blue";
  document.getElementById("hexFifteen").style.background = "blue";
  document.getElementById("hexFourteen").style.background = "blue";
  document.getElementById("hexThirteen").style.background = "blue";
  document.getElementById("hexTwelve").style.background = "blue";
  document.getElementById("hexEleven").style.background = "blue";
  document.getElementById("hexTen").style.background = "blue";
  document.getElementById("hexNine").style.background = "blue";
  document.getElementById("hexEight").style.background = "blue";
  document.getElementById("hexSeven").style.background = "blue";
  document.getElementById("hexSix").style.background = "blue";
  document.getElementById("hexFive").style.background = "blue";
  document.getElementById("hexFour").style.background = "red";
  document.getElementById("hexThree").style.background = "blue";
  document.getElementById("hexTwo").style.background = "blue";
  document.getElementById("hexOne").style.background = "blue";
}
