const http = require("http");

const product = require("./controllers/product")

const parseParams  = (searchParams) => {
    const params = new URLSearchParams(searchParams);
    return Array.from(params.entries()).reduce((
        acc, [key, value]) =>({
            ...acc, 
            [key]: value,
        }),
        {}
    );
};

const server = http.createServer(async (req, res) => {
    const [basePath, searchParams] = req.url.split('?');
    

    if (basePath === '/api/products') {
        const { code, data } =await product.getAll(parseParams(searchParams));
        res.writeHead(code);
        res.end(JSON.stringify(data));
    }
    else if (req.url.match(/\/api\/products\/\w+/)) {
        const urlElements = req.url.split('/');
        const id = urlElements[urlElements.length - 1];

        const {code, data} = await product.getById(id);
        res.writeHead(code);
        res.end(JSON.stringify(data))
    
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'Route no found'}));   
    }
});
const PORT = 8080;

server.listen(PORT, () => console.log('Server is running on port ${PORT}'));