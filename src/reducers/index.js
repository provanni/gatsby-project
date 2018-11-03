import { combineReducers } from 'redux';
import auth from './auth-reducer'
const appReducers = combineReducers({
  auth
})

export default appReducers;
