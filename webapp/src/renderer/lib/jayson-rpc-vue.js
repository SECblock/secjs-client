import jayson from 'jayson/lib/client'

export default {
  install: function (Vue, options) {
    let client, useSSL, url
    useSSL = options.useSSL || false
    url = options.url || 'http://localhost:3000'
    if (useSSL) {
      client = jayson.https(url)
    } else {
      client = jayson.http(url)
    }

    Object.defineProperty(Vue.prototype, '$JsonRPCClient', {value: client})
  }
}
