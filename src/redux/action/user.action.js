import { BASE_URL } from "../../shared/baseUrl";

export const signupUser = (data) => (dispatch) => {
    try {
        fetch(BASE_URL + 'users', {
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

