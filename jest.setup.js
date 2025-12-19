import '@testing-library/jest-dom';

// Polyfill for TextEncoder/TextDecoder
if (typeof global.TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util');
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

// Polyfill for crypto if needed
if (typeof global.crypto === 'undefined') {
  global.crypto = {
    getRandomValues: (arr) => require('crypto').randomFillSync(arr),
  };
}
