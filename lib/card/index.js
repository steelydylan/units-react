'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('unitscss/dist/partial/card.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var image = _ref.image,
      title = _ref.title,
      link = _ref.link,
      text = _ref.text,
      tag = _ref.tag;
  return _react2.default.createElement(
    'article',
    { className: 'uc-card _banner' },
    _react2.default.createElement(
      'a',
      { href: link, target: '_blank' },
      _react2.default.createElement('div', { className: 'uc-card-image', style: { backgroundImage: 'url(' + image + ')' } }),
      _react2.default.createElement(
        'h3',
        { className: 'uc-card-title' },
        title
      ),
      _react2.default.createElement(
        'p',
        null,
        text
      ),
      _react2.default.createElement(
        'p',
        { className: 'works-dev-tag' },
        tag
      )
    )
  );
};