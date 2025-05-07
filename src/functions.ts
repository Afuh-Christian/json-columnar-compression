



export function CompressJsonToColumnar(jsonData:any): any{
   
    if(jsonData){
  
    if(Array.isArray(jsonData)){
      if(typeof jsonData[0] !== "object") return jsonData
    let keys = Object.keys(jsonData?.[0])
    let array : any = []
    for(let i = 0; i < keys.length; i++){
      let key = keys[i]
       array.push([key ,Array.isArray(jsonData)?
            jsonData?.map((item) => {
              if(Array.isArray(item?.[key])){
                if(item?.[key]?.length === 0) return null
                return CompressJsonToColumnar(item?.[key])
              }else {
               return item?.[key]
              }
              
            })
            :
                typeof jsonData === "object" ?
                  Array.isArray(jsonData[key])? CompressJsonToColumnar(jsonData[key]):
                   [jsonData[key]]
            :
             null])
    };
    return array
    }else if(typeof jsonData === "object"){
      let keys = Object.keys(jsonData)
      let obj :any = {}
      keys.forEach((key)=> {
        if(Array.isArray(jsonData[key])){
          obj[key] = CompressJsonToColumnar(jsonData[key])
        }else if(typeof jsonData[key] === "object"){
          obj[key] = CompressJsonToColumnar(jsonData[key])
        }else {
          obj[key] = jsonData[key]
        }
      })
      return obj
    }
  
  }else {
    return jsonData
  }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  export function DecompressColumnarToJson(objectData:any){
    if(objectData){
    if(Array.isArray(objectData)){
  
      if(!Array.isArray(objectData[0])) return objectData
  
    let keys = objectData.map(list => list?.[0])
    return objectData[0][1].map((item:any , index:any) => {
      let obj:any = {}
  
      for(let i = 0; i < keys.length; i++){
        if(objectData?.[i]?.[1]?.[index]){
          if(Array.isArray(objectData[i][1][index])){
            obj[keys[i]] = DecompressColumnarToJson(objectData[i][1][index])
          } else if(typeof objectData[i][1][index] === "object"){
            obj[keys[i]] = DecompressColumnarToJson(objectData[i][1][index])
          }else {
            obj[keys[i]] = objectData[i][1][index]
          }
        }else {
          obj[keys[i]] = objectData?.[i]?.[1]?.[index]
        }
      }
      return obj
    })
  
  }else if(typeof objectData === "object") {
  
    let keys = Object.keys(objectData)
      let obj:any = {}
      keys.forEach((key)=> {
        if(Array.isArray(objectData?.[key])){
          obj[key] = DecompressColumnarToJson(objectData[key])
        }else if(typeof objectData?.[key] === "object"){
          obj[key] = DecompressColumnarToJson(objectData[key])
        }else {
          obj[key] = objectData?.[key]
        }
      })
      return obj
  }
  }else {
    return objectData
  }
  }