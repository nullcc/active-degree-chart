const path = require('path');
const CURRENT_PATH = path.resolve(__dirname);
const ROOT_PATH = path.join(__dirname, '../../'); // 项目根目录
const MODULES_PATH = path.join(ROOT_PATH, './node_modules'); // node_modules目录
const ASSET_PATH = path.join(ROOT_PATH, './public/assets'); // 最后输出放置公共资源的目录

module.exports = {
  ROOT_PATH: ROOT_PATH,
  ASSET_PATH: ASSET_PATH,
  CURRENT_PATH: CURRENT_PATH,
  MODULES_PATH: MODULES_PATH
};
