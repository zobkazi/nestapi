// src/config/jwt.config.ts
export default () => ({
  secret: process.env.JWT_SECRET || 'defaultSecret',
  signOptions: {
    expiresIn: '1h',
  },
});
