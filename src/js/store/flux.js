const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			getcontacts: () => {
				// richiesta GET.
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/josuvalle")
					// gestisci il successo
					.then(response => response.json()) // converti a json
					.then(data => console.log(data)) // stampa i dati sulla console
					.catch(err => console.log("Request Failed", err)); // gestisci gli errori
			}

			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
