import {
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const App = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "1rem",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <ConnectButton />
      </div>
      <div
        style={{
          padding: "1rem",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          variant="outlined"
          sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 2, width: "50%", minWidth: "360px"}}
        >
          <Typography variant="h6" fontWeight={"bold"}>WalletX Factory Contract Deployer</Typography>
          <TextField id="outlined-basic" label="Contract/Wallet Name" variant="outlined" />
          <TextField id="outlined-basic" label="Factory Contract Address" variant="outlined" />
          <TextField id="outlined-basic" label="Description" variant="outlined" />
          <div style={{display: "flex", gap: "8px", alignItems: "center"}}>
            <Checkbox />
            Audited
          </div>
          <Button fullWidth variant="contained">Deploy wallet</Button>
        </Paper>
      </div>
    </div>
  );
};

export default App;
