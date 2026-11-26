import { useState, useEffect } from "react";
import axios from "axios";


function OfficeList() {

    const [offices, setOffices] = useState([]);
    const [searchText, setSearchText] = useState("");

    async function loadOffices() {
        try {
            const response = await axios.get("http://localhost:8082/api/offices/all");
            setOffices(response.data);
        } catch (error) {
            alert("This is the error: " + error);
        }
    }

    async function deleteOffice(id) {
        try {
            const response = await axios.delete(`http://localhost:8082/api/offices/delete/${id}`);
            if (response.status === 200) {
                alert("Office deleted successfully");
                loadOffices();
            }
        } catch (error) {
            if (error.response?.status === 404) {
                alert("Office not found");
            } else {
                alert("Office could not be deleted");
            }
        }
    }

    useEffect(() => {
        loadOffices();
    }, []);

    const filteredOffices = offices.filter(office =>
        office.name.toLowerCase().includes(searchText.toLowerCase()) ||
        String(office.officeNumber).includes(searchText)
    );

return(
    <div>

        <h2>OFFICES</h2>
        <input
            type="text"
            placeholder="Search by office name or number"
            onChange={e => setSearchText(e.target.value)}
        /><br/><br/>

        <table border="1" cellPadding="10" width="100%" style={{borderCollapse: "collapse", textAlign: "left"}}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Office Name</th>
                    <th>Office Number</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {filteredOffices.map((office, index) => (
                    <tr key={office.id}>
                        <td>{index + 1}</td>
                        <td>{office.name}</td>
                        <td>{office.officeNumber}</td>
                        <td>
                            <button style={{marginRight: "5px"}}>Update</button>
                            <button onClick={() => deleteOffice(office.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)
}
export default OfficeList;