/// <reference path="../../Scripts/typings/jquery/jquery.d.ts" />

module Infro.SocialApi.Vkontakte {
    export class VkUsersMethods implements IUsersMethods {
        private wrapper;

        constructor(wrapper: VkSocialApi) {
            this.wrapper = wrapper;
        }

        getInfo(params: { uids: string[]; fields: string }, callback: (response: IUser[]) => void) {

            // TODO parse "fields" param
            params.fields = params.fields || "sex,bdate,photo,photo_50,photo_medium,photo_medium_rec,photo_big,online";

            VK.api("users.get", { user_ids: params.uids, fields: params.fields }, data => {
                var users: VkUser[] = [];

                $.map(data.response, (value, i) => {
                    users.push(new VkUser(value));
                });

                callback(users);
            });
        }
    }
}