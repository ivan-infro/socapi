declare var mailru: any; 

module Infro.SocialApi.Mailru {
    export class MailruSocialApi implements ISocialApi {
        private key: string;

        users: IUsersMethods;
        friends: IFriendsMethods;
        dialog: IDialogMethods;

        constructor(key: string) {
            this.key = key;

            this.users = new MailruUsersMethods(this);
            this.friends = new MailruFriendsMethods();
            this.dialog = new MailruDialogMethods();
        }

        init(callback: Function): void {
            mailru.loader.require("api",() => {
                mailru.app.init(this.key);

                callback();
            });
        }
    }
}