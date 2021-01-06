import React from 'react';
import TransitionsModal from "./Modal";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    maxWidth: 335,
    height:300
  },
});

export default function ImgMediaCard({id, name, cost, url, title, extra}) {
  const classes = useStyles();
  return (
    <div className="cardWrapper">
    <Card className={classes.root} style={{margin:"10px", position:'relative'}} >
      <CardActionArea style={{position:'relative'}}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={url}
          title="Contemplative Reptile"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
            <h5 style={{margin:0}}>Element {id}</h5>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{position:'absolute', bottom:0}}>
        
        <TransitionsModal id={id} name = {name} title={title} cost={cost} url={url} extra={extra}/>

        {/* <Button size="small"
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
        >
            Delete
        </Button> */}
      </CardActions>
    </Card>
    </div>
  );
}
