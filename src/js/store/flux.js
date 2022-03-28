const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			gpage: 2,
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
				,{
					"name": "Hermione Granger",
					"alternate_names": [],
					"species": "human",
					"gender": "female",
					"house": "Gryffindor",
					"dateOfBirth": "19-09-1979",
					"yearOfBirth": 1979,
					"wizard": true,
					"ancestry": "muggleborn",
					"eyeColour": "brown",
					"hairColour": "brown",
					"wand": {
						"wood": "vine",
						"core": "dragon heartstring",
						"length": ""
					},
					"patronus": "otter",
					"hogwartsStudent": true,
					"hogwartsStaff": false,
					"actor": "Emma Watson",
					"alternate_actors": [],
					"alive": true,
					"image": "http://hp-api.herokuapp.com/images/hermione.jpeg"
				},
				{
					"name": "Ron Weasley",
					"alternate_names": [
						"Dragomir Despard"
					],
					"species": "human",
					"gender": "male",
					"house": "Gryffindor",
					"dateOfBirth": "01-03-1980",
					"yearOfBirth": 1980,
					"wizard": true,
					"ancestry": "pure-blood",
					"eyeColour": "blue",
					"hairColour": "red",
					"wand": {
						"wood": "willow",
						"core": "unicorn tail-hair",
						"length": 14
					},
					"patronus": "Jack Russell terrier",
					"hogwartsStudent": true,
					"hogwartsStaff": false,
					"actor": "Rupert Grint",
					"alternate_actors": [],
					"alive": true,
					"image": "http://hp-api.herokuapp.com/images/ron.jpg"
				},
				{
					"name": "Minerva McGonagall",
					"alternate_names": [],
					"species": "human",
					"gender": "female",
					"house": "Gryffindor",
					"dateOfBirth": "04-10-1925",
					"yearOfBirth": 1925,
					"wizard": true,
					"ancestry": "",
					"eyeColour": "",
					"hairColour": "black",
					"wand": {
						"wood": "",
						"core": "",
						"length": ""
					},
					"patronus": "tabby cat",
					"hogwartsStudent": false,
					"hogwartsStaff": true,
					"actor": "Dame Maggie Smith",
					"alternate_actors": [],
					"alive": true,
					"image": "http://hp-api.herokuapp.com/images/mcgonagall.jpg"
				},
				{
					"name": "Rubeus Hagrid",
					"alternate_names": [],
					"species": "half-giant",
					"gender": "male",
					"house": "Gryffindor",
					"dateOfBirth": "06-12-1928",
					"yearOfBirth": 1928,
					"wizard": true,
					"ancestry": "half-blood",
					"eyeColour": "black",
					"hairColour": "black",
					"wand": {
						"wood": "oak",
						"core": "",
						"length": 16
					},
					"patronus": "",
					"hogwartsStudent": false,
					"hogwartsStaff": true,
					"actor": "Robbie Coltrane",
					"alternate_actors": [],
					"alive": true,
					"image": "http://hp-api.herokuapp.com/images/hagrid.png"
				},
				{
					"name": "Neville Longbottom",
					"alternate_names": [],
					"species": "human",
					"gender": "male",
					"house": "Gryffindor",
					"dateOfBirth": "30-07-1980",
					"yearOfBirth": 1980,
					"wizard": true,
					"ancestry": "pure-blood",
					"eyeColour": "",
					"hairColour": "blonde",
					"wand": {
						"wood": "cherry",
						"core": "unicorn tail-hair",
						"length": 13
					},
					"patronus": "",
					"hogwartsStudent": true,
					"hogwartsStaff": false,
					"actor": "Matthew Lewis",
					"alternate_actors": [],
					"alive": true,
					"image": "http://hp-api.herokuapp.com/images/neville.jpg"
				},
			]
		},
		actions: {
			// Use getActions to call a function within a fuction

			getGryffindor: () =>{
				const store = getStore(); 
				var page = store.gpage;
				fetch("https://hp-api.herokuapp.com/api/characters/house/gryffindor")
				.then(response => response.json())
				.then(result => {setStore(store.gryffindor=[result[0 + (page - 1)*6],result[1 + (page - 1)*6], result[2 + (page - 1)*6], result[3 + (page - 1)*6], result[4 + (page - 1)*6], result[5 + (page - 1)*6]])
								console.log("fetch funcionando")})
				.catch(error => console.log('error', error));
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			scrollRightGryffindor: ()=>{
				const actions = getActions();
				const store = getStore();
				setStore(store.gpage = store.gpage + 1)
				actions.getGryffindor();
			},
			scrollLeftGryffindor: ()=>{
				const actions = getActions();
				const store = getStore();
				setStore(store.gpage = store.gpage - 1)
				actions.getGryffindor();
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
