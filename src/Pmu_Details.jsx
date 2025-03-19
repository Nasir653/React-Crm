import React from "react";
import {
    Container,
    Box,
    Typography,
    Grid,
    Paper,
    IconButton,
} from "@mui/material";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import WifiIcon from "@mui/icons-material/Wifi";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";

const Pmu_Details = () => {
    return (

        <>
            <Container maxWidth="lg">

                <Paper
                    sx={{
                        backgroundColor: "#04384A",
                        color: "white",
                        p: 2,
                        borderRadius: 2,
                    }}
                >

                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h6">PMU Anomaly Details</Typography>
                        <Box>
                            <IconButton sx={{ color: "white" }}>
                                <InfoIcon />
                            </IconButton>
                            <IconButton sx={{ color: "white" }}>
                                <SettingsIcon />
                            </IconButton>
                        </Box>
                    </Box>


                    <Box display="flex" justifyContent="space-between" sx={{ px: 2, mt: 1 }}>
                        <Typography>AAS Threshold: %</Typography>
                        <Typography>AS Threshold: %</Typography>
                    </Box>


                    <Grid container spacing={2} sx={{ mt: 2 }}>

                        <Grid item xs={4}>
                            <Paper
                                sx={{
                                    p: 2,
                                    textAlign: "center",
                                    borderRadius: 2,
                                    position: "relative",
                                }}
                            >
                                <IconButton
                                    sx={{
                                        position: "absolute",
                                        top: -20,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        backgroundColor: "green",
                                        color: "white",
                                    }}
                                >
                                    <SignalCellularAltIcon />
                                </IconButton>
                                <Typography sx={{ mt: 2 }}>PMU Anomaly Score</Typography>
                                <IconButton>
                                    <ExpandMoreIcon />
                                </IconButton>
                            </Paper>
                        </Grid>


                        <Grid item xs={4}>
                            <Paper
                                sx={{
                                    p: 2,
                                    textAlign: "center",
                                    borderRadius: 2,
                                    position: "relative",
                                }}
                            >
                                <IconButton
                                    sx={{
                                        position: "absolute",
                                        top: -20,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        backgroundColor: "green",
                                        color: "white",
                                    }}
                                >
                                    <WifiIcon />
                                </IconButton>
                                <Typography sx={{ mt: 2 }}>MOI Anomaly Score</Typography>
                                <IconButton>
                                    <ExpandMoreIcon />
                                </IconButton>
                            </Paper>
                        </Grid>


                        <Grid item xs={4}>
                            <Paper
                                sx={{
                                    p: 2,
                                    textAlign: "center",
                                    borderRadius: 2,
                                    position: "relative",
                                }}
                            >
                                <IconButton
                                    sx={{
                                        position: "absolute",
                                        top: -20,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        backgroundColor: "green",
                                        color: "white",
                                    }}
                                >
                                    <DeviceThermostatIcon />
                                </IconButton>
                                <Typography sx={{ mt: 2 }}>KPI Anomaly Score</Typography>
                                <IconButton>
                                    <ExpandMoreIcon />
                                </IconButton>
                            </Paper>
                        </Grid>
                    </Grid>


                    <Paper sx={{ mt: 3, p: 2, backgroundColor: "#04384A", color: "white" }}>
                        <Typography textAlign="center">Prediction Chart</Typography>
                    </Paper>


                    <Typography textAlign="center" sx={{ mt: 1, fontWeight: "bold" }}>
                        2024-06-17
                    </Typography>


                    <Paper sx={{ height: 200, mt: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Typography>Graph Here</Typography>
                    </Paper>


                    <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 2 }}>
                        <Typography sx={{ color: "blue" }}>Envelop</Typography>
                        <Typography sx={{ color: "green" }}>Actual</Typography>
                        <Typography sx={{ color: "black" }}>Prediction</Typography>
                    </Box>
                </Paper>
            </Container>



        </>
    );
};

export default Pmu_Details;
