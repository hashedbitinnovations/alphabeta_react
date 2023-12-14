import React from "react";

const Dash = () => {
    let name = 'Deepak';

    let cars = ['BMW', 'Toyota', 'Skoda', 'Volkswagen', 'Tata', 'Kia', 'Maruti'];


    let userslist = [
        {
            name: 'Name A',
            regid: 12322324
        },
        {
            name: 'Name B',
            regid: 2342
        },
        {
            name: 'Name C',
            regid: 2424
        },
        {
            name: 'Name D',
            regid: 2234243
        },
        {
            name: 'Name E',
            regid: 234243
        },
        {
            name: 'Name F',
            regid: 234
        },
        {
            name: 'Name G',
            regid: 3242
        }

    ]

    let age = 15;

    let status = false;

    return(
        <div>
            <h2 className="title">Dashboard</h2>
            <p>This is admin dashboard.</p>
            <buton onClick="clickfn()">Submit</buton>

            <p>My name is {name}</p>
            <p>Sum of 5 and 4 is {5+4}</p>

            <p style={{color: 'red'}}>Para</p>

            <p style={{backgroundColor: 'green'}}>bag red</p>


            <ul>
                

                {
                    cars.map((item) => (
                        <li>{item}</li>
                    ))
                }

            </ul>

            <table>
                {
                    userslist.map((item) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.regid}</td>
                        </tr>
                    ))
                }

            </table>

            {
                (age>18) && <h2>Content for 18+</h2>
            }


            {
                status ? (<h2>Status true</h2>) : (<h2>Status false</h2>)
            }

        </div>
    )
}

export default Dash;