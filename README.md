An example project for react + firebase + admin panel

# Get started

Prerequsitis

```
- node js, npm/yarn installed
- firebase account and firebase key
```

You need to create Firebase config file: `src/FIREBASE_CONFIG.js` with the following format from firebase:

``` js
export const firebaseConfig = {
  apiKey: "aaaaaaaaaaaaaaaaaaaaaaaaaaa",
  authDomain: "aaaaaaaaaaaaaaaaaaaaaaaaaaa",
  databaseURL: "aaaaaaaaaaaaaaaaaaaaaaaaaaa",
  projectId: "aaaaaaaaaaaaaaaaaaaaaaaaaaa",
  storageBucket: "aaaaaaaaaaaaaaaaaaaaaaaaaaa",
  messagingSenderId: "aaaaaaaaaaaaaaaaaaaaaaaaaaa",
};
```

```
1. run `yarn` for install packages
2. create Firebase config file: `src/FIREBASE_CONFIG.js` and update the firebaseConfig key
3. run `yarn start`
4. Open 'http://localhost:3333' on browser
5. Login with your user firebase auth

username: [Email]
password: [Password]
```
