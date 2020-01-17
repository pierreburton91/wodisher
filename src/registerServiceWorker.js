/* eslint-disable no-console */

import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {},
    registered() {},
    cached() {},
    updatefound() {},
    updated() {
      window.location.reload(true);
    },
    offline() {},
    error(error) {
      console.error("Error during service worker registration:", error);
    }
  });
}
