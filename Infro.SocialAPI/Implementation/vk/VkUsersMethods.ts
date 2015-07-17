module Infro.SocialApi.Vkontakte {
    export class VkUsersMethods implements IUsersMethods {
        private wrapper;

        constructor(wrapper: VkSocialApi) {
            this.wrapper = wrapper;
        }

        getInfo(params, callback: Function): void {
            VK.api('users.get', params, function (data) {
                // TODO data.response => array of IUser
                callback(data.response);
            });
        }
    }
}