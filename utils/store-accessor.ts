import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import UI from '@/store/ui'

/* eslint import/no-mutable-exports: 0 */
let UIStore: UI

function initialiseStores (store: Store<any>): void {
  UIStore = getModule(UI, store)
}

export { initialiseStores, UIStore }
