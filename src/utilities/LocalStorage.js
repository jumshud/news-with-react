
class LocalStorage
{
    static setItem(key, val) {
        let data = JSON.stringify(val);
        localStorage.setItem(key, data);
    }

    static getItem(key) {
        let data = localStorage.getItem(key);
        return (data && data != 'undefined') ? JSON.parse(data) : null;
    }

    static removeItem(key) {
        localStorage.removeItem(key);
    }

    static clear() {
        localStorage.clear();
    }
}

export default LocalStorage;
