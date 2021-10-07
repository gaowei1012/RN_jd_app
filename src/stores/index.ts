import pmsUserRegistrationStore, { PmsUserRegistrationStore } from './pmsUserRegistration'
import languageStore, { LanguageStore } from './language'
import pmsAppThemeStore, { PmsAppThemeStore } from './theme'

export type RootStore = {
  pmsUserRegistrationStore: PmsUserRegistrationStore;
  languageStore: LanguageStore;
  pmsAppThemeStore: PmsAppThemeStore
};

const rootStore = {
  pmsUserRegistrationStore,
  languageStore,
  pmsAppThemeStore,
}

export default rootStore
