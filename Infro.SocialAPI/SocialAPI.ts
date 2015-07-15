interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    picSmall: string;
}

interface ISocialApi {
    init(callback: Function): void;

    users: {
        // TODO callback получает массив объектов типа IUser
        getInfo(params: any, callback: Function): void;
    }

    friends: {
        // TODO callback получает массив строк (id друзей)
        getAppUsers(offset: number, callback: Function): void;
    }

    dialog: {
        showInvite(): void;
    }
}