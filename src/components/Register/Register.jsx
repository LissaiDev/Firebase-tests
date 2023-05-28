import { motion } from "framer-motion"
import { Auth, collectionRef } from "../../../firebase/firebase"
import { useState, useEffect } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { Navigate } from "react-router-dom"
import { addDoc } from "firebase/firestore"
function Register({setPage}) {
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [isLogged, setIsLoggged] = useState(false);

  useEffect(()=>{
    if(Auth?.currentUser?.uid){
      setIsLoggged(true);
    }
  },[isLogged])

  const add = async(userId) => {
    try{
      await addDoc(collectionRef, {
        email, name, uid: userId
      })
   }catch(error){
     console.log(error);
   }
  }

  const handleClick = () => {
    setText("Processando...")
    console.log(name, email, password);
    createUserWithEmailAndPassword(Auth, email, password).then((userCredential) => {
      const userInfo = userCredential.user.uid;
      console.log(userInfo);
      add(userInfo);
      setText("Cadastrado com sucesso!");
      setIsLoggged(true);
    }).catch((error) => {
      console.error(error);
      setText("Erro ao cadastrar!")
    })
    console.log(Auth?.currentUser?.uid);
  }

  return (
    <>
    {isLogged ? <Navigate to="/main" /> : <div className="home-container  text-white">
    <div className="w-100 container row justify-content-center">
      <div className="col-md-6 text-center row col-12">
        <div className="col-6  button-inactive p-2" onClick={()=>setPage(true)} >Sign In</div>
        <div className="col-6  button p-2" onClick={()=>setPage(false)}>Register</div>
      </div>
      <div className="col-12 my-4 "></div>
      <div className="col-md-3 d-flex justify-content-around col-9 ">
        <a href="#" className="bi bi-facebook fs-5"></a>
        <a href="#" className="bi bi-twitter fs-5 "></a>
        <a href="#" className="bi bi-instagram fs-5"></a>
        <a href="#" className="bi bi-google fs-5"></a>
      </div>
      <div className="col-12 my-2"></div>

      <motion.form initial={{opacity:0, scale: 0.8}} transition={{duration: 0.5, type: "spring"}} animate={{opacity:1, scale: 1}} className="col-md-6 col-12">
        <div className="form-group mb-3">
          <label className="label ms-2 text-left">
            Name
          </label>
          <input type="text" className="d-block input" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Insert your name" />
        </div>
        <div className="form-group mb-3">
          <label className="label ms-2 text-left">
            Email
          </label>
          <input type="email" className="d-block input" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Insert your email" />
        </div>
        <div className="form-group mb-3">
          <label className="label ms-2 text-left">
            Password
          </label>
          <input type="password" className="d-block input" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Insert your password" />
        </div>
        <p className="textext-light">
           {text}
        </p>
        <div className="text-center">
        <motion.a onClick={handleClick} whileHover={{scale: 1.1}} whileTap={{scale: 0.5 }} className="btn">
          <i className="bi bi-play-fill fs-3" />
        </motion.a> 
        </div>
      </motion.form>
    </div>
  </div>}
    </>
  )
}

export default Register