const get = fs.readFileSync('../../../db/backup.json');
const data = JSON.parse(get);
const write = () => {
  fs.writeFileSync('backup.json', JSON.stringify(data));
};

module.exports = { get, data, write };
