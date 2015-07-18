module Infro.SocialApi.Vkontakte {
    export class VkFriendsMethods implements IFriendsMethods {
        // TODO check friends permission https://vk.com/dev/permissions
        getAppUsers(callback: (friends: string[]) => void): void {
            VK.api("friends.getAppUsers", (data) => callback(data.response));
        }
    }
} 