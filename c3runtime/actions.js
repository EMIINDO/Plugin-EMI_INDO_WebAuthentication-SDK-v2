"use strict";
{
    globalThis.C3.Plugins.EMI_INDO_WebAuthentication.Acts = {
        async CheckUserIsLoggedIn()
        {


            if (typeof firebase == 'undefined')
            {
                return;
            }
           

            const self = this;

            await firebase.auth().onAuthStateChanged((user) => {
                if (user)
                {
                    self.eventResponse = ("User is signed in")
                    self._trigger(self.CallBack.OnUserIsSignedIn);
                }
                else
                {
                    // User is signed out
                    self.eventResponse = ("User is signed out")
                    self._trigger(self.CallBack.OnUserIsSignedOut);
                }
            });

        },

        async GetUserProfile(tag)
        {
            if (typeof firebase == 'undefined')
            {
                return;
            }
            else
            {

                this.Tag = tag;
                await this.profile();

            };

        },

        async CreateEmailAndPassword(email, password)
        {
            if (typeof firebase == 'undefined')
            {
                return;
            }
           

            const self = this;

            await firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {

                self.eventResponse = ("create User With Email And Password success")
                self._trigger(self.CallBack.OnCreateEmailAndPassword);
            })
                .
            catch ((error) => {
                self.errorCode = error.code;
                self.errorMessage = error.message;
                self.eventResponse = ("create User With Email And Password error")
                self._trigger(self.CallBack.OnError);
            });
        },

        async SignInEmailAndPassword(email, password)
        {
            if (typeof firebase == 'undefined')
            {
                return;
            }
           

            const self = this;

            await firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {

                self.eventResponse = ("sign In With Email And Password success")
                self._trigger(self.CallBack.OnSignInEmailAndPassword);
            })
                .
            catch ((error) => {
                self.errorCode = error.code;
                self.errorMessage = error.message;
                self.eventResponse = ("sign In With Email And Password error")
                self._trigger(self.CallBack.OnError);
            });
        },

        async SendPasswordReset(email)
        {

            if (typeof firebase == 'undefined')
            {
                return;
            }
           

            const self = this;


            await firebase.auth().sendPasswordResetEmail(email)
                .then(() => {
                // Password reset email sent!
                self.eventResponse = ("Password reset email sent!")
                self._trigger(self.CallBack.OnSendPasswordReset);
            })
                .
            catch ((error) => {
                self.errorCode = error.code;
                self.errorMessage = error.message;
                self.eventResponse = ("Password reset email sent error")
                self._trigger(self.CallBack.OnError);
            });
        },

        async UpdateEmail(email)
        {
            if (typeof firebase == 'undefined')
            {
                return;
            }
           

            const self = this;

            const user = await firebase.auth().currentUser;

            user.updateEmail(email).then(() => {
                // Update successful
                self.eventResponse = ("update user Email successful")
                self._trigger(self.CallBack.OnUpdateEmail);
            }).
            catch ((error) => {
                self.errorCode = error.code;
                self.errorMessage = error.message;
                self.eventResponse = ("update user Email error")
                self._trigger(self.CallBack.OnError);
            });
        },

        async Anonymously()
        {
            if (typeof firebase == 'undefined')
            {
                return;
            }
           

            const self = this;

            await firebase.auth().signInAnonymously()
                .then(() => {
                // Signed in..
                self.eventResponse = ("On Sign in Anonymously successful")
                self._trigger(self.CallBack.OnSigninAnonymously);
            })
                .
            catch ((error) => {
                self.errorCode = error.code;
                self.errorMessage = error.message;
                self.eventResponse = ("update user Email error")
                self._trigger(self.CallBack.OnError);
            });
        },

        async SignOut()
        {
            if (typeof firebase == 'undefined')
            {
                return;
            }
           

            const self = this;


            await firebase.auth().signOut().then(() => {
                // Sign-out successful.
                self.eventResponse = ("Sign-out successful")
                self._trigger(self.CallBack.OnSignOut);
            }).
            catch ((error) => {
                // An error happened.
                self.errorCode = error.code;
                self.errorMessage = error.message;
                self.eventResponse = ("An error happened")
                self._trigger(self.CallBack.OnError);
            });
        }
    };
}