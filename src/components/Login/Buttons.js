import React from 'react'
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function Buttonlog(){
    return(
        <Button variant="contained" color="primary" style={{outline:'none', marginTop:'30px', padding:'8px 50px'}} startIcon={<ExitToAppIcon/>}>
           Log in
        </Button>
    )
}