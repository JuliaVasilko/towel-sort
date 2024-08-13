
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix?.map((item, index) => {
    if(index % 2 === 0) {
      return item;
    } else {
      return item.reverse();
    }
  }).flat() ?? [];
}
