import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadAnswer, loadButtons,loadClear, loadBackspace} from '../redux/slices/calculator.actions'
import {CALCULATOR_KEY} from '../redux/slices/calculator.reducer'

const CalculatorApp = () => {
    const dispatch = useDispatch()


      // handle answer 
    const handleAnswer = (e) =>{
        e.preventDefault()
        // alert(number)
      dispatch(loadAnswer())
    }

    // view store 
    const viewCalculator = useSelector((state) =>{
        return state[CALCULATOR_KEY]
    })

    return (
        
        <React.Fragment>
            
            {/* <pre>{JSON.stringify(viewCalculator)}</pre> */}
           <section>
               <div className=" cont-general min-flex">
                   <div className=''>
                       
                       <p>CALCULATOR APP</p>
                   </div>

                   {/* screen */}
                  
                   <div className=''>
                       <input
                       type=''
                       placeholder=''
                       value={(viewCalculator.ans).length === 0 ? viewCalculator.number : viewCalculator.ans}
                       className=''

                        />
                       </div>
                

                   {/* keypad */}

                     <div className="">

                        <div className="row min-flex">
                        <button onClick={() =>dispatch(loadClear())} className="btn btn-outline-info col-2 ">AC</button>
                       <button onClick={() =>dispatch(loadBackspace())}  className="btn btn-outline-info col-2">C</button>
                       <button onClick={() =>dispatch(loadButtons(''))} className="btn btn-outline-info col-2"></button> 
                       <button onClick={() =>dispatch(loadButtons('+'))} className="btn btn-outline-info col-2">+</button> 
                            
                        </div>
                      
                        <div className="row min-flex">
                            <button onClick={() => dispatch(loadButtons(7))} className="btn btn-outline-info col-2">7</button>
                            <button onClick={() => dispatch(loadButtons(8))} className="btn btn-outline-info col-2">8</button>
                            <button onClick={() => dispatch(loadButtons(9))} className="btn btn-outline-info col-2">9</button>
                            <button onClick={() =>dispatch(loadButtons('/'))} className="btn btn-outline-info col-2">/</button>
                            
                        </div>

                        <div className="row min-flex">
                        <button onClick={() =>dispatch(loadButtons(4))} className="btn btn-outline-info col-2">4</button>
                        <button onClick={() =>dispatch(loadButtons(5))} className="btn btn-outline-info col-2">5</button>
                        <button onClick={() =>dispatch(loadButtons(6))} className="btn btn-outline-info col-2">6</button>
                        <button onClick={() =>dispatch(loadButtons('-'))} className="btn btn-outline-info col-2">-</button> 
                        
                        </div>

                        <div className="row min-flex">
                        <button onClick={() =>dispatch(loadButtons(1))} className="btn btn-outline-info col-2">1</button>
                       <button onClick={() =>dispatch(loadButtons(2))} className="btn btn-outline-info col-2">2</button>
                       <button onClick={() =>dispatch(loadButtons(3))} className="btn btn-outline-info col-2">3</button>
                       <button onClick={() =>dispatch(loadButtons('*'))} className="btn btn-outline-info col-2">*</button>
                            
                        </div>
                        

                        <div className="row min-flex">
                        <button onClick={() =>dispatch(loadButtons('.'))} className="btn btn-outline-info col-2">.</button>
                        <button onClick={() =>dispatch(loadButtons(0))} className="btn btn-outline-info col-2">0</button> 
                        <button onClick={handleAnswer} className="btn btn-outline-info col-2">=</button> 
                        </div>

                       

                    

                    

                       
        
                   </div>
                   
               </div>
           </section>
        </React.Fragment>
    )
}

export default CalculatorApp
