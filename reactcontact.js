import React,{ useState } from 'react'

const Reactcontact = () => {
    const [user,setUser] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    })
let name,value;
const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user,[name]:value});
};
const postData = async (e) => {
    e.preventDefault();
    const{name,email,phone,address } = user;
    if((name && email && phone && address)){
        const res= await fetch("https://loginform-8f9c8-default-rtdb.firebaseio.com/loginForm.json"
        ,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                name,
                email,
                phone,
                address})
        })
        if (res){
            setUser({
            name: "",
            email: "",
            phone: "",
            address: "",
            });
            alert("Data Stored Successfully")
        }
    }
    else{
alert(("Please fill all the data"))
    }
    

};
  return (
    <div>
      <div>
        <div>
            <form method="POST">
                <span>Contact Us</span>

                <div >
                    <span>Your Name</span>
                    <input type = "text"
                    name ="name" 
                    placeholder = "Enter your name" 
                    value={user.name}
                    onChange={getUserData}
                    autoComplete ="off"
                    required/>
                    <span></span>
                </div>
                <div>
                    <span>Email Name</span>
                    <input type = "text"
                    name ="email" 
                    placeholder = "Enter your email address" 
                    value={user.email}
                    onChange={getUserData}
                    autoComplete ="off"
                    required/>
                    <span></span>
                </div>
                <div>
                    <span>Mobile Number</span>
                    <input type = "text"
                    name ="phone" 
                    placeholder = "Enter your phone number" 
                    value={user.phone}
                    onChange={getUserData}
                    autoComplete ="off"
                    required/>
                    <span></span>
                </div>
                <div>
                    <span>Address</span>
                    <input type = "text"
                    name ="address" 
                    placeholder = "Enter your adderess" 
                    value={user.address}
                    onChange={getUserData}
                    autoComplete ="off"
                    required/>
                    <span></span>
                </div>
                <div>
                    <button onClick={postData} >
                        <span>
                            Submit 
                            <i 
                            aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Reactcontact
