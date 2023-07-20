const moduleA = {
    getters: {
        fullName (state) {
            return state.name + '-fullname'
        },
        fullNameRoot (state,getters,rootState) {
            return getters.fullName + '-' +   rootState.counter
        }
    },
    state: {
        name: 'moduleAName'
    },
    mutations: {
        uadateName (state,payload) {
            state.name = payload
        }
    },
    actions: {
        updateNameActionModuleA (context) {
            context.commit('uadateName','通过moduleA的action修改name')
        }

    }
}

export default moduleA