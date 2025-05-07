
<div>

<h1>Json to Columnar Compression </h1> 

<ul>
<li>Efficiently converts JSON to columnar format and back, enabling faster transmission and reduced storage. </li>
<li> This approach is especially beneficial when working with large datasets . </li>
<li> You can provide JSON in any structure or format. </li>
</ul>

</div>


<h3>Usage </h3>

```ts

import {CompressJsonToColumnar , DecompressColumnarToJson} from 'json-columnar-compression'




const array = [
  {
    "id": 1,
    "name": "Alice",
    "age": 28,
    "city": "New York",
    "children": [
      { "id": 11, "name": "Anna", "age": 5 },
      { "id": 12, "name": "Alex", "age": 7 }
    ]
  },
  {
    "id": 2,
    "name": "Bob",
    "age": 34,
    "city": "Los Angeles",
    "children": [{ "id": 21, "name": "Ben", "age": 8 }]
  },
  { "id": 3, "name": "Charlie", "age": 25, "city": "Chicago", "children": null }
]



const compressed = CompressJsonToColumnar(array)

// console.log(compressed)
// [
//   ["id", [1, 2, 3]],
//   ["name", ["Alice", "Bob", "Charlie"]],
//   ["age", [28, 34, 25]],
//   ["city", ["New York", "Los Angeles", "Chicago"]],
//   [
//     "children",
//     [
//       [
//         ["id", [11, 12]],
//         ["name", ["Anna", "Alex"]],
//         ["age", [5, 7]]
//       ],
//       [
//         ["id", [21]],
//         ["name", ["Ben"]],
//         ["age", [8]]
//       ],
//       null
//     ]
//   ]
// ]


const decompressed = DecompressColumnarToJson(compressed)

// console.log(decompressed)
// [
//   {
//     "id": 1,
//     "name": "Alice",
//     "age": 28,
//     "city": "New York",
//     "children": [
//       { "id": 11, "name": "Anna", "age": 5 },
//       { "id": 12, "name": "Alex", "age": 7 }
//     ]
//   },
//   {
//     "id": 2,
//     "name": "Bob",
//     "age": 34,
//     "city": "Los Angeles",
//     "children": [{ "id": 21, "name": "Ben", "age": 8 }]
//   },
//   { "id": 3, "name": "Charlie", "age": 25, "city": "Chicago", "children": null }
// ]


```

