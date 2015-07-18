module Infro.SocialApi.Mailru {
    export class MailruFriendsMethods implements IFriendsMethods {
        getAppUsers(callback: (friends: string[]) => void): void {
            mailru.common.friends.getAppUsers(callback, false);
        }
    }
} 