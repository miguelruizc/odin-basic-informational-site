// Node implementation
const http = require('node:http');
const fs = require('node:fs/promises');

const server = http.createServer((req, res) => {
	if (req.method === 'GET') {
		switch (req.url) {
			case '/': {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				fs.readFile('./html/index.html')
					.then((data) => {
						res.end(data);
					})
					.catch((err) => console.log(err));
				break;
			}
			case '/about': {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				fs.readFile('./html/about.html')
					.then((data) => {
						res.end(data);
					})
					.catch((err) => console.log(err));
				break;
			}
			case '/contact-me': {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				fs.readFile('./html/contact-me.html')
					.then((data) => {
						res.end(data);
					})
					.catch((err) => console.log(err));
				break;
			}
			case '/favicon.ico': {
				break;
			}
			default: {
				res.writeHead(404, { 'Content-Type': 'text/html' });
				fs.readFile('./html/404.html')
					.then((data) => {
						res.end(data);
					})
					.catch((err) => console.log(err));
			}
		}
	}
});

server.listen(8080, () => console.log('Server running on port 8080'));
