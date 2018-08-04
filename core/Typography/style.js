var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  margin: 0 0 1rem 0;\n  padding: 0;\n\n\n'], ['\n  color: ', ';\n  margin: 0 0 1rem 0;\n  padding: 0;\n\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\n  ', ';\n  font-weight: 500;\n  font-size: 3.8rem;\n  line-height: 1.2;\n\n'], ['\n\n  ', ';\n  font-weight: 500;\n  font-size: 3.8rem;\n  line-height: 1.2;\n\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', ';\n  font-weight: 500;\n  font-size: 3rem;\n  line-height: 1.3;\n\n'], ['\n  ', ';\n  font-weight: 500;\n  font-size: 3rem;\n  line-height: 1.3;\n\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', ';\n  font-weight: 500;\n  font-size: 2.4rem;\n  line-height: 1.4;\n\n'], ['\n  ', ';\n  font-weight: 500;\n  font-size: 2.4rem;\n  line-height: 1.4;\n\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  ', ';\n  font-weight: 500;\n  font-size: 2rem;\n  line-height: 1.4;\n\n'], ['\n  ', ';\n  font-weight: 500;\n  font-size: 2rem;\n  line-height: 1.4;\n\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  ', ';\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 1.4;\n\n'], ['\n  ', ';\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 1.4;\n\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  ', ';\n  font-weight: 500;\n\n  font-size: 1.4rem;\n  line-height: 1.4;\n'], ['\n  ', ';\n  font-weight: 500;\n\n  font-size: 1.4rem;\n  line-height: 1.4;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  ', ';\n\n  font-weight: 400;\n  font-size: 1.6rem;\n  line-height: 1.4;\n\n'], ['\n  ', ';\n\n  font-weight: 400;\n  font-size: 1.6rem;\n  line-height: 1.4;\n\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  ', ';\n\n  font-weight: 400;\n  font-size: 1.4rem;\n  line-height: 1.4;\n\n'], ['\n  ', ';\n\n  font-weight: 400;\n  font-size: 1.4rem;\n  line-height: 1.4;\n\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';

var baseTypography = css(_templateObject, function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return color ? color : theme.text.primary;
});

export var H1 = styled.h1(_templateObject2, baseTypography);

export var H2 = styled.h2(_templateObject3, baseTypography);

export var H3 = styled.h3(_templateObject4, baseTypography);

export var H4 = styled.h4(_templateObject5, baseTypography);

export var H5 = styled.h5(_templateObject6, baseTypography);

export var H6 = styled.h6(_templateObject7, baseTypography);

export var P = styled.p(_templateObject8, baseTypography);

export var Span = styled.span(_templateObject9, baseTypography);