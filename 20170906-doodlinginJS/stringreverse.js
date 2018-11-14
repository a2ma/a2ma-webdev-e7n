function reverseStringShort(str) {
    return str.split('').reverse().join('');
  }
  
  reverseString("hello");
  
  LONGER
  function reverseStringLong(str) {
  var array = str.split('');
  var reversedArray = array.reverse();
  reversedString = reversedArray.join('');
  return reversedString;
  }