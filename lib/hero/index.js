'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('unitscss/dist/partial/hero.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var title = _ref.title,
        text = _ref.text,
        image = _ref.image,
        _ref$color = _ref.color,
        color = _ref$color === undefined ? '#333' : _ref$color;
    return _react2.default.createElement(
        'div',
        { className: 'uc-hero _full', style: { backgroundColor: color } },
        _react2.default.createElement('div', { className: 'uc-hero-bg', style: { backgroundImage: 'url(' + image + ')' } }),
        _react2.default.createElement(
            'h1',
            { className: 'uc-hero-title' },
            title
        ),
        _react2.default.createElement(
            'p',
            { className: 'uc-hero-text' },
            text
        )
    );
};