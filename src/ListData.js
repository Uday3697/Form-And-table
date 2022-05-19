import axios from "axios"
import { useEffect, useState } from "react";
import './ListData.css';

export default () => {
    const [data, setData] = useState([]);
    const fetchData = async() => {
        const res = await axios.get('http://localhost:4000/data');
        setData(res.data);
    }


    useEffect(() =>{
        fetchData();
    },[]);

    const renderData = data.map( d => {
        return <tr>
            <td> {d.name}</td>
            <td> {d.age}</td>
            <td> {d.dob}</td>
            <td> {d.gender}</td>
        </tr>
    });

    return (
        <div className="divcon">
        <table style={{width:"100%"}}>
            <tr>
                <th> Name </th>
                <th> Age </th>
                <th> D.O.B </th>
                <th> Gender </th>
            </tr>
            {renderData}
        </table>
        </div>
    );
}