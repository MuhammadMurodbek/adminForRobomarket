import React, {useState} from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import './Modal.css';
import {ThemeProvider, makeStyles, createMuiTheme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import axios from "axios";

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
export default function TransitionsModal({id, title, name, url, extra, cost}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //get Posts
  const [itemId, setItemId] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemUrl, setItemUrl] = useState('');
  const [itemExtra, setItemExtra] = useState('');
  const [itemCost, setItemCost] = useState('');

  const onGetItems =(eName)=>{
    setItemName({setItemName:eName.target.value})
    // console.log(itemName.setItemName);
  }
  const onGetId =(eId)=>{
    setItemId({setItemId:eId.target.value})
    // console.log(itemId.setItemId);
  }
  const onGetNarx =(eNarx)=>{
    setItemCost({setItemCost:eNarx.target.value})
    // console.log(itemCost.setItemCost);
  }
  const onGetUrl =(eUrl)=>{
    setItemUrl({setItemUrl:eUrl.target.value})
    // console.log(itemUrl.setItemUrl);
  }
  const onGetExtra =(eExtra)=>{
    setItemExtra({setItemExtra:eExtra.target.value})
    // console.log(itemExtra.setItemExtra);
  }

  const putData=()=>{
    const data={
      'Id':itemId,
      'Name':itemName,
      'Cost':itemCost,
      'ImgUrl':itemUrl,
      'Extra':itemExtra
    }
    axios.put('https://jsonplaceholder.typicode.com/posts/1',data)
      .then((data)=>{
        console.log(data)
      })
      .catch((errorItem)=>{
        console.log(errorItem)
      })
  }

  //deletePost
  const deleteData=()=>{
    const data={
      'Id':itemId,
      'Name':itemName,
      'Cost':itemCost,
      'ImgUrl':itemUrl,
      'Extra':itemExtra
    }
    axios.delete('https://jsonplaceholder.typicode.com/posts/1',data)
      .then((data)=>{
        console.log(data)
      })
      .catch((errorItem)=>{
        console.log(errorItem)
      })
  }
  // !deletePost
  const onSbmt =(e)=>{
    e.preventDefault()
  }
  return (
    <div>
      <Button 
            type="button" onClick={handleOpen}
            size="small" color="primary"
            variant="contained"
            className={classes.button}
            startIcon={<EditIcon/>}
        >
            Edit
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
          <div className={classes.paper} style={{ height:'auto'}}>
            <div className="Modal-Inner-Wrapper">
                <div className="title-modal" style={{display:'flex',alignItems:'center', justifyContent:"space-between"}}>
                    <span className="title-name">
                      <h2>{id}-Mahsulot</h2>
                    </span>
                    <span className="modal-buttons">
                    <Button variant="outlined" color="primary"
                        startIcon={<SaveIcon/>}
                        style={{marginRight:'10px'}}
                        onClick={putData}
                    >
                        Saqlash
                    </Button>
                    <Button variant="outlined" color="secondary"
                        startIcon={<DeleteIcon/>}
                        onClick={deleteData}
                    >
                        O'chirish
                    </Button>
                    </span>
                </div>     
                <div className="info-change" style={{ height:'auto',  display:'flex',  alignItems:'center',flexWrap:'wrap', justifyContent:'space-around'}}>
                    < div style={{display:'flex', justifyContent:'space-around',flexWrap:'wrap',alignItems:'center'}}>
                      <form onSubmit={onSbmt} className={classes.root} noValidate style={{display:'flex', flexDirection:'column'}}>
                        <ThemeProvider theme={theme}>
                          <TextField
                            style={{width:'300px'}}
                            className={classes.margin}
                            label="Id"
                            type="number"
                            id="mui-theme-provider-standard-input"
                            placeholder={id}
                            onChange={onGetId}
                          />
                          <TextField
                            style={{width:'300px'}}
                            className={classes.margin}
                            label="Nomi"
                            placeholder={name}
                            id="mui-theme-provider-standard-input"
                            onChange={onGetItems}
                          />
                          <TextField
                            style={{width:'300px'}}
                            className={classes.margin}
                            label="Narxi (uzb so'm)"
                            placeholder={cost}
                            type="number"
                            id="mui-theme-provider-standard-input"
                            onChange={onGetNarx}
                          />
                          <TextField
                            style={{width:'300px'}}
                            className={classes.margin}
                            label="URL (rasm)"
                            placeholder={url}
                            id="mui-theme-provider-standard-input"
                            onChange={onGetUrl}
                          />
                          <TextField
                            style={{width:'300px'}}
                            className={classes.margin}
                            label="Qo'shimcha ma'lumotlar"
                            id="mui-theme-provider-standard-input"
                            placeholder={extra}
                            onChange={onGetExtra}
                          />
                        </ThemeProvider>
                      </form>
                      <div style={{marginLeft:'80px'}}>
                        <img 
                          src={url} 
                          alt={title} 
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
