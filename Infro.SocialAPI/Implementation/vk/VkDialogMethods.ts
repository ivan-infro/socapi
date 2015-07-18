module Infro.SocialApi.Vkontakte {
    export class VkDialogMethods implements IDialogMethods {
        showInvite(): void {
            VK.callMethod("showInviteBox");
        }
    }
}