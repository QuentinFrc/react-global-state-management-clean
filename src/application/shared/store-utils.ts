/**
 * What is a store ? an object with 2 functions: a getter & a method to attach listener
 */
export type StoreAPI<TStore> = {
    getState: () => TStore;
    subscribe: (listener: () => void) => () => void;
};

/** Same as store Api but with split State & Actions types */
export type StoreStateAndActionsAPI<TState, TActions> = StoreAPI<TState & TActions>;

/**
 * A StoreStoreAPI => The api minimal to manipulate a store in our codebase.
 *  We should be able to:
 *  - Create the store passing an initial state
 *  - Use the store with a selector on store data in order to only subscribe to sub part changes
 *  - You might need to add persistance related methods & other stuff, but it's too specific to address here
 * */
export type StoreApiContextType<TState, TActions> = {
    createStore: (initialState: TState) => StoreStateAndActionsAPI<TState, TActions>;
    useStore: <S>(store: StoreStateAndActionsAPI<TState, TActions>, selector: (state: ReturnType<StoreAPI<TState & TActions>['getState']>) => S) => S;
}