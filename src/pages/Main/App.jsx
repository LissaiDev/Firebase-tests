import "../../App.scss"
import { Auth, collectionRef } from "../../../firebase/firebase";
import {getDocs} from "firebase/firestore";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { Navigate } from "react-router-dom";
function Main() {
    const [data, setData] = useState([]);
    const [isLogged, setIsLoggged] = useState(true);
    useEffect(()=>{
        fetchData();
      },[])

      
    const fetchData =async()=>{
        try{
            const response = await getDocs(collectionRef);
            const filteredData = response.docs.map((doc)=>({
                ...doc.data(), id: doc.id
            }));
            console.log(filteredData);
            setData(filteredData);
        }catch(error){
            console.log(error);
        }
    }

    if(!isLogged){
        return <Navigate to="/" />
    }

  return (
<>
<div style={{backgroundColor:"#212529", height:"100vh", overflowX: "hidden"}} className="row justify-content-center">
    <h1 className="text-center text-success">
    Usuários registrados: 
    </h1>
    {data.map((item)=>(
        <div className="col-6 text-center" key={item.id}>
            <h1>Nome: </h1>
            <p>
                {item.name}
            </p>
            <h1>
                Email:
            </h1>
            <p>
                {item.email}
            </p>
            <h1>
                UID:
            </h1>
            <p className="mb-4">
                {item.uid}
            </p>
        </div>
    ))}
    <div className="col-12"></div>
    <div className="col-2">
    <button onClick={()=> {signOut(Auth);setIsLoggged(false) }} className="btn btn-danger">
        Log out
    </button>
    </div>
</div>

</>  )
}

export default Main;