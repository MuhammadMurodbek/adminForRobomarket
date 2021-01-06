import React,{useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/Update';
import Card from '../Cards/Card';
import Axios from 'axios';

export function Dashboard(){
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentpage, setCurrentpage] = useState(9);
    
    useEffect(()=>{
      const fetchPosts = async()=>{
        setLoading(true)
        const res = await Axios.get('https://jsonplaceholder.typicode.com/photos')
        setPosts(res.data)
        setLoading()
      }
      fetchPosts()
    },[])
    let lastItem = 3;
   const onChangeLo =()=>{
      setCurrentpage(currentpage+10);
      lastItem +=1;
    }
    return(
        <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}> 
        { 
          posts.slice(0,currentpage).map(element => {
            return(
              <><Card 
                  key={element.id} 
                  id={element.id} 
                  name = {element.name} 
                  title={element.title} 
                  cost={element.cost} 
                  url={element.url} 
                  extra={element.extra}/>
                  </>
            )
          })  
        }
      <div style={{width:'100%', display:'flex',justifyContent:'center', margin:'10px'}}>
        <Button 
          startIcon={<UpdateIcon/>}
          onClick={onChangeLo} 
          style={{
            border:'none',
            outline:'none',
            color:'#3f51b5',
            backgroundColor:'#fff',
            borderRadius:'5px',
            padding:'3px 5px',
            fontWeight:'500',
            marginTop:'40px'
          }}
          
        >
          Ko'proq ma'lumot
        </Button>
      </div> 
    </div>
    )
}