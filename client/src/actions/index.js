const getNewLobbyId = () => {
    let number = Math.floor(Math.random() * 100);
    return number
}
    



// export const getResult = searchTerm => {
//     return async dispatch => {
//         dispatch(loading(searchTerm));
//         try {
//             console.log("Hello")
//             const longLat = await fetchLongLat(searchTerm);
//             const riseSet = await fetchSunriseSunset(longLat);
//             dispatch(loadResult(riseSet))
//         } catch (err) {
//             console.warn(err.message);
//             dispatch({ type: 'SET_ERROR', payload: err.message })
//         };
//     };
// };

export default getNewLobbyId;