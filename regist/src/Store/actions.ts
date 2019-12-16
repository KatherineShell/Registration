export const SAVE_ACCOUNT = 'SAVE_ACCOUNT';

export interface ActionSaveAccount {
    type: typeof SAVE_ACCOUNT;
    timeZone: string;
    email: string;
    gender: string;
    firstName: string;
    companyName: string;
    lastName: string;
}

export type ActionCallback = ActionSaveAccount;

export interface ActionsTypes {
    saveAccount: (timeZone: string, email: string, gender: string,
        firstName: string, lastName: string, companyName: string) => ActionSaveAccount;
}

export const saveAccount: ActionsTypes['saveAccount'] = (timeZone: string, email: string, gender: string,
    firstName: string, lastName: string, companyName: string) => ({
        type: SAVE_ACCOUNT,
        timeZone: timeZone,
        email: email,
        gender: gender,
        firstName: firstName,
        companyName: companyName,
        lastName: lastName
    });
