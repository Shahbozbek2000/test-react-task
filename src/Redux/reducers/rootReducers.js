// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import phoneNumberReducer from './phone-number'
import storage from "redux-persist/lib/storage"
import { persistReducer } from 'redux-persist'
const persistConfig = {
  key: "root",
  storage, 
  whitelist: ["storeReducer"]
}

const rootReducer = combineReducers({
  phoneNumberReducer
})

export default persistReducer(persistConfig,rootReducer)
