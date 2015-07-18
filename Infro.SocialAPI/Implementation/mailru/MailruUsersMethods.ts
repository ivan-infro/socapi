/// <reference path="../../Scripts/typings/jquery/jquery.d.ts" />

module Infro.SocialApi.Mailru {
    export class MailruUsersMethods implements IUsersMethods {
        private wrapper;

        constructor(wrapper: MailruSocialApi) {
            this.wrapper = wrapper;
        }

        getInfo(params: { uids: string[] }, callback: (response: IUser[]) => void) {
            mailru.common.users.getInfo(response => {
                var users: MailruUser[] = [];
                $.map(response,(val, i) => users.push(new MailruUser(val)));

                callback(users);
            }, params.uids);
        }
    }
}