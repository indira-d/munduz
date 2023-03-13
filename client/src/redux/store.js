import {configureStore} from '@reduxjs/toolkit'
import  productSlice  from './ProductSlice'
import categorySlice from './CategorySlice';
import subcategorySlice  from './SubcategorySlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux";
import serviceSlice from './ServiceSlice';
import cartSlice from './CartSlice';
import  orderSlice  from './OrderSlice';



const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
	    products: productSlice,
		categories: categorySlice,
		subcategories: subcategorySlice,
        services: serviceSlice,
        cart: cartSlice,
        order: orderSlice

   
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})


export let persistor = persistStore(store)