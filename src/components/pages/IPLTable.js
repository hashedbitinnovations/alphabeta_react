import React, { useEffect, useState } from 'react';

const IPLTable = () => {

    const [ipllist, setipllist] = useState([]);

    const callApi = async () => {
        // https://my-json-server.typicode.com/FreSauce/json-ipl/data
        const response = await fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data');
        const data = await response.json();
        console.log(data);
        setipllist(data)
    }

    //useeffect to call api just once after page load
    useEffect(() => {
        callApi();
    }, [])

    const sortlistfn = () => {
        // let temp = ipllist.sort((item) => );
        // setipllist([...temo]);
    }


    return (
        <>
            <h2 className='bg-primary bg-opacity-25'>IPL Table</h2>

            <button onClick={sortlistfn}>Sort on NRR</button>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Team</th>
                        <th>Matches</th>
                        <th>Won</th>
                        <th>Lost</th>
                        <th>Tied</th>
                        <th>NRR</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ipllist.map((item) => (
                            <tr>
                                <td>{item.No}</td>
                                <td>{item.Team}</td>
                                <td>{item.Matches}</td>
                                <td>{item.Won}</td>
                                <td>{item.Lost}</td>
                                <td>{item.Tied}</td>
                                <td>{item.NRR}</td>
                                <td>{item.Points}</td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>

        </>
    )
}

export default IPLTable;