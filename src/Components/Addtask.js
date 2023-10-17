import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import { AddNewUser } from "../Redux/Action";

const Addtask = () => {

const [task,taskchange] = useState ('');
const [description,descriptionchange] = useState ('');
const [status,statuschange] = useState ('');
const dispatch=useDispatch();
const navigate=useNavigate();



const savedata =(e)=>{
    e.preventDefault();
    const userobj={task,description,status}
     dispatch(AddNewUser(userobj))
     navigate('/tasks')
    //test the userobj
console.log(userobj)

}
    return ( 
        <div>
            <form onSubmit={savedata}>
            <div className="card">
                <div className="card-header">
<h2>Add Task</h2>
                </div>
                <div className="card-body">
<div class="row">
    <div className='col-lg-12'>
        <div className='form-group'>
            <label className='py-1'>Task</label>
            <input value={task} onChange={e=>taskchange(e.target.value)} className='form-control'></input>
        </div>
    </div>
    <div className='col-lg-12'>
        <div className='form-group'>
            <label className='py-1'>Description</label>
            <input value={description} onChange={e=>descriptionchange(e.target.value)} className='form-control'></input>
        </div>
    </div>
    <div className='col-lg-12'>
        <div className='form-group'>
            <label className='py-1'>Status</label>
            <input value={status} onChange={e=>statuschange(e.target.value)}  className='form-control'></input>
        </div>
    </div>
</div>
                </div>
                <div className="card-footer">
<button className="btn btn-primary mx-3" type="submit">Submit</button>
<Link className="btn btn-info" to={'/tasks'}>Back</Link>
                    </div>
            </div>
            </form>
        </div>
     );
}
 
export default Addtask;