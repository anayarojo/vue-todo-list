
export default {
    production: false,
    apiUrl: 'https://api-todo-list.ranayarojo.com',
    // apiUrl: 'http://127.0.0.1:8000',
    axiosConfig: {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    }
};
