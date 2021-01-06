import React,{useState} from 'react';
import clsx from 'clsx';
import {BrowserRouter as  Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

export default function LoginForm() {
  const classes = useStyles();
  const [password, setPassword] = useState('')
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
        setPassword({
            password:event.target.value
        })
        console.log(password.password)
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [username, setUsername] = useState('')
  const getValue =(e)=>{
      setUsername({
          username:e.target.value
      })
      console.log(username.username)
  }
  const postData=()=>{
      const data={
          'username':username.username,
          'password':password.password
      }
      axios.post('https://jsonplaceholder.typicode.com/posts', data)
        .then(response=>console.log(response))
        .catch((errorMessege)=>{
            console.log(errorMessege)
        })
  }

  const onSbmt =(e)=>{
    e.preventDefault()
  }

  return (
    <div className={classes.root} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height:'100vh'}}>
        <h2 style={{marginBottom:'20px'}}>Admin</h2>
      <form onSubmit={onSbmt} style={{ display:'flex', flexDirection:'column', width:'40%', minWidth:'300px'}}>
        <TextField 
            id="standard-secondary" 
            label="Username" 
            required 
            color="primary" 
            style={{marginBottom:"50px"}} 
            onChange={getValue}
        />
        <FormControl className={clsx(classes.margin, classes.textField)} style={{width:'100%'}} required>
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            required
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            // onClick={getPassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <div>
            <Link to="/sidebar/main">
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<ExitToAppIcon />}
                    style={{outline:'none', marginTop:'50px'}}
                    onClick={postData}
                >
                    Log in
                </Button>
            </Link>
        </div>
      </form>
    </div>
  );
}
