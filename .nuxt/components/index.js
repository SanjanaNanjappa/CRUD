import { wrapFunctional } from './utils'

export { default as Logo } from '../../components/Logo.vue'
export { default as Toast } from '../../components/Toast.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyToast = import('../../components/Toast.vue' /* webpackChunkName: "components/toast" */).then(c => wrapFunctional(c.default || c))
export const LazyVuetifyLogo = import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
