// initial state
const state = {
    info: {
        name: 'song',
        id: '111',
        tel: '13555555555'
    },
    sessionId: localStorage.getItem('sessionId') || '5555'
}

// getters
const getters = {
    getName: (state, getters) => {
        return state.info.name;
    }
}

// mutations
const mutations = {
    setSessionId(state, sessionId) {
        state.sessionId = sessionId;
        localStorage.setItem('sessionId', state.sessionId);
    },
    removeSessionId(state) {
        state.sessionId = '';
        localStorage.removeItem('sessionId');
    }
}

// actions
const actions = {
    setSessionId({ commit }, sessionId) {
        commit('setSessionId', sessionId)
    },
    removeSessionId({ commit }){
        commit('removeSessionId')
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
