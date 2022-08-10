export const QUERY = "QUERY";

export const query = (payload) => {
    return {
        type : QUERY,
        payload
    }
}