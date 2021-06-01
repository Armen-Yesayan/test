import axios from "axios";

export const Api = axios.create({
    baseURL: 'http://localhost:5000/api'
})

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.jwt_token}`;


export const AuthApi = {
    async signInWithEmailAndPassword(email, password) {
        return (
            Api.post('/auth/login', {email, password})
                .then(response => {
                    return response.data;
                })
        )
    }
}