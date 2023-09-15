import './App.css'
import ContextComponenet from './componenets/Hooks/ContextComponenet'
import UseEffectHook from './componenets/Hooks/UseEffectHook'
import UseRef from './componenets/Hooks/UseRef'
// import TodoWrapper from './componenets/TodoWrapper'
// import Counter from './componenets/Counter'
// import Form from './componenets/Form'
// import Accordian from './componenets/Accordian/Accordian'
// import ApiCall from './componenets/Apicall/ApiCall'
import UseState from './componenets/Hooks/UseState'
import UseMemo from './componenets/Hooks/useMemo'
import { ThemeProvider } from './componenets/Hooks/UseContext'
import UseReducer from './componenets/Hooks/UseReducer'
import UseCallBack from './componenets/Hooks/UseCallBack'




function App() {
  return (
    <div>
      {/* <Counter />
      <Form /> */}
      {/* <TodoWrapper /> */}
      {/* <Accordian /> */}
      {/* <ApiCall /> */}
      {/* <UseState /> */}
      {/* <UseEffectHook /> */}
      {/* <UseMemo /> */}
      {/* <UseRef /> */}
      {/* <ThemeProvider>
        <ContextComponenet />
      </ThemeProvider> */}
      {/* <UseReducer /> */}
      <UseCallBack />

    </div>
  )
}

export default App