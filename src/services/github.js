const GITHUB_URL = 'https://api.github.com/';

export function searchUser ( login ) {
    const requestURL = `${GITHUB_URL}search/users?q=${login}`;

    const response = fetch(requestURL)
        .then(res => res.json()
            .then(res => res)
            .catch(error => error)    
        )
        .catch(error => error);

    return response;

}