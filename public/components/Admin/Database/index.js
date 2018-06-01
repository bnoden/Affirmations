const backup = require('./backup');

const get = fs.readFileSync('../../../db/affirm.json');
const data = JSON.parse(get);
const write = () => {
  fs.writeFileSync('db.json', JSON.stringify(data));
};

module.exports = { get, data, write, backup };
