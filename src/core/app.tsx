import { MediaStateProvider, NavStateProvider } from '@reapit/elements'
import '@reapit/elements/dist/index.css'
import React, { FC } from 'react'
import ErrorBoundary from '../components/hocs/error-boundary'
import Router from './router'

const App: FC = () => (
  <ErrorBoundary>
    <NavStateProvider>
      <MediaStateProvider>
        <Router />
      </MediaStateProvider>
    </NavStateProvider>
  </ErrorBoundary>
)

export default App
