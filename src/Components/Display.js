import React from "react";
import { motion } from "framer-motion";

//own utils
import {CardContent, Card} from './Style'
import Cards from "./Card";

//MUI components
import { Grid, Typography} from "@mui/material";

//css from App (need to rewrite)
import '../App.css';
import '../Utils/Gradient.css'

//images (can consider CDN)
import TEST5 from '../Images/Hive_C.jpeg'
import TEST4 from '../Images/Cam_C.png'
import TEST6 from '../Images/bnw_C.jpeg'

export default function Display(){
    const color='rgba(0,0,0,1)'
    // const color1 ='rgba(0,0,0,0.8)'
    return(
        <div 
        className={'normal'} style={{
        transition: "all .5s ease",
        WebkitTransition: "all 1s ease",
        MozTransition: "all 1s ease", width: '100vw', flexDirection:'row', justifyContent:'center', overflow:'hidden'
        }}>
        <Grid container sx={{justifyContent:'center', mt:'5%', height:'100%'}}>
            <Cards Background={TEST4} hr={'100%'}
           direction={'to top'} direction2={'to bottom'} gradient={color} min={'100vw'} height={'100%'} resize={'90vw'} style={{ 
            borderRadius:'0.5em', backgroundSize:'30%', backgroundRepeat: 'no-repeat'}}>
            <CardContent style={{alignItems:'center',padding:'5%'}} >
            <Typography variant="h2" fontWeight={600} align='center' sx={{textTransform: 'uppercase', letterSpacing: 8}}>
                <span className="yellow" style={{color:'yellow'}}>Nikon Z5</span>
            </Typography>
            <Typography variant="h6" fontWeight={500} align='center' sx={{letterSpacing: 5}}>
                <span className="grey">No, I don't use this.</span>
            </Typography>
            </CardContent>
          </Cards>
          <Card direction={'to top'} direction2={'to bottom'} min={'100vw'} height={'100%'} resize={'100vw'} hr={'100%'}
            style={{justifySelf:'center', height:'100%',
            backgroundImage:`linear-gradient(to bottom  , rgba(0, 0, 0, 0.6), rgba(255, 0, 0, 0),rgba(0,0,0,0.2)), url(${TEST6})`, borderRadius:'0.5em'}}>
                <motion.div whileInView={{ backdropFilter: ['blur(0px)', 'blur(7px)'] }}
                viewport={{ once: true, amount: 1 }}
                transition={{
                backdropFilter: { duration: 1.6 }}}
                initial={{ backdropFilter: '0px' }} style={{alignItems:'center', display:'flex',
                height:'100%', justifyContent:'center', alignContent:'center', borderRadius:'0.5em', padding:'5%',
                backgroundImage:`linear-gradient(to top , rgba(0, 0, 0, 1), rgba(0, 87, 51, 0),rgba(0,0,0,0.8))`}}>
            <CardContent>
            <Typography variant="h6" fontWeight={600} align='center' sx={{textTransform: 'uppercase', letterSpacing: 8}}>
                <span className="red">Focus on this</span>
            </Typography>
            <Typography variant="h2" fontWeight={600} align='center' sx={{textTransform: 'uppercase', letterSpacing: 8}}>
                <span className="crimson">F/1.8</span>
            </Typography>
            <Typography variant="h6" fontWeight={500} align='center' sx={{letterSpacing: 8 }}>
                <span className="red">As blurry as myself now.</span>
            </Typography>
            </CardContent>
            </motion.div>
            </Card>
        </Grid>
        </div>
    
    )
}