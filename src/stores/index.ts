import pmsUserRegistrationStore, { PmsUserRegistrationStore } from './pmsUserRegistration'
import languageStore, { LanguageStore } from './language'
import pmsAppThemeStore, { PmsAppThemeStore } from './theme'
import payStore, { PayStore } from './pay';
import loadingStore, { LoadingStore } from './loading'; 

export type RootStore = {
  pmsUserRegistrationStore: PmsUserRegistrationStore;
  languageStore: LanguageStore;
  pmsAppThemeStore: PmsAppThemeStore;
  payStore: PayStore;
  loadingStore: LoadingStore;
};

const rootStore = {
  pmsUserRegistrationStore,
  languageStore,
  pmsAppThemeStore,
  payStore,
  loadingStore,
}

export default rootStore
