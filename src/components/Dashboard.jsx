import React, { useState } from 'react'
import mail from "../assets/images/mail.svg"
import search from "../assets/images/search.svg"
import user from "../assets/images/user.svg"
import arrow from "../assets/images/arrow-right.svg"
import DoughnutChart from './DonughtChart'
import BarChart from './BarChart'


const Dashboard = () => {
    const weekData=[
        {
            images:mail,
            headers:"Top Authors",
            bodies:"HTML/CSS/JS/Python",
            progress:40,
            colour:"yellow"
        },
        {
            images:mail,
            headers:"Top Authors",
            bodies:"HTML/CSS/JS/Python",
            progress:40,
            colour:"blue"
        },
        {
            images:mail,
            headers:"Top Authors",
            bodies:"HTML/CSS/JS/Python",
            progress:40,
            colour:"orange"
        },
        {
            images:mail,
            headers:"Top Authors",
            bodies:"HTML/CSS/JS/Python",
            progress:40,
            colour:"red"
        },
    ]
    const monthData=[
        {
            images:mail,
            headers:"Top Authors",
            bodies:"HTML/CSS/JS/Python",
            progress:40,
            colour:"orange"
        },
        {
            images:mail,
            headers:"Top Authors",
            bodies:"HTML/CSS/JS/Python",
            progress:40,
            colour:"green"
        },
        {
            images:mail,
            headers:"Top Authors",
            bodies:"HTML/CSS/JS/Python",
            progress:40,
            colour:"red"
        },
        {
            images:mail,
            headers:"Top Authors",
            bodies:"HTML/CSS/JS/Python",
            progress:40,
            colour:"yellow"
        },
    ]
    const data=[
        {
            images:mail,
            headers:"Top Authors",
            bodies:"HTML/CSS/JS/Python",
            progress:40,
            colour:"yellow"
        },
        {
            images:search,
            headers:"Populars Authors",
            bodies:"HTML/VueJS/Laravel",
            progress:87,
            colour:"green"
        },
        {
            images:user,
            headers:"New Products",
            bodies:"HTML/CSS/JS/Python",
            progress:53,
            colour:"blue"
        },
        {
            images:arrow,
            headers:"Weekly BestSellers",
            bodies:"HTML/CSS/JS/Python",
            progress:92,
            colour:"gray"

        }
    ]
    const secondData=[
        {
            images:user,
            headers:"Man&Flower SaaS",
            bodies:"HR Solutions",
            colour:"yellow"
        },
        {
            images:user,
            headers:"Man&Flower SaaS",
            bodies:"HR Solutions",
            colour:"green"
        },
        {
            images:user,
            headers:"Man&Flower SaaS",
            bodies:"HR Solutions",
            colour:"blue"
        },
        {
            images:user,
            headers:"Man&Flower SaaS",
            bodies:"HR Solutions",
            colour:"gray"
        }
    ]
    const [btn,setBtn]=useState("day");
  return (
    <div className='container-fluid' style={{backgroundColor:"#F7F7F8"}}>
        <div className='row gap-4 d-flex align-items-center justify-content-center my-3'>
            <div className='col-sm-4 col-md-3 col-lg-3  rounded d-flex align-items-center justify-content-center flex-column' style={{backgroundColor:"#DBE5EF"}}>
                <div className='fs-3 text-center fw-bolder py-3'>Kickstart mobile application</div>
                <button className='px-3 py-3 rounded bg-color fw-2'>Create App</button>
                <div className='my-4'><img style={{width:"200px"}} className='rounded' src="https://th.bing.com/th?id=OIP.4l9P57v-KQSV4M5Hl4r-dgHaH0&w=243&h=256&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" /></div>
            </div>
            <div className='col-sm-4 col-md-6 col-lg-8 p-3 rounded' style={{backgroundColor:"#DBE5EF"}}>
                <div className='d-flex align-items-center justify-content-between p-3'>
                    <div>
                        <div>Campaign leaders</div>
                        <div>836227 Sales</div>
                    </div>
                    <div className='d-flex align-items-center justify-content-center gap-3'>
                        <div className='px-2 py-1 rounded cursor' style={btn=='day'?{backgroundColor:"wheat"}:null} onClick={()=>setBtn('day')}>Day</div>
                        <div className='px-2 py-1 rounded cursor' onClick={()=>setBtn('week')} style={btn=='week'?{backgroundColor:"wheat"}:null}>Week</div>
                        <div className='px-2 py-1 rounded cursor' onClick={()=>setBtn('month')} style={btn=='month'?{backgroundColor:"wheat"}:null}>Month</div>
                    </div>
                </div>
                {
                    btn=='day'?
                    data.map((val,ind)=>{
                
                 return <div className='d-flex align-items-center justify-content-between my-3' style={{overflowX:"auto"}} key={ind}>
                    <div className='d-flex align-items-center justify-content-center gap-3'>
                        <div className='p-3 rounded' style={{backgroundColor:`${val.colour}`}}><img src={val.images} alt="" /></div>
                        <div>
                            <div>{val.headers}</div>
                            <div>{val.bodies}</div>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-center gap-3'>
                        <div className='gap-2 d-flex align-items-center justify-content-center flex-column'>
                            <div>Progress</div>
                            <div className='w-100 rounded' style={{position:"relative", backgroundColor:"wheat", height:"4px"}}>
                                <div className='rounded' style={{position:"absolute", top:"0", left:"0", backgroundColor:`${val.colour}`, height:"4px", width:`${val.progress}%`}}></div>
                            </div>   
                        </div>
                        <div className='d-flex align-items-center justify-content-center p-1 rounded bg-success'><img src={arrow} alt="" /></div>
                    </div>
                </div>
                }):btn=='week'?weekData.map((val,ind)=>{
                    return <div className='d-flex align-items-center justify-content-between my-3' style={{overflowX:"auto"}} key={ind}>
                    <div className='d-flex align-items-center justify-content-center gap-3'>
                        <div className='p-3 rounded' style={{backgroundColor:`${val.colour}`}}><img src={val.images} alt="" /></div>
                        <div>
                            <div>{val.headers}</div>
                            <div>{val.bodies}</div>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-center gap-3'>
                        <div className='gap-2 d-flex align-items-center justify-content-center flex-column'>
                            <div>Progress</div>
                            <div className='w-100 rounded' style={{position:"relative", backgroundColor:"wheat", height:"4px"}}>
                                <div className='rounded' style={{position:"absolute", top:"0", left:"0", backgroundColor:`${val.colour}`, height:"4px", width:`${val.progress}%`}}></div>
                            </div>   
                        </div>
                        <div className='d-flex align-items-center justify-content-center p-1 rounded bg-success'><img src={arrow} alt="" /></div>
                    </div>
                </div>
                }):btn=='month'?
                monthData.map((val,ind)=>{
                    return <div className='d-flex align-items-center justify-content-between my-3' style={{overflowX:"auto"}} key={ind}>
                    <div className='d-flex align-items-center justify-content-center gap-3'>
                        <div className='p-3 rounded' style={{backgroundColor:`${val.colour}`}}><img src={val.images} alt="" /></div>
                        <div>
                            <div>{val.headers}</div>
                            <div>{val.bodies}</div>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-center gap-3'>
                        <div className='gap-2 d-flex align-items-center justify-content-center flex-column'>
                            <div>Progress</div>
                            <div className='w-100 rounded' style={{position:"relative", backgroundColor:"wheat", height:"4px"}}>
                                <div className='rounded' style={{position:"absolute", top:"0", left:"0", backgroundColor:`${val.colour}`, height:"4px", width:`${val.progress}%`}}></div>
                            </div>   
                        </div>
                        <div className='d-flex align-items-center justify-content-center p-1 rounded bg-success'><img src={arrow} alt="" /></div>
                    </div>
                </div>
                })
                :null
                }
            </div>
        </div>
        <div className='row gap-4 d-flex justify-content-center'>
                <div className='col-sm-4 h-100 col-md-3 col-lg-3 rounded d-flex align-items-center justify-content-center flex-column' style={{backgroundColor:"#DBE5EF",paddingBottom:"630px"}}>
                    <div className='p-3 d-flex align-items-center justify-content-start flex-column'>
                        <div className='fs-3 text-center fw-bolder'>Sales share</div>
                        <div>890,344 Sales</div>
                    </div>
                    <div>
                    <DoughnutChart/>
                    </div>
                </div>
                <div className='col-sm-4 col-md-6 col-lg-8 p-2 rounded' style={{backgroundColor:"#DBE5EF",overflowX:"auto"}}>
                    <div className='p-3'>
                        <div>Milestones</div>
                        <div>890,344 Sales</div>
                    </div>
                    <div className='row'>
                        <div className='d-flex align-items-center justify-content-center flex-column'>
                    {
                        secondData.map((val,ind)=>{
                     return <div className='px-3 my-2 w-100 d-flex align-items-center justify-content-center col-sm-4 col-md-3 col-lg-3' key={ind} >
                        <div className='d-flex align-items-center w-50 p-3 gap-3' style={{backgroundColor:"#6B6C75", borderRadius:"18px"}}>
                            <div className='p-3 rounded' style={{backgroundColor:`${val.colour}`}}><img src={val.images} alt="" /></div>
                            <div className='w-100'>
                                <div >{val.headers}</div>
                                <div>{val.bodies}</div>
                            </div>
                        </div>
                    </div>
                    })
                    }
                    </div>
                    <div className='d-flex w-100 align-items-center justify-content-center gap-5 my-3 col-sm-4  col-md-6 col-lg-8'>
                        <div>
                            <div>Sale</div>
                            <div>$650</div>
                        </div>
                        <div>
                            <div>Commision</div>
                            <div>$2,040</div>
                        </div>
                        <div>
                            <div>Refers</div>
                            <div>8,926</div>
                        </div>
                    </div>
                    <div>
                        <BarChart/>
                    </div>
                    </div>
                </div>
        </div>
        <div className='row gap-4 d-flex justify-content-center my-3'>
                <div className='d-flex rounded align-items-center justify-content-center flex-column col-sm-4 col-md-3 col-lg-3' style={{backgroundColor:"#DBE5EF",height:"100%",overflowY:"auto"}}>
                    <div>
                        <div className='fs-3 text-center fw-bolder py-3'>Timeline</div>
                        <div>Updates & notifications</div>
                    </div>
                    <div className='py-2 my-2' style={{width:"3px",height:"600px", backgroundColor:"white",position:"relative"}}>
                            <div style={{position:"absolute", display:"flex", alignItems:"center", justifyContent:"center", top:"0", left:"9px",width:"100%"}}>
                                <div>08:42</div>
                                <div style={{padding:"5px", borderRadius:"50%", backgroundColor:"white", border:"4px solid yellow"}}></div>
                                <div className='text-center d-flex justify-content-center'>outlines keep you honest.</div>
                            </div>
                            <div style={{position:"absolute", display:"flex", alignItems:"center", justifyContent:"center", top:"100px", left:"9px",width:"100%"}}>
                                <div>08:42</div>
                                <div style={{padding:"5px", borderRadius:"50%", backgroundColor:"white", border:"4px solid red"}}></div>
                                <div className='text-center d-flex justify-content-center'>Aeol meeting</div>
                            </div>
                            <div style={{position:"absolute", display:"flex", alignItems:"center", justifyContent:"center", top:"200px", left:"9px",width:"100%"}}>
                                <div>08:42</div>
                                <div style={{padding:"5px", borderRadius:"50%", backgroundColor:"white", border:"4px solid blue"}}></div>
                                <div className='text-center d-flex justify-content-center'>make deposit</div>
                            </div>
                            <div style={{position:"absolute", display:"flex", alignItems:"center", justifyContent:"center", top:"300px", left:"9px",width:"100%"}}>
                                <div>08:42</div>
                                <div style={{padding:"5px", borderRadius:"50%", backgroundColor:"white", border:"4px solid green"}}></div>
                                <div className='text-center d-flex justify-content-center'>outlines keep you honest.</div>
                            </div>
                            <div style={{position:"absolute", display:"flex", alignItems:"center", justifyContent:"center", top:"400px", left:"9px",width:"100%"}}>
                                <div>08:42</div>
                                <div style={{padding:"5px", borderRadius:"50%", backgroundColor:"white", border:"4px solid blue"}}></div>
                                <div className='text-center d-flex justify-content-center'>outlines keep you honest.</div>
                            </div>
                            <div style={{position:"absolute", display:"flex", alignItems:"center", justifyContent:"center", top:"500px", left:"9px",width:"100%"}}>
                                <div>08:42</div>
                                <div style={{padding:"5px", borderRadius:"50%", backgroundColor:"white", border:"4px solid red"}}></div>
                                <div className='text-center d-flex justify-content-center'>outlines keep you honest.</div>
                            </div>
                    </div>
                </div>
                <div className='col-sm-4 col-md-6 col-lg-8 rounded' style={{backgroundColor:"#DBE5EF"}}>
                {
                    data.map((val,ind)=>{
                
                 return <div className='d-flex align-items-center justify-content-between my-3' style={{overflowX:"auto"}} key={ind}>
                    <div className='d-flex align-items-center justify-content-center gap-3'>
                        <div className='p-3 rounded' style={{backgroundColor:`${val.colour}`}}><img src={val.images} alt="" /></div>
                        <div>
                            <div>{val.headers}</div>
                            <div>{val.bodies}</div>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-center gap-3'>
                        <div className='gap-2 d-flex align-items-center justify-content-center flex-column'>
                            <div>Progress</div>
                            <div className='w-100 rounded' style={{position:"relative", backgroundColor:"wheat", height:"4px"}}>
                                <div className='rounded' style={{position:"absolute", top:"0", left:"0", backgroundColor:`${val.colour}`, height:"4px", width:`${val.progress}%`}}></div>
                            </div>   
                        </div>
                        <div className='d-flex align-items-center justify-content-center p-1 rounded bg-success'><img src={arrow} alt="" /></div>
                    </div>
                </div>
                })
                }
                </div>
        </div>
    </div>
  )
}

export default Dashboard