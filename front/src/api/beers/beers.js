import * as R from 'ramda';
import axios from 'axios';

export const POST = {
    RATE: 'RATE',
    BEER: 'BEER',
};

export const GET = {
    BEERS: 'BEERS',
};

const A = axios.create({
    baseURL: '/',
    headers: {
        'Content-Type': 'application/json',
    },
});

const enhancedPath = (path, params) => {
    if (R.is(Function, path)) {
        return path(params);
    }
    return path;
}

const _get = (path, parser = R.prop('data')) => ({ params, headers }) => {
    return A.get(
        enhancedPath(path, params),
        { 
            params,
            headers: {
                'Content-Type': 'application/json',
                ...headers
            }
        }
    ).then(parser);
};

const _post = (path) => ({ params, headers }) => {
    return A.post(
        enhancedPath(path, params),
        params, {
            headers: {
                'Content-Type': 'application/json',
                ...headers
        }
    });
};

const methods = {
    [GET.BEERS]: _get('/beers'),
    [POST.RATE]: _post(({ uuid }) => `beers/${uuid}/rate`),
    [POST.BEER]: _post('/beers'),
};

const error = method => () => {
    throw new Error(`Unkown method: ${method}`);
};

const beersApi = ({ method, ...rest }) => (methods[method] || error(method))(rest);

export default beersApi;
