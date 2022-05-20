import * as ActionTypes from '../ActionTypes';


export const ProductData = (pData) => (dispatch) => {
    try {
        fetch(BASE_URL + 'product', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    } catch (e) {
        console.log(e)
    }

}