'use client'
import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store';

const WrapperComponent = ({children} : Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <Provider store={store} >
    {children}
    </Provider>
  )
}

export default WrapperComponent
