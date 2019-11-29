export default class StringUtil {
    static getRandomId() {
        return (
            '_' +
            Math.random()
                .toString(36)
                .substr(2, 9)
        );
    }
}
