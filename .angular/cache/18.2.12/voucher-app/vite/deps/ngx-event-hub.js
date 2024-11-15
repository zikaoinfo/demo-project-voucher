import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-YANH5WPM.js";

// node_modules/ngx-event-hub/fesm2022/ngx-event-hub.mjs
var NgxEventHubService = class _NgxEventHubService {
  constructor() {
    this.eventsMap = /* @__PURE__ */ new Map();
  }
  on(eventName, callbackFn) {
    let calbbacksForEvent = this.eventsMap.get(eventName);
    if (calbbacksForEvent) {
      calbbacksForEvent.push(callbackFn);
    } else {
      calbbacksForEvent = [callbackFn];
      this.eventsMap.set(eventName, calbbacksForEvent);
    }
  }
  cast(eventName, data) {
    let callbacks = this.eventsMap.get(eventName) || [];
    for (let callback of callbacks) {
      callback?.(data);
    }
  }
  static {
    this.ɵfac = function NgxEventHubService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxEventHubService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgxEventHubService,
      factory: _NgxEventHubService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxEventHubService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
export {
  NgxEventHubService
};
//# sourceMappingURL=ngx-event-hub.js.map
