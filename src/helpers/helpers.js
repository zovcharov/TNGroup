// eslint-disable-next-line import/prefer-default-export
export const formatDateToString = (dateString) => {
    const date = new Date(dateString);
    // 01, 02, 03, ... 29, 30, 31
    const dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
    // 01, 02, 03, ... 10, 11, 12
    const MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    // 1970, 1971, ... 2015, 2016, ...
    const yyyy = date.getFullYear();

    // create the format you want
    return (`${dd}.${MM}.${yyyy}`);
};
