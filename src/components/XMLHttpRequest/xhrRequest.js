import React from "react";
import Table from "./Table";


export default function xhrRequest() {
  var html_content = "";

  var responseData;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      responseData = JSON.parse(xhttp.responseText);
      console.log(responseData);
      for (var i = 0; i < responseData.length; i++) {
        html_content =
          html_content +
          `
            <tr>
            <td> ${responseData[i].id} </td>
            <td> ${responseData[i].title}</td>
            <td> ${responseData[i].userId}</td>
        </tr>
        
        `;
      }

      console.log(html_content);
      document.getElementById("tableBody").innerHTML = html_content;
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/albums", true);
  xhttp.send();

  return (
    <React.Fragment>
        
      <Table/>
    </React.Fragment>
  );
}
