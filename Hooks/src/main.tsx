import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import './08-useReducer/intro-reducer'

// import Layout from './05-useLayoutEffect/Layout'
// import Memorize from './06-Memos/Memorize'
// import MemoHook from './06-Memos/MemorizeHook'
// import CallbackHook from './06-Memos/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'
// import FocusScreen from './04-useRef/FocusScreen'
// import MultipleCustomHooks from './03-examples/MultipleCustomHooks'
// import SimpleForm from './02-useEfect/SimpleForm'
// import FormWithCustomHook from './02-useEfect/FormWithCustomHook'
// import HooksApp from './HooksApp';
// import CounterApp from './01-useState/CounterApp';
// import CounterWithCustomHook from './01-useState/CounterWithCustomHook';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    {/* <Layout /> */}
    {/* <Memorize /> */}
    {/* <MemoHook /> */}
    {/* <CallbackHook /> */}
    <Padre />
  </React.StrictMode>,
)
