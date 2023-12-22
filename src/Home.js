import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row bg-success bg-opacity-25">
                    <div className="col-6">
                        <h2>Site Header</h2>
                    </div>
                    <div className="col-6">
                        Facebook icon
                    </div>
                </div>


                <div className="row bg-warning bg-opacity-25">
                    <div className="col-12">
                        Menubar
                    </div>
                </div>


                <div className="row bg-primary bg-opacity-25">
                    <div className="col-3 bg-secondary bg-opacity-25">
                        Sidebar
                    </div>
                    <div className="col-9 bg-custom1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised
                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                    </div>
                </div>

                <div className="row bg-success bg-opacity-25">
                    <div className="col-12">
                        Footer Text
                    </div>
                </div>

            </div>

        </>
    )
}


export default Home