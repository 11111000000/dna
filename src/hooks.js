import safelyParseJson from "./utils/safelyParseJson";
import isClient from "./utils/isClient";
import isAPISupported from "./utils/isAPISupported";
import isDevelopment from "./utils/isDevelopment";

import { hook, Hook, useState, useEffect } from "haunted";

export let useStorage = hook(
  class extends Hook {
    constructor(id, state, your, hooks, args) {
      super(id, state);
    }
    update(storageKey, defaultValue) {
      if (!isClient) {
        if (isDevelopment) {
          console.warn(
            `Please be aware that ${storageName} could not be available during SSR`
          );
        }
        return [JSON.stringify(defaultValue), () => undefined];
      }

      const storage = window[storageName];
      const [value, setValue] = useState(
        safelyParseJson(
          storage.getItem(storageKey) || JSON.stringify(defaultValue)
        )
      );

      useEffect(() => {
        storage.setItem(storageKey, JSON.stringify(value));
      }, [storageKey, value]);

      return [value, setValue];
    }

    teardown() {}
  }
);
