module Infro.SocialApi {
    export interface IFriendsMethods {
        // TODO callback get array of strings (friends ids)
        // TODO offset
        getAppUsers(callback: (friends: string[]) => void): void;
    }
}