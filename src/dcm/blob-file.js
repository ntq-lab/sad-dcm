import fs from 'fs';
import path from 'path';

const storagePath = path.resolve(__dirname, 'blob-files');

exports.file = {
  //TODO: save file from stream
  save: (filePath) => {
    if (!filePath) throw new Error('File path is empty...');

    const fileName = path.basename(filePath);
    const destination = path.resolve(storagePath, fileName);

    //TODO: use read/wirte sync
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw new Error(err);

      if (!fs.existsSync(storagePath)) fs.mkdir(storagePath);

      fs.writeFile(destination, data, (err) => {
        if (err) throw new Error(err);
      });
    });
  },
  get: (name) => {
    if (!name) throw new Error('File name is empty...');

    const filePath = path.resolve(__dirname, storagePath, name);

    if (!fs.existsSync(filePath)) throw new Error('File not exists...');

    return fs.readFileSync(filePath, 'utf8');
  },
};


