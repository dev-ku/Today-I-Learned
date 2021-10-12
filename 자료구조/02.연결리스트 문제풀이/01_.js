/* user code */
function Train(number) {
  this.number = number;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.append = function(value){
  let train = new Train(value);
  let current = this.head;

  if(this.head === null) this.head = train;
  else{
    while(current.next != null){
      current = current.next;
    }

    current.next = train;
  }

  this.length++;
}

function answer(nums) {
  let ll = new LinkedList();

  // 코드 구현 시작 영역
  for(let num of nums){
    ll.append(num);
  }
  // 코드 구현 종료 영역

  return ll;
}

/* main code */
let input = [
  // TC: 1
  [4, 7, 1, 10, 6],

  // TC: 2
  [3, 10, 6, 9, 11, 3, 4],

  // TC: 3
  [5, 8, 7, 3, 4, 1, 2, 7, 10, 7],
];

LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.number} -> `);
  }
  console.log("null");
};

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  answer(input[i]).printNode();
}
