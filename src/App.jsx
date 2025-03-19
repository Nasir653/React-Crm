import React from "react";
import {
  Container,
  Box,
  Typography,
  Paper,
  TextField,
  Select,
  MenuItem,
  IconButton,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Pmu_Details from "./Pmu_Details";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>

      <Drawer
        variant="permanent"
        sx={{
          width: isSidebarOpen ? 260 : 80,
          flexShrink: 0,
          position: "fixed",
          "& .MuiDrawer-paper": {
            width: isSidebarOpen ? 260 : 80,
            bgcolor: "#0D3845",
            color: "white",
            p: 2,
          },
        }}
      >

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
          {isSidebarOpen && (
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#85c67e" }}>
              mycom<span style={{ color: "white" }}>OSI</span>
            </Typography>
          )}
          <IconButton sx={{ color: "white" }} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
        </Box>

        {isSidebarOpen && (
          <>
            <Typography variant="h6" sx={{ mt: 1 }}>AInsights</Typography>
            <Divider sx={{ my: 2, bgcolor: "white" }} />
            <List>
              <ListItem button>
                <ListItemText primary="📊 Dashboards" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="📁 Resource" />
              </ListItem>
            </List>
          </>
        )}
      </Drawer>




      <Box
        sx={{
          flexGrow: 1,
          ml: isSidebarOpen ? "260px" : "80px",
          p: 2,
          transition: "margin 0.3s ease",
          width: "100%",
        }}
      >

        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", ml: 3, bgcolor: "#0D3845", maxWidth: "720px", color: "white", borderRadius: 10, }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>PMU Status Tree</Typography>

        </Box>


        <Paper sx={{ display: "flex", alignItems: "center", p: 1, mt: 2, borderRadius: 1, boxShadow: 2, bgcolor: "#f5f5f5" }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Filter by PMU Name"
            size="small"
            sx={{ bgcolor: "white", borderRadius: 1 }}
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Paper>


        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            gap: 1,
            mt: 2,
            overflowX: "auto",
          }}
        >

          <Paper sx={{ flex: 1, minWidth: "220px", p: 2, boxShadow: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>PMU NAME</Typography>
            <Divider sx={{ my: 1 }} />
            {[...Array(10)].map((_, i) => (
              <Typography key={i} sx={{ my: 0.5 }}>🟠 PMU_SMARTALARM_{i + 1}</Typography>
            ))}
          </Paper>


          <Paper sx={{ flex: 1, minWidth: "200px", p: 2, boxShadow: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>KPI's</Typography>
            <Divider sx={{ my: 1 }} />
            <Select fullWidth size="small" sx={{ mb: 1 }}>
              {[...Array(5)].map((_, i) => (
                <MenuItem key={i} value={`KPI_SMARTALARM_${i + 1}`}>KPI_SMARTALARM_{i + 1}</MenuItem>
              ))}
            </Select>
          </Paper>


          <Paper sx={{ flex: 1, minWidth: "200px", p: 2, boxShadow: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>KPI NAME</Typography>
            <Divider sx={{ my: 1 }} />
            {[...Array(5)].map((_, i) => (
              <Typography key={i} sx={{ my: 0.5 }}>✅ KPI_{i + 1}_REPORT</Typography>
            ))}
          </Paper>


          <Box sx={{ flex: 1, minWidth: "500px", maxWidth: "600px" }}>
            <Pmu_Details />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
