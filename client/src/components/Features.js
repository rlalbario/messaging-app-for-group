import React, { Component } from 'react'

export class Features extends Component {
    render() {
        return (
            <div className="container">
                <div className="title text-center ">
                  <h1 > Features </h1>   
                 </div>   
                <div className="row text-center features">
                    <div className="col-md-4">
                        <h3 className="title1"> Title 1</h3>
                            <p> t is a long established fact that a reader will be distracted by the readable content of a page 
                                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
                                distribution of letters, as opposed to using 'Content here, content here', 
                                making it look like readable English.
                            </p>
                    </div>

                    <div className="col-md-4">
                    <h3 className="title1"> Title 2</h3>
                        <p> t is a long established fact that a reader will be distracted by the readable content of a page 
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
                            distribution of letters, as opposed to using 'Content here, content here', 
                            making it look like readable English.
                        </p>
                    </div>

                    <div className="col-md-4">
                     <h3 className="title1"> Title 3</h3>
                          <p> t is a long established fact that a reader will be distracted by the readable content of a page 
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
                            distribution of letters, as opposed to using 'Content here, content here', 
                            making it look like readable English.
                        </p>
                        </div>
                </div>

            </div>
        )
    }
}

export default Features
