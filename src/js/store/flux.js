const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			page : [1, 1, 1, 1],
			max: [8, 3, 4, 8],
			favoriteArray : [],
			houseArray: ["gryffindor", "hufflepuff", "ravenclaw", "slytherin"],
			gryffindor: [],
			hufflepuff: [],
			ravenclaw: [],
			slytherin: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			gryffindor: 
				{getGryffindor: () =>{
					const store = getStore(); 
					var page = store.page[0];
					fetch("https://hp-api.herokuapp.com/api/characters/house/gryffindor")
					.then(response => response.json())
					.then(result => {setStore({gryffindor:[result[0 + (page - 1)*6],result[1 + (page - 1)*6], result[2 + (page - 1)*6], result[3 + (page - 1)*6], result[4 + (page - 1)*6], result[5 + (page - 1)*6]]})})
					.catch(error => console.log('error', error));
				},
				scrollRight: ()=>{
					const actions = getActions();
					const store = getStore();
					if(store.page[0] < store.max[0]){
						setStore(store.page[0] = store.page[0] + 1)
						actions.gryffindor.getGryffindor();
					}
				},
				scrollLeft: ()=>{
					const actions = getActions();
					const store = getStore();
					if(store.page[0] > 1){
						setStore(store.page[0] = store.page[0] - 1)
						actions.gryffindor.getGryffindor();
					}
				},
			},
			hufflepuff: 
				{
					getHufflepuff: () =>{
						const store = getStore(); 
						var page = store.page[1];
						fetch("https://hp-api.herokuapp.com/api/characters/house/hufflepuff")
						.then(response => response.json())
						.then(result => {setStore({hufflepuff:[result[0 + (page - 1)*6],result[1 + (page - 1)*6], result[2 + (page - 1)*6], result[3 + (page - 1)*6], result[4 + (page - 1)*6], result[5 + (page - 1)*6]]})})
						.catch(error => console.log('error', error));
					},
					scrollRight: ()=>{
						const actions = getActions();
						const store = getStore();
						if(store.page[1] < store.max[1]){
							setStore(store.page[1] = store.page[1] + 1)
							actions.hufflepuff.getHufflepuff();
						}
					},
					scrollLeft: ()=>{
						const actions = getActions();
						const store = getStore();
						if(store.page[1] > 1){
							setStore(store.page[1] = store.page[1] - 1)
							actions.hufflepuff.getHufflepuff();
						}
					},
				},
			ravenclaw: 
				{
					getRavenclaw: () =>{
						const store = getStore(); 
						var page = store.page[2];
						fetch("https://hp-api.herokuapp.com/api/characters/house/ravenclaw")
						.then(response => response.json())
						.then(result => {setStore({ravenclaw : [result[0 + (page - 1)*6],result[1 + (page - 1)*6], result[2 + (page - 1)*6], result[3 + (page - 1)*6], result[4 + (page - 1)*6], result[5 + (page - 1)*6]]})})
						.catch(error => console.log('error', error));
					},
					scrollRight: ()=>{
						const actions = getActions();
						const store = getStore();
						if(store.page[2] < store.max[2]){
							setStore(store.page[2] = store.page[2] + 1)
							actions.ravenclaw.getRavenclaw();
						}
					},
					scrollLeft: ()=>{
						const actions = getActions();
						const store = getStore();
						if(store.page[2] > 1){
							setStore(store.page[2] = store.page[2] - 1)
							actions.ravenclaw.getRavenclaw();
						}
					},
				},
			slytherin: 
				{
					getSlytherin: () =>{
						const store = getStore(); 
						var page = store.page[3];
						fetch("https://hp-api.herokuapp.com/api/characters/house/slytherin")
						.then(response => response.json())
						.then(result => {setStore({slytherin:[result[0 + (page - 1)*6],result[1 + (page - 1)*6], result[2 + (page - 1)*6], result[3 + (page - 1)*6], result[4 + (page - 1)*6], result[5 + (page - 1)*6]]})})
						.catch(error => console.log('error', error));
					},
					scrollRight: ()=>{
						const actions = getActions();
						const store = getStore();
						if(store.page[3] < store.max[3]){
							setStore(store.page[3] = store.page[3] + 1)
							actions.slytherin.getSlytherin();
						}
					},
					scrollLeft: ()=>{
						const actions = getActions();
						const store = getStore();
						if(store.page[3] > 1){
							setStore(store.page[3] = store.page[3] - 1)
							actions.slytherin.getSlytherin();
						}
					},
			},
			deleteFromFavorites: function(name){
				const store = getStore();
				console.log(name);
				setStore({favoriteArray: store.favoriteArray.filter((value)=>{return(value != name)})})
			},
			addToFavorites: function(name){
				const store = getStore();
				if(!(store.favoriteArray.includes(name))){
					setStore(store.favoriteArray.push(name))
					console.log(store.faforiteArray);
				}
			},
		}
	};
};

export default getState;
