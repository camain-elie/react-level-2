const GITHUB_URL = 'https://api.github.com/';

const API_LIMIT_MESSAGE = 'It looks like you have reached the API rate limit, you might want to try again in a minute !';

export async function searchUser ( login, page ) {
    const requestURL = `${GITHUB_URL}search/users?q=${login}${page > 1 ? `&page=${page}` : ''}`;

    const response = await fetch(requestURL);
    /* Handling API rate limit because it is considered as 
        a successfull response */
    if(response.statusText === "Forbidden"){
        return Promise.reject({ message: API_LIMIT_MESSAGE});
    }
    const data = await response.json();

    return data;

}