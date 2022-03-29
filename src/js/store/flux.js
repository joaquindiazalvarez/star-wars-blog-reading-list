const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			page : [1, 1, 1, 1],
			gpage: 1,
			hpage: 1,
			rpage: 1, 
			spage: 1,
			houseArray: ["gryffindor", "hufflepuff", "ravenclaw", "slytherin"],
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
			],
			hufflepuff: [
				{
					"name": "Cedric Diggory",
					"alternate_names": [],
					"species": "human",
					"gender": "male",
					"house": "Hufflepuff",
					"dateOfBirth": "",
					"yearOfBirth": 1977,
					"wizard": true,
					"ancestry": "",
					"eyeColour": "grey",
					"hairColour": "brown",
					"wand": {
						"wood": "ash",
						"core": "unicorn hair",
						"length": 12.25
					},
					"patronus": "",
					"hogwartsStudent": true,
					"hogwartsStaff": false,
					"actor": "Robert Pattinson",
					"alternate_actors": [],
					"alive": false,
					"image": "http://hp-api.herokuapp.com/images/cedric.png"
				},
				{
					"name": "Fat Friar",
					"alternate_names": [],
					"species": "ghost",
					"gender": "male",
					"house": "Hufflepuff",
					"dateOfBirth": "",
					"yearOfBirth": "",
					"wizard": true,
					"ancestry": "",
					"eyeColour": "",
					"hairColour": "",
					"wand": {
						"wood": "",
						"core": "",
						"length": ""
					},
					"patronus": "",
					"hogwartsStudent": false,
					"hogwartsStaff": false,
					"actor": "Simon Fisher-Becker",
					"alternate_actors": [],
					"alive": false,
					"image": ""
				},
				{
					"name": "Hannah Abbott",
					"alternate_names": [],
					"species": "human",
					"gender": "female",
					"house": "Hufflepuff",
					"dateOfBirth": "",
					"yearOfBirth": "",
					"wizard": true,
					"ancestry": "half-blood",
					"eyeColour": "",
					"hairColour": "blonde",
					"wand": {
						"wood": "",
						"core": "",
						"length": ""
					},
					"patronus": "",
					"hogwartsStudent": true,
					"hogwartsStaff": false,
					"actor": "Charlotte Skeoch",
					"alternate_actors": [
						"Louisa Warren"
					],
					"alive": true,
					"image": ""
				},
				{
					"name": "Susan Bones",
					"alternate_names": [],
					"species": "human",
					"gender": "female",
					"house": "Hufflepuff",
					"dateOfBirth": "",
					"yearOfBirth": "",
					"wizard": true,
					"ancestry": "",
					"eyeColour": "",
					"hairColour": "",
					"wand": {
						"wood": "",
						"core": "",
						"length": ""
					},
					"patronus": "",
					"hogwartsStudent": true,
					"hogwartsStaff": false,
					"actor": "Eleanor Columbus",
					"alternate_actors": [
						"Emma Jayne-Corboz"
					],
					"alive": true,
					"image": ""
				},
				{
					"name": "Justin Finch-Fletchley",
					"alternate_names": [],
					"species": "human",
					"gender": "male",
					"house": "Hufflepuff",
					"dateOfBirth": "",
					"yearOfBirth": "",
					"wizard": true,
					"ancestry": "muggleborn",
					"eyeColour": "",
					"hairColour": "",
					"wand": {
						"wood": "",
						"core": "",
						"length": ""
					},
					"patronus": "",
					"hogwartsStudent": true,
					"hogwartsStaff": false,
					"actor": "Edward Randell",
					"alternate_actors": [],
					"alive": true,
					"image": ""
				},
				{
					"name": "Pomona Sprout",
					"alternate_names": [
						"Professor Sprout"
					],
					"species": "human",
					"gender": "female",
					"house": "Hufflepuff",
					"dateOfBirth": "",
					"yearOfBirth": "",
					"wizard": true,
					"ancestry": "",
					"eyeColour": "",
					"hairColour": "",
					"wand": {
						"wood": "",
						"core": "",
						"length": ""
					},
					"patronus": "",
					"hogwartsStudent": false,
					"hogwartsStaff": true,
					"actor": "Miriam Margolyes",
					"alternate_actors": [],
					"alive": true,
					"image": ""
				}
			],
			ravenclaw: [
				{
					"name": "Cho Chang",
					"alternate_names": [],
					"species": "human",
					"gender": "female",
					"house": "Ravenclaw",
					"dateOfBirth": "",
					"yearOfBirth": "",
					"wizard": true,
					"ancestry": "",
					"eyeColour": "brown",
					"hairColour": "black",
					"wand": {
						"wood": "",
						"core": "",
						"length": ""
					},
					"patronus": "swan",
					"hogwartsStudent": true,
					"hogwartsStaff": false,
					"actor": "Katie Leung",
					"alternate_actors": [],
					"alive": true,
					"image": "http://hp-api.herokuapp.com/images/cho.jpg"
				},
				{
					"name": "Luna Lovegood",
					"alternate_names": [],
					"species": "human",
					"gender": "female",
					"house": "Ravenclaw",
					"dateOfBirth": "13-02-1981",
					"yearOfBirth": 1981,
					"wizard": true,
					"ancestry": "",
					"eyeColour": "grey",
					"hairColour": "blonde",
					"wand": {
						"wood": "",
						"core": "",
						"length": ""
					},
					"patronus": "hare",
					"hogwartsStudent": true,
					"hogwartsStaff": false,
					"actor": "Evanna Lynch",
					"alternate_actors": [],
					"alive": true,
					"image": "http://hp-api.herokuapp.com/images/luna.jpg"
				},
				{
					"name": "Terry Boot",
					"alternate_names": [],
					"species": "human",
					"gender": "male",
					"house": "Ravenclaw",
					"dateOfBirth": "",
					"yearOfBirth": "",
					"wizard": true,
					"ancestry": "",
					"eyeColour": "",
					"hairColour": "",
					"wand": {
						"wood": "",
						"core": "",
						"length": ""
					},
					"patronus": "",
					"hogwartsStudent": true,
					"hogwartsStaff": false,
					"actor": "Kevin Lee Yi",
					"alternate_actors": [],
					"alive": true,
					"image": ""
				},
				{
					"name": "Mandy Brocklehurst",
					"alternate_names": [],
					"species": "human",
					"gender": "female",
					"house": "Ravenclaw",
					"dateOfBirth": "",
					"yearOfBirth": "",
					"wizard": true,
					"ancestry": "",
					"eyeColour": "",
					"hairColour": "",
					"wand": {
						"wood": "",
						"core": "",
						"length": ""
					},
					"patronus": "",
					"hogwartsStudent": true,
					"hogwartsStaff": false,
					"actor": "Christina Petrou",
					"alternate_actors": [],
					"alive": true,
					"image": ""
				},
				{
					"name": "Padma Patil",
					"alternate_names": [],
					"species": "human",
					"gender": "female",
					"house": "Ravenclaw",
					"dateOfBirth": "",
					"yearOfBirth": "",
					"wizard": true,
					"ancestry": "",
					"eyeColour": "",
					"hairColour": "",
					"wand": {
						"wood": "",
						"core": "",
						"length": ""
					},
					"patronus": "",
					"hogwartsStudent": true,
					"hogwartsStaff": false,
					"actor": "Sharon Sandhu",
					"alternate_actors": [
						"Afshan Azad"
					],
					"alive": true,
					"image": ""
				},
				{
					"name": "Lisa Turpin",
					"alternate_names": [],
					"species": "human",
					"gender": "female",
					"house": "Ravenclaw",
					"dateOfBirth": "",
					"yearOfBirth": "",
					"wizard": true,
					"ancestry": "",
					"eyeColour": "",
					"hairColour": "",
					"wand": {
						"wood": "",
						"core": "",
						"length": ""
					},
					"patronus": "",
					"hogwartsStudent": true,
					"hogwartsStaff": false,
					"actor": "",
					"alternate_actors": [],
					"alive": true,
					"image": ""
				}
			],
			slytherin: [
				{
					"name": "Draco Malfoy",
					"alternate_names": [],
					"species": "human",
					"gender": "male",
					"house": "Slytherin",
					"dateOfBirth": "05-06-1980",
					"yearOfBirth": 1980,
					"wizard": true,
					"ancestry": "pure-blood",
					"eyeColour": "grey",
					"hairColour": "blonde",
					"wand": {
						"wood": "hawthorn",
						"core": "unicorn tail-hair",
						"length": 10
					},
					"patronus": "",
					"hogwartsStudent": true,
					"hogwartsStaff": false,
					"actor": "Tom Felton",
					"alternate_actors": [],
					"alive": true,
					"image": "http://hp-api.herokuapp.com/images/draco.jpg"
				},
				{
					"name": "Severus Snape",
					"alternate_names": [
						"Half-Blood Prince"
					],
					"species": "human",
					"gender": "male",
					"house": "Slytherin",
					"dateOfBirth": "09-01-1960",
					"yearOfBirth": 1960,
					"wizard": true,
					"ancestry": "half-blood",
					"eyeColour": "black",
					"hairColour": "black",
					"wand": {
						"wood": "",
						"core": "",
						"length": ""
					},
					"patronus": "doe",
					"hogwartsStudent": false,
					"hogwartsStaff": true,
					"actor": "Alan Rickman",
					"alternate_actors": [],
					"alive": false,
					"image": "http://hp-api.herokuapp.com/images/snape.jpg"
				},
				{
					"name": "Bellatrix Lestrange",
					"alternate_names": [
						"Bella"
					],
					"species": "human",
					"gender": "female",
					"house": "Slytherin",
					"dateOfBirth": "",
					"yearOfBirth": 1951,
					"wizard": true,
					"ancestry": "pure-blood",
					"eyeColour": "brown",
					"hairColour": "black",
					"wand": {
						"wood": "walnut",
						"core": "dragon heartstring",
						"length": 12.75
					},
					"patronus": "",
					"hogwartsStudent": false,
					"hogwartsStaff": false,
					"actor": "Helena Bonham Carter",
					"alternate_actors": [],
					"alive": false,
					"image": "http://hp-api.herokuapp.com/images/bellatrix.jpg"
				},
				{
					"name": "Lord Voldemort",
					"alternate_names": [
						"Tom Marvolo Riddle"
					],
					"species": "human",
					"gender": "male",
					"house": "Slytherin",
					"dateOfBirth": "31-12-1926",
					"yearOfBirth": 1926,
					"wizard": true,
					"ancestry": "half-blood",
					"eyeColour": "red",
					"hairColour": "bald",
					"wand": {
						"wood": "yew",
						"core": "phoenix feather",
						"length": 13.5
					},
					"patronus": "",
					"hogwartsStudent": false,
					"hogwartsStaff": false,
					"actor": "Ralph Fiennes",
					"alternate_actors": [],
					"alive": false,
					"image": "http://hp-api.herokuapp.com/images/voldemort.jpg"
				},
				{
					"name": "Horace Slughorn",
					"alternate_names": [],
					"species": "human",
					"gender": "male",
					"house": "Slytherin",
					"dateOfBirth": "",
					"yearOfBirth": "",
					"wizard": true,
					"ancestry": "pure-blood",
					"eyeColour": "green",
					"hairColour": "blonde",
					"wand": {
						"wood": "cedar",
						"core": "dragon heartstring",
						"length": 10.25
					},
					"patronus": "",
					"hogwartsStudent": false,
					"hogwartsStaff": true,
					"actor": "Jim Broadbent",
					"alternate_actors": [],
					"alive": true,
					"image": "http://hp-api.herokuapp.com/images/slughorn.JPG"
				},
				{
					"name": "Dolores Umbridge",
					"alternate_names": [],
					"species": "human",
					"gender": "female",
					"house": "Slytherin",
					"dateOfBirth": "",
					"yearOfBirth": "",
					"wizard": true,
					"ancestry": "half-blood",
					"eyeColour": "brown",
					"hairColour": "grey",
					"wand": {
						"wood": "birch",
						"core": "dragon heartstring",
						"length": 8
					},
					"patronus": "persian cat",
					"hogwartsStudent": false,
					"hogwartsStaff": true,
					"actor": "Imelda Staunton",
					"alternate_actors": [],
					"alive": true,
					"image": "http://hp-api.herokuapp.com/images/umbridge.jpg"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction

			gryffindor: 
				{getGryffindor: () =>{
					const store = getStore(); 
					var page = store.page[0];
					fetch("https://hp-api.herokuapp.com/api/characters/house/gryffindor")
					.then(response => response.json())
					.then(result => {setStore(store.gryffindor=[result[0 + (page - 1)*6],result[1 + (page - 1)*6], result[2 + (page - 1)*6], result[3 + (page - 1)*6], result[4 + (page - 1)*6], result[5 + (page - 1)*6]])
									console.log("fetch funcionando")})
					.catch(error => console.log('error', error));
				},
				scrollRight: ()=>{
					const actions = getActions();
					const store = getStore();
					setStore(store.page[0] = store.page[0] + 1)
					actions.gryffindor.getGryffindor();
				},
				scrollLeft: ()=>{
					const actions = getActions();
					const store = getStore();
					setStore(store.page[0] = store.page[0] - 1)
					actions.gryffindor.getGryffindor();
				},
			},
			hufflepuff: 
				{
					getHufflepuff: () =>{
						const store = getStore(); 
						var page = store.page[1];
						fetch("https://hp-api.herokuapp.com/api/characters/house/hufflepuff")
						.then(response => response.json())
						.then(result => {setStore(store.hufflepuff=[result[0 + (page - 1)*6],result[1 + (page - 1)*6], result[2 + (page - 1)*6], result[3 + (page - 1)*6], result[4 + (page - 1)*6], result[5 + (page - 1)*6]])
										console.log("fetch funcionando")})
						.catch(error => console.log('error', error));
					},
					scrollRight: ()=>{
						const actions = getActions();
						const store = getStore();
						setStore(store.page[1] = store.page[1] + 1)
						actions.hufflepuff.getHufflepuff();
					},
					scrollLeft: ()=>{
						const actions = getActions();
						const store = getStore();
						setStore(store.page[1] = store.page[1] - 1)
						actions.hufflepuff.getHufflepuff();
					},
				},
			ravenclaw: 
				{
					getRavenclaw: () =>{
						const store = getStore(); 
						var page = store.page[2];
						fetch("https://hp-api.herokuapp.com/api/characters/house/ravenclaw")
						.then(response => response.json())
						.then(result => {setStore(store.ravenclaw=[result[0 + (page - 1)*6],result[1 + (page - 1)*6], result[2 + (page - 1)*6], result[3 + (page - 1)*6], result[4 + (page - 1)*6], result[5 + (page - 1)*6]])
										console.log("fetch funcionando")})
						.catch(error => console.log('error', error));
					},
					scrollRight: ()=>{
						const actions = getActions();
						const store = getStore();
						setStore(store.page[2] = store.page[2] + 1)
						actions.ravenclaw.getRavenclaw();
					},
					scrollLeft: ()=>{
						const actions = getActions();
						const store = getStore();
						setStore(store.page[2] = store.page[2] - 1)
						actions.ravenclaw.getRavenclaw();
					},
				},
			slytherin: 
				{
					getSlytherin: () =>{
						const store = getStore(); 
						var page = store.page[3];
						fetch("https://hp-api.herokuapp.com/api/characters/house/slytherin")
						.then(response => response.json())
						.then(result => {setStore(store.slytherin=[result[0 + (page - 1)*6],result[1 + (page - 1)*6], result[2 + (page - 1)*6], result[3 + (page - 1)*6], result[4 + (page - 1)*6], result[5 + (page - 1)*6]])
										console.log("fetch funcionando")})
						.catch(error => console.log('error', error));
					},
					scrollRight: ()=>{
						const actions = getActions();
						const store = getStore();
						setStore(store.page[3] = store.page[3] + 1)
						actions.slytherin.getSlytherin();
					},
					scrollLeft: ()=>{
						const actions = getActions();
						const store = getStore();
						setStore(store.page[3] = store.page[3] - 1)
						actions.slytherin.getSlytherin();
					},
			},
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
