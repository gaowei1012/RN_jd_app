import pmsUserRegistrationStore, { PmsUserRegistrationStore } from './pmsUserRegistration'
import languageStore, { LanguageStore } from './language'
import pmsAppThemeStore, { PmsAppThemeStore } from './theme'
import payStore, { PayStore } from './pay';

export type RootStore = {
  pmsUserRegistrationStore: PmsUserRegistrationStore;
  languageStore: LanguageStore;
  pmsAppThemeStore: PmsAppThemeStore;
  payStore: PayStore;
};

const rootStore = {
  pmsUserRegistrationStore,
  languageStore,
  pmsAppThemeStore,
  payStore,
}

export default rootStore
