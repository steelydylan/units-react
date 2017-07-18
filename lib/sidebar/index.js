'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('unitscss/dist/partial/sidebar.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var items = _ref.items;
    return _react2.default.createElement(
        'div',
        { className: 'uc-sidebar-wrap' },
        _react2.default.createElement(
            'div',
            { className: 'uc-sidebar-list' },
            items.map(function (item) {
                return item.url ? _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                        'strong',
                        null,
                        'label'
                    )
                ) : _react2.default.createElement(
                    'a',
                    { href: item.url, className: item.current ? '_is-current' : '' },
                    item.label
                );
            })
        )
    );
};