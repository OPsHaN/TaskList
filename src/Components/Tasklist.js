import { FetchUserList , RemvoeUser } from "../Redux/Action";
import { connect } from "react-redux";
import { useEffect } from "react";
import {Link,useNavigate} from 'react-router-dom';

const Tasklist = (props) => {
const navigate=useNavigate();

    useEffect (() => {
        
    props.loaduser();

    } , [])

  const getDelete=(id)=>{
    if(window.confirm('Do you want to remove the task?')) {
     props.removeuser(id);
     props.loaduser();
     navigate('/login')
    }
  }  
    return ( 
        props.user.loading?<div className="d-flex justify-content-center  m-5 p-5">
<div class="spinner-grow text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
        </div>:
        props.user.errmessage?<div><h2>{props.user.errmessage}</h2></div>:
        
        <div>
<div className="card">
<div className="card-header d-flex">
<Link to={'/task/add'} className="btn btn-success">Add Task +</Link>
</div>
<div className="card-body">
<table className="table table-light table-striped ">
    <thead className="table-active font-weight-bold">
        <tr>
            <td>Id</td>
            <td>Task Name</td>
            <td>Description</td>
            <td>Status</td>
            <td>Action</td> 
        </tr>
    </thead>
    <tbody>
        {props.user.userlist && props.user.userlist.map(item=>
            <tr key={item.id}> 
<td>{item.id}</td>
<td>{item.task}</td>
<td>{item.description}</td>
<td>{item.status}</td>
<td><Link to={'/task/edit/'+item.id} className="btn btn-primary mx-3">Edit</Link>
<button  onClick={()=>getDelete(item.id)} className="btn btn-danger">Delete</button>
</td>
            </tr>)}
    </tbody>
</table>
</div>
</div>
        </div>
     );
}
 
const mapState=(state) =>{
//user from store
    return {
        user:state.user

    }
}
const mapDispatch=(dispatch) =>{
    //userlist from action
        return {
loaduser:() => dispatch(FetchUserList()),
removeuser:(id) => dispatch(RemvoeUser(id)),
        }
    }
export default connect(mapState,mapDispatch) (Tasklist);