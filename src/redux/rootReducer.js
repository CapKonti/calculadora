import {calculatorReducer, CALCULATOR_KEY} from '../redux/slices/calculator.reducer'
import {combineReducers} from 'redux'


let rootReducer = combineReducers({
    [CALCULATOR_KEY]:calculatorReducer
})

export {rootReducer}