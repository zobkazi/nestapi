export default () => ({
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/nest',
});
