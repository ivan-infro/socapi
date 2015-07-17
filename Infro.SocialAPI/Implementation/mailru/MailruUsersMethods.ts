module Infro.SocialApi.Mailru {
    export class MailruUsersMethods implements IUsersMethods {
        private wrapper;

        constructor(wrapper: MailruSocialApi) {
            this.wrapper = wrapper;
        }

        getInfo(params, callback: Function) {
            mailru.common.users.getInfo(response => {
                callback(response);
            }, params.uids);
        }
    }    
}