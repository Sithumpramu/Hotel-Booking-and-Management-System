import { useState } from "react";
import useAddReserv  from "../../hooks/useAddReserv";

const AddReserv = () => {
    const [CusName, setCusName] = useState('')
    const [TelNo, setTelNo] = useState('')
    const [Address, setAddress] = useState('')
    const [ActivityName, setActivityName] = useState('')
    const [checkinTime, setcheckinTime] = useState('')
    const [AdvancePayment, setAdvancePayment] = useState('')
    //const [addReserv] =useAddReserv('')

    const { addReserv, isLoading, error } = useAddReserv();

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        await addReserv(CusName, TelNo,Address,ActivityName,checkinTime,AdvancePayment)
      }

      function validation()
        { 
            var submit = document.getElementById("submit");

            if(CusName ==='' && TelNo ==='' && Address ==='' && ActivityName ===''  && checkinTime ==='' && AdvancePayment ===''){
                // document.getElementById("emailError").innerHTML = "Can't be empty";
                 
                document.getElementById("Error").innerHTML = "All fields must be filled.";
                
              }
        }

        return(
            <div>
            <div className="d-flex align-items-center justify-content-center mb-3 mt-5" >
                <form onSubmit={handleSubmit} method='Post' style={{ width: "18rem" }}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">CustomerName</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setCusName(e.target.value);}}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Contact Number</label>
                        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setTelNo(e.target.value);}}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Address</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setAddress(e.target.value);}}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label">ActivityName</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setActivityName(e.target.value);}}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label">checkinTime</label>
                        <input type="time" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setcheckinTime(e.target.value);}}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Advance Payment</label>
                        <input type="Number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setAdvancePayment(e.target.value);}}/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary" id="submit" onClick={() => { validation(); }}>Submit</button>
    
                    <p id="Error"></p>
                </form>
            </div>
    
            
    
            
            </div>
    
        )}
    
        export default AddReserv;