'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _record = require('../../ethereum/record');

var _record2 = _interopRequireDefault(_record);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../../routes');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\STUDY MATERIAL\\Blockchain\\HealthRecord - Copy\\pages\\Login\\patient_log.js?entry';


var Patientlog = function (_Component) {
  (0, _inherits3.default)(Patientlog, _Component);

  function Patientlog(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Patientlog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Patientlog.__proto__ || (0, _getPrototypeOf2.default)(Patientlog)).call(this, props));

    _this.state = {
      errorMessagePatient: '',
      loadingPatient: false,
      loadingrecord: false,
      errorrecord: '',
      recordno: '',
      visible: false
    };

    _this.removePatient = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loadingPatient: true, errorMessagePatient: '' });

                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.next = 8;
                return _record2.default.methods.removePatient(_this.props.patient_name).send({
                  from: accounts[0]
                });

              case 8:

                _routes.Router.pushRoute('/');
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](2);

                _this.setState({ errorMessagePatient: _context.t0.message });

              case 14:

                _this.setState({ loadingPatient: false });

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 11]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.onSubmitrecord = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var accounts, record_summary, pres_summary;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loadingrecord: true, errorrecord: '' });

                _context2.prev = 2;
                _context2.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context2.sent;
                _context2.next = 8;
                return _record2.default.methods.getRecordByPatient(_this.state.recordno).call({ from: accounts[0] });

              case 8:
                record_summary = _context2.sent;
                _context2.next = 11;
                return _record2.default.methods.getPrescriptionByPatient(_this.state.recordno).call({ from: accounts[0] });

              case 11:
                pres_summary = _context2.sent;

                _this.setState({ visible: true });

                _this.setState({
                  p_name: record_summary[0],
                  d_name: record_summary[1],
                  h_name: record_summary[2],
                  visit_reason: record_summary[3],
                  ad_date: pres_summary[0],
                  dis_date: pres_summary[1],
                  prescripion: pres_summary[2],
                  sur_history: pres_summary[3]
                });

                //console.log(pres_summary[1]);

                // return ({p_name:summary[0]});


                //Router.pushRoute('/');
                _context2.next = 19;
                break;

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2['catch'](2);

                _this.setState({ errorrecord: _context2.t0.message });

              case 19:
                _this.setState({ loadingrecord: false });

              case 20:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[2, 16]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.state = {
      p_name: "",
      d_name: "",
      h_name: "",
      visit_reason: "",
      ad_date: "",
      dis_date: "",
      prescripion: "",
      sur_history: ""
    };
    return _this;
  }

  (0, _createClass3.default)(Patientlog, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      // const items = [ 
      //     'Drafts will now auto-save while writing',
      //   ]

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { style: { marginTop: '10px', color: '#6A89CC' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement(_semanticUiReact.Message, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 5, __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement(_semanticUiReact.Message.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, 'WELCOME ', this.props.patient_name), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, this.props.patient_address)), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, style: { marginLeft: '100px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        content: 'Home',
        icon: 'home',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      })))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, _react2.default.createElement(_routes.Link, { route: '/Login/addrecord', __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        content: 'Add Record',
        icon: 'add circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      })))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.removePatient, error: !!this.state.errorMessagePatient, __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        loading: this.state.loadingPatient,
        content: 'Remove Account',
        icon: 'remove circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessagePatient, __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      })))))), _react2.default.createElement(_semanticUiReact.Divider, { section: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, 'Want to see your past records..??'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmitrecord, error: !!this.state.errorrecord, __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, 'Record Number:'), _react2.default.createElement(_semanticUiReact.Input, {
        labelPosition: 'right',
        value: this.state.recordno,
        onChange: function onChange(event) {
          return _this3.setState({ recordno: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorrecord, __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loadingrecord, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, 'Submit!')), _react2.default.createElement(_semanticUiReact.Divider, { section: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }), this.state.visible && _react2.default.createElement(_semanticUiReact.Table, { style: { width: '10' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, { collapsing: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, _react2.default.createElement('b', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, 'Patient Name:')), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, this.state.p_name)), _react2.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, _react2.default.createElement('b', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, 'Doctor Name:')), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, this.state.d_name)), _react2.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, _react2.default.createElement('b', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, 'Hospital Name:')), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, this.state.h_name)), _react2.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, _react2.default.createElement('b', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, 'Disease:')), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, this.state.visit_reason)), _react2.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, _react2.default.createElement('b', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, 'Admission Date:')), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }, this.state.ad_date)), _react2.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }, _react2.default.createElement('b', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }, 'Discharge Date:')), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, this.state.dis_date)), _react2.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, _react2.default.createElement('b', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, 'Prescription Details:')), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, this.state.prescripion)), _react2.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }, _react2.default.createElement('b', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }, 'Surgical Details:')), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, this.state.sur_history))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var patient_name, patient_address;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _record2.default.methods.patient_name().call();

              case 2:
                patient_name = _context3.sent;
                _context3.next = 5;
                return _record2.default.methods.patient_address().call();

              case 5:
                patient_address = _context3.sent;

                console.log(patient_address);
                return _context3.abrupt('return', { patient_name: patient_name, patient_address: patient_address });

              case 8:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getInitialProps() {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Patientlog;
}(_react.Component);

exports.default = Patientlog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUGF0aWVudGxvZyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzMiIsIl90aGlzIiwiX19wcm90b19fIiwiY2FsbCIsInN0YXRlIiwiZXJyb3JNZXNzYWdlUGF0aWVudCIsImxvYWRpbmdQYXRpZW50IiwibG9hZGluZ3JlY29yZCIsImVycm9ycmVjb3JkIiwicmVjb3Jkbm8iLCJ2aXNpYmxlIiwicmVtb3ZlUGF0aWVudCIsIl9yZWYiLCJtYXJrIiwiX2NhbGxlZSIsImV2ZW50IiwiYWNjb3VudHMiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwic2VudCIsIm1ldGhvZHMiLCJwYXRpZW50X25hbWUiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsInQwIiwibWVzc2FnZSIsInN0b3AiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIiwib25TdWJtaXRyZWNvcmQiLCJfcmVmMiIsIl9jYWxsZWUyIiwicmVjb3JkX3N1bW1hcnkiLCJwcmVzX3N1bW1hcnkiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJnZXRSZWNvcmRCeVBhdGllbnQiLCJnZXRQcmVzY3JpcHRpb25CeVBhdGllbnQiLCJwX25hbWUiLCJkX25hbWUiLCJoX25hbWUiLCJ2aXNpdF9yZWFzb24iLCJhZF9kYXRlIiwiZGlzX2RhdGUiLCJwcmVzY3JpcGlvbiIsInN1cl9oaXN0b3J5IiwiX3gyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpczMiLCJjcmVhdGVFbGVtZW50IiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJzdHlsZSIsIm1hcmdpblRvcCIsImNvbG9yIiwiUm93IiwiQ29sdW1uIiwid2lkdGgiLCJIZWFkZXIiLCJwYXRpZW50X2FkZHJlc3MiLCJtYXJnaW5MZWZ0Iiwicm91dGUiLCJjb250ZW50IiwiaWNvbiIsInByaW1hcnkiLCJvblN1Ym1pdCIsImVycm9yIiwibG9hZGluZyIsImhlYWRlciIsInNlY3Rpb24iLCJGaWVsZCIsImxhYmVsUG9zaXRpb24iLCJvbkNoYW5nZSIsInRhcmdldCIsIkJvZHkiLCJDZWxsIiwiY29sbGFwc2luZyIsIl9yZWYzIiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJjb25zb2xlIiwibG9nIiwiYWJydXB0IiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFOQSxJQUFJQSxlQUFlLHlGQUFuQjs7O0FBU0EsSUFBSUMsYUFBYSxVQUFVQyxVQUFWLEVBQXNCO0FBQ3JDLDBCQUFVRCxVQUFWLEVBQXNCQyxVQUF0Qjs7QUFFQSxXQUFTRCxVQUFULENBQW9CRSxLQUFwQixFQUEyQjtBQUN6QixRQUFJQyxTQUFTLElBQWI7O0FBRUEsa0NBQWdCLElBQWhCLEVBQXNCSCxVQUF0Qjs7QUFFQSxRQUFJSSxRQUFRLHlDQUEyQixJQUEzQixFQUFpQyxDQUFDSixXQUFXSyxTQUFYLElBQXdCLDhCQUF1QkwsVUFBdkIsQ0FBekIsRUFBNkRNLElBQTdELENBQWtFLElBQWxFLEVBQXdFSixLQUF4RSxDQUFqQyxDQUFaOztBQUVBRSxVQUFNRyxLQUFOLEdBQWM7QUFDWkMsMkJBQXFCLEVBRFQ7QUFFWkMsc0JBQWdCLEtBRko7QUFHWkMscUJBQWUsS0FISDtBQUlaQyxtQkFBYSxFQUpEO0FBS1pDLGdCQUFVLEVBTEU7QUFNWkMsZUFBUztBQU5HLEtBQWQ7O0FBU0FULFVBQU1VLGFBQU4sR0FBc0IsWUFBWTtBQUNoQyxVQUFJQyxPQUFPLGlDQUFtQixhQUFhLHNCQUFvQkMsSUFBcEIsQ0FBeUIsU0FBU0MsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7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RUFBOEIyQyxpQkFBaUJBLGVBQS9DLEVBQTNCLENBQVA7O0FBRUYsbUJBQUssQ0FBTDtBQUNBLG1CQUFLLEtBQUw7QUFDRSx1QkFBT3FCLFVBQVUxRCxJQUFWLEVBQVA7QUFuQko7QUFxQkQ7QUFDRixTQXhCTSxFQXdCSndELFFBeEJJLEVBd0JNLElBeEJOLENBQVA7QUF5QkQsT0EzQjJDLENBQWhDLENBQVo7O0FBNkJBLGVBQVNNLGVBQVQsR0FBMkI7QUFDekIsZUFBT1AsTUFBTXJELEtBQU4sQ0FBWSxJQUFaLEVBQWtCQyxTQUFsQixDQUFQO0FBQ0Q7O0FBRUQsYUFBTzJELGVBQVA7QUFDRCxLQW5DTTtBQUZKLEdBQUQsQ0E5akJKOztBQXNtQkEsU0FBT25HLFVBQVA7QUFDRCxDQW53QmdCLGtCQUFqQjs7a0JBcXdCZUEsVSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9yZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAnYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvcic7XG5pbXBvcnQgX2FzeW5jVG9HZW5lcmF0b3IgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3InO1xuaW1wb3J0IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YgZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX2pzeEZpbGVOYW1lID0gJ0U6XFxcXFNUVURZIE1BVEVSSUFMXFxcXEJsb2NrY2hhaW5cXFxcSGVhbHRoUmVjb3JkIC0gQ29weVxcXFxwYWdlc1xcXFxMb2dpblxcXFxwYXRpZW50X2xvZy5qcz9lbnRyeSc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uLCBIZWFkZXIsIEdyaWQsIERpdmlkZXIsIE1lc3NhZ2UsIEZvcm0sIFNlZ21lbnQsIElucHV0LCBUYWJsZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCByZWNvcmQgZnJvbSAnLi4vLi4vZXRoZXJldW0vcmVjb3JkJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XG5cbnZhciBQYXRpZW50bG9nID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBhdGllbnRsb2csIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBhdGllbnRsb2cocHJvcHMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYXRpZW50bG9nKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChQYXRpZW50bG9nLl9fcHJvdG9fXyB8fCBfT2JqZWN0JGdldFByb3RvdHlwZU9mKFBhdGllbnRsb2cpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yTWVzc2FnZVBhdGllbnQ6ICcnLFxuICAgICAgbG9hZGluZ1BhdGllbnQ6IGZhbHNlLFxuICAgICAgbG9hZGluZ3JlY29yZDogZmFsc2UsXG4gICAgICBlcnJvcnJlY29yZDogJycsXG4gICAgICByZWNvcmRubzogJycsXG4gICAgICB2aXNpYmxlOiBmYWxzZVxuICAgIH07XG5cbiAgICBfdGhpcy5yZW1vdmVQYXRpZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKGV2ZW50KSB7XG4gICAgICAgIHZhciBhY2NvdW50cztcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBsb2FkaW5nUGF0aWVudDogdHJ1ZSwgZXJyb3JNZXNzYWdlUGF0aWVudDogJycgfSk7XG5cbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMjtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNTtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblxuICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgYWNjb3VudHMgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA4O1xuICAgICAgICAgICAgICAgIHJldHVybiByZWNvcmQubWV0aG9kcy5yZW1vdmVQYXRpZW50KF90aGlzLnByb3BzLnBhdGllbnRfbmFtZSkuc2VuZCh7XG4gICAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgODpcblxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoUm91dGUoJy8nKTtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMTE7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQudDAgPSBfY29udGV4dFsnY2F0Y2gnXSgyKTtcblxuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlUGF0aWVudDogX2NvbnRleHQudDAubWVzc2FnZSB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDE0OlxuXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBsb2FkaW5nUGF0aWVudDogZmFsc2UgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSwgX3RoaXMyLCBbWzIsIDExXV0pO1xuICAgICAgfSkpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKF94KSB7XG4gICAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH0oKTtcblxuICAgIF90aGlzLm9uU3VibWl0cmVjb3JkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZWYyID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoZXZlbnQpIHtcbiAgICAgICAgdmFyIGFjY291bnRzLCByZWNvcmRfc3VtbWFyeSwgcHJlc19zdW1tYXJ5O1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUyJChfY29udGV4dDIpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBsb2FkaW5ncmVjb3JkOiB0cnVlLCBlcnJvcnJlY29yZDogJycgfSk7XG5cbiAgICAgICAgICAgICAgICBfY29udGV4dDIucHJldiA9IDI7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA1O1xuICAgICAgICAgICAgICAgIHJldHVybiB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBhY2NvdW50cyA9IF9jb250ZXh0Mi5zZW50O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gODtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjb3JkLm1ldGhvZHMuZ2V0UmVjb3JkQnlQYXRpZW50KF90aGlzLnN0YXRlLnJlY29yZG5vKS5jYWxsKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIHJlY29yZF9zdW1tYXJ5ID0gX2NvbnRleHQyLnNlbnQ7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAxMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjb3JkLm1ldGhvZHMuZ2V0UHJlc2NyaXB0aW9uQnlQYXRpZW50KF90aGlzLnN0YXRlLnJlY29yZG5vKS5jYWxsKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICBwcmVzX3N1bW1hcnkgPSBfY29udGV4dDIuc2VudDtcblxuXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiB0cnVlIH0pO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgcF9uYW1lOiByZWNvcmRfc3VtbWFyeVswXSxcbiAgICAgICAgICAgICAgICAgIGRfbmFtZTogcmVjb3JkX3N1bW1hcnlbMV0sXG4gICAgICAgICAgICAgICAgICBoX25hbWU6IHJlY29yZF9zdW1tYXJ5WzJdLFxuICAgICAgICAgICAgICAgICAgdmlzaXRfcmVhc29uOiByZWNvcmRfc3VtbWFyeVszXSxcbiAgICAgICAgICAgICAgICAgIGFkX2RhdGU6IHByZXNfc3VtbWFyeVswXSxcbiAgICAgICAgICAgICAgICAgIGRpc19kYXRlOiBwcmVzX3N1bW1hcnlbMV0sXG4gICAgICAgICAgICAgICAgICBwcmVzY3JpcGlvbjogcHJlc19zdW1tYXJ5WzJdLFxuICAgICAgICAgICAgICAgICAgc3VyX2hpc3Rvcnk6IHByZXNfc3VtbWFyeVszXVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwcmVzX3N1bW1hcnlbMV0pO1xuXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuICh7cF9uYW1lOnN1bW1hcnlbMF19KTtcblxuXG4gICAgICAgICAgICAgICAgLy9Sb3V0ZXIucHVzaFJvdXRlKCcvJyk7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAxOTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0Mi5wcmV2ID0gMTY7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQyLnQwID0gX2NvbnRleHQyWydjYXRjaCddKDIpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBlcnJvcnJlY29yZDogX2NvbnRleHQyLnQwLm1lc3NhZ2UgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmdyZWNvcmQ6IGZhbHNlIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlMiwgX3RoaXMyLCBbWzIsIDE2XV0pO1xuICAgICAgfSkpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKF94Mikge1xuICAgICAgICByZXR1cm4gX3JlZjIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfSgpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBwX25hbWU6IFwiXCIsXG4gICAgICBkX25hbWU6IFwiXCIsXG4gICAgICBoX25hbWU6IFwiXCIsXG4gICAgICB2aXNpdF9yZWFzb246IFwiXCIsXG4gICAgICBhZF9kYXRlOiBcIlwiLFxuICAgICAgZGlzX2RhdGU6IFwiXCIsXG4gICAgICBwcmVzY3JpcGlvbjogXCJcIixcbiAgICAgIHN1cl9oaXN0b3J5OiBcIlwiXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUGF0aWVudGxvZywgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgLy8gY29uc3QgaXRlbXMgPSBbIFxuICAgICAgLy8gICAgICdEcmFmdHMgd2lsbCBub3cgYXV0by1zYXZlIHdoaWxlIHdyaXRpbmcnLFxuICAgICAgLy8gICBdXG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBMYXlvdXQsXG4gICAgICAgIHtcbiAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgIGxpbmVOdW1iZXI6IDExOFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBTZWdtZW50LFxuICAgICAgICAgIHsgc3R5bGU6IHsgbWFyZ2luVG9wOiAnMTBweCcsIGNvbG9yOiAnIzZBODlDQycgfSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogMTE5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgTWVzc2FnZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEyMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgR3JpZCxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTIxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIEdyaWQuUm93LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEyMlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgIEdyaWQuQ29sdW1uLFxuICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEyM1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgTWVzc2FnZS5IZWFkZXIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEyNFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ1dFTENPTUUgJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXRpZW50X25hbWVcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAncCcsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEyNVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXRpZW50X2FkZHJlc3NcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICBHcmlkLkNvbHVtbixcbiAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDMsIHN0eWxlOiB7IG1hcmdpbkxlZnQ6ICcxMDBweCcgfSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEyOFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgTGluayxcbiAgICAgICAgICAgICAgICAgICAgeyByb3V0ZTogJy8nLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEyOVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTMwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ0hvbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2hvbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEzMVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICBHcmlkLkNvbHVtbixcbiAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDMsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxNDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIExpbmssXG4gICAgICAgICAgICAgICAgICAgIHsgcm91dGU6ICcvTG9naW4vYWRkcmVjb3JkJywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxNDJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgJ2EnLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE0M1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdBZGQgUmVjb3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdhZGQgY2lyY2xlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxNDRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgR3JpZC5Db2x1bW4sXG4gICAgICAgICAgICAgICAgICB7IHdpZHRoOiAzLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTU1XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBGb3JtLFxuICAgICAgICAgICAgICAgICAgICB7IG9uU3VibWl0OiB0aGlzLnJlbW92ZVBhdGllbnQsIGVycm9yOiAhIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlUGF0aWVudCwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxNTZcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7XG4gICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdGhpcy5zdGF0ZS5sb2FkaW5nUGF0aWVudCxcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnUmVtb3ZlIEFjY291bnQnLFxuICAgICAgICAgICAgICAgICAgICAgIGljb246ICdyZW1vdmUgY2lyY2xlJyxcbiAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTU4XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZXNzYWdlLCB7IGVycm9yOiB0cnVlLCBoZWFkZXI6ICdPb3BzIScsIGNvbnRlbnQ6IHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlUGF0aWVudCwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxNjRcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERpdmlkZXIsIHsgc2VjdGlvbjogdHJ1ZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogMTcyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdoMycsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxNzNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdXYW50IHRvIHNlZSB5b3VyIHBhc3QgcmVjb3Jkcy4uPz8nXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgRm9ybSxcbiAgICAgICAgICAgIHsgb25TdWJtaXQ6IHRoaXMub25TdWJtaXRyZWNvcmQsIGVycm9yOiAhIXRoaXMuc3RhdGUuZXJyb3JyZWNvcmQsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxNzRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIEZvcm0uRmllbGQsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE3NVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE3NlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ1JlY29yZCBOdW1iZXI6J1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5yZWNvcmRubyxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMuc2V0U3RhdGUoeyByZWNvcmRubzogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxNzdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZXNzYWdlLCB7IGVycm9yOiB0cnVlLCBoZWFkZXI6ICdPb3BzIScsIGNvbnRlbnQ6IHRoaXMuc3RhdGUuZXJyb3JyZWNvcmQsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxODVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBCdXR0b24sXG4gICAgICAgICAgICAgIHsgbG9hZGluZzogdGhpcy5zdGF0ZS5sb2FkaW5ncmVjb3JkLCBwcmltYXJ5OiB0cnVlLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE4NlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJ1N1Ym1pdCEnXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERpdmlkZXIsIHsgc2VjdGlvbjogdHJ1ZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogMTkwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGhpcy5zdGF0ZS52aXNpYmxlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBUYWJsZSxcbiAgICAgICAgICAgIHsgc3R5bGU6IHsgd2lkdGg6ICcxMCcgfSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE5NFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgVGFibGUuQm9keSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTk1XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIFRhYmxlLlJvdyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxOTZcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICBUYWJsZS5DZWxsLFxuICAgICAgICAgICAgICAgICAgeyBjb2xsYXBzaW5nOiB0cnVlLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTk3XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnYicsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE5N1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ1BhdGllbnQgTmFtZTonXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgVGFibGUuQ2VsbCxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE5OFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wX25hbWVcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgVGFibGUuUm93LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDIwMVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgIFRhYmxlLkNlbGwsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyMDJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdiJyxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjAyXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAnRG9jdG9yIE5hbWU6J1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgIFRhYmxlLkNlbGwsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyMDNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZF9uYW1lXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIFRhYmxlLlJvdyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyMDZcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICBUYWJsZS5DZWxsLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjA3XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnYicsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDIwN1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ0hvc3BpdGFsIE5hbWU6J1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgIFRhYmxlLkNlbGwsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyMDhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaF9uYW1lXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIFRhYmxlLlJvdyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyMTFcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICBUYWJsZS5DZWxsLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjEyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnYicsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDIxMlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ0Rpc2Vhc2U6J1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgIFRhYmxlLkNlbGwsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyMTNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudmlzaXRfcmVhc29uXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIFRhYmxlLlJvdyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyMTZcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICBUYWJsZS5DZWxsLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjE3XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnYicsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDIxN1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ0FkbWlzc2lvbiBEYXRlOidcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICBUYWJsZS5DZWxsLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjE4XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFkX2RhdGVcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgVGFibGUuUm93LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDIyMVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgIFRhYmxlLkNlbGwsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyMjJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdiJyxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjIyXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAnRGlzY2hhcmdlIERhdGU6J1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgIFRhYmxlLkNlbGwsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyMjNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGlzX2RhdGVcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgVGFibGUuUm93LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDIyNlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgIFRhYmxlLkNlbGwsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyMjdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdiJyxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjI3XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAnUHJlc2NyaXB0aW9uIERldGFpbHM6J1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgIFRhYmxlLkNlbGwsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyMjhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucHJlc2NyaXBpb25cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgVGFibGUuUm93LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDIzMVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgIFRhYmxlLkNlbGwsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyMzJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdiJyxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjMyXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAnU3VyZ2ljYWwgRGV0YWlsczonXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgVGFibGUuQ2VsbCxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDIzM1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdXJfaGlzdG9yeVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogJ2dldEluaXRpYWxQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmMyA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzKCkge1xuICAgICAgICB2YXIgcGF0aWVudF9uYW1lLCBwYXRpZW50X2FkZHJlc3M7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTMkKF9jb250ZXh0Mykge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0My5wcmV2ID0gX2NvbnRleHQzLm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjb3JkLm1ldGhvZHMucGF0aWVudF9uYW1lKCkuY2FsbCgpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBwYXRpZW50X25hbWUgPSBfY29udGV4dDMuc2VudDtcbiAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY29yZC5tZXRob2RzLnBhdGllbnRfYWRkcmVzcygpLmNhbGwoKTtcblxuICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgcGF0aWVudF9hZGRyZXNzID0gX2NvbnRleHQzLnNlbnQ7XG5cblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhdGllbnRfYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5hYnJ1cHQoJ3JldHVybicsIHsgcGF0aWVudF9uYW1lOiBwYXRpZW50X25hbWUsIHBhdGllbnRfYWRkcmVzczogcGF0aWVudF9hZGRyZXNzIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUzLCB0aGlzKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgICAgICByZXR1cm4gX3JlZjMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldEluaXRpYWxQcm9wcztcbiAgICB9KClcbiAgfV0pO1xuXG4gIHJldHVybiBQYXRpZW50bG9nO1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBQYXRpZW50bG9nOyJdfQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUGF0aWVudGxvZyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzMiIsIl90aGlzIiwiX19wcm90b19fIiwiY2FsbCIsInN0YXRlIiwiZXJyb3JNZXNzYWdlUGF0aWVudCIsImxvYWRpbmdQYXRpZW50IiwibG9hZGluZ3JlY29yZCIsImVycm9ycmVjb3JkIiwicmVjb3Jkbm8iLCJ2aXNpYmxlIiwicmVtb3ZlUGF0aWVudCIsIl9yZWYiLCJtYXJrIiwiX2NhbGxlZSIsImV2ZW50IiwiYWNjb3VudHMiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwic2VudCIsIm1ldGhvZHMiLCJwYXRpZW50X25hbWUiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsInQwIiwibWVzc2FnZSIsInN0b3AiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIiwib25TdWJtaXRyZWNvcmQiLCJfcmVmMiIsIl9jYWxsZWUyIiwicmVjb3JkX3N1bW1hcnkiLCJwcmVzX3N1bW1hcnkiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJnZXRSZWNvcmRCeVBhdGllbnQiLCJnZXRQcmVzY3JpcHRpb25CeVBhdGllbnQiLCJwX25hbWUiLCJkX25hbWUiLCJoX25hbWUiLCJ2aXNpdF9yZWFzb24iLCJhZF9kYXRlIiwiZGlzX2RhdGUiLCJwcmVzY3JpcGlvbiIsInN1cl9oaXN0b3J5IiwiX3gyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpczMiLCJjcmVhdGVFbGVtZW50IiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJzdHlsZSIsIm1hcmdpblRvcCIsImNvbG9yIiwiUm93IiwiQ29sdW1uIiwid2lkdGgiLCJIZWFkZXIiLCJwYXRpZW50X2FkZHJlc3MiLCJtYXJnaW5MZWZ0Iiwicm91dGUiLCJjb250ZW50IiwiaWNvbiIsInByaW1hcnkiLCJvblN1Ym1pdCIsImVycm9yIiwibG9hZGluZyIsImhlYWRlciIsInNlY3Rpb24iLCJGaWVsZCIsImxhYmVsUG9zaXRpb24iLCJvbkNoYW5nZSIsInRhcmdldCIsIkJvZHkiLCJDZWxsIiwiY29sbGFwc2luZyIsIl9yZWYzIiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJjb25zb2xlIiwibG9nIiwiYWJydXB0IiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFOQSxJQUFJQSxlQUFlLHlGQUFuQjs7O0FBU0EsSUFBSUMsYUFBYSxVQUFVQyxVQUFWLEVBQXNCO0FBQ3JDLDBCQUFVRCxVQUFWLEVBQXNCQyxVQUF0Qjs7QUFFQSxXQUFTRCxVQUFULENBQW9CRSxLQUFwQixFQUEyQjtBQUN6QixRQUFJQyxTQUFTLElBQWI7O0FBRUEsa0NBQWdCLElBQWhCLEVBQXNCSCxVQUF0Qjs7QUFFQSxRQUFJSSxRQUFRLHlDQUEyQixJQUEzQixFQUFpQyxDQUFDSixXQUFXSyxTQUFYLElBQXdCLDhCQUF1QkwsVUFBdkIsQ0FBekIsRUFBNkRNLElBQTdELENBQWtFLElBQWxFLEVBQXdFSixLQUF4RSxDQUFqQyxDQUFaOztBQUVBRSxVQUFNRyxLQUFOLEdBQWM7QUFDWkMsMkJBQXFCLEVBRFQ7QUFFWkMsc0JBQWdCLEtBRko7QUFHWkMscUJBQWUsS0FISDtBQUlaQyxtQkFBYSxFQUpEO0FBS1pDLGdCQUFVLEVBTEU7QUFNWkMsZUFBUztBQU5HLEtBQWQ7O0FBU0FULFVBQU1VLGFBQU4sR0FBc0IsWUFBWTtBQUNoQyxVQUFJQyxPQUFPLGlDQUFtQixhQUFhLHNCQUFvQkMsSUFBcEIsQ0FBeUIsU0FBU0MsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7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