var handler = {
    init: function () {
        controller.init();
        var startButton = document.getElementById("startButton");
        startButton.onclick = function(){
            controller.takeoff();
            startButton.setAttribute("disabled", true);
        }
    }
};