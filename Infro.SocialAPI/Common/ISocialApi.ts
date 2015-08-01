/// <reference path="IUsersMethods.ts" />
/// <reference path="IFriendsMethods.ts" />
/// <reference path="IDialogMethods.ts" />

module Infro.SocialApi {
    export interface ISocialApi {
        init(callback: Function): void;

        users: IUsersMethods;

        friends: IFriendsMethods;

        dialog: IDialogMethods;
    }
}