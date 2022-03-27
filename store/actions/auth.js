export const SIGNUP = 'SIGNUP'


export const signUp = (email, password) => {
    return async dispatch => {
        const response = await fetch
        ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD4YXffIa8VQ9L3GiEPKyHwbYg-_7OOSlU',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            }
        )
        if (!response.ok) {
th
        }
        dispatch({
            type: SIGNUP
        })
    }
}