import React, {useState, useEffect} from 'react';
import { MDBDataTable } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import axios from 'axios';



export default function DatatablePageRemoved(props) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [post, setPost] = useState({})

  useEffect(()=>{
    axios.get('https://reqres.in/api/users?page=2')
      .then(response=>{
        setLoading(false)
        setPost(response.data)
        setError('')
      })
      .catch(error=>{
        setLoading(false)
        setPost({})
        setError('Something went wrong')
      })
  },[]) 
  const data = {
    columns: [
       {
        label: 'Id',
        field: 'id',
        sort: 'asc',
        width: 50
       },
      {
        label: 'Nomi',
        field: 'first_name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Narxi',
        field: 'last_name',
        sort: 'asc',
        width: 150
       },
      {
        label: 'URL (rasm)',
        field: 'avatar',
        sort: 'asc',
        width: 160
      },
      {
        label: "Qo'shimcha",
        field: 'email',
        sort: 'asc',
        width: 300
      },
     
      {
        label: "O'chirilgan vaqti",
        field: 'date',
        sort: 'asc',
        width: 150
      }
    ],
    rows: post.data
  };
   return(
   <div>
      <h2 style={{color:'orangered'}}>{props.name}<span style={{marginLeft:'15px'}}><RemoveShoppingCartIcon/></span></h2>    
       <MDBDataTable
        striped
        hover
        data={data}
        /> 
   </div> 
  )
}
 