import axios from "axios";

export const Api = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt_token')}`
    },

})

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

export const DatabaseApi = {
    async allDatabase() {
        return (
            Api.get('/database')
                .then(response => {
                    return response.data
                })
        )
    },
    async createDB(name) {
        return (
            Api.post('/database/create', {name})
                .then(response => {
                    return response.data
                })
        )
    }
}
