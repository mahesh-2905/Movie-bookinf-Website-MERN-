import React from 'react';


const MyShowsDisply = (props)=>{

    const renderMyShows = ({data})=>{
        if(data){
            return data.map((data)=>{
                return(
                    <tr key={data._id}>
                        <th scope="row">{data._id}</th>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.phno}</td>
                        <td>{data.persons}</td>
                        <td>{data.date}</td>
                        <td>{data.time}</td>
                    </tr>
                )
            })
        }
        
    }
    return(
        <React.Fragment>
            <table className="table table-borderless">
                <thead>
                    <tr>
                    <th scope="col">Ticket Id</th>
                    <th scope="col">Movie Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Number of persons</th>
                    <th scope="col">Date of Show</th>
                    <th scope="col">Show Timing</th>
                    </tr>
                </thead>
                <tbody>
                   {renderMyShows(props)}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default MyShowsDisply