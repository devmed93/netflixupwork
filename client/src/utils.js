const truncate = (str, n) => {
    return str?.length <= n ? str : str.substr(0, n) + "...";
};

const removeLastComma = (strArr) => {
    const str = strArr?.join("  ");
    return str?.substring(0, str?.length - 1);
};
const getFirstNthObjects = (arr, n) => {
    let counter = 0;
    let newArr = [];
    while (counter < arr?.length && counter < n) {
        newArr.push(arr[counter++]);
    }
    return newArr;
};
const getDirectors = (crew) => {
    return crew.filter((crewMember) => crewMember.department === "Directing");
};

const getMovieDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const restOfMinutes = minutes % 60;
    return `${hours}h ${restOfMinutes}min`;
};

export {
    truncate,
    removeLastComma,
    getFirstNthObjects,
    getDirectors,
    getMovieDuration,
};
