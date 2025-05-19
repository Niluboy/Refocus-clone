import { motion } from 'motion/react'
import React from 'react'

function Marquee({val,direction}) {
  return (
    <div className='w-full flex  overflow-hidden'>
      <motion.div initial={{x: direction === "left" ? "0" : "-100%"}} 
      animate={{x: direction === "left" ? "-100%" : "0"}} transition={{ease:"linear" , duration: 15 ,repeat:Infinity}} className='flex flex-shrink-0 gap-24 py-10 pr-32'>
        {val.map((url,index) => <img key={index} src={url} className=''/>)}
      </motion.div>  
      <motion.div initial={{x:direction === "left" ? "0" : "-100%"}} 
      animate={{x:direction === "left" ? "-100%" : "0"}} transition={{ease:"linear" , duration: 15 ,repeat:Infinity}} className='flex flex-shrink-0 gap-24 py-10 pr-32'>
        {val.map((url,index) => <img key={index} src={url} className=''/>)}
      </motion.div>  
     
        
    </div>
     
  )
}   

export default Marquee