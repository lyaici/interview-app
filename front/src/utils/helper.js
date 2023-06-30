import axios from 'axios'
import endpoints from '../services/api'

// Used to update a beer's score in the API through a post request
const rateBeer = async ({ beerId, score }) => {
    const endpoint = endpoints.rateBeer(beerId)
    const data = { score }
    const response = await axios.post(endpoint, data)
    return response.data
}

// Used to get the list of beers from the API through a get request
const getBeers = async () => {
    const endpoint = endpoints.getBeers()
    const response = await axios.get(endpoint)
    return response.data
}

// Used to create a beer in the API through a post request
const createBeer = async (data) => {
    const endpoint = endpoints.createBeer()
    const response = await axios.post(endpoint, data)
    return response.data
}

export { rateBeer, getBeers, createBeer }
