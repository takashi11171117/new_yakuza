import { VuexModule, Module, Mutation } from 'vuex-module-decorators'

@Module({ stateFactory: true, namespaced: true, name: 'ui' })
export default class UI extends VuexModule {
    menuCloseFlg: boolean = false
    menuScrollY: number = 0
    menuDirection: number = 0

    @Mutation
    updateMenuCloseFlg (flg: boolean) {
      this.menuCloseFlg = flg
    }

    @Mutation
    updateMenuScrollY (delta: number) {
      this.menuScrollY += delta * 0.9
    }

    @Mutation
    updateMenuDirection (direction: number) {
      this.menuDirection = direction
    }

    @Mutation
    resetMenuPos () {
      this.menuScrollY = 0
      this.menuDirection = 0
      this.menuCloseFlg = false
    }

    get getMenuCloseFlg (): boolean {
      return this.menuCloseFlg
    }

    get getMenuScrollY (): number {
      return this.menuScrollY
    }

    get getMenuDirection (): number {
      return this.menuDirection
    }
}
