const getData = (data, count) => {
   return data.slice(0, count);
};

// TODO функция c двумя параметрами getUsers(data-масив, firstName-параметр)
const getUsers = (data, firstName) => {
    //поиск строки в массиве
    function Search(obj) {
        return obj.indexOf(firstName) > -1;
    }
    //обертка для поиска и фильтра
    function handler(item) {
        if (Search(item.firstName) === true) {
            return true
        }
        else {
            return false;
        }
    }
    return data.filter(handler);
 };

module.exports = {
    getData,
    getUsers
};
