import { useState } from "react";
import LibraryButton from "./LibraryButton";
import axios from "axios";


function Office() {
 


    const [officeName, setOfficeName] = useState("");
    const [officeNmbr, setOfficeNmber] = useState("");
    const [deleteNumber, setDeleteNumber] = useState("");

    async function saveOffice() {
        const response = await axios.post("http://localhost:8082/api/offices/save",{
            name:officeName,
            officeNumber:officeNmbr
        })
        if(response.status == 201){
            alert("Save Successfully");
        }else{
            alert("Office is not saved")
        }
        
    }

 async function deleteOffice() {
        try {
            const response = await axios.delete(
                `http://localhost:8082/api/offices/number/${deleteNumber}`
            );
            if (response.status === 200) {
                alert("Office deleted successfully");
            }
        } catch (error) {
            if (error.response?.status === 404) {
                alert("Office not found");
            } else {
                alert("This is the error: " + error);
            }
        }
    }
    
return(
    <div>
        <h1>SAVE OFFICE</h1>
        <label >Office Name:</label><input type='text' onChange={e=>setOfficeName(e.target.value)}/> <br/>
        <label >Office Number:</label><input type='text' onChange={e=>setOfficeNmber(e.target.value)} />
       
        <LibraryButton buttonAction={saveOffice} buttonLabel="SAVEOFFICE"/>
        
        <h2>DELETE OFFICE</h2>
        <input type='text' onChange={e=>setDeleteNumber(e.target.value)} />
        <LibraryButton buttonAction={deleteOffice} buttonLabel="DELETE"/>
      
    </div>
    
)
}
export default Office;
