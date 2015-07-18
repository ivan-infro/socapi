// ReSharper disable once InconsistentNaming
declare var VK: any;

module Infro.SocialApi.Vkontakte {
    export class VkSocialApi implements ISocialApi {
        users: IUsersMethods;
        friends: IFriendsMethods;
        dialog: IDialogMethods;

        constructor() {
            // TODO init? (getUsers work without init, but why фыва)

            this.users = new VkUsersMethods(this);
            this.friends = new VkFriendsMethods();
            this.dialog = new VkDialogMethods();

        }

        init(callback: Function): void {
            VK.init(callback);
        }
    }    
}