module Infro.SocialApi.Mailru {
    export class MailruDialogMethods implements IDialogMethods {
        showInvite(): void {
            // TODO 403 forbidden
            mailru.app.friends.invite(); 
        }
    }
}