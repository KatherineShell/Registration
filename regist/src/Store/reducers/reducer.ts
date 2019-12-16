import {
    ActionCallback, SAVE_ACCOUNT
} from '../actions';


export interface StoreType {
    email: string;
    firstName: string;
    lastName: string;
    companyName: string;
    timeZone: string;
    gender: string;
}

let initialState: StoreType = {
    email: '', lastName: '', firstName: '', timeZone: '', companyName: '', gender: '',
};

export const reducer = (state = initialState, action: ActionCallback): StoreType => {
    switch (action.type) {
        case SAVE_ACCOUNT:
            console.log(action.timeZone, action.email, action.gender, ' saved')
            return {
                ...state,
                timeZone: action.timeZone,
                email: action.email,
                gender: action.gender,
                firstName: action.firstName,
                companyName: action.companyName,
                lastName: action.lastName
            };
        default:
            return state;
    }
};