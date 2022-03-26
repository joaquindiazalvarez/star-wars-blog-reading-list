const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
			,
		data: {
			gryffindor: [
				{
					"name": "Harry Potter",
					"alternate_names": [],
					"species": "human",
					"gender": "male",
					"house": "Gryffindor",
					"dateOfBirth": "31-07-1980",
					"yearOfBirth": 1980,
					"wizard": true,
					"ancestry": "half-blood",
					"eyeColour": "green",
					"hairColour": "black",
					"wand": {
						"wood": "holly",
						"core": "phoenix feather",
						"length": 11
					},
					"patronus": "stag",
					"hogwartsStudent": true,
					"hogwartsStaff": false,
					"actor": "Daniel Radcliffe",
					"alternate_actors": [],
					"alive": true,
					"image": "http://hp-api.herokuapp.com/images/harry.jpg"
				}
			]
		}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
