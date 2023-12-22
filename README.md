# Sandbox to reproduce specific `gzip-size` library bug

[Gzip Size Bug link](https://github.com/sindresorhus/gzip-size/issues/23)

## Steps to reproduce
- download
- `npm run build`
- `npm run start`

## Expected Failure

```
throw Error('Dynamic require of "' + x + '" is not supported');
Error: Dynamic require of "stream" is not supported
```
