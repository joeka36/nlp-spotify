var SpotifyWebApi = require('spotify-web-api-node');
 
// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '7e6d10700a3f4712b0248cf2e4d9d36d',
  clientSecret: 'ee51ec6c40b74b499a0d8bd4fc5b2b4e',
});

module.exports = spotifyApi;