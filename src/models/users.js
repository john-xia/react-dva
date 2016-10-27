export default {
    namespace: 'users',

    state: {
        list: [],
        total: null, 
        loading: false, // 控制加载状态
        current: null, // 当前分页信息
        currentItem: {}, // 当前操作的用户对象
        modalVisible: false, // 弹出窗的显示状态
        modalType: 'create', // 弹出窗的类型（添加用户，编辑用户）
    },
    effects: {
        *query(){},
        *create(){},
        *'delete'(){},
        *update(){},
    },
    reducers: {
        showLoading(){}, // 控制加载状态的 reducer
        showModal(){}, // 控制 Modal 显示状态的 reducer
        hideModal(){},
        querySuccess(){},
        createSuccess(){},
        deleteSuccess(){},
        updateSuccess(){},
    }
}