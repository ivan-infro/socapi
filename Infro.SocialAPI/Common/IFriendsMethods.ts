module Infro.SocialApi {
    export interface IFriendsMethods {
        // TODO callback get array of strings (friends ids)
        getAppUsers(offset: number, callback: Function): void;
    }
}