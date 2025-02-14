"use strict";
{
    globalThis.C3.Plugins.EMI_INDO_WebAuthentication.Cnds = {
        OnUserIsSignedIn()
        {
            return true;
        },

        OnUserIsSignedOut()
        {
            return true;
        },

        OnError()
        {
            return true;
        },

        OnGetUserProfile(tag)
        {

            if (tag === this.Tag)
            {

                return true;

            }

        },

        OnCreateEmailAndPassword()
        {
            return true;
        },

        OnSignInEmailAndPassword()
        {
            return true;
        },

        OnSendPasswordReset()
        {
            return true;
        },

        OnUpdateEmail()
        {
            return true;
        },

        OnSigninAnonymously()
        {
            return true;
        },

        OnSignOut()
        {
            return true;
        }
    };
}