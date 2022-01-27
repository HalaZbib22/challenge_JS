
  window.onload = function () {
    pattern = [];
    user = [];
    buttons = document.querySelectorAll(".container .btn");
    console.log("buttons are", buttons);
    header = document.getElementById("title");
    Array.from(buttons).forEach(function (btn) {
      btn.addEventListener("click", Play);
    });

    function startOver() {
      header.innerHTML = "Press Any Key to Start";
      Array.from(buttons).forEach(function (btn) {
        btn.removeEventListener("click", startOver);
      });
      pattern = [];
      user = [];
      var random = Math.floor(Math.random() * 4);
      console.log("random:", random);
      // pattern += random;
      // console.log("pattern:",pattern);
      console.log("buttons:", buttons);
      console.log("buttons element:", buttons[random]);
      pattern += random;
      console.log("pattern:", pattern, "length = ", pattern.length);
      Array.from(buttons).forEach(function (btn) {
        btn.addEventListener("click", Play);
      });
    }

    function Play() {
        user = [];
        console.log("STARTING USER::",user, "AND STARTING LENGTH", user.length)
      Array.from(buttons).forEach(function (btn) {
        btn.removeEventListener("click", Play);
      });

      var random = Math.floor(Math.random() * 4);
      console.log(random);
      // pattern += random;
      // console.log("pattern:",pattern);
    //   console.log("buttons:", buttons);
    //   console.log("buttons element:", buttons[random]);
      pattern += random;
      console.log("pattern:", pattern);

      header.innerHTML = "level" + pattern.length;

      Array.from(buttons).forEach(function (btn) {
        btn.addEventListener("click",Userinput)});
      
    }
      function Userinput(){
        Array.from(buttons).forEach(function (btn) {
            btn.removeEventListener("click",Userinput)});
            userChoice = buttons.onClick.getElement;
            index = Array.from(buttons).indexOf(userChoice);
            console.log("USER BEFORE APPENDING", user);
            user += index;
            console.log("USER :", user,"USER LENGTH :", user.length);

            if (pattern.length === user.length) {
                if (pattern === user){
                console.log("pattern is = ", pattern, "while user is = ", user);
                Play();
            }else{
               console.log("YOU LOST"); }
              } else {
                console.log("CONTINUE!!!!")
                Array.from(buttons).forEach(function (btn) {
                    btn.addEventListener("click",Userinput )});
                Userinput();
              }

        

    }
      

    // var getid = divparent[random].getAttribute('id')
    // var audio = new Audio('red.mp3');

    // console.log("child element:", btns);

    // console.log('parent element to remove child from:', li.parentElement);
    // li.parentNode.removeChild(li);
  };