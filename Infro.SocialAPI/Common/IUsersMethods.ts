/// <reference path="IUser.ts" />

module Infro.SocialApi {
    export interface IUsersMethods {
        getInfo(params: { uids: string[] }, callback: (response: IUser[]) => void): void;
    }    
}
