import axios from "axios";

export const req = axios.create({
    baseURL: "http://localhost:3000",
});

req.interceptors.request.use(( config ) => {
    
    let loggedUser = 30;
    config.data.userId = loggedUser;

    return config;
}); 