/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');

const docs = path.join(__dirname, '../src/docs');
const dist = path.join(__dirname, '../dist/app/src/docs');

const run = async () => {
  try {
    const filesMd = glob.sync('**/*.md', { cwd: docs });

    const files = [...filesMd];

    await Promise.all(files.map((file) => fs.copy(path.resolve(docs, file), path.resolve(dist, file))));

    console.log('Docs copied successfully.');
  } catch (error) {
    console.log(error);
  }
};

run();
