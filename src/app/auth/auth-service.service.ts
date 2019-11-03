import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class AuthService {

  public user: Observable<firebase.User>;
  public userDetails: firebase.User = null;

  newUser: any = {};

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router, private _firestore: AngularFirestore) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        } else {
          this.userDetails = null;
        }
      },
    );
  }

  async signUp(email, password, firstName, lastName): Promise<any> {
    try {
      this.newUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await firebase
        .database()
        .ref(`/userProfile/${this.newUser.uid}`)
        .set({ email: email, firstName: firstName, lastName: lastName });
      return this.newUser;
    } catch (error) {
      throw error;
    }
  }

  async register(email, password, fullName, company): Promise<any> {
    try {
      this.newUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await firebase
        .database()
        .ref(`/userProfile/${this.newUser.uid}`)
        .set({
          email: email,
          fullName: fullName,
          company: company
        });
      return this.newUser;
    } catch (error) {
      throw error;
    }
  }

  /*   register(email, password, fullName, company) {
      return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((afUser) => {
            // Update the profile in firebase auth
            afUser.updateProfile({
              displayName: fullName,
              photoURL: '',
            }).then(() => afUser.sendEmailVerification());
            // Create the user in firestore
            this._firestore.firestore.collection('users').doc(afUser.uid).set(
              {
                uid: afUser.uid,
                company: company,
              },
            );
          });
    } */

  requestPass(email) {
    return this._firebaseAuth.auth.sendPasswordResetEmail(email);
  }

  confirmPasswordReset(code, newPassword) { // param: oobCode=<code>
    return this._firebaseAuth.auth.confirmPasswordReset(code, newPassword);
  }

  /*verifyPasswordResetCode(code){
    return this._firebaseAuth.auth.verifyPasswordResetCode(code);
  }*/

  signInWithEmail(email, password) {
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }
  signInWithTwitter() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider(),
    );
  }
  signInWithFacebook() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider(),
    );
  }
  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider(),
    );
  }

  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }
  logout() {
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/auth/login']));
  }
}
