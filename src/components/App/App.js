import Menu from '../Menu/Menu';
import './App.css';
import { Stack } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Team from './Team/Team';
import Talent from '../Talent/Talent';

const theme = createTheme({
  typography: {
    
    CaptionMedium: {
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: 0.4,
    },
    Caption: {
      fontSize: 12,
      fontWeight: 400,
      letterSpacing: 0.4,
    },
    H5: {
      fontSize: 24,
      fontWeight: 400
    },
    body1: {
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: 0.1
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: 0.17
    },
    Subtitle2: {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: 0.1
    },
    BadgeLabel: {
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: 0.14
    },
    Tooltip: {
      fontSize: 10,
      fontWeight: 500,
    }
  },
  palette: {
    primary: {
      main: '#9e7dfe',
      light: '#aa8cff',
      dark: '#9777F2',
      contrastText: '#FFFFFF'
    },
    NeutralGrey: {
      main: '#808486',
      light: '#B3B5B7',
      dark: '#1B2226',
    },
    grey: {
      main: '#BDBDBD',
      light: '#1b2226',
      dark: '#9777f2',
    },
    shadesNew: {
      main: '#C5B1FE',
      light: '#E2D8FF'
    },
    text: {
      main: '#4E5356', 
      light: '#212121'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Stack direction="row">
          
          <Menu/>
          
          <Stack width="100%" padding={5} sx={{ bgcolor: '#F2F4F8' }}>
            {/* <Team/> */}
            <Talent/>
          </Stack>
        
        </Stack>
        
      </div>
    </ThemeProvider>
    
  );
}

export default App;
