import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {EditUser , FetchUserOgj } from "../Redux/Action";

const Updateuser = () => {
    const [id,idchange] = useState (0);
    const [task,taskchange] = useState ('');
    const [description,descriptionchange] = useState ('');
    const [status,statuschange] = useState ('');
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {code}=useParams();
    const userobj=useSelector((state)=>state.user.userobj)
    
    const savedata =(e)=>{
        e.preventDefault();
        const userobj={task,description,status}
        dispatch(EditUser(userobj,id))
         navigate('/tasks')
        //test the userobj
    console.log(userobj)
    }

    useEffect(() => {   
        dispatch(FetchUserOgj(code))
        },[])
     
        useEffect(() => {  
        if(userobj){
            idchange(userobj.id);
            taskchange(userobj.task);
            descriptionchange(userobj.description);
            statuschange(userobj.status);
        }
            },[userobj])

        return ( 
            <div>
                <form onSubmit={savedata}>
                <div className="card">
                    <div className="card-header">
    <h2>Edit Task</h2>
                    </div>
                    <div className="card-body">
    <div class="row">
        <div className='col-lg-12'>
            <div className='form-group'>
                <label className='py-1'>Id</label>
                <input value={id || ''} disabled='disabled' className='form-control'></input>
            </div>
        </div>
        <div className='col-lg-12'>
            <div className='form-group'>
                <label className='py-1'>Task Name</label>
                <input value={task || ''} onChange={e=>taskchange(e.target.value)} className='form-control'></input>
            </div>
        </div>
        <div className='col-lg-12'>
            <div className='form-group'>
                <label className='py-1'>Description</label>
                <input value={description || ''} onChange={e=>descriptionchange(e.target.value)}  className='form-control'></input>
            </div>
        </div>
        <div className='col-lg-12'>
            <div className='form-group'>
                <label className='py-1'>Status</label>
                <input value={status || ''} onChange={e=>statuschange(e.target.value)}  className='form-control'></input>
            </div>
        </div>
    </div>
                    </div>
                    <div className="card-footer">
    <button className="btn btn-primary mx-3" type="submit">Edit</button>
    <Link className="btn btn-info" to={'/tasks'}>Back</Link>
                        </div>
                </div>
                </form>
            </div>
         );
}
 
export default Updateuser;