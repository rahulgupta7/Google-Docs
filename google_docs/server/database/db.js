import mongoose from 'mongoose';

const Connection = async (username = 'user', password = 'user') => {
    const URL = `mongodb://${username}:${password}@google-docs-clone-shard-00-00.hh3qz.mongodb.net:27017,google-docs-clone-shard-00-01.hh3qz.mongodb.net:27017,google-docs-clone-shard-00-02.hh3qz.mongodb.net:27017/SINGLE-PAGE-APP?ssl=true&replicaSet=atlas-48mrmz-shard-0&authSource=admin&retryWrites=true&w=majority`

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('database connected');
    } catch (error) {
        console.log('Error', error);
    }

}

export default Connection;