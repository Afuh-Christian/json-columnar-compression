
<div>

<h1>Json to Columnar Compression </h1> 

<ul>
<li>Efficiently Converts Json to Columnar version and back for faster transmission and storage </li>
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
    "children": [
      { "id": 21, "name": "Ben", "age": 8 }
    ]
  },
  {
    "id": 3,
    "name": "Charlie",
    "age": 25,
    "city": "Chicago",
    "children": []
  }
]



const compressed = CompressJsonToColumnar(array)

const decompssed = DecompressColumnarToJson(compressed)



```

