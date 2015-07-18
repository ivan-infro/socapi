module Infro.SocialApi.Vkontakte {
    export class VkUser implements IUser {
        // TODO check "deactivated" flag
        // TODO check "hidden" flag


        // 1 - female, 2 - male, 0 - unknown

        //bdate 
        id: string;
        firstName: string;
        lastName: string;
        nick: string;
        sex: UserSex;
        birthday: string;
        picSmall: string;

        constructor(attributes: any) {
            this.id = attributes.uid;
            this.firstName = attributes.first_name;
            this.lastName = attributes.last_name;
            this.nick = attributes.nickname || "";
            
            switch(attributes.sex) {
                case 1:
                    this.sex = UserSex.Female;
                    break;

                case 2:
                    this.sex = UserSex.Male;
                    break;

                default:
                    this.sex = UserSex.Unknown;
            }

            this.birthday = attributes.bdate;
            this.picSmall = attributes.photo_50;

        }
    }
} 