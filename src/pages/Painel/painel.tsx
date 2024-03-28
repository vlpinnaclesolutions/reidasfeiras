import "../../App.css";
import { ButtomNav } from "../../Components/ButtomNav";
// import { Link } from 'react-router-dom';
import { FiHome, FiPaperclip, FiBarChart2 } from "react-icons/fi";
import GridDashboard from '../../Components/Dashboard/dashboard'


export const Painel = () => {
  return (
    <div className="grid grid-flow-col grid-rows-3 gap-0 w-full h-screen bg-slate-100 ">
      {/* NAVBAR MENU */}
      <div
        id="div2"
        className="flex flex-col col-span-1 z-10 row-span-1 h-screen shadow-2xl bg-slate-200"
      >
        <img src="./profile.png" className="w-20 h-20 self-center mt-4" />

        <p className="ml-2 my-2 mb-14"> Bem vindo, Rubens!</p>
       

        <ButtomNav onClick={() => alert('Inicio')} titulo="Inicio" icone={FiHome} />
        
        <ButtomNav onClick={() => alert('Diagnósticos')}titulo="Diagnósticos" icone={FiBarChart2} />
        <ButtomNav onClick={() => alert('Importar planilha')}titulo="Importar" icone={FiPaperclip} />

        {/***** LOGO VLPINNACLE *****/}
        <div className="flex flex-col w-48 absolute bottom-7 self-center justify-center items-center">
          <p className="pl-2 mb-2 text-center text-xs text-slate-400">
            vlpinnacle solutions
          </p>
          <img
            src="./vlpinnacle.png"
            className="w-12 h-12 self-center opacity-55"
          />
        </div>
      </div>

      {/****** MAIN ******/}
      <div id="div3" className="col-span-12 row-span-4 w-full bg-blue-100 ">
        {/***** HEADER  ****/}
        <div
          id="div1"
          className=" w-full h-20 items-center pl-5 grid"
        >
          <h2>Diagnósticos</h2>
        </div>

        <GridDashboard />

      </div>
    </div>
  );
};
