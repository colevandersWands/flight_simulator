function initial_render(fuel, altitude)  {
    var fuelItem = document.getElementById("fuel");
    var altitudeItem = document.getElementById("altitude");
    fuelItem.innerHTML = fuel;
    altitudeItem.innerHTML = altitude;
}