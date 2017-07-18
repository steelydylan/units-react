'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('unitscss/dist/partial/header.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var title = _ref.title,
        items = _ref.items,
        _ref$modifier = _ref.modifier,
        modifier = _ref$modifier === undefined ? '' : _ref$modifier;
    return _react2.default.createElement(
        'header',
        { className: 'uc-header _' + modifier },
        _react2.default.createElement(
            'h1',
            { className: 'uc-header-logo' },
            _react2.default.createElement(
                'a',
                { href: '/.' },
                title
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'uc-header-menu _hide-small' },
            items.map(function (item) {
                return _react2.default.createElement(
                    'a',
                    { href: item.url },
                    item.label
                );
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'uc-menu-btn _hide-medium _hide-large' },
            _react2.default.createElement(
                'button',
                null,
                _react2.default.createElement('i', { className: 'uc-menu-btn-icon' })
            )
        )
    );
};