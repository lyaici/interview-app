import axios from 'axios'

// Used to update a beer's score in the API through a post request
const rateBeer = async ({ beerId, score }) => {
    const endpoint = `/beers/${beerId}/rate`
    const data = { score }
    const response = await axios.post(endpoint, data)
    return response.data
}

// Used to get the list of beers from the API through a get request
const getBeers = async () => {
    const response = await axios.get('/beers')
    return response.data
}

// Used to create a beer in the API through a post request
const createBeer = async (data) => {
    const response = await axios.post('/beers', data)
    return response.data
}

export { rateBeer, getBeers, createBeer }
