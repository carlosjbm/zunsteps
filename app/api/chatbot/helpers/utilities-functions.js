export function obtenerMayorPeso(arr) {
  if (arr) {
    return arr.reduce((max, item) => (item.weight > max.weight ? item : max));
  }
}
