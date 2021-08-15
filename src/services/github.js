const GITHUB_URL = 'https://api.github.com/';

export async function searchUser ( login ) {
    const requestURL = `${GITHUB_URL}search/users?q=${login}`;

    const response = fetch(requestURL)
        .then(res => {
            console.log(res);
            console.log('res git');
        })
        .catch(error => {
            console.log('error git');
            console.log(error);
        });

    return response;

}