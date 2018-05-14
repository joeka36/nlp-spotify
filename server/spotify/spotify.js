var SpotifyWebApi = require('spotify-web-api-node');
 
//Authorization setup
var authorization = "https://accounts.spotify.com/authorize/?client_id=7e6d10700a3f4712b0248cf2e4d9d36d&response_type=code&redirect_uri=http://localhost:7200/"

//Credential setup
var spotifyApi = new SpotifyWebApi({
  clientId: '7e6d10700a3f4712b0248cf2e4d9d36d',
  clientSecret: 'ee51ec6c40b74b499a0d8bd4fc5b2b4e',
});

spotifyApi.authorizationCode = authorization;

module.exports = spotifyApi;