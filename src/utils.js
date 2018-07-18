const spaceDelimitter = /\s+/;
const commaDelimitter = /\s*,\s*/;
const srcToDestCurrencyDelimitter = /\s+>|to|in\s+/;
const queryCheckr = /^(\d+\s+)?[a-zA-Z]{3}\s+>|to|in\s+[a-zA-Z]{3}(\s*,\s*[a-zA-Z]{3})*$/;

const noopFn = () => {};
const trim = (str = '') => str.trim();
const split = (str = '', regExp = commaDelimitter) => str.split(regExp);

const rAF = () => new Promise(requestAnimationFrame);

const logger = realm => {
  const style = 'color:#fff;display:block';
  return {
    info: (...msgs) => {
      console.log(
        `%c Convertr ${realm} %c ->`,
        `background:#26a69a;${style}`,
        '',
        ...msgs
      );
    },
    err: (...msgs) => {
      console.error(
        `%c Convertr ${realm} %c ->`,
        `background:red;${style}`,
        '',
        ...msgs
      );
    },
    warn: (...msgs) => {
      console.warn(
        `%c Convertr ${realm} %c ->`,
        `background:darkgoldenrod;${style}`,
        '',
        ...msgs
      );
    }
  };
};

export {
  rAF,
  trim,
  split,
  noopFn,
  logger,
  queryCheckr,
  spaceDelimitter,
  commaDelimitter,
  srcToDestCurrencyDelimitter
};
