export default {
  auth: {
    domain: 'rish-12.us.auth0.com',
    clientId: '25s7W0HbIeC4YXA2wJWJ754Plq3UFIW4',
    authorizationParams: {
      redirect_uri: 'https://localhost:4200',
      audience: 'http://localhost:8080',
    },
  },
  httpInterceptor: {
    allowedList: [
      'http://localhost:8080/api/orders/**',
      'http://localhost:8080/api/checkout/purchase'
    ],
  },
};