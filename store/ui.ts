import { VuexModule, Module, Mutation } from 'vuex-module-decorators'

@Module({ stateFactory: true, namespaced: true, name: 'ui' })
export default class UI extends VuexModule {
    menuCloseFlg: boolean = false

    @Mutation
    updateMenuCloseFlg (flg: boolean) {
      this.menuCloseFlg = flg
    }

    get getMenuCloseFlg (): boolean {
      return this.menuCloseFlg
    }
}
