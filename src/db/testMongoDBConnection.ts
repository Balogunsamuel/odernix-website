const { connect } = require('./dbConfig'); // Replace with the actual path to your `connect` function file

async function testMongoDBConnection() {
    try {
        await connect(); // Call your connect function
        console.log('MongoDB connection test successful');
    } catch (error) {
        console.error('MongoDB connection test failed');
        console.error(error);
    } finally {
        process.exit();
    }
}

testMongoDBConnection();
