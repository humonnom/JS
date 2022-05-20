const array = [1, 2, 3];

array[6] = 4.56;
console.log(array);

// run with '--trace-elements-transitions' flag
// like => node --trace-elements-transitions filename.js

//> result
// elements transition [PACKED_SMI_ELEMENTS -> PACKED_ELEMENTS] in ~+11 at internal/bootstrap/loaders.js:171 for 0x310fe9a32e89 <JSArray[2]> from 0x310fec68c9e9 <FixedArray[2]> to 0x310fec68c9e9 <FixedArray[2]>
// elements transition [PACKED_SMI_ELEMENTS -> PACKED_ELEMENTS] in ~+11 at internal/bootstrap/loaders.js:171 for 0x310fec68ca09 <JSArray[2]> from 0x310fec68ca39 <FixedArray[2]> to 0x310fec68ca39 <FixedArray[2]>
// elements transition [PACKED_SMI_ELEMENTS -> HOLEY_DOUBLE_ELEMENTS] in ~+12 at /Users/juepark/js/array/array_status.js:3 for 0x310fc1a51b81 <JSArray[3]> from 0x310fea090401 <FixedArray[3]> to 0x310fc1a51ba1 <FixedDoubleArray[26]>