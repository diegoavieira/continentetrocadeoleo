/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');

const libs = path.join(__dirname, '../libs');
const dist = path.join(__dirname, '../dist');

const run = async () => {
  try {
    const filesMd = glob.sync('**/*.md', { cwd: libs });
    const pkgJson = glob.sync('**/package.json', { cwd: libs });
    const license = glob.sync('**/LICENSE', { cwd: libs });

    const files = [...filesMd, ...pkgJson, ...license];

    await Promise.all(files.map((file) => fs.copy(path.resolve(libs, file), path.resolve(dist, file))));

    console.log('Libs files copied successfully.');
  } catch (error) {
    console.log(error);
  }
};

run();
