import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#fff',
    width:'70vw',
    height:'70vh',
    border: 'none',
    outline:'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button 
            type="button" onClick={handleOpen}
            size="small" color="primary"
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<AddCircleIcon/>}
        >
            Yangi element yaratish
        </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="Modal-Inner-Wrapper">
                <div className="title-modal" style={{display:'flex',alignItems:'center', justifyContent:"space-between"}}>
                    <span className="title-name">
                        <h2>Yangi mahsulot qo'shish</h2>
                    </span>
                    <span className="modal-buttons">
                    <Button variant="outlined" color="primary"
                        startIcon={<SaveIcon/>}
                        style={{marginRight:'10px'}}
                    >
                        Saqlash
                    </Button>
                    <Button variant="outlined" color="secondary"
                        startIcon={<DeleteIcon/>}
                    >
                        O'chirish
                    </Button>
                    </span>
                </div>     
                <div className="info-change">
                    {/* <CustomizedInputs /> */}
                    < div style={{display:'flex', justifyContent:'space-around',flexWrap:'wrap', alignItems:'center'}}>
                      <form className={classes.root} noValidate style={{display:'flex', flexDirection:'column'}}>
                        <ThemeProvider theme={theme}>
                          <TextField
                            style={{width:'300px', marginTop:'10px'}}
                            className={classes.margin}
                            label="Id"
                            type="number"
                            id="mui-theme-provider-standard-input"
                            // placeholder={id}
                          />
                          <TextField
                            style={{width:'300px',marginTop:'10px'}}
                            className={classes.margin}
                            label="Nomi"
                            // placeholder={name}
                            id="mui-theme-provider-standard-input"
                          />
                          <TextField
                            style={{width:'300px',marginTop:'10px'}}
                            className={classes.margin}
                            label="Narxi (uzb so'm)"
                            // placeholder={cost}
                            type="number"
                            id="mui-theme-provider-standard-input"
                          />
                          <TextField
                            style={{width:'300px',marginTop:'10px'}}
                            className={classes.margin}
                            label="URL (rasm)"
                            // placeholder={url}
                            id="mui-theme-provider-standard-input"
                          />
                          <TextField
                            style={{width:'300px',marginTop:'10px'}}
                            className={classes.margin}
                            label="Qo'shimcha ma'lumotlar"
                            id="mui-theme-provider-standard-input"
                            // placeholder={extra}
                          />
                        </ThemeProvider>
                      </form>
                      <div style={{marginLeft:'100px'}}>
                        <img 
                          src="https://picsum.photos/900" 
                          alt="sdfdf" 
                          style={{
                            maxWidth:'90%',
                            minWidth:'400px',
                            height:'400px',
                            objectFit:'cover'
                          }}
                        />
                      </div>
                      </div>
                </div>
              </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
