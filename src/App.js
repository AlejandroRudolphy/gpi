import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import EntrarPage from "./pages/EntrarPage";
import PerfilPage from "./pages/PerfilPage";
import ConveniosPage from "./pages/ConveniosPage";
import AdministrarConvenios from "./pages/AdministrarConvenios";
import CrearconvenioPage from "./pages/CrearconvenioPage";
import AdminPage from "./pages/AdminPage";
import PagosPage from "./pages/PagosPage";
//import PagoConveniosPage from "./pages/PagoConveniosPage";
import PagoAfiliadosPage from "./pages/PagoAfilliadosPage";
import FormularioAfiliate from "./pages/FormularioAfiliate";
import PagoAsociacionPage from "./pages/PagoAsociacionPage";
import PagoBonosPage from "./pages/pagoBonosPage";
import PagoPrestamosPage from "./pages/pagoPrestamosPage";
import Buscarconvenios from './pages/Buscarconvenios';
import BuscarConvenios1 from "./pages/Buscarconvenios1";
import BonosAfiliadoPage from './pages/BonosAfiliadoPage';
import PagosUsuarioPage from './pages/PagosUsuarioPage';
import MisConvenios from './pages/MisConvenios';
import MisConvenios1 from './pages/MisConvenios1';
import Otroitem from "./pages/Otroitem";
import Información from "./pages/Información";
import AdmAfiliados from "./pages/AdmAfiliados";
import AdministracionAfiliados from "./pages/AdministracionAfiliados";
import Solicitud from "./pages/Solicitud";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/entrar" component={EntrarPage} exact />
        <Route path="/perfil" component={PerfilPage} exact />
        <Route path="/convenios" component={ConveniosPage} exact />
        <Route path="/AdministrarConvenios" component={AdministrarConvenios} exact />
        <Route path="/admin" component={AdminPage} exact />
        <Route path="/pagos" component={PagosPage} exact />
        <Route path="/pagoAfiliados" component={PagoAfiliadosPage} exact />
        <Route path="/formularioAfiliate" component={FormularioAfiliate} exact />
        <Route path="/pagoAsociacion" component={PagoAsociacionPage} exact />
        <Route path="/pagoBonos" component={PagoBonosPage} exact />
        <Route path="/pagoPrestamos" component={PagoPrestamosPage} exact />
        <Route path="/buscarconvenios" component={Buscarconvenios} exact />
        <Route path='/CrearConvenio' component={CrearconvenioPage} exact />
        <Route path="/bonosAfiliado" component={BonosAfiliadoPage} exact />
        <Route path="/pagosUsuario" component={PagosUsuarioPage} exact />
        <Route path="/AdmAfiliados" component={AdmAfiliados} exact />
        <Route path="/AdministracionAfiliados" component={AdministracionAfiliados} exact />
        <Route path='/buscarconvenios' component={Buscarconvenios} exact />
        <Route path='/buscarconvenios1' component={BuscarConvenios1} exact />
        <Route path='/MisConvenios' component={MisConvenios} exact />
        <Route path='/MisConvenios1' component={MisConvenios1} exact />
        <Route path='/otroitem' component={Otroitem} />
        <Route path="/Información" component={Información} exact />
        <Route path="/Solicitud" component={Solicitud} exact />

      </Switch>
    </Router>
  );
}

export default App;
