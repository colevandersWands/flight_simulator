var controller = {
    init: function () {
        view.initial_render(model.get_fuel(), model.get_altitude());
    },

    takeoff: function () {
        model.airborn = true;
        logic.flying(10, 1000);
    }
};