import React from 'react';
import { User, UserManager, UserManagerSettings } from 'oidc-client';

const OidcSettings = {
  authority: "https://localhost:44349",
  client_id: "react_code_client",
  redirect_uri: "http://localhost:3000/authentication/login-callback",
  post_logout_redirect_uri: "http://localhost:3000/authentication/logout-callback",
  response_type: "code",
  scope: "api.myshop openid profile"
};

const userManager = new UserManager(OidcSettings);

function App() {

  return (
    <div className="App">
      <header className="App-header">
        App
      </header>
    </div>
  );
}

export default App;
