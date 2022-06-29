// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

const TypedArrays = [
  { 'Type': 'Int8Array', 'UnitBytes': 1 },
  { 'Type': 'Uint8Array', 'UnitBytes': 1 },
  { 'Type': 'Uint8ClampedArray', 'UnitBytes': 1 },
  { 'Type': 'Int16Array', 'UnitBytes': 2 },
  { 'Type': 'Uint16Array', 'UnitBytes': 2 },
  { 'Type': 'Int32Array', 'UnitBytes': 4 },
  { 'Type': 'Uint32Array', 'UnitBytes': 4 },
  { 'Type': 'Float32Array', 'UnitBytes': 4 },
  { 'Type': 'Float64Array', 'UnitBytes': 8 },
]

const byteLength = 16; // Needs to be multiple of 2
const buffer = new ArrayBuffer(byteLength);
// const View = new Int8Array(buffer).fill(0xf0)
const View1 = new DataView(buffer);

for (let i = 0; i < byteLength; i++) {
  View1.setInt8(i, (i << 4) | (0x10 - 1 - i));
}

// View1.setInt8(0x10)
const int8Array = new Int8Array(buffer)
const uint8Array = new Uint8Array(buffer)
const uint8ClampedArray = new Uint8ClampedArray(buffer)
const int16Array = new Int16Array(buffer)
const uint16Array = new Uint16Array(buffer)
const int32Array = new Int32Array(buffer)
const uint32Array = new Uint32Array(buffer)
const float32Array = new Float32Array(buffer)
const float64Array = new Float64Array(buffer)

// Little-Endian 小端（直觉），Default
console.log(
  buffer, '\n',
  int8Array, '\n',
  uint8Array, '\n',
  uint8ClampedArray, '\n',
  int16Array, '\n',
  uint16Array, '\n',
  int32Array, '\n',
  uint32Array, '\n',
  float32Array, '\n',
  float64Array, '\n',
  buffer, '\n',
);

// getInt16(), Big-Endian 大端（直观）, Default
// <0f 1e 2d 3c 4b 5a 69 78 87 96 a5 b4 c3 d2 e1 f0>
const View2 = new DataView(buffer, 5, 4); //from byte 8 for the next 4 bytes
console.log(View2.getUint16(0, true)); // 69 5α => 01011001 10001010
console.log(View2.getUint16(1, true)); // 78 69 => 01111000 01011001
console.log(View2.getUint16(2, true)); // 87 78 => 10000111 01111000
console.log(View2.getUint8(3, true)); // 87 => 10000111

console.log(View2.getInt16(0, true)); // 69 5α => 01011001 10001010
console.log(View2.getInt16(2, true));
/** 87 78
 * 10000111 01111000
 * 01111000 10000111 = 30855
 * 0x8778 + 30855 = -1
 */
// console.log(View2.getInt16(1));
