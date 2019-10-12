import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import UI from '@/store/ui'
import Loading from '@/store/loading'

/* eslint import/no-mutable-exports: 0 */
let UIStore: UI
let LoadingStore: Loading

function initialiseStores (store: Store<any>): void {
  UIStore = getModule(UI, store)
  LoadingStore = getModule(Loading, store)
}

export { initialiseStores, UIStore, LoadingStore }
