import React from "react";
import './Table.css'

export default function table() {
  return (
    <React.Fragment>
     
      <div className="xhr-table-div" id="xhr-table">
      <h1 class='container'>Data Fetched from <br/> JSON Placeholder</h1>
        <table class="table table-striped table-dark ">
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>

              <th scope="col">Title</th>
              <th scope="col">User ID</th>
            </tr>
          </thead>
          <tbody id="tableBody">
            
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
