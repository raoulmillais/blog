var Connect = require('connect'),
	gzip = require('connect-gzip');

module.exports = Connect.createServer(
  Connect.logger(),
  Connect.favicon(),
  gzip.gzip(),
  require('wheat')(__dirname)
);


