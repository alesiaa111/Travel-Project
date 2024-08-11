import React, { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import * as firebaseui from 'firebaseui';
import { auth } from '../../firebase/firebase-config';

export const FirebaseAuth = () => {
  useEffect(() => {
    const ui = new firebaseui.auth.AuthUI(auth);

    const uiConfig = {
      signInSuccessUrl: '/admin',
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: false,
        },
       
      ],
    };

    ui.start('#firebaseui-auth-container', uiConfig);

    return () => {
      ui.delete();
    };
  }, []);

  return <div id="firebaseui-auth-container"></div>;
};


