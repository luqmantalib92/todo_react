class Database {
    static count = 1;
    static data = [{ id: 0, title: "This is task number one!" }, { id: 1, title: "This is task number two!!!" },];

    static getCount() {
        return this.count;
    }

    static setCount(number) {
        this.count += number;
    }

    static getData() {
        return this.data;
    }

    static addData(title) {
        var count = this.data.length;
        console.log("Add data: " + title);
        this.data.push({ id: count, title: title });
    }
}

export default Database;