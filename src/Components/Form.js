import "../Form.css"
import {useHistory} from "react-router-dom";
const Form = () => {

    const his = useHistory();
    
    return ( 
        <div className="form">
            <div className="center">
            <form action="" onSubmit={(e)=>{
                his.push("./calculator")
            }} >
                <div className="inputbox">
                <label htmlFor="firstname">First Name</label>
                <input required type="text" name="firstname" id="firstname" />
                </div>

                <div className="inputbox">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" id="lastname" required/>
                </div>

                <div className="inputbox">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required/>
                </div>

                <div className="inputbox">
                <label htmlFor="userid">User id</label>
                <input type="text" name="userid"  id="userid" required/>
                </div>

                <div className="inputbox">
                <label htmlFor="password">Password</label>
                <input type="password"  name="password" id="password" required/>
                </div>

                <div className="inputbox">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input type="password" name="confirmpassword" id="confirmpassword" required/>
                </div>
                
                <div className="inputbox">
               <input type="submit" value="submit" />
                
                </div>
            </form>
            </div>
        </div>
     );
}
 
export default Form;