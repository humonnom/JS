const array = [1, 2, 3];

array[6] = 4.56;

// run with '--trace-elements-transitions' flag
// like => node --trace-elements-transitions filename.js

//> result
//elements transition [PACKED_SMI_ELEMENTS -> PACKED_ELEMENTS] in ~+11 at internal/bootstrap/loaders.js:171 for 0x24cf2e9b2e89 <JSArray[2]> from 0x24cf6218c9e9 <FixedArray[2]> to 0x24cf6218c9e9 <FixedArray[2]>
//elements transition [PACKED_SMI_ELEMENTS -> PACKED_ELEMENTS] in ~+11 at internal/bootstrap/loaders.js:171 for 0x24cf6218ca09 <JSArray[2]> from 0x24cf6218ca39 <FixedArray[2]> to 0x24cf6218ca39 <FixedArray[2]>
//elements transition [PACKED_SMI_ELEMENTS -> PACKED_DOUBLE_ELEMENTS] in ~+12 at /Users/juepark/js/array/packed.js:2 for 0x24cf825cd3f9 <JSArray[3]> from 0x24cf2d350401 <FixedArray[3]> to 0x24cf825cd419 <FixedDoubleArray[22]>
