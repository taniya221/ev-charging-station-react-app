import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewVech = () => {
    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:4000/view-char").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )
  return (
    <div>
          <NavBar />
        <div className="container">

    <div className="row">
        <div className="col-12">

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Booking ID</th>
                        <th scope="col">Owner Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Vehicle Registration Number</th>
                        <th scope="col">Vehicle Brand</th>
                        <th scope="col">Vehicle Model</th>
                        <th scope="col">Battery Capacity</th>
                        <th scope="col">Connector Type</th>
                        <th scope="col">Charging Date</th>
                        <th scope="col">Time Slot</th>
                        <th scope="col">Estimated Units</th>
                        <th scope="col">Charging Bay Number</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((value, index) => (
                        <tr key={index}>
                            <td>{value.bookingId}</td>
                            <td>{value.ownerName}</td>
                            <td>{value.email}</td>
                            <td>{value.phone}</td>
                            <td>{value.vehicleRegistrationNumber}</td>
                            <td>{value.vehicleBrand}</td>
                            <td>{value.vehicleModel}</td>
                            <td>{value.batteryCapacity}</td>
                            <td>{value.connectorType}</td>
                            <td>{value.chargingDate}</td>
                            <td>{value.timeSlot}</td>
                            <td>{value.estimatedUnits}</td>
                            <td>{value.chargingBayNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    </div>
</div>
    </div>
  )
}

export default ViewVech