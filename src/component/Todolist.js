import React, { useState } from 'react'
import './Todolist.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";


function Todolist() {
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);
    const [edit, setEdit] = useState(null);
    

    const handlerSubmit = (e) => {
        e.preventDefault();
    }

    const buttonClick = () => {
        if (edit !== null) {
            const updatedData = data.map((item, index) => 
                index === edit ? input : item
            );
            setData(updatedData);
            setEdit(null);
        } else {
            setData([...data, input]);
        }
        setInput('');
    };

    const onDelete = (id)=>{
        const del = data.filter((_,index)=>index !== id)
        setData(del)
    }
    const onEdit =(id)=>{
        setInput(data[id])
        setEdit(id);
        
    } 
    return (
        <div className='container d-flex justify-content-center align-items-center'>
            <div className='top-div card bg-secondary'>
                <h2 className='p-3'>TODO APP</h2>
                <form onSubmit={handlerSubmit}>
                    <div className='d-flex'>
                        <input className='ms-5 p-2 card' value={input} type='text' placeholder='Enter Todo List' onChange={(list) => setInput(list.target.value)} />
                        <button className='ms-2 rounded' onClick={buttonClick}>{edit !== null ? 'UPDATE' : 'ADD'}</button>
                    </div>
                    <div className='list p-2 me-5'>
                        <ul>
                            {
                                data.map((list,index) => (
                                    <li className=' card p-2 m-1' key={index}>
                                        <div>{list}</div>
                                        <span>
                                            <FiEdit className='edit' onClick={()=>onEdit(index)}/>
                                            <MdDelete className='del' onClick={()=>onDelete(index)}/>
                                        </span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Todolist
