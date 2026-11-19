interface BrowserTab {
  id?: number;
  title?: string;
  url?: string;
  active?: boolean;
  incognito?: boolean;
}
interface BrowserCookie {
  name: string;
  value: string;
  domain: string;
  path: string;
  secure: boolean;
  httpOnly: boolean;
  sameSite: 'unspecified' | 'no_restriction' | 'lax' | 'strict';
  session: boolean;
  expirationDate?: number;
  storeId: string;
  partitionKey?: { topLevelSite?: string; hasCrossSiteAncestor?: boolean };
}
interface BrowserCookieStore {
  id: string;
  tabIds: number[];
}
interface CookieSetDetails {
  url: string;
  name: string;
  value: string;
  path?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: BrowserCookie['sameSite'];
  expirationDate?: number;
  storeId?: string;
}
declare const chrome: {
  i18n?: { getUILanguage: () => string };
  storage: {
    local: {
      get: (keys?: string | string[]) => Promise<Record<string, unknown>>;
      set: (items: Record<string, unknown>) => Promise<void>;
      setAccessLevel?: (config: { accessLevel: 'TRUSTED_CONTEXTS' | 'TRUSTED_AND_UNTRUSTED_CONTEXTS' }) => Promise<void>;
    };
  };
  tabs: {
    query: (queryInfo: { currentWindow?: boolean; active?: boolean }) => Promise<BrowserTab[]>;
    get: (tabId: number) => Promise<BrowserTab>;
  };
  permissions: {
    request: (permissions: { origins: string[] }) => Promise<boolean>;
  };
  cookies: {
    getAllCookieStores: () => Promise<BrowserCookieStore[]>;
    getAll: (details: { url?: string; domain?: string; storeId?: string }) => Promise<BrowserCookie[]>;
    set: (details: CookieSetDetails) => Promise<BrowserCookie | null>;
  };
};
