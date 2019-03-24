import { combineReducers } from 'redux';
import noteBuilderReducer from './noteBuilder';

export default combineReducers({
    noteBuilder: noteBuilderReducer
});
