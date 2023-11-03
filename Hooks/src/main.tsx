import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MultipleCustomHooks from './03-examples/MultipleCustomHooks'
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
    <MultipleCustomHooks />
  </React.StrictMode>,
)
