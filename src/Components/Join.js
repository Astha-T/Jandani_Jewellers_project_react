import React, { useState } from 'react'
import  './Join.css'
import Dialog from './Dailogue'
import Login from '../Pages/Login'
import OtherServices from '../Services/OtherServices'

const Join = () =>
{
    const [msg,setMsg] = useState('')
    const [open,setOpen] = useState(false)

    const Joining = () => {
   
    OtherServices.Joinus().then((response)=>response.json()).then(data=> {
        console.log(data)
                setOpen(true)
                setMsg(data.message)
    })
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
            </div>
        </div>
    </div>
</div>

    )
}

export default Join;