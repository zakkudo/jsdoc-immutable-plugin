const path = require('path');


exports.handlers = {
  parseBegin: function(e) {
      const files = e.sourcefiles = e.sourcefiles || [];

      files.unshift(path.resolve(__dirname, 'typedefs.js'));
  }
}
