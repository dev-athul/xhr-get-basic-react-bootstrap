import React from "react";
import './NavigationBar.css'

export default function NavigationBar() {
  return (
   
      <nav id="Nav-Bar" class="navbar navbar-expand-lg mx-auto navbar-dark bg-dark sticky-top fixed-top">
        <a class="navbar-brand mx-4" href="#">
          XMLHttpRequest
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div  className='links' >                                                  
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only"></span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>

          
  <div  className='search'>   
          <form class="form-inline my-2 mr-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>

          </div>
      
      </nav>
 
  );
}
