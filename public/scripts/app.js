"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
        _inherits(IndecisionApp, _React$Component);

        function IndecisionApp(props) {
                _classCallCheck(this, IndecisionApp);

                var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

                _this.state = {
                        title: 'Indecision App',
                        subtitle: "Put your Life in the Hands OF Computer",
                        options: []
                };
                _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
                _this.randomSelection = _this.randomSelection.bind(_this);
                _this.formSubmit = _this.formSubmit.bind(_this);
                return _this;
        }

        _createClass(IndecisionApp, [{
                key: "handleRemoveAll",
                value: function handleRemoveAll() {

                        this.setState(function () {
                                return {
                                        options: []
                                };
                        });
                }
        }, {
                key: "randomSelection",
                value: function randomSelection() {
                        var index = Math.floor(Math.random() * this.state.options.length);
                        alert(this.state.options[index]);
                }
        }, {
                key: "formSubmit",
                value: function formSubmit(option) {
                        if (!option) {
                                return "Enter the valid value";
                        } else if (this.state.options.indexOf(option) > -1) {
                                return "this Option is already Exist";
                        }
                        this.setState(function (prevState) {
                                return {
                                        options: prevState.options.concat(option)
                                };
                        });
                }
        }, {
                key: "render",
                value: function render() {
                        return React.createElement(
                                "div",
                                null,
                                React.createElement(Header, { title: this.state.title, subtitle: this.state.subtitle }),
                                React.createElement(Action, {
                                        disabled: this.state.options.length > 0,
                                        randomSelection: this.randomSelection

                                }),
                                React.createElement(Option, {
                                        option: this.state.options,
                                        handleRemoveAll: this.handleRemoveAll,
                                        formSubmit: this.formSubmit
                                })
                        );
                }
        }]);

        return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
        _inherits(Header, _React$Component2);

        function Header() {
                _classCallCheck(this, Header);

                return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
        }

        _createClass(Header, [{
                key: "render",
                value: function render() {

                        return React.createElement(
                                "div",
                                null,
                                React.createElement(
                                        "h1",
                                        null,
                                        this.props.title
                                ),
                                React.createElement(
                                        "p",
                                        null,
                                        this.props.subtitle
                                )
                        );
                }
        }]);

        return Header;
}(React.Component);

;

var Action = function (_React$Component3) {
        _inherits(Action, _React$Component3);

        function Action() {
                _classCallCheck(this, Action);

                return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
        }

        _createClass(Action, [{
                key: "render",
                value: function render() {
                        return React.createElement(
                                "div",
                                null,
                                React.createElement(
                                        "button",
                                        { onClick: this.props.randomSelection,
                                                disabled: !this.props.disabled },
                                        "   what Shoould I "
                                )
                        );
                }
        }]);

        return Action;
}(React.Component);

;

var Option = function (_React$Component4) {
        _inherits(Option, _React$Component4);

        function Option(props) {
                _classCallCheck(this, Option);

                var _this4 = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

                _this4.formAdd = _this4.formAdd.bind(_this4);
                _this4.state = {
                        error: undefined
                };

                return _this4;
        }

        _createClass(Option, [{
                key: "formAdd",
                value: function formAdd(e) {
                        e.preventDefault();
                        var option = e.target.elements.option.value;
                        var error = this.props.formSubmit(option);
                        this.setState(function () {
                                return {
                                        error: error
                                };
                        });
                }
        }, {
                key: "render",
                value: function render() {
                        return React.createElement(
                                "div",
                                null,
                                this.state.error && React.createElement(
                                        "p",
                                        null,
                                        this.state.error
                                ),
                                React.createElement(
                                        "button",
                                        { onClick: this.props.handleRemoveAll },
                                        "Remove All"
                                ),
                                this.props.option.map(function (map) {
                                        return React.createElement(
                                                "p",
                                                { key: map },
                                                " ",
                                                map,
                                                " "
                                        );
                                }),
                                React.createElement(
                                        "form",
                                        { onSubmit: this.formAdd },
                                        React.createElement("input", { type: "text", name: "option" }),
                                        React.createElement(
                                                "button",
                                                null,
                                                "submit"
                                        )
                                )
                        );
                }
        }]);

        return Option;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
