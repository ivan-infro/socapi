module Infro.SocialApi {
    export interface ISocialApi {
        init(callback: Function): void;

        users: IUsersMethods;

        friends: IFriendsMethods;

        dialog: IDialogMethods;
    }
}