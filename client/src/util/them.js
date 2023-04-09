import { createTheme } from "@mui/material/styles";

export  const theme = createTheme({
  direction: 'rtl',
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          "&.Mui-focused": {
            color: 'rgba(0, 0, 0, 0.87)',
          },
        },
      }
    },
    MuiInput: {
      styleOverrides:{
        root:{
          "& .MuiInput-underline:before:":{
            color:'#ccc'
        },
        }
      },
      defaultProps: {
        variant: 'standard',

      },
    },
    MuiButton:{
      styleOverrides:{
        root:{
          marginRight:'30px'
        }
      }
    }
  },
});