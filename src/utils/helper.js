import base64 from 'base-64';

export async function arrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;

  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return base64.encode(binary);
}

export const getExtension = url => {
  return url.split('.').pop();
};

export const generateFilePath = (directory, fileName, extension) => {
  return `${directory}/${fileName}.${extension}`;
};
