"use strict";

var datauriDownload = require('datauri-download'),
    isArrayBuffer = require('is-array-buffer'),
    arraybufferToBase64 = require('base64-arraybuffer').encode;

/**
 * Download a string or an ArrayBuffer as a file in the browser
 * @param {string|ArrayBuffer} data The content of the file to download.
 * @param {string} [filename] The name of the file to download.
 * @param {string} [mimeType] The mime-type of the file to download, defaults to either text/plain or application/binary depending on the type of the data.
 * @param {string} [encoding] The encoding to use, defaults to 'charset=utf8' with a string data, ignored with an ArrayBuffer.
 */
var download = function download (data, filename, mimeType, encoding) {
    if (typeof data === 'string') {
        filename = filename || 'download.txt';
        mimeType = mimeType || 'text/plain';
        encoding = encoding || 'charset=utf8';
    } else if (isArrayBuffer(data)) {
        filename = filename || 'download.dat';
        mimeType = mimeType || 'application/binary';
        encoding = 'base64';
        data = arraybufferToBase64(data);
    } else {
        throw new Error('Data must either be a string or an ArrayBuffer');
    }

    datauriDownload(filename, mimeType + ';' + encoding, data);
};

module.exports = download;
