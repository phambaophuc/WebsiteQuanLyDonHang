import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { User } from '../common/user';
import * as auth from 'firebase/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    userData: any;

    constructor(
        private afDb: AngularFireDatabase,
        private afAuth: AngularFireAuth,
        private router: Router
    ) {
        this.initAuthState();
    }

    initAuthState() {
        this.afAuth.authState.subscribe(
            (user) => {
                if (user) {
                    this.userData = user;
                    localStorage.setItem('user', JSON.stringify(this.userData));
                    JSON.parse(localStorage.getItem('user')!);
                } else {
                    localStorage.setItem('user', 'null');
                    JSON.parse(localStorage.getItem('user')!);
                }
            }
        );
    }

    // sign in with email/password
    signIn(email: string, password: string) {
        return this.afAuth.signInWithEmailAndPassword(email, password)
            .then((result) => {
                this.setUserData(result.user);
                this.afAuth.authState.subscribe((user) => {
                    if (user) {
                        this.router.navigate(['/dashboard']);
                    }
                });
            }).catch((error) => {
                window.alert(error.message);
            });
    }

    // sign up with email/password
    signUp(email: string, password: string) {
        return this.afAuth
            .createUserWithEmailAndPassword(email, password)
            .then((result) => {
                this.sendVerificationMail();
                this.setUserData(result.user);
            })
            .catch((error) => {
                window.alert(error.message);
            })
    }

    // send email verfificaiton when new user sign up
    sendVerificationMail() {
        return this.afAuth.currentUser
            .then((u: any) => u.sendEmailVerification())
            .then(() => {
                this.router.navigate(['/auth/verify-email']);
            })
    }

    // reset Forggot password
    forgotPassword(email: string) {
        return this.afAuth
            .sendPasswordResetEmail(email)
            .then(() => {
                window.alert('Password reset email sent, check your inbox.');
            })
            .catch((error) => {
                window.alert(error);
            });
    }

    // returns true when user is looged in and email is verified
    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user')!);
        return user !== null && user.emailVerified !== false ? true : false;
    }

    setUserData(user: any) {
        const userRef = this.afDb.object(`Users/${user.uid}`);

        const userData: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };

        return userRef.set(userData);
    }

    // signout
    signOut() {
        return this.afAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['/auth/sign-in']);
        })
    }

    signInWithGoogle() {
        return this.authLogin(new auth.GoogleAuthProvider())
            .then(() => {
                this.afAuth.authState.subscribe(
                    (user) => {
                        if (user) {
                            this.router.navigate(['/dashboard']);
                        }
                    }
                )
            })
    }

    authLogin(provider: any) {
        return this.afAuth
            .signInWithPopup(provider)
            .then((result) => {
                this.setUserData(result.user);
            })
            .catch((error) => {
                window.alert(error);
            })
    }
}
