html
	id 1: altitude
	id 2: fuel
	purpose: divs to display the stuff


handlers
	init: function
		args: none
		return: undefined
		behavior: listens to events and triggers controller
		purpose: handler to call controller method to


controller
	init: function
		args: 
		return: undefined
		behavior: get f/a data and call model to render
		purpose: get data and draw it


model
	properties: 2
		fuel: number
			init: 10000000000000
		altitude: number
			init: 0
	methods: 2
		get_fuel: function
			args: none
			return: number
			behavior: returns the stored fuel value
		get_altitude: function
			args: none
			return: number
			behavior: returns the stored altitude value



view
	initial_render: function
		args: 2
			fuel: number
			altitude: number
		return: undefined
		behavior: populates divs with data
		purpose: draw fuel and altitude


