import { ColorModeContext, useMode, } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
// import Requests from "./scenes/requests";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";
import { Routes, Route } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();
   
   // Returns code 
  return (
  // Component with value of colorMode, changes current color of display using Context API
  <ColorModeContext.Provider value={colorMode}>
  // Application styling
    <ThemeProvider theme={theme}>
    // Normalizes browser styling
      <CssBaseline/>

    <div className="app">
    // Creates the side bar, top bar. Routes to components for app to render. 
      <Sidebar/>
      <main className="content">
        <Topbar/> 
        <Routes>
          <Route path="/" element = {<Dashboard/>} />
          <Route path="/team" element = {<Team/>} /> 
          <Route path="/contacts" element = {<Contacts/>} />
          {/* <Route path="/requests" element = {<Requests/>} /> */}
          {/* <Route path="/form" element = {<Form/>} /> */}
          {/* <Route path="/bar" element = {<Bar/>} /> */}
          {/* <Route path="/pie" element = {<Pie/>} /> */}
          {/* <Route path="/line" element = {<Line/>} /> */}
          {/* <Route path="/faq" element = {<FAQ/>} /> */}
          {/* <Route path="/geography" element = {<Geography/>} /> */}
          {/* <Route path="/calendar" element = {<Calendar/>} /> */}
        </Routes>
      </main>
    </div>



    </ThemeProvider>

  

  </ColorModeContext.Provider>
    
   
    
  );
}

export default App;




