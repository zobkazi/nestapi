export default () => ({
  mongoURI:
    process.env.MONGO_URI ||
    'mongodb://admin:password@localhost:27017/auth_mechanisms',
});

// dbname: admin
// password: password
// username: exzobaidulkazi
// password: m5tgIU0YPwY3A0q3
