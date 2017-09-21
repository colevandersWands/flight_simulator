var view = {    
    initialize_render(fuel, altitude)  {
        var fuelItem = document.getElementById("fuel");
        var altitudeItem = document.getElementById("altitude");
        fuelItem.innerHTML = model.fuel;
        altitudeItem.innerHTML = model.altitude;
    }
};