import React, { useState } from 'react'
import  './Join.css'
import Dialog from './Dailogue'
import DBox from './DialogBoxNew'
import Options from './Options'
import OtherServices from '../Services/OtherServices'

const Join = () =>
{
    const [msg,setMsg] = useState('')
    const [open,setOpen] = useState(false)
    // const [newopen,setNewOpen] = useState(false)

    const loginStatus = localStorage.getItem('loginstatus')

    const Joining = () => {
   
        if(loginStatus==='1')
        {
    OtherServices.Joinus().then((response)=>response.json()).then(data=> {
        console.log(data)
        if(data.status===true)
                setOpen(true)
                setMsg(data.message)
    })
    }

    // else {
    //     setNewOpen(true)
    // }
    }

    return (
    <div className="content_section">
    <div className="row">
        <div className="col-md-12">
            <div className="content">
                <h4 className='joinh4'>#joinJandhani Jewellers</h4>
                <p>Aenean euismod bibendum laoreet. Proin gravida
                     dolor sit amet lacus accumsan et viverra justo commodo.</p>
                <button onClick={Joining}>JOIN</button>
           <Dialog open={open} onClose={(e) => setOpen(false)}>
                    {msg}
                </Dialog>
          {/* <DBox open={newopen} onClose={(e) => setNewOpen(false)}>
                    <Options/>
                    </DBox> */}
            </div>
        </div>
    </div>
</div>

    )
}

export default Join;