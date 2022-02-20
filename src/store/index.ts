import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

// 为 store state 声明类型
export interface State {
    count: number
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol();


export const store = createStore<State>({
    state: {
        count: 0
    },
    mutations: {
        increment: (state): void =>  {
            state.count++;
        }
    },
    actions: {
        increment: (context) => {
            context.commit("increment");
        }
    }
});
