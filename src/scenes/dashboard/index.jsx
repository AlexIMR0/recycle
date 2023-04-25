import { Box} from "@mui/material";
import Header from "../../components/Header.jsx";

// Creates Dashboard component from Box component. 
const Dashboard = () => {
    return <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to the dashboard"/>

        </Box>
 
    </Box>
}
export default Dashboard;

