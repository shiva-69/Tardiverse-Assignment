export const TOGGLE_AUTH = "TOGGLE_AUTH";

export const toggleAuth = (payload) => {
    return {
        type : TOGGLE_AUTH,
        payload
    }
}