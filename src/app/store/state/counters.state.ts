export interface ICountersState {
    counter: number,
    messaging?: {
        newMessages: number
    },
}

export const initialCountersState: ICountersState = {
    counter: 0,
    messaging: {
        newMessages: 5
    }
};