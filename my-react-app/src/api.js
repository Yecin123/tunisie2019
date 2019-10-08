const API = 'http://localhost:9000';

export const getList = () => {
	return fetch(`${API}/products`).then((data) => data.json());
};


export const getProduit = (id) => {
    return fetch(`${API}/products/${id}`)
        .then(data => data.json());
}



