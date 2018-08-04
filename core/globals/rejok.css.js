var _templateObject = _taggedTemplateLiteral(['\n@import url(\'https://fonts.googleapis.com/css?family=Roboto\');\n\n *,\n *::after,\n *::before {\n   margin: 0;\n   padding: 0;\n   box-sizing: inherit; }\n\n html {\n   font-size: 62.5%; }\n\n body {\n   font-family: "Roboto", "Helvetica", "Arial", sans-serif;\n   font-weight: 400;\n   box-sizing: border-box;\n   line-height: 1.7;\n   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  }\n\n\n'], ['\n@import url(\'https://fonts.googleapis.com/css?family=Roboto\');\n\n *,\n *::after,\n *::before {\n   margin: 0;\n   padding: 0;\n   box-sizing: inherit; }\n\n html {\n   font-size: 62.5%; }\n\n body {\n   font-family: "Roboto", "Helvetica", "Arial", sans-serif;\n   font-weight: 400;\n   box-sizing: border-box;\n   line-height: 1.7;\n   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  }\n\n\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { injectGlobal } from 'styled-components';

export var globalConfig = function globalConfig() {
  return injectGlobal(_templateObject);
};