import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

@Module({ stateFactory: true, namespaced: true, name: 'loading' })
export default class UI extends VuexModule {
    loading: boolean = true

    get isLoading (): boolean {
      return this.loading
    }

    @Mutation
    setLoding () {
      this.loading = false
    }

    @Action({ rawError: true })
    endLoding () {
      this.setLoding()
    }
}
