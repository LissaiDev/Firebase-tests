import { motion } from "framer-motion"
import { Auth } from "../../../firebase/firebase"
import { useEffect, useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { Navigate } from "react-router-dom"
function SignIn({setPage}) {
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [text, setText] = useState("");
  const [isLoggged, setIsLoggged] = useState(false);

  useEffect(()=>{
    if(Auth?.currentUser?.uid){
      console.log(Auth?.currentUser?.uid);
      setIsLoggged(true);
    }
  },[isLoggged])
  const handleClick= ()=>{
    setText("Processando...")
    signInWithEmailAndPassword(Auth, email, password).then((userCredential) => {
      const userInfo = userCredential.user;
      console.log(userInfo);
      setText("Autenticado com sucesso!");
      setIsLoggged(true);
    }).catch((error) => {
      console.error(error);
      setText("Erro ao autenticar!")
    })
    console.log(Auth?.currentUser?.uid);
  }
  return (
      <>
        {isLoggged ? <Navigate to="/main" /> :     <div  className="home-container  text-white">
      <div className="w-100 container row justify-content-center">
        <div className="col-md-6 text-center row col-12">
          <div className="col-6  button p-2" onClick={()=>setPage(true)}>Sign In</div>
          <div className="col-6  button-inactive p-2" onClick={()=>setPage(false)} >Register</div>
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
              Email
            </label>
            <input type="email" className="d-block input" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Insert your email" />
          </div>
          <div className="form-group">
            <label className="label ms-2 text-left">
              Password
            </label>
            <input type="password" className="d-block input" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Insert your password" />
          </div>
          <p className="text-light">
            {text}
          </p>
          <div className="text-center">
          <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.5 }} onClick={handleClick} className="btn" href="#">
            <i className="bi bi-play-fill fs-3" />
          </motion.a> 
          </div>
        </motion.form>
      </div>
    </div>
}
      </>
    )
}

export default SignIn