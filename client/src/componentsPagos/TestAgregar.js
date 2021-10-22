//Diálogo que aparece al agregar un nuevo pago

import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";

import { useState } from "react";
import Axios from "axios";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //-----------------------------------------//
  //Ubicación del botón
  const mystyle = {
    height: 80,
    width: "100%",
    padding: "0px",
    margin: "80px 15px 15px 0px",
  };

  // Estados para datos de tabla convenios
  const [modalEditar, setModalEditar] = useState(false);
  const [rut_afiliado, setRut_afiliado] = useState("");
  const [monto, setMonto] = useState(0);
  const [fecha, setFecha] = useState("");
  //const [id_deuda, setDeuda] = useState("");
  const [listDeuda, setListDeuda] = useState([]);

  //estados
  const [estado, setEstado] = useState("");

  const cambioEstado = (event) => {
    setEstado(event.target.value);
  };

  /*const [descripcion, setDescripcion] = useState("");

  const cambioDescripcion = (event) => {
    setDescripcion(event.target.value);
  };*/

  /*   const [monto, setMonto] = useState(0);
  const [fecha, setFecha] = useState("");
  const [rutAfiliado, setRutafiliado] = useState(0);
  const [estado, setEstado] = useState("");

  const cambioEstado = (e) => {
    setEstado(e.target.value);
  }; */

  //--------------------------------
  const agregarPagos = () => {
    Axios.post("http://localhost:3001/createIngresoAfiliado", {
      monto: monto,
      fecha: fecha,
      estado: estado,
    }).then(() => {
      console.log("Exitoso");
      handleClose();
    });
  };

  const agregarPagosAfiliados = () => {
    Axios.post("http://localhost:3001/createIngresosAfiliados", {
      rut_afiliado: rut_afiliado,
    }).then(() => {
      console.log("Exitoso");
      handleClose();
    });
  };

  /*const agregarIngresosDeudas = () => {
    Axios.post("http://localhost:3001/createIngresosDeudas", {
      id_deuda: id_deuda,
    }).then(() => {
      console.log("Exitoso");
      handleClose();
    });
  };*/

  const getDeudas = async () => {
    await Axios.get(`http://localhost:3001/getDeudas/${rut_afiliado}`)
      .then((response) => {
        setListDeuda(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /*const actualizarDeuda = async (id) => {
    Axios.put("http://localhost:3001/actualizarDeuda", {
      id_deuda: id_deuda,
      monto: monto,
    })
      .then(() => {
        setListDeuda(
          listDeuda.map((val) => {
            return val.id_deuda === id_deuda
              ? {
                  monto: monto,
                }
              : val;
          })
        );
        OCModalEditar();
      })
      .catch((error) => {
        console.log(error);
      });
  };*/
    
  return (
    <div>
      <div style={mystyle}>
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Box p={5}>
            <Button
              style={{ backgroundColor: "#23BB77" }}
              variant="contained"
              color="primary"
              onClick={handleClickOpen}
            >
              Agregar pago
            </Button>
          </Box>
        </Box>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Agregar pago</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para agregar un pago de un afiliado llenar los siguientes campos:
          </DialogContentText>
          <p> Datos Personales </p>

          <TextField
            autofocus
            margin="dense"
            id="rut_afiliado"
            label="rut_afiliado"
            variant="outlined"
            size="medium"
            onChange={(e) => {
              setRut_afiliado(e.target.value);
            }}
          />

          <p> Datos de Pago </p>
          <p />
          <TextField
            autofocus
            margin="dense"
            id="monto"
            label="monto"
            variant="outlined"
            size="medium"
            onChange={(e) => {
              setMonto(e.target.value);
            }}
          />
          <p />
          <TextField
            autofocus
            margin="dense"
            id="fecha"
            variant="outlined"
            size="medium"
            type="date"
            onChange={(e) => {
              setFecha(e.target.value);
            }}
          />

          <p />

          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              Estado de pago
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select"
              value={estado}
              onChange={cambioEstado}
            >
              <MenuItem value={1}> Pendiente </MenuItem>
              <MenuItem value={2}> Aceptado </MenuItem>
              <MenuItem value={3}> Rechazado </MenuItem>
            </Select>
          </FormControl>
          <p />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button
            onClick={(e) => {
              agregarPagos();
              agregarPagosAfiliados();
              //agregarIngresosDeudas();
              getDeudas();
              handleClose();
            }}
            color="primary"
          >
            Agregar pago
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
