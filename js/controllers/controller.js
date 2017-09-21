var controller = {
    init: function() {
        view.initial_render(model.get_fuel(), model.get_altitude());
    }
};