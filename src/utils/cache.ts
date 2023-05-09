enum Types {
  Local,
  Session
}

class MYCache {
  storage;
  constructor(type: Types) {
    this.storage = type === Types.Local ? localStorage : sessionStorage;
  }

  setCache(key: string, val: any) {
    this.storage.setItem(key, JSON.stringify(val));
  }

  getCache(key: string) {
    const val = this.storage.getItem(key);
    if (val) {
      return JSON.parse(val);
    }
  }

  removeCache(key: string) {
    const val = this.storage.getItem(key);
    if (val) {
      return this.storage.removeItem(key);
    }
  }

  clear() {
    this.storage.clear();
  }
}

const localCache = new MYCache(Types.Local);
const sessionCache = new MYCache(Types.Session);

export { localCache, sessionCache };
