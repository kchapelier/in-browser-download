# in-browser-download

Download a Blob, a string or an ArrayBuffer as a file in the browser.

The **1.x.x** versions of this package was mostly a convenience wrapper for [datauri-download](https://www.npmjs.com/package/datauri-download) and [base64-arraybuffer](https://www.npmjs.com/package/base64-arraybuffer).

Starting with **2.x.x**, the package does not have any dependency anymore and use newer APIs (namely [Blob Urls and TextEncoder](https://caniuse.com/#feat=bloburls,textencoder)). At the time of writing, TextEncoder is not supported yet in Edge so you might want to use a polyfill or use the **1.x.x** version of this package.

## Installing

With [npm](http://npmjs.org) do:

```
npm install in-browser-download
```

## Examples

### Text content with a text string

```js
const download = require('in-browser-download');

download('some text string', 'text-file.txt');
```

### Binary content with an ArrayBuffer

```js
const download = require('in-browser-download');

const buffer = (new Uint8Array([1, 2, 3, 4, 5])).buffer;

download(buffer, 'binary-file.dat');
```

## API

### download(data, filename)

Force the download of the data as a file with the given filename.

**Arguments**

 * **data :** The content of the file to download as a string or an ArrayBuffer.
 * **filename :** The name of the file to download.

### download.isSupported()

Check if all the required APIs are supported by the browser. Returns a boolean.

## History

### [2.0.0](https://github.com/kchapelier/in-browser-download/tree/2.0.0) (2019-05-04) :

- New implementation without any dependencies.

### [1.0.0](https://github.com/kchapelier/in-browser-download/tree/1.0.0) (2015-12-03) :

- First release

## License

MIT