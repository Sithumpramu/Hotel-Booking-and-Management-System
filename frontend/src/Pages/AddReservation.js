import { useState } from "react"

const AddReservation =()=>{

    const[Date, setDate] = useState ('')
    const[Name, setName] = useState ('')
    const[Capacity, setCapacity] = useState ('')
    const[email, setemail] = useState ('')
    const[ContactNumber, setContactNumber] = useState ('')
    const[error, setError] = useState (null)

    const handleSubmit = async (e) =>{
    
         e.preventDefault()

         const AddReservation={Date,Name,Capacity,email,ContactNumber}

         const response= await fetch('/table',{
            method: 'POST',
            body: JSON.stringify(AddReservation),
            headers: {
                'Content-Type': 'application/json'
            }
         })

         const json= await response.json()

         if(!response.ok){
            setError(json.error)
         }

         if(response.ok){
            setDate('')
            setName('')
            setCapacity('')
            setemail('')
            setContactNumber('')
            setError(null)
            console.log('New Reservation is created',json)
         }
    }

    return(
        <div className="addreservation vh-100">
            <h1>Create Table Reservation</h1>
          <form className="createReservation"  onSubmit={handleSubmit}>
            <lable className="lable1">Enter Date:</lable>
            <input
            type="date" id="date" name="date"
            onChange={(e) => setDate(e.target.value)}
            value={Date}
            />
            <br></br>

           <lable className="lable2">Enter Contact Name:</lable>
            <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={Name}
            />
            <br></br>



           <lable className="lable3">No.of.Persons:</lable>
            <input
            type="number"
            onChange={(e) => setCapacity(e.target.value)}
            value={Capacity}
            />
            <br></br>


           <lable className="lable4">Contact Email:</lable>
            <input
            type="email" id="email" name="email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            />
            <br></br>


           <lable className="lable5">Contact Number:</lable>
            <input
            type="number"
            onChange={(e) => setContactNumber(e.target.value)}
            value={ContactNumber}
            />
            <br></br>


            <button class="btn btn-primary">Add Reservation</button>
            <br></br>
            {error && <div className="error">{error}</div>}

            </form>
        </div>
    )
}
export default AddReservation