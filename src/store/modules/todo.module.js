let state = {
    todoList: [
        {
          doneIt: false,
          text: "You must do something..."
        }
    ]
};
let getters = {};
let mutations = {};
let actions = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}