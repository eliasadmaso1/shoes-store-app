import React from 'react';
import {AppBar,Toolbar,IconButton,Badge, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons'
import useStyles from './Styles';
import {Link} from 'react-router-dom';
import {useMyContext} from '../../context'


export default function SimpleNavbar(props) {
    const {count} = useMyContext();
    const classes = useStyles();
    return (
        <AppBar position='navbar' className={classes.navbar} color='inherit'>
            <Toolbar>
            {props.name}
                <Typography variant='h6' className={classes.title} color='inherit'>

                <Link to={props.link1} style={{color:'black',textDecoration:'none'}}>Shirts</Link>
                <Link to={props.link2} style={{color:'black',textDecoration:'none'}}>Shoes</Link>
          
                </Typography>
               
  
                <div className={classes.grow}/>
                <div className={classes.button}>
                    <IconButton aria-label='show cart items' color='inherit'>
                        <Badge badgeContent={count} color='secondary'>
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
        
    )
}