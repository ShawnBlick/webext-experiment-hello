class API extends ExtensionAPI {
  getAPI(context) {
    return {
      hello: {
        hello(callback) {
          callback();
        }
      }
    };
  }
}
