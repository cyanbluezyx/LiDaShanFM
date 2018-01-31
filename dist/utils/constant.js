"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var USER_SPECICAL_INFO = exports.USER_SPECICAL_INFO = "userSpecialInfo";

/**
 * 用户信息
 * @type {String}
 */
var USER_INFO = exports.USER_INFO = "userInfo";

/**
 * 系统信息
 * @type {String}
 */
var SYSTEM_INFO = exports.SYSTEM_INFO = "systemInfo";

/**
 * 电台文件路径
 * @type {String}
 */
var AUDIO_PATH = exports.AUDIO_PATH = 'http://www.isuuny.xyz:8081/static/radio/';

/**
 * 当前播放音频
 * @type {String}
 */
var CURRENT_AUDIO = exports.CURRENT_AUDIO = 'current_audio';

/**
 * SESSION_ID
 * @type {String}
 */
var SESSION_ID = exports.SESSION_ID = 'session_id';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50LmpzIl0sIm5hbWVzIjpbIlVTRVJfU1BFQ0lDQUxfSU5GTyIsIlVTRVJfSU5GTyIsIlNZU1RFTV9JTkZPIiwiQVVESU9fUEFUSCIsIkNVUlJFTlRfQVVESU8iLCJTRVNTSU9OX0lEIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQU1BLGtEQUFxQixpQkFBM0I7O0FBRVA7Ozs7QUFJTyxJQUFNQyxnQ0FBWSxVQUFsQjs7QUFFUDs7OztBQUlPLElBQU1DLG9DQUFjLFlBQXBCOztBQUVQOzs7O0FBSU8sSUFBTUMsa0NBQWEsMENBQW5COztBQUVQOzs7O0FBSU8sSUFBTUMsd0NBQWdCLGVBQXRCOztBQUVQOzs7O0FBSU8sSUFBTUMsa0NBQWEsWUFBbkIiLCJmaWxlIjoiY29uc3RhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVVNFUl9TUEVDSUNBTF9JTkZPID0gXCJ1c2VyU3BlY2lhbEluZm9cIjtcclxuXHJcbi8qKlxyXG4gKiDnlKjmiLfkv6Hmga9cclxuICogQHR5cGUge1N0cmluZ31cclxuICovXHJcbmV4cG9ydCBjb25zdCBVU0VSX0lORk8gPSBcInVzZXJJbmZvXCI7XHJcblxyXG4vKipcclxuICog57O757uf5L+h5oGvXHJcbiAqIEB0eXBlIHtTdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU1lTVEVNX0lORk8gPSBcInN5c3RlbUluZm9cIjtcclxuXHJcbi8qKlxyXG4gKiDnlLXlj7Dmlofku7bot6/lvoRcclxuICogQHR5cGUge1N0cmluZ31cclxuICovXHJcbmV4cG9ydCBjb25zdCBBVURJT19QQVRIID0gJ2h0dHA6Ly93d3cuaXN1dW55Lnh5ejo4MDgxL3N0YXRpYy9yYWRpby8nXHJcblxyXG4vKipcclxuICog5b2T5YmN5pKt5pS+6Z+z6aKRXHJcbiAqIEB0eXBlIHtTdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ1VSUkVOVF9BVURJTyA9ICdjdXJyZW50X2F1ZGlvJ1xyXG5cclxuLyoqXHJcbiAqIFNFU1NJT05fSURcclxuICogQHR5cGUge1N0cmluZ31cclxuICovXHJcbmV4cG9ydCBjb25zdCBTRVNTSU9OX0lEID0gJ3Nlc3Npb25faWQnIl19