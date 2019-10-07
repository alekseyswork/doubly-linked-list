const Node = require('./node');

class LinkedList {
    constructor() {
        this.data = new Array();
    }

    append(data) {
        let prev = this.data.length > 0 ? this.data[this.data.length - 1] : new Node();
        let temp = new Node(data, prev, new Node());
        this.data.push(temp)
        return this;
    }
    get length() {
        return this.data.length;
    }
    get _tail() {
        return this.data[this.data.length - 1];

    }
    get _head() {
        return this.data[this.data.length - 1];

    }


    head() {
        if (this.data.length > 0) {
            return this.data[0].data;
        }
        return null;
    }

    tail() {
        if (this.data.length > 0) {
            return this.data[this.data.length - 1].data;
        }
        return null;
    }

    at(index) {
        if (this.data.length > 0) {
            return this.data[index].data;
        }
        return null;
    }

    insertAt(index, data) {
        let next = this.data[index];

        let prev = this.data[index - 1];
        let tempdata = new Node(data, prev, next);
        if (this.data.length > 0) {
            this.data.splice(index, 0, tempdata);
        }

    }

    isEmpty() {
        return !this.data.length > 0;
    }

    clear() {
        this.data = new Array();
        return this;
    }

    deleteAt(index) {

        this.data.splice(index, 1);
        return this;
    }

    reverse() {
        this.data = this.data.reverse();
        return this;
    }

    indexOf(data) {
        let temp = this.data.filter(x => x.data == data)[0];
        return this.data.indexOf(temp)
    }
}
// append(data)
// Should add node to the end of the list

// head()
// Should return data from the head of the list

// tail()
// Should return data from the end of the list

// at(index)
// Should return data of node by specified index

// insertAt(index)
// Should insert data to specified index

// isEmpty()
// Should return true if list is empty, false otherwise

// clear()
// Should clear the list

// deleteAt(index)
// Should delete element by specified index

// reverse()
// Should reverse the list

// indexOf(value)
// Should return index of specified value or - 1 if list doesn't contain such

// const list = new LinkedList();
// list.append(4).reverse().deleteAt(0).clear().insertAt(0, 3);
// const data = 34;
// const position = 1;

// list.append(32);
// list.append(47);

// list.insertAt(position, data);
// list.at(position)

module.exports = LinkedList;
