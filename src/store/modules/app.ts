import { ActionTree, Module, MutationTree } from 'vuex'
import { IRootState } from '../index' // 全局状态 root state 从src/store/index.ts里定义导出

export interface IAppState {
  sidebar: {
    opened: boolean // 菜单导航展开时true 收缩时false
  }
}

const mutations: MutationTree<IAppState> = {
  TOGGLE_SIDEBAR(state) {
    state.sidebar.opened = !state.sidebar.opened
  }
}

const actions: ActionTree<IAppState, IRootState> = {
  toggleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  }
}

const app: Module<IAppState, IRootState> = {
  namespaced: true,
  state: {
    sidebar: {
      opened: true // 菜单导航展开时true 收缩时false
    }
  },
  mutations,
  actions
}

export default app
