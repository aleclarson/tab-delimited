const TypeError = require('type-error');

const TAB = '\t';
const LINE = '\n';

function parse(str) {
  if (typeof str != 'string')
    throw TypeError(String, str);

  let lines = str.split(LINE);
  let len = lines.length;

  if (len < 2) return [];

  let i = 0;
  let row = null;
  let rows = [];
  let columns = lines[0].split(TAB);

  let set = (val, i) =>
    row[columns[i]] = val;

  for (let i = 1; i < len; i++) {
    rows.push(row = {});
    lines[i].split(TAB).forEach(set);
  }

  return rows;
}

function stringify(data) {
  if (!Array.isArray(data))
    throw TypeError(Array, data);

  let columns = data[0];
  if (!Array.isArray(columns))
    throw TypeError(Array, columns);

  let str = columns.join(TAB);
  let len = data.length;

  for (let i = 1; i < len; i++) {
    let row = data[i];
    if (!row) continue;

    str += LINE;
    if (Array.isArray(row)) {
      str += row.join(TAB);
    } else {
      columns.forEach((k, i) => {
        if (i != 0) str += TAB;
        str += row[k];
      });
    }
  }

  return str;
}

exports.parse = parse;
exports.stringify = stringify;
