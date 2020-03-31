let timerClearMessagess = null;
const MESSAGE_FILETIME = 14000;
let state = {
    //info
    generalFetchingCount: 0,
    appMessages: [],
    // auth & permissions
    authInfo: null,
    // interface box elements
    asideIsOpened: false
  };
  let getters = {
    appIsFetching(state, getters, rootState) {
      return (state.generalFetchingCount > 0 || rootState.todoModule.fetchingCount > 0);
    },
    canAccessTo_todo(state) {
      return !!state.authInfo && (true || false);
    },
    asideIsOpened(state) {
      return state.asideIsOpened;      
    }
  };
  let mutations = {
    // info
    startFetching(state) {
      state.generalFetchingCount = state.generalFetchingCount + 1;
    },
    endFetching(state) {
      state.generalFetchingCount = state.generalFetchingCount - 1;
    },
    addAppMessage(state, { message, code }) {
      state.appMessages = [...state.appMessages, { message, code }];
    },
    clearAppMessages(state) {
      state.appMessages = [];
    },
    // auth & permissions
    authInfo(state, authInfo) {
      state.authInfo = authInfo;
    },
    // interface box elements
    toggleAside(state, { opening } = { opening: undefined }) {
      state.asideIsOpened = opening === undefined ? !state.asideIsOpened : opening;
    }
  };
  let actions = {
    autoClearMessage(context) {
      clearTimeout(timerClearMessagess);
      timerClearMessagess = setTimeout(() => {
        context.commit('clearAppMessages');
      }, MESSAGE_FILETIME);
    },
    addInfoMessage(context, message = 'info') {
      context.commit('addAppMessage', { message, code: 1000 });
      context.dispatch('autoClearMessage');
    },
    addSuccessMessage(context, message = 'success') {
      context.commit('addAppMessage', { message, code: 2000 })
    },
    addWarningMessage(context, message = 'warning') {
      context.commit('addAppMessage', { message, code: 3000 })
    },
    addErrorMessage(context, message = 'error') {
      context.commit('addAppMessage', { message, code: 4000 })
    }
  };
  
  export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  }