
const list = new Array();


list(1, 2, 3, 4, 5, 6);

function listing(array) {
  array.forEach(element => {
    let count = 0;
    count++;
    console.log(count, element)
  });
}

listing(list);



