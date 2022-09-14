import { createTheme } from '@mui/material';

const tema = createTheme({
    palette: {
        primary: {
            main: '#F52273',
        },
        secondary: {
            main: '#F5F5F5',
        },
        text: {
            primary: '#F52273',
            secondary: '#6c6767',
        },
    },
    shape: {
        borderRadius: '3px',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#FFF',
                    borderRadius: '0',
                    backgroundColor: '#F52273',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    ":hover": {
                        backgroundColor: '#F52273',
                    }

                },
            },
        },
        MuiTextField: {
            defaultProps: {
                InputLabelProps: {
                    required: false,
                },
                required: true,
            },
        },
    },
});

export default tema;