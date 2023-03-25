const redux = require('redux')

const counterReducer = (state={counter:0},action)=>{
if(action.type=='decrementbye2'){

    return {
        counter:state.counter-2
    }
}

if(action.type=='incrementby2'){
    return{
        counter:state.counter+2
    }
}
return {
    counter:state.counter
}
}

const store =redux.createStore(counterReducer);


const counterSubsriber = ()=>{

  const latestState=  store.getState()
  console.log(latestState)
}


store.subscribe(counterSubsriber);

store.dispatch({type:"incrementby2"})
store.dispatch({type:"incrementby2"})
store.dispatch({type:"decrementbye2"})