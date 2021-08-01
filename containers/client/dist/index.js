"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

const app = _express2.default.call(void 0, )
var _posix = require('path/posix');


app.use(_express2.default.static(_posix.resolve.call(void 0, __dirname, '../', 'public')))
app.use(_express2.default.static(_posix.resolve.call(void 0, __dirname, '../', 'dist')))






app.listen(3000, () => console.log('client is up'))