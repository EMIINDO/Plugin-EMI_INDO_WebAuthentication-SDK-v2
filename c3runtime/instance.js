"use strict";
{


    globalThis.C3.Plugins.EMI_INDO_WebAuthentication.Instance = class WebAuthenticationInstance extends globalThis.ISDKInstanceBase {
        constructor() {
            super();

            const properties = this._getInitProperties();


            if (properties) { }

            if (typeof firebase == 'undefined') {
                return;
            }
            else { };



            this.uid = "";
            this.displayName = "";
            this.email = "";
            this.photoURL = "";
            this.emailVerified = "";


            this.errorMsg = "";

            this.errorCode = null;

            this.credential = "";
            this.token = "";

            this.eventResponse = "";


            this.Tag = "";



            const self = this;

            this.CallBack = globalThis.C3.Plugins.EMI_INDO_WebAuthentication.Cnds;



            let profile = async () => {
                const user = await firebase.auth().currentUser;
                if (user !== null) {
                    // The user object has basic properties such as display name, email, etc.
                    self.uid = user.uid;
                    self.displayName = user.displayName;
                    self.email = user.email;
                    self.photoURL = user.photoURL;
                    self.emailVerified = user.emailVerified;
                    self.eventResponse = ("on get user profile success")
                    self._trigger(self.CallBack.OnGetUserProfile);
                }
            }

            this.profile = profile;


        }

        _release() {
            super._release();
        }

        _saveToJson() {
            return {
                // data to be saved for savegames
            };
        }

        _loadFromJson(o) {
            // load state for savegames
        }

    };
}