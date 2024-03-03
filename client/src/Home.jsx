import React from "react";

function Home() {
    return (
        <>
            <h2 className="text-center p-3">Home Page</h2>
            <div className="card w-100 h-100 text-center p-3 mb-2 bg-info text-white">
                <div className="card-body">

                </div>
            </div>
            <div className="card w-100 h-100 text-center p-2">
                <div className="card-body">
                    <table class="table table-white ">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">User</th>
                                <th scope="col">Recipe</th>
                                <th scope="col">Ingerdients</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <a href="#" class="btn btn-success" role="button" aria-pressed="true">User Profile</a>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <a href="#" class="btn btn-success" role="button" aria-pressed="true">User Profile</a>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <a href="#" class="btn btn-success" role="button" aria-pressed="true">User Profile</a>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default Home;