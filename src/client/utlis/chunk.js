/**
 * Split an array into an array of
 * equally sized arrays
 *
 * The last item may be less than `size` long
 */

function chunk(size, arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

export default chunk;
