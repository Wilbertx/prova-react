import {createTheme, ThemeProvider} from '@mui/material/styles';
import Typography from "@mui/material/Typography";

const theme = createTheme();

export const HomeScreens = () => {
    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h2" textAlign={"center"}>Henrique e Juliano</Typography>
            <Typography variant="h5" component="h2" textAlign={"center"} gutterBottom>
          <img src="https://rd1.com.br/wp-content/uploads/2022/08/20220807-henrique-e-juliano-750x422.jpg" alt="Henrique e Juliano" />
        </Typography>
        <Typography variant="h3" component="h5" textAlign={"center"}>A maior dupla sertaneja de todos os tempos!</Typography>
            
        </ThemeProvider>
    )
}
