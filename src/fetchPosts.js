// import getPosts from '../../server/main';

const fetchPosts = () => {
    console.log('hitting getPosts on front end')
    // const thingies = await getPosts('../posts');
    // console.log('thingies', thingies);
    return [{
        title: 'post 1',
        tags: ['cat', 'dog']
    }];
}

export default fetchPosts;