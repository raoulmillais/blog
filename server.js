var Connect = require('connect'),
	gzip = require('connect-gzip'),
	server;

server = Connect.createServer(
  Connect.logger(),
  Connect.favicon(),
  gzip.gzip(),
  require('wheat')(__dirname)
);

server.listen(3000);
