class History {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  getLength() {
    return this.count;
  }

  push(item) {
    item = JSON.parse(JSON.stringify(item));
    this.items.push(item);
    this.count = this.count + 1;
  }

  pop() {
    if(this.count > 0) {
      this.count = this.count - 1;
    }
      
    return this.items.pop();
  }

  peek() {
    return this.items.slice(-1)[0];
  }

  clear() {
    this.items = [];
  }
}

export const history = new History();