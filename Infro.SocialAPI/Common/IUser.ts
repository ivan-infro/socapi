module Infro.SocialApi {
    export interface IUser {
        id: string;

        firstName: string;

        lastName: string;

        nick: string;

        sex: UserSex;

        birthday: string; // dd.mm.yyyy

        picSmall: string; // 45 - 50 px
    }
}