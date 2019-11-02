/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDLtIprjHyUwiOP_HkPwlkhzhvwxu5GqZs',
    authDomain: 'bsd-master-project.firebaseapp.com',
    databaseURL: 'https://bsd-master-project.firebaseio.com',
    projectId: 'bsd-master-project',
    storageBucket: 'bsd-master-project.appspot.com',
    messagingSenderId: '731468307269',
    appId: '1:731468307269:web:9bdd2fd6e99f6220c1bc2c',
  },
};
