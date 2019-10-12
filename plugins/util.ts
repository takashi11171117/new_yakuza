import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $delay(ms: number): Promise<void>
    $console(...args: [any]): void
    $isset(data: any): boolean
  }
}

Vue.prototype.$delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
Vue.prototype.$console = (...args: [any]) => console.dir(args)
Vue.prototype.$isset = (data: any) => !(data === '' || data === null || data === undefined)
