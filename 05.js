var Http = require('http');

Http.get("http://httpbin.org/get", res => {
  let data = ""

  res.on("data", d => {
    data += d
  })
  res.on("end", () => {
    console.log(data)
  })
})

