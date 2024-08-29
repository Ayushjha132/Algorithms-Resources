

// hash tables don't have concept of order. it's items are all over.  

class HashTable {

  constructor(size) {
    this.data = new Array(size)
  }

  // _(underscore) repersent that this is a private property but in js this is not. it can be accessed from the outside
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
      // dividing any biiger number with a numebr that bring result into the range of that number.
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];  //create empty Array
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  // O(1) in best case  
  //[[12, asasd], [23, asdad],    ]

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];  //return value of key 
        }
      }
    } //O(1) in best case     O(n) in worst case 
    return undefined;
  }

  keys() {
    let keyArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        // console.log('if data available i=', i, this.data[i][0])
        for (let j = 0; j < this.data[i].length; j++) {
          //console.log('second loop', this.data[i][j][0]);
          //console.log('i=', i, ' j=', j, 'data=', this.data[i][j])
          keyArray.push(this.data[i][j][0]);
        }
      }
    }
    return keyArray;
  }
}

// structure of data inside the small hashmap (of size 2)
// [ [ [23, 'asda'], [34, 'dsfs'], [12, 'aasd'] ], [[45, 'ffd']],      ]
//                          1                           2
//             1         2             3                1 
//

const hashTable = new HashTable(2);

hashTable.set('grapes', 1000)
hashTable.set('apples', 140)
hashTable.set('orages', 70)
hashTable.set('banana', 40)
//console.log(hashTable.get('apples'));


//console.log(hashTable.set('kiwi', 400))
console.log('keys method', hashTable.keys());
