function init(){
    window.onload = function(){
        controller.init(model.get_fuel());
        controller.init(model.get_altitude());
    }
}