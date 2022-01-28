window.onload = function () {
  pattern = [];
  checker = [];
  audio = document.createElement("audio");
  header = document.getElementById("title");
  $(document).keydown(Play);

  function PlayAudio(a) {
    audio.setAttribute("src", "sounds/" + a + ".mp3");
    audio.play();
  }

  function StartOver() {
    pattern = [];
    checker = [];
    header.textContent = "Press Any Key to Start";
    Play();
  }

  function Play() {

    $(document).off("keydown");
    var random = Math.floor(Math.random() * 4);
    pattern += random;
    checker = [...pattern];
    console.log("pattern:", pattern, "length = ", pattern.length);
    header.textContent = "level" + pattern.length;

    LastElement = pattern.slice(-1)[0];
    console.log("LAST ELEMENT::::",LastElement);

    if (LastElement == 0) {
      $("#green").fadeOut(210).fadeIn(210);
      PlayAudio("green");
    } else if (LastElement == 1) {
      $("#red").fadeOut(210).fadeIn(210);
      PlayAudio("red");
    } else if (LastElement == 2) {
      $("#yellow").fadeOut(210).fadeIn(210);
      PlayAudio("yellow");
    } else if (LastElement == 3) {
      $("#blue").fadeOut(210).fadeIn(210);
      PlayAudio("blue");
    }

    $("#red").click(function () {
      $("#red").addClass("pressed");
      setTimeout(function () {
        $("#red").removeClass("pressed");
      }, 120);
      PlayAudio("red");
      userInput(1);
    });
    $("#green").click(function () {
      $("#green").addClass("pressed");
      setTimeout(function () {
        $("#green").removeClass("pressed");
      }, 120);
      PlayAudio("green");
      userInput(0);
    });
    $("#yellow").click(function () {
      $("#yellow").addClass("pressed");
      setTimeout(function () {
        $("#yellow").removeClass("pressed");
      }, 120);
      PlayAudio("yellow");
      userInput(2);
    });
    $("#blue").click(function () {
      $("#blue").addClass("pressed");
      setTimeout(function () {
        $("#blue").removeClass("pressed");
      }, 120);
      PlayAudio("blue");
      userInput(3);
    });
  }
  function userInput(i) {
    console.log(checker);

    if (checker[0] != i) {
      return End();
    } else if (checker[0] == i) {
      console.log(checker);
      checker.shift();
      console.log(checker);
    }

    if (checker.length == 0) {
      return setTimeout(function () {
        $("#green").off();
        $("#red").off();
        $("#yellow").off();
        $("#blue").off();
        Play();
      }, 1000);
    }
  }
  function End() {
    console.log("Game OVER!");
    setTimeout(PlayAudio("wrong"), 210);

    $("#title").text("Game over, Press Any Key to Restart");

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 210);

    $(document).keydown(StartOver);
  }
};
