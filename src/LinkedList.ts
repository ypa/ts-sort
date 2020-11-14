import { Sorter } from './Sorter';


class Node {
  next: (Node | null) = null;

  constructor(public data: number) { }
}

export class LinkedList extends Sorter {
  head: (Node | null) = null;

  add(data: number): void {
    const node = new Node(data);

    // Is the linked list empty
    if (!this.head) {
      this.head = node;
      return;
    }

    // Traversing through the linked list
    // and get to the last node
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    // now point the last node to
    // the node being added
    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;

    let node: (Node | null) /*need a type hint as that can be null*/ = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    // real implementation of swapping nodes is complicated
    // so we'll cheat a little by just swapping the
    // values inside the nodes
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: (Node | null) = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}



