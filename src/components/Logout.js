import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '654966311312-f5rr55j1tccrs4mbo19mdrpk73qd4ud4.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
