var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;

      switch (buttonInnerHTML) {
        case "w":
          var tom1 = new Audio ("sounds/_tom-1.mp3");
          tom1.play();
        break;

        case "a"
          :var tom2 = new Audio ("sounds/_tom-2.mp3");
          tom2.play();
        break;

        case "s"
        :var tom2 = new Audio ("sounds/_tom-2.mp3");
        tom2.play();
        break;

        case "d"
        :var tom2 = new Audio ("sounds/_tom-2.mp3");
        tom2.play();
        break;

        case "j"
        :var tom2 = new Audio ("sounds/_tom-2.mp3");
        tom2.play();
        break;

        case "k"
        :var tom2 = new Audio ("sounds/_tom-2.mp3");
        tom2.play();
        break;

        case "l"
        :var tom2 = new Audio ("sounds/_tom-2.mp3");
        tom2.play();
        break;

        default: console.log(buttonInnerHTML)
        
    }


  });
}




document.addEventListener("keydown", function(event) {});







