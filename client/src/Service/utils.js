export const getServerBaseUrl = () => 
process.env.NODE_ENV === "production" ?
"https://shoes-app-server.herokuapp.com" : 'http://localhost:8080'

