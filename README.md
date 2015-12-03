# in-browser-download

Download a string or an ArrayBuffer as a file in the browser.

Mostly a convenience wrapper for [datauri-download](https://www.npmjs.com/package/datauri-download) and [base64-arraybuffer](https://www.npmjs.com/package/base64-arraybuffer).

## Installing

With [npm](http://npmjs.org) do:

```
npm install in-browser-download
```

## Examples

### Text content with a text string

```js
var download = require('in-browser-download');

download('some text string', 'text-file.txt');
```

### Binary content with an ArrayBuffer

```js
var download = require('in-browser-download');

var buffer = (new Uint8Array([1, 2, 3, 4, 5])).buffer;

download(buffer, 'binary-file.dat');
```

### Binary content with a base64 string

For binary data, it is recommended to use an ArrayBuffer instead.

```js
var download = require('in-browser-download');

// set base64string to a valid base64 string somehow

download(base64string, 'binary-file.dat, 'application/binary', 'base64');
```

## API

```js
download (data, filename, mimeType, encoding);
```

### Arguments

 * data : The content of the file to download as a string or an ArrayBuffer.
 * filename : The name of the file to download.
 * mimeType : Optional. The mime-type of the file to download, defaults to either text/plain or application/binary depending on the type of the data.
 * encoding : Optional. The encoding to use, defaults to 'charset=utf8' with a string data, ignored with an ArrayBuffer.

## History

### 1.0.0 (2015-12-03) :

- First release

## License

MIT
