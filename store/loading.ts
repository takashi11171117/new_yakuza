import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

@Module({ stateFactory: true, namespaced: true, name: 'loading' })
export default class UI extends VuexModule {
    loading = true
    showLoadingComponent = false
    showMainComponent = false

    get isLoading (): boolean {
      return this.loading
    }

    get isShowLoadingComponent (): boolean {
      return this.showLoadingComponent
    }

    get isShowMainComponent (): boolean {
      return this.showMainComponent
    }

    @Mutation
    endLoading () {
      this.loading = false
    }

    @Mutation
    switchShowMainComponent () {
        this.showMainComponent = !this.showMainComponent
    }

    @Mutation
    switchShowLoadingComponent () {
        this.showLoadingComponent = !this.showLoadingComponent
    }
}
