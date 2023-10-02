import _ from 'lodash';

_.mul = function (array: number[]): number {
  return array.reduce((total, value) => total * value, 1);
};

export default _;
