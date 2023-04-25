import { Typography,Box,useTheme } from "@mui/material";
import { tokens } from "../theme";

// Renders the title and subtitle of the header component, styling included
const Header = ({title, subtitle})=> {
    // Hook to get the curren theme for the header
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return <Box mb={"30px"}>
    <Typography variant="h2" color={colors.gray[100]} fontWeight="bold" sx={{mb : "5px"}}>
        {title}
    </Typography>
    <Typography variant="h5" color={colors.blueaccent[400]}>{subtitle}</Typography>

    </Box>
}

// Exported for use in other parts of application
export default Header;
