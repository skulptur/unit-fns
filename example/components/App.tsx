import React from 'react'
import { SoundEditor } from './components/general/SoundEditor/SoundEditor'
import { ThemeProvider } from 'emotion-theming'

import { theme } from './theme'
import { AppLayout } from './components/general/AppLayout'
import { Browser } from './components/general/Sidebar'
import { AppBar } from './components/general/AppBar'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout
        menu={<AppBar />}
        sidebar={<Browser />}
        main={<SoundEditor title='Percussion' sampleRate={44100} />}
      />
    </ThemeProvider>
  )
}
