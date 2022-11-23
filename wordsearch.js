const transpose = function(matrix) {
  let arr = [];
  for (let i = 0; i < matrix[0].length; i++) {
      const col = [];
      for (let j = 0; j < matrix.length; j++) {
          col.push(matrix[j][i]);
      }
      arr.push(col);
  }
  return arr;
};

const wordSearch = (letters, word) => {
  const matrixed = transpose(letters);
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = matrixed.map(vs => vs.join(''));
  let bool = false;

  for (let l = 0; l < horizontalJoin.length; l++) {

      for (let j = 0; j < horizontalJoin[l].length; j++) {
      }
      if (horizontalJoin[l].includes(word)) {
          bool = true;
      }

      for (let p = 0; p < verticalJoin.length; p++) {

          for (let k = 0; k < verticalJoin[p].length; k++) {
          }
          if (verticalJoin[p].includes(word)) {
              bool = true;
          }
      }
  } return bool;
};
module.exports = wordSearch