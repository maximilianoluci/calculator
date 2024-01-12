// stack.ts

interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
  length: number;
}

class Stack<T> implements IStack<T> {
  private storage: T[] = [];
  private _length: number = 0;

  constructor(private capacity: number = Infinity) {}

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw new Error("Stack has reached max capacity, cannot add more items");
    }
    this.storage.push(item);
    this.updateLength();
  }

  pop(): T | undefined {
    const poppedItem = this.storage.pop();
    this.updateLength();
    return poppedItem;
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }

  size(): number {
    return this._length;
  }

  get length(): number {
    return this.size();
  }

  private updateLength(): void {
    this._length = this.size();
  }
}

export default Stack;
