const clientId = "649e6815c15ec46";
const rootUrl = "https://api.imgur.com";
// /oauth2/authorize?
// client_id=clientId&
// response_type=token
// state=APPLICATION_STATE
export default {
  login: () => {
    window.location.href = `${rootUrl}/oauth2/authorize?client_id=${clientId}&response_type=token`;
  },
};
