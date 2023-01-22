const get = async () => {
    try {
        const resp =  await axios.get('http://jsonplaceholder.typicode.com/posts');
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

get();

