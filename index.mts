import { gzipSizeFromFile } from 'gzip-size';

const filePath = './seed.jpg';

const size = await gzipSizeFromFile(filePath);

console.log(size);
