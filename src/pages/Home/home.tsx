
import { Button, Alert, AlertTitle, Paper } from "@mui/material";
import { Link } from "react-router-dom";

import "../../App.css";

function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-3 bg-white">
     
     <div className="w-screen">
     <Alert severity="info" className="w-screen justify-center items-center">
        <AlertTitle>ATENÇÃO</AlertTitle>
        Verifique a sua planilha antes de enviar para o sistema analisar!!
      </Alert>

     </div>
      <Paper variant="outlined" elevation={2}>
              <Link to={"/dashboard"}>
        <Button variant="contained">Selecionar planilha</Button>
      </Link>
      </Paper>


    </div>
  );
}

export default Home;
