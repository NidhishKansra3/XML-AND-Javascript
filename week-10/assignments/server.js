const http = require("http")

const jsonData = require("./controller/data_js")

const parseURLParams = (value) => {
    const params = new URLSearchParams(value);
  
    return Array.from(params.entries()).reduce(
      (acc, [key, value]) => ({ ...acc, [key]: value }),
      {}
    );
  };

const server = http.createServer(async (req, res) => {
    const [basePath, paramsString] = req.url.split("?");

  if (basePath === "/api/jsonData" && req.method === "GET") {
    const params = parseURLParams(paramsString);
        const { data, code } = await jsonData.getAll(params);
        res.writeHead(200, {"Content-Type" : "application/json"})   
        res.end(data);
    }

    else if (basePath.match(/\/api\/jsonData\/\w+/) && req.method === "GET") {
        const id = basePath.split("/")[3];
        const {code, data} = await jsonData.getById(id); 
        res.end(JSON.stringify(data));
    }

    else {
        res.writeHead(404, {"Content-Type" : "application/json"})
        res.end(JSON.stringify({message : 'No route Found'}));
    }
});

server.listen(8888);