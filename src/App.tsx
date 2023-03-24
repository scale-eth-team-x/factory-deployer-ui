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
import { Formik } from "formik";
import * as Yup from "yup";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import useContractFactoryAggregator from "./hooks/useContractFactoryAggregator";

const App = () => {

  const { addFactory } = useContractFactoryAggregator();

  return (
    <Formik
      initialValues={{
        _factoryName: "",
        _factoryAddress: "",
        _factoryDescription: "",
        _audited: false,
      }}
      validationSchema={Yup.object({
        _factoryName: Yup.string().required("Factory name is required!"),
        _factoryAddress:  Yup.string().required("Factory address is required!").matches(new RegExp('^0x[a-fA-F0-9]{40}$'), 'Invalid Address!'),
        _factoryDescription:  Yup.string().required("Factory description is required!"),
        _audited: Yup.bool(),
      })}
      onSubmit={async (values, {resetForm}) => {
        console.log("FORM VALUES", values);
        await addFactory(values);
        resetForm();
      }}
    >
      {(formik) => (
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
            sx={{
              padding: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "50%",
              minWidth: "360px",
            }}
          >
            <Typography variant="h6" fontWeight={"bold"}>
              WalletX Factory Contract Deployer
            </Typography>
            <TextField
              id="outlined-basic"
              label="Contract/Wallet Name"
              variant="outlined"
              error={formik.touched._factoryName && formik.errors._factoryName ? true : false}
              helperText={formik.touched._factoryName && formik.errors._factoryName ? formik.errors._factoryName : undefined}
              {...formik.getFieldProps('_factoryName')}
            />
            <TextField
              id="outlined-basic"
              label="Factory Contract Address"
              variant="outlined"
              error={formik.touched._factoryAddress && formik.errors._factoryAddress ? true : false}
              helperText={formik.touched._factoryAddress && formik.errors._factoryAddress ? formik.errors._factoryAddress : undefined}
              {...formik.getFieldProps('_factoryAddress')}
            />
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              error={formik.touched._factoryDescription && formik.errors._factoryDescription ? true : false}
              helperText={formik.touched._factoryDescription && formik.errors._factoryDescription ? formik.errors._factoryDescription : undefined}
              {...formik.getFieldProps('_factoryDescription')}
            />
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <Checkbox  {...formik.getFieldProps('_audited')}/>
              Audited
            </div>
            <Button fullWidth variant="contained" onClick={() => formik.handleSubmit()}>
              Deploy wallet
            </Button>
          </Paper>
        </div>
      </div>
      )}
    </Formik>
  );
};

export default App;
