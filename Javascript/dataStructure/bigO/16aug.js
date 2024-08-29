
const nemo = ['nemo']
const everybody = ['elephant', 'lion', 'tiger', 'dolphine', 'goat']

const largeArray = new Array(1000).fill('nemo');

function findRunningTime(arr) {
  let t0 = performance.now();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'nemo')
      console.log('nemo');
  }

  let t1 = performance.now();

  console.log('calling time taken to find nemo took', t1 - t0);

}


findRunningTime(nemo);

const findRunningTime2 = (arrs) => {
  arrs.forEach(arr => {
    if (arr === 'nemo') {
      console.log('nemo')
    }
  })

}

findRunningTime2(nemo)

const findRunningTime3 = (arrs) => {
  for (let i of arrs) {
    if (i === 'nemo') {
      console.log('nemo')
    }
  }
}

findRunningTime3(nemo)
