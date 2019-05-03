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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _record = require('../ethereum/record');

var _record2 = _interopRequireDefault(_record);

var _routes = require('../routes');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\STUDY MATERIAL\\Blockchain\\HealthRecord - Copy\\pages\\index.js?entry';


var RecordShow = function (_Component) {
  (0, _inherits3.default)(RecordShow, _Component);

  function RecordShow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RecordShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RecordShow.__proto__ || (0, _getPrototypeOf2.default)(RecordShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      errorMessagePatient: '',
      loadingPatient: false,
      errorMessageDoctor: '',
      loadingPatientDoctor: false

    }, _this.onSubmitPatient = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
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
                return _record2.default.methods.patientlogin().send({
                  from: accounts[0]
                });

              case 8:

                _routes.Router.pushRoute('/Login/patient_log');
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
        return _ref2.apply(this, arguments);
      };
    }(), _this.onSubmitDoctor = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loadingDoctor: true, errorMessageDoctor: '' });

                _context2.prev = 2;
                _context2.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context2.sent;
                _context2.next = 8;
                return _record2.default.methods.doctorlogin().send({
                  from: accounts[0]
                });

              case 8:

                _routes.Router.pushRoute('/Login/doctor_log');
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2['catch'](2);

                _this.setState({ errorMessageDoctor: _context2.t0.message });

              case 14:

                _this.setState({ loadingDoctor: false });

              case 15:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[2, 11]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RecordShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          total_patients = _props.total_patients,
          total_doctors = _props.total_doctors,
          record_count = _props.record_count;

      var items = [{
        header: total_patients,
        meta: 'Number of Patients',
        description: 'Patients in our Network',
        style: { overflowWrap: 'break-word' }
      }, {
        header: total_doctors,
        meta: 'Number of doctors',
        description: 'Doctors in our Network'
      }, {
        header: record_count,
        meta: 'Number of Records',
        description: 'Total registered records'
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement('h3', { style: { marginTop: '10px', color: '#F1837F' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, 'Health Chain'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement(_routes.Link, { route: '/registered/patient', __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        content: 'Registered as a Patient',
        icon: 'add circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }))), _react2.default.createElement(_routes.Link, { route: '/registered/doctor', __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { style: { marginTop: '20px' },
        content: 'Registered as a Doctor',
        icon: 'add circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }))))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmitPatient, error: !!this.state.errorMessagePatient, __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        loading: this.state.loadingPatient,
        content: 'Patient Login',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessagePatient, __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      })))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmitDoctor, error: !!this.state.errorMessageDoctor, __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        loading: this.state.loadingDoctor,
        content: 'Doctor Login',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessageDoctor, __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
        var summary;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _record2.default.methods.getreport().call();

              case 2:
                summary = _context3.sent;
                return _context3.abrupt('return', {
                  total_patients: summary[0],
                  total_doctors: summary[1],
                  record_count: summary[2]
                });

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getInitialProps(_x3) {
        return _ref4.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RecordShow;
}(_react.Component);

exports.default = RecordShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUmVjb3JkU2hvdyIsIl9Db21wb25lbnQiLCJfcmVmIiwiX3RoaXMyIiwiX3RlbXAiLCJfdGhpcyIsIl9yZXQiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9fcHJvdG9fXyIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwiZXJyb3JNZXNzYWdlUGF0aWVudCIsImxvYWRpbmdQYXRpZW50IiwiZXJyb3JNZXNzYWdlRG9jdG9yIiwibG9hZGluZ1BhdGllbnREb2N0b3IiLCJvblN1Ym1pdFBhdGllbnQiLCJfcmVmMiIsIm1hcmsiLCJfY2FsbGVlIiwiZXZlbnQiLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZW50IiwibWV0aG9kcyIsInBhdGllbnRsb2dpbiIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwidDAiLCJtZXNzYWdlIiwic3RvcCIsIl94Iiwib25TdWJtaXREb2N0b3IiLCJfcmVmMyIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwibG9hZGluZ0RvY3RvciIsImRvY3RvcmxvZ2luIiwiX3gyIiwia2V5IiwidmFsdWUiLCJyZW5kZXJDYXJkcyIsIl9wcm9wcyIsInByb3BzIiwidG90YWxfcGF0aWVudHMiLCJ0b3RhbF9kb2N0b3JzIiwicmVjb3JkX2NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsImNyZWF0ZUVsZW1lbnQiLCJHcm91cCIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwicmVuZGVyIiwibWFyZ2luVG9wIiwiY29sb3IiLCJSb3ciLCJDb2x1bW4iLCJ3aWR0aCIsInJvdXRlIiwiY29udGVudCIsImljb24iLCJwcmltYXJ5Iiwib25TdWJtaXQiLCJlcnJvciIsImxvYWRpbmciLCJfcmVmNCIsIl9jYWxsZWUzIiwic3VtbWFyeSIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImdldHJlcG9ydCIsImFicnVwdCIsImdldEluaXRpYWxQcm9wcyIsIl94MyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBTkEsSUFBSUEsZUFBZSw0RUFBbkI7OztBQVNBLElBQUlDLGFBQWEsVUFBVUMsVUFBVixFQUFzQjtBQUNyQywwQkFBVUQsVUFBVixFQUFzQkMsVUFBdEI7O0FBRUEsV0FBU0QsVUFBVCxHQUFzQjtBQUNwQixRQUFJRSxJQUFKO0FBQUEsUUFDSUMsU0FBUyxJQURiOztBQUdBLFFBQUlDLEtBQUosRUFBV0MsS0FBWCxFQUFrQkMsSUFBbEI7O0FBRUEsa0NBQWdCLElBQWhCLEVBQXNCTixVQUF0Qjs7QUFFQSxTQUFLLElBQUlPLE9BQU9DLFVBQVVDLE1BQXJCLEVBQTZCQyxPQUFPQyxNQUFNSixJQUFOLENBQXBDLEVBQWlESyxPQUFPLENBQTdELEVBQWdFQSxPQUFPTCxJQUF2RSxFQUE2RUssTUFBN0UsRUFBcUY7QUFDbkZGLFdBQUtFLElBQUwsSUFBYUosVUFBVUksSUFBVixDQUFiO0FBQ0Q7O0FBRUQsV0FBT04sUUFBUUYsU0FBU0MsUUFBUSx5Q0FBMkIsSUFBM0IsRUFBaUMsQ0FBQ0gsT0FBT0YsV0FBV2EsU0FBWCxJQUF3Qiw4QkFBdUJiLFVBQXZCLENBQWhDLEVBQW9FYyxJQUFwRSxDQUF5RUMsS0FBekUsQ0FBK0ViLElBQS9FLEVBQXFGLENBQUMsSUFBRCxFQUFPYyxNQUFQLENBQWNOLElBQWQsQ0FBckYsQ0FBakMsQ0FBUixFQUFxSkwsS0FBOUosR0FBc0tBLE1BQU1ZLEtBQU4sR0FBYztB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SjtBQUNBLGVBQU8sc0JBQW9CN0QsSUFBcEIsQ0FBeUIsU0FBUzhELFNBQVQsQ0FBbUJDLFNBQW5CLEVBQThCO0FBQzVELGlCQUFPLENBQVAsRUFBVTtBQUNSLG9CQUFRQSxVQUFVNUQsSUFBVixHQUFpQjRELFVBQVUzRCxJQUFuQztBQUNFLG1CQUFLLENBQUw7QUFDRTJELDBCQUFVM0QsSUFBVixHQUFpQixDQUFqQjtBQUNBLHVCQUFPLGlCQUFPTSxPQUFQLENBQWVzRCxTQUFmLEdBQTJCOUUsSUFBM0IsRUFBUDs7QUFFRixtQkFBSyxDQUFMO0FBQ0UyRSwwQkFBVUUsVUFBVXRELElBQXBCO0FBQ0EsdUJBQU9zRCxVQUFVRSxNQUFWLENBQWlCLFFBQWpCLEVBQTJCO0FBQ2hDakMsa0NBQWdCNkIsUUFBUSxDQUFSLENBRGdCO0FBRWhDNUIsaUNBQWU0QixRQUFRLENBQVIsQ0FGaUI7QUFHaEMzQixnQ0FBYzJCLFFBQVEsQ0FBUjtBQUhrQixpQkFBM0IsQ0FBUDs7QUFNRixtQkFBSyxDQUFMO0FBQ0EsbUJBQUssS0FBTDtBQUNFLHVCQUFPRSxVQUFVOUMsSUFBVixFQUFQO0FBZko7QUFpQkQ7QUFDRixTQXBCTSxFQW9CSjJDLFFBcEJJLEVBb0JNLElBcEJOLENBQVA7QUFxQkQsT0F2QjJDLENBQWhDLENBQVo7O0FBeUJBLGVBQVNNLGVBQVQsQ0FBeUJDLEdBQXpCLEVBQThCO0FBQzVCLGVBQU9SLE1BQU14RSxLQUFOLENBQVksSUFBWixFQUFrQlAsU0FBbEIsQ0FBUDtBQUNEOztBQUVELGFBQU9zRixlQUFQO0FBQ0QsS0EvQk07QUFGSixHQUFELENBM05KOztBQStQQSxTQUFPOUYsVUFBUDtBQUNELENBMVhnQixrQkFBakI7O2tCQTRYZUEsVSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9yZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAnYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvcic7XG5pbXBvcnQgX2FzeW5jVG9HZW5lcmF0b3IgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3InO1xuaW1wb3J0IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YgZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX2pzeEZpbGVOYW1lID0gJ0U6XFxcXFNUVURZIE1BVEVSSUFMXFxcXEJsb2NrY2hhaW5cXFxcSGVhbHRoUmVjb3JkIC0gQ29weVxcXFxwYWdlc1xcXFxpbmRleC5qcz9lbnRyeSc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uLCBHcmlkLCBGb3JtLCBNZXNzYWdlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgcmVjb3JkIGZyb20gJy4uL2V0aGVyZXVtL3JlY29yZCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJztcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vcm91dGVzJztcblxudmFyIFJlY29yZFNob3cgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUmVjb3JkU2hvdywgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmVjb3JkU2hvdygpIHtcbiAgICB2YXIgX3JlZixcbiAgICAgICAgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVjb3JkU2hvdyk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gUmVjb3JkU2hvdy5fX3Byb3RvX18gfHwgX09iamVjdCRnZXRQcm90b3R5cGVPZihSZWNvcmRTaG93KSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBlcnJvck1lc3NhZ2VQYXRpZW50OiAnJyxcbiAgICAgIGxvYWRpbmdQYXRpZW50OiBmYWxzZSxcbiAgICAgIGVycm9yTWVzc2FnZURvY3RvcjogJycsXG4gICAgICBsb2FkaW5nUGF0aWVudERvY3RvcjogZmFsc2VcblxuICAgIH0sIF90aGlzLm9uU3VibWl0UGF0aWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmMiA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoZXZlbnQpIHtcbiAgICAgICAgdmFyIGFjY291bnRzO1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmdQYXRpZW50OiB0cnVlLCBlcnJvck1lc3NhZ2VQYXRpZW50OiAnJyB9KTtcblxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAyO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA1O1xuICAgICAgICAgICAgICAgIHJldHVybiB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBhY2NvdW50cyA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY29yZC5tZXRob2RzLnBhdGllbnRsb2dpbigpLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDg6XG5cbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKCcvTG9naW4vcGF0aWVudF9sb2cnKTtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMTE7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQudDAgPSBfY29udGV4dFsnY2F0Y2gnXSgyKTtcblxuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlUGF0aWVudDogX2NvbnRleHQudDAubWVzc2FnZSB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDE0OlxuXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBsb2FkaW5nUGF0aWVudDogZmFsc2UgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSwgX3RoaXMyLCBbWzIsIDExXV0pO1xuICAgICAgfSkpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKF94KSB7XG4gICAgICAgIHJldHVybiBfcmVmMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9KCksIF90aGlzLm9uU3VibWl0RG9jdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZWYzID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoZXZlbnQpIHtcbiAgICAgICAgdmFyIGFjY291bnRzO1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUyJChfY29udGV4dDIpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBsb2FkaW5nRG9jdG9yOiB0cnVlLCBlcnJvck1lc3NhZ2VEb2N0b3I6ICcnIH0pO1xuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQyLnByZXYgPSAyO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gNTtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblxuICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgYWNjb3VudHMgPSBfY29udGV4dDIuc2VudDtcbiAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY29yZC5tZXRob2RzLmRvY3RvcmxvZ2luKCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgODpcblxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoUm91dGUoJy9Mb2dpbi9kb2N0b3JfbG9nJyk7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAxNDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgIF9jb250ZXh0Mi5wcmV2ID0gMTE7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQyLnQwID0gX2NvbnRleHQyWydjYXRjaCddKDIpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2VEb2N0b3I6IF9jb250ZXh0Mi50MC5tZXNzYWdlIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTQ6XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmdEb2N0b3I6IGZhbHNlIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlMiwgX3RoaXMyLCBbWzIsIDExXV0pO1xuICAgICAgfSkpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKF94Mikge1xuICAgICAgICByZXR1cm4gX3JlZjMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfSgpLCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSZWNvcmRTaG93LCBbe1xuICAgIGtleTogJ3JlbmRlckNhcmRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ2FyZHMoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB0b3RhbF9wYXRpZW50cyA9IF9wcm9wcy50b3RhbF9wYXRpZW50cyxcbiAgICAgICAgICB0b3RhbF9kb2N0b3JzID0gX3Byb3BzLnRvdGFsX2RvY3RvcnMsXG4gICAgICAgICAgcmVjb3JkX2NvdW50ID0gX3Byb3BzLnJlY29yZF9jb3VudDtcblxuXG4gICAgICB2YXIgaXRlbXMgPSBbe1xuICAgICAgICBoZWFkZXI6IHRvdGFsX3BhdGllbnRzLFxuICAgICAgICBtZXRhOiAnTnVtYmVyIG9mIFBhdGllbnRzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdQYXRpZW50cyBpbiBvdXIgTmV0d29yaycsXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH1cbiAgICAgIH0sIHtcbiAgICAgICAgaGVhZGVyOiB0b3RhbF9kb2N0b3JzLFxuICAgICAgICBtZXRhOiAnTnVtYmVyIG9mIGRvY3RvcnMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0RvY3RvcnMgaW4gb3VyIE5ldHdvcmsnXG4gICAgICB9LCB7XG4gICAgICAgIGhlYWRlcjogcmVjb3JkX2NvdW50LFxuICAgICAgICBtZXRhOiAnTnVtYmVyIG9mIFJlY29yZHMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RvdGFsIHJlZ2lzdGVyZWQgcmVjb3JkcydcbiAgICAgIH1dO1xuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLkdyb3VwLCB7IGl0ZW1zOiBpdGVtcywgX19zb3VyY2U6IHtcbiAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgIGxpbmVOdW1iZXI6IDEwNlxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgTGF5b3V0LFxuICAgICAgICB7XG4gICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiAxMTFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2gzJyxcbiAgICAgICAgICB7IHN0eWxlOiB7IG1hcmdpblRvcDogJzEwcHgnLCBjb2xvcjogJyNGMTgzN0YnIH0sIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDExMlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ0hlYWx0aCBDaGFpbidcbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBHcmlkLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDExM1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEdyaWQuUm93LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTE1XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBHcmlkLkNvbHVtbixcbiAgICAgICAgICAgICAgeyB3aWR0aDogMTAsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTE2XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB0aGlzLnJlbmRlckNhcmRzKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBHcmlkLkNvbHVtbixcbiAgICAgICAgICAgICAgeyB3aWR0aDogNiwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMThcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgTGluayxcbiAgICAgICAgICAgICAgICB7IHJvdXRlOiAnL3JlZ2lzdGVyZWQvcGF0aWVudCcsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDExOVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEyMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1JlZ2lzdGVyZWQgYXMgYSBQYXRpZW50JyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2FkZCBjaXJjbGUnLFxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTIxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIExpbmssXG4gICAgICAgICAgICAgICAgeyByb3V0ZTogJy9yZWdpc3RlcmVkL2RvY3RvcicsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEzMFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEzMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgc3R5bGU6IHsgbWFyZ2luVG9wOiAnMjBweCcgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1JlZ2lzdGVyZWQgYXMgYSBEb2N0b3InLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnYWRkIGNpcmNsZScsXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMzJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBHcmlkLlJvdyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE0M1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgR3JpZC5Db2x1bW4sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE0NFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBGb3JtLFxuICAgICAgICAgICAgICAgIHsgb25TdWJtaXQ6IHRoaXMub25TdWJtaXRQYXRpZW50LCBlcnJvcjogISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZVBhdGllbnQsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE0NVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHtcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRoaXMuc3RhdGUubG9hZGluZ1BhdGllbnQsXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAnUGF0aWVudCBMb2dpbicsXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTQ3XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZXNzYWdlLCB7IGVycm9yOiB0cnVlLCBoZWFkZXI6ICdPb3BzIScsIGNvbnRlbnQ6IHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlUGF0aWVudCwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTUyXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEdyaWQuUm93LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTU4XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBHcmlkLkNvbHVtbixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTU5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIEZvcm0sXG4gICAgICAgICAgICAgICAgeyBvblN1Ym1pdDogdGhpcy5vblN1Ym1pdERvY3RvciwgZXJyb3I6ICEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2VEb2N0b3IsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE2MVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHtcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRoaXMuc3RhdGUubG9hZGluZ0RvY3RvcixcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdEb2N0b3IgTG9naW4nLFxuICAgICAgICAgICAgICAgICAgcHJpbWFyeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE2M1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVzc2FnZSwgeyBlcnJvcjogdHJ1ZSwgaGVhZGVyOiAnT29wcyEnLCBjb250ZW50OiB0aGlzLnN0YXRlLmVycm9yTWVzc2FnZURvY3RvciwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTY4XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogJ2dldEluaXRpYWxQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmNCA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzKHByb3BzKSB7XG4gICAgICAgIHZhciBzdW1tYXJ5O1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUzJChfY29udGV4dDMpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDMucHJldiA9IF9jb250ZXh0My5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY29yZC5tZXRob2RzLmdldHJlcG9ydCgpLmNhbGwoKTtcblxuICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgc3VtbWFyeSA9IF9jb250ZXh0My5zZW50O1xuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMuYWJydXB0KCdyZXR1cm4nLCB7XG4gICAgICAgICAgICAgICAgICB0b3RhbF9wYXRpZW50czogc3VtbWFyeVswXSxcbiAgICAgICAgICAgICAgICAgIHRvdGFsX2RvY3RvcnM6IHN1bW1hcnlbMV0sXG4gICAgICAgICAgICAgICAgICByZWNvcmRfY291bnQ6IHN1bW1hcnlbMl1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlMywgdGhpcyk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIGdldEluaXRpYWxQcm9wcyhfeDMpIHtcbiAgICAgICAgcmV0dXJuIF9yZWY0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRJbml0aWFsUHJvcHM7XG4gICAgfSgpXG4gIH1dKTtcblxuICByZXR1cm4gUmVjb3JkU2hvdztcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgUmVjb3JkU2hvdzsiXX0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUmVjb3JkU2hvdyIsIl9Db21wb25lbnQiLCJfcmVmIiwiX3RoaXMyIiwiX3RlbXAiLCJfdGhpcyIsIl9yZXQiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9fcHJvdG9fXyIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwiZXJyb3JNZXNzYWdlUGF0aWVudCIsImxvYWRpbmdQYXRpZW50IiwiZXJyb3JNZXNzYWdlRG9jdG9yIiwibG9hZGluZ1BhdGllbnREb2N0b3IiLCJvblN1Ym1pdFBhdGllbnQiLCJfcmVmMiIsIm1hcmsiLCJfY2FsbGVlIiwiZXZlbnQiLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZW50IiwibWV0aG9kcyIsInBhdGllbnRsb2dpbiIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwidDAiLCJtZXNzYWdlIiwic3RvcCIsIl94Iiwib25TdWJtaXREb2N0b3IiLCJfcmVmMyIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwibG9hZGluZ0RvY3RvciIsImRvY3RvcmxvZ2luIiwiX3gyIiwia2V5IiwidmFsdWUiLCJyZW5kZXJDYXJkcyIsIl9wcm9wcyIsInByb3BzIiwidG90YWxfcGF0aWVudHMiLCJ0b3RhbF9kb2N0b3JzIiwicmVjb3JkX2NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsImNyZWF0ZUVsZW1lbnQiLCJHcm91cCIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwicmVuZGVyIiwibWFyZ2luVG9wIiwiY29sb3IiLCJSb3ciLCJDb2x1bW4iLCJ3aWR0aCIsInJvdXRlIiwiY29udGVudCIsImljb24iLCJwcmltYXJ5Iiwib25TdWJtaXQiLCJlcnJvciIsImxvYWRpbmciLCJfcmVmNCIsIl9jYWxsZWUzIiwic3VtbWFyeSIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImdldHJlcG9ydCIsImFicnVwdCIsImdldEluaXRpYWxQcm9wcyIsIl94MyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBTkEsSUFBSUEsZUFBZSw0RUFBbkI7OztBQVNBLElBQUlDLGFBQWEsVUFBVUMsVUFBVixFQUFzQjtBQUNyQywwQkFBVUQsVUFBVixFQUFzQkMsVUFBdEI7O0FBRUEsV0FBU0QsVUFBVCxHQUFzQjtBQUNwQixRQUFJRSxJQUFKO0FBQUEsUUFDSUMsU0FBUyxJQURiOztBQUdBLFFBQUlDLEtBQUosRUFBV0MsS0FBWCxFQUFrQkMsSUFBbEI7O0FBRUEsa0NBQWdCLElBQWhCLEVBQXNCTixVQUF0Qjs7QUFFQSxTQUFLLElBQUlPLE9BQU9DLFVBQVVDLE1BQXJCLEVBQTZCQyxPQUFPQyxNQUFNSixJQUFOLENBQXBDLEVBQWlESyxPQUFPLENBQTdELEVBQWdFQSxPQUFPTCxJQUF2RSxFQUE2RUssTUFBN0UsRUFBcUY7QUFDbkZGLFdBQUtFLElBQUwsSUFBYUosVUFBVUksSUFBVixDQUFiO0FBQ0Q7O0FBRUQsV0FBT04sUUFBUUYsU0FBU0MsUUFBUSx5Q0FBMkIsSUFBM0IsRUFBaUMsQ0FBQ0gsT0FBT0YsV0FBV2EsU0FBWCxJQUF3Qiw4QkFBdUJiLFVBQXZCLENBQWhDLEVBQW9FYyxJQUFwRSxDQUF5RUMsS0FBekUsQ0FBK0ViLElBQS9FLEVBQXFGLENBQUMsSUFBRCxFQUFPYyxNQUFQLENBQWNOLElBQWQsQ0FBckYsQ0FBakMsQ0FBUixFQUFxSkwsS0FBOUosR0FBc0tBLE1BQU1ZLEtBQU4sR0FBYztB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