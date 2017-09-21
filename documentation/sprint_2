HTML: 
    Take off button id="startButton"
    disable take off button

Handler:
var is_button_clicked
    Method:
        args:
        return: 
        behavior: calls controller.takoff
        purpose: onclick, game starts, disables take off button

Controller:
    function: take off
    switches model.airborn state from false to true
    grabing the onclick event calling logic.flying

Logic.js
    Flying: function
    args: 2
        f: number
            purpose: to change the fuel 
        a: number
            purpse: change altitude
        onclick button
    behavior: checks airborn, if true === decrease fuel by f,  increase altitude by a
    purpose: dynamically change fuel and altitude


Model: 
    Property: Airborn Boolean
    args:
    return: boolean
    behavior: default to false
    purpose: know if state is on ground or in flight
    

View: 
    initialize_render: function
    args: 2
        fuel: number
            purpose: the dynamically changing fuel level
        altitude: number
            purpose: dynamically changing altitude level
    return: undefined
    behavior: changes the inner.HTML of divs to reflect ("fuel: ", "altitude: ")
    purpose: show the new fuel land altitude levels

