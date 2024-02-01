import React from 'react'
import { useParams } from 'react-router-dom'

const ServiceDetails = () => {
    const temp = useParams();
    console.log('Service name - ', temp.servicename)
    //make api call on basis of service name
    return (
        <div>
            <h2>Service Details Page</h2>

        </div>
    )
}

export default ServiceDetails
