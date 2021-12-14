// import React from 'react'

// const DisplayProject = () => {
//     return (
//         <div>
            
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//         <div class="container-fluid">
//           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
//             <div class="bg-dark text-white col-12 ">
//             <div class="container ">
//                 <h1>Browers</h1>
//             <form class="d-flex ">
//               <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//               <button class="btn btn" type="submit">Save</button>
//             </form>
// <nav>
//     <div class="nav nav-tabs" id="nav-tab" role="tablist">

//       <button class="nav-link col-2  active text-body" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"> Freelancer </button>

//       <button class="nav-link col-2   text-body" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"> Project </button>
//       <button class="nav-link col-2   text-body" id="nav-contests-tab" data-bs-toggle="tab" data-bs-target="#nav-contests" type="button" role="tab" aria-controls="nav-contests" aria-selected="false">  Contests  </button>
   

//     </div>
//   </nav>
//         </div>
//         </div>
//           </div>
//         </div>
//       </nav>



//     <div class="tab-content" id="nav-tabContent">
// <div class="tab-pane fade show active p-3" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
    
//     <div class="container">
// <div class="row">
//     <div class="col-md-3 filter-freelancer">
//         <h2>Filter</h2>
//         <label for="customRange2" class="form-label">Hourly rate</label>
//         <input type="range" class="form-range" min="0" max="100" id="customRange2"/>
//         <div class="container">
//             <p> $0 – 80 USD+ </p>
//         </div>
//         <div class="row">
//             <div class="col-1"></div>
//             <div class=" mb-3 col-md-4">
//                 <div class="row">

//                 <span class="input-group-text w-25">$</span>
//                 <input type="text" class="form-control w-75" aria-label="Amount (to the nearest dollar)"/>
//               </div>
//               </div>
//           <div class="col-md-2 to-max">
//             to     
//         </div>
//         <div class=" mb-3 col-md-4">
//             <div class="row">
// <span class="input-group-text w-25">$</span>
// <input type="text" class="form-control w-75" aria-label="Amount (to the nearest dollar)"/>
// </div>
//         </div>
//           </div>
//           <h5 class="text-left mt-3">Skills</h5>
//           <div class="input-group mb-3">
//             <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
//                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
//               </svg></span>
//             <input type="text" class="form-control" placeholder="Search Skills" aria-label="Username" aria-describedby="basic-addon1"/>
//           </div>
//           <div class="form-check">
//             <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//             <label class="form-check-label" for="flexCheckDefault">
//                 Website Design
//             </label>
//           </div>
//           <div class="form-check">
//             <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//             <label class="form-check-label" for="flexCheckDefault">
//                 Logo Design
//             </label>
//           </div>
//           <div class="form-check">
//             <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//             <label class="form-check-label" for="flexCheckDefault">
//                 Mobile App Development
//             </label>
//           </div>
//           <div class="form-check">
//             <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//             <label class="form-check-label" for="flexCheckDefault">
              
//                 Data Entry
//             </label>
//           </div>
//           <h5 class="text-left mt-3">Client's country

//         </h5>
//           <div class="input-group mb-3">
//             <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
//                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
//               </svg></span>
//             <input type="text" class="form-control" placeholder="Search country" aria-label="Username" aria-describedby="basic-addon1"/>
//           </div>
//           <h5 class="text-left mt-3">Client's country

//         </h5>
//           <div class="input-group mb-3">
//             <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
//                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
//               </svg></span>
//             <input type="text" class="form-control" placeholder="Search country" aria-label="Username" aria-describedby="basic-addon1"/>
//           </div>
//           <h5 class="text-left mt-3">Online</h5>
//           <div class="form-check form-switch">
//             <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
//             <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
//           </div>
//           <h5 class="text-left mt-3">Rating</h5>
//           <div class="ratings">
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//               </svg>
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//               </svg>
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//               </svg>
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//               </svg>
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//               </svg>  
//         </div>
//         <h4 for="customRange2" class="form-label">Reviews</h4>
//         <input type="range" class="form-range" min="0" max="100" id="customRange2"/>
//         <p> 0 – 500+ reviews
//         </p>


//         <h5 class="text-left mt-3">Exams        </h5>
//         <div class="input-group mb-3">
//           <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
//               <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
//             </svg></span>
//           <input type="text" class="form-control" placeholder="Search Skills" aria-label="Username" aria-describedby="basic-addon1"/>
//         </div>
//         <div class="form-check">
//             <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//             <label class="form-check-label" for="flexCheckDefault">
//                 US English - Level 1
//             </label>
//           </div>
//           <div class="form-check">
//             <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//             <label class="form-check-label" for="flexCheckDefault">
//                 Adobe Photoshop CS5 - Level 1
//             </label>
//           </div>
//           <div class="form-check">
//             <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//             <label class="form-check-label" for="flexCheckDefault">
//                 Data Entry
//             </label>
//           </div>

//     </div>
//     <div class="col-md-9">
//         <div class="card text-dark mt-3">
//             <div class="card-header">
//                 Top results
//                 <span>Showing 1-20 of 1989256 results</span>
//             </div>
//             <div class="card-body">
//                 <a href="#" class="">
//                 <div class="row">
//                     <div class="col-md-2">
//                         <img src="1.jpg" class="card-img-top freelancer-img" alt="..."/>

//                         </div>
//                     <div class="col-md-8">
//               <h5 class="card-title text-dark text-none">   Programmatis @  Programmatis  </h5>
//               <p class="card-text rating-person"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></p>
//               <h6>WebDeveloper </h6>   
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit possimus neque distinctio saepe, blanditiis harum rerum commodi voluptate expedita et architecto in laboriosam molestias ea at. Voluptatem, illo modi.</p>
//               <div class="skill-person">PHP - JAVASCRIPT - WEB </div>
//             </div>
//             <div class="col-md-2">
//                 <h4>$ 500 USD</h4>
//                 <p class="text-center">per hour</p>
//                 <span class="heart-icon">

//                     <i class="fas fa-heart fa-3x"></i>
                    
//                 </span>
//                 <div class="d-flex hire-person">
//                 <button type="button" class="btn btn-primary">Hire</button>
//             </div>    
//             </div>
//             </div>
//             </a>
//         </div>
//         <hr/>
//         <div class="card-body">
//             <a href="#" class="">
//             <div class="row">
//                 <div class="col-md-2">
//                     <img src="1.jpg" class="card-img-top freelancer-img" alt="..."/>

//                     </div>
//                 <div class="col-md-8">
//           <h5 class="card-title text-dark text-none">   Programmatis @  Programmatis  </h5>
//           <p class="card-text rating-person"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></p>
//           <h6>WebDeveloper </h6>   
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit possimus neque distinctio saepe, blanditiis harum rerum commodi voluptate expedita et architecto in laboriosam molestias ea at. Voluptatem, illo modi.</p>
//           <div class="skill-person">PHP - JAVASCRIPT - WEB </div>
//         </div>
//         <div class="col-md-2">
//             <h4>$ 500 USD</h4>
//             <p class="text-center">per hour</p>
//             <span class="heart-icon">

//                 <i class="fas fa-heart fa-3x"></i>
                
//             </span>
//             <div class="d-flex hire-person">
//             <button type="button" class="btn btn-primary">Hire</button>
//         </div>    
//         </div>
//         </div>
//         </a>
//     </div>
//     <hr>
//         <div class="card-body">
//         <a href="#" class="">
//         <div class="row">
//             <div class="col-md-2">
//                 <img src="1.jpg" class="card-img-top freelancer-img" alt="..."/>

//                 </div>
//             <div class="col-md-8">
//       <h5 class="card-title text-dark text-none">   Programmatis @  Programmatis  </h5>
//       <p class="card-text rating-person"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></p>
//       <h6>WebDeveloper </h6>   
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit possimus neque distinctio saepe, blanditiis harum rerum commodi voluptate expedita et architecto in laboriosam molestias ea at. Voluptatem, illo modi.</p>
//       <div class="skill-person">PHP - JAVASCRIPT - WEB </div>
//     </div>
//     <div class="col-md-2">
//         <h4>$ 500 USD</h4>
//         <p class="text-center">per hour</p>
//         <span class="heart-icon">

//             <i class="fas fa-heart fa-3x"></i>
            
//         </span>
//         <div class="d-flex hire-person">
//         <button type="button" class="btn btn-primary">Hire</button>
//     </div>    
//     </div>
//     </div>
//     </a>
// </div>
// <hr>    <div class="card-body">
//     <a href="#" class="">
//     <div class="row">
//         <div class="col-md-2">
//             <img src="1.jpg" class="card-img-top freelancer-img" alt="..."/>

//             </div>
//         <div class="col-md-8">
//   <h5 class="card-title text-dark text-none">   Programmatis @  Programmatis  </h5>
//   <p class="card-text rating-person"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></p>
//   <h6>WebDeveloper </h6>   
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit possimus neque distinctio saepe, blanditiis harum rerum commodi voluptate expedita et architecto in laboriosam molestias ea at. Voluptatem, illo modi.</p>
//   <div class="skill-person">PHP - JAVASCRIPT - WEB </div>
// </div>
// <div class="col-md-2">
//     <h4>$ 500 USD</h4>
//     <p class="text-center">per hour</p>
//     <span class="heart-icon">

//         <i class="fas fa-heart fa-3x"></i>
        
//     </span>
//     <div class="d-flex hire-person">
//     <button type="button" class="btn btn-primary">Hire</button>
// </div>    
// </div>
// </div>
// </a>
// </div>
// <hr>    <div class="card-body">
//     <a href="#" class="">
//     <div class="row">
//         <div class="col-md-2">
//             <img src="1.jpg" class="card-img-top freelancer-img" alt="..."/>

//             </div>
//         <div class="col-md-8">
//   <h5 class="card-title text-dark text-none">   Programmatis @  Programmatis  </h5>
//   <p class="card-text rating-person"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></p>
//   <h6>WebDeveloper </h6>   
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit possimus neque distinctio saepe, blanditiis harum rerum commodi voluptate expedita et architecto in laboriosam molestias ea at. Voluptatem, illo modi.</p>
//   <div class="skill-person">PHP - JAVASCRIPT - WEB </div>
// </div>
// <div class="col-md-2">
//     <h4>$ 500 USD</h4>
//     <p class="text-center">per hour</p>
//     <span class="heart-icon">

//         <i class="fas fa-heart fa-3x"></i>
        
//     </span>
//     <div class="d-flex hire-person">
//     <button type="button" class="btn btn-primary">Hire</button>
// </div>    
// </div>
// </div>
// </a>
// </div>
// <hr/>
        
        
//           </div>



//     </div>
// </div>        
        
//     </div>
    
    
    
    
// </div>


// <div class="tab-pane fade p-3" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
    
//     <div class="mt-5">
//         <div class="container">

                
//                 <div class="container">
//             <div class="row">
//                 <div class="col-md-3 filter-project">
//                     <h2>Filter</h2>
//                     <h4>Project type</h4>
//                     <div class="form-check">
//                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//                         <label class="form-check-label" for="flexCheckDefault">
//                             Fixed Price
//                         </label>
//                       </div>
//                       <div class="form-check">
//                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//                         <label class="form-check-label" for="flexCheckDefault">
//                             Hourly Rate
//                         </label>
//                       </div>
//                       <label >min</label>
//                       <div class="input-group mb-3">
//                         <span class="input-group-text">$</span>
//                         <input type="text" class="form-control"
//                          aria-label="Amount (to the nearest dollar)"/>
//                         <span class="input-group-text">USD</span>
//                       </div>
//                       <label >max</label>
//                       <div class="input-group mb-3">
//                         <span class="input-group-text">$</span>
//                         <input type="text" class="form-control"
//                          aria-label="Amount (to the nearest dollar)"/>
//                         <span class="input-group-text">USD</span>
//                       </div>
//                       <h5 class="text-left mt-3">Hourly rate</h5>
//                       <label >min</label>
//                       <div class="input-group mb-3">
//                         <span class="input-group-text">$</span>
//                         <input type="text" class="form-control"
//                          aria-label="Amount (to the nearest dollar)"/>
//                         <span class="input-group-text">USD</span>
//                       </div>
//                       <label >max</label>
//                       <div class="input-group mb-3">
//                         <span class="input-group-text">$</span>
//                         <input type="text" class="form-control"
//                          aria-label="Amount (to the nearest dollar)"/>
//                         <span class="input-group-text">USD</span>
//                       </div>
//                       <h5>Skills</h5>
//                       <div class="input-group mb-3">
//                         <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
//                             <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
//                           </svg></span>
//                         <input type="text" class="form-control" placeholder="Search Skills" aria-label="Username" aria-describedby="basic-addon1"/>
//                       </div>
//                       <div class="form-check">
//                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//                         <label class="form-check-label" for="flexCheckDefault">
//                             Website Design
//                         </label>
//                       </div>
//                       <div class="form-check">
//                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//                         <label class="form-check-label" for="flexCheckDefault">
//                             Website Design
//                         </label>
//                       </div>
//                       <div class="form-check">
//                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//                         <label class="form-check-label" for="flexCheckDefault">
//                             Website Design
//                         </label>
//                       </div>
//                       <div class="form-check">
//                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//                         <label class="form-check-label" for="flexCheckDefault">
//                             Website Design
//                         </label>
//                       </div>
//                   <h4 class="mt-3">Listing type</h4>
//                   <div class="form-check">
//                     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//                     <label class="form-check-label" for="flexCheckDefault">
//                         Website Design
//                     </label>
//                   </div>   <div class="form-check">
//                     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//                     <label class="form-check-label" for="flexCheckDefault">
//                         Website Design
//                     </label>
//                   </div>   <div class="form-check">
//                     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//                     <label class="form-check-label" for="flexCheckDefault">
//                         Website Design
//                     </label>
//                   </div>   <div class="form-check">
//                     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//                     <label class="form-check-label" for="flexCheckDefault">
//                         Website Design
//                     </label>
//                   </div>    
//                   <h5>Project location</h5>
//                   <div class="input-group mb-3">
//                     <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
//                     <span class="input-group-text" id="basic-addon1"><i class="far fa-dot-circle"></i></span>

//                   </div>
//                       <h5 class="text-left mt-3">Countries</h5>
//                       <div class="input-group mb-3">
//                         <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
//                             <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
//                           </svg></span>
//                         <input type="text" class="form-control" placeholder="Search Countries" aria-label="Username" aria-describedby="basic-addon1"/>
//                       </div>
//                       <h5 class="text-left mt-3">Languages</h5>
//                       <div class="input-group mb-3">
//                         <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
//                             <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
//                           </svg></span>
//                         <input type="text" class="form-control" placeholder="Search Countries" aria-label="Username" aria-describedby="basic-addon1"/>
//                       </div>


//                     <div class="form-check">
//                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//                         <label class="form-check-label" for="flexCheckDefault">
//                             English
//                         </label>
//                       </div>
            
//                 </div>
//                 <div class="col-md-9">
//                     <div class="card text-dark mt-3">
//                         <div class="card-header">
//                           <span>Top results
//                             </span>
//                             <span>Showing 1-20 of 1989256 results</span>
//                         </div>
//                         <div class="card-body">
//                             <a href="#" class="">
//                             <div class="row">

//                                 <div class="col-md-8">
//                           <h5 class="card-title text-dark text-none">   Audio translation from ENGLISH to JAPANESE   </h5>
                      
//                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit possimus neque distinctio saepe, blanditiis harum rerum commodi voluptate expedita et architecto in laboriosam molestias ea at. Voluptatem, illo modi.</p>
//                           <div class="skill-person">PHP - JAVASCRIPT - WEB </div>
//                             <div class="card-text rating-person">
//                                 <div class="row">
//                                 <div class="fix-price col-md-4"><i class="fas fa-tv"></i> Fix Price</div>
//                                 <div class="fix-price col-md-4"><i class="fas fa-building"></i> No Bird</div>
//                                 <div class="col-md-4">
//                                 <i class="fas fa-user"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></p>
//                             </div>
//                         </div>
//                         </div>
//                         <div class="col-md-1"></div>
//                         <div class="col-md-3">
//                             <h4>$ 10 - 30 USD</h4>
//                             <p class="text-center">post 20 minutes ago</p>

    
//                         </div>
//                         </div>
//                         </a>
//                     </div>
//                     <hr>
//                     <div class="card-body">
//                         <a href="#" class=""/>
//                         <div class="row">

//                             <div class="col-md-8">
//                       <h5 class="card-title text-dark text-none">   Audio translation from ENGLISH to JAPANESE   </h5>
                  
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit possimus neque distinctio saepe, blanditiis harum rerum commodi voluptate expedita et architecto in laboriosam molestias ea at. Voluptatem, illo modi.</p>
//                       <div class="skill-person">PHP - JAVASCRIPT - WEB </div>
//                         <div class="card-text rating-person">
//                             <div class="row">
//                             <div class="fix-price col-md-4"><i class="fas fa-tv"></i> Fix Price</div>
//                             <div class="fix-price col-md-4"><i class="fas fa-building"></i> No Bird</div>
//                             <div class="col-md-4">
//                             <i class="fas fa-user"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></p>
//                         </div>
//                     </div>
//                     </div>
//                     </div>
//                     <div class="col-md-1"></div>
//                     <div class="col-md-3">
//                         <h4>$ 10 - 30 USD</h4>
//                         <p class="text-center">post 20 minutes ago</p>


//                     </div>
//                     </div>
//                     </a>
//                 </div>
//                 <hr>
//                 <div class="card-body">
//                     <a href="#" class=""/>
//                     <div class="row">

//                         <div class="col-md-8">
//                   <h5 class="card-title text-dark text-none">   Audio translation from ENGLISH to JAPANESE   </h5>
              
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit possimus neque distinctio saepe, blanditiis harum rerum commodi voluptate expedita et architecto in laboriosam molestias ea at. Voluptatem, illo modi.</p>
//                   <div class="skill-person">PHP - JAVASCRIPT - WEB </div>
//                     <div class="card-text rating-person">
//                         <div class="row">
//                         <div class="fix-price col-md-4"><i class="fas fa-tv"></i> Fix Price</div>
//                         <div class="fix-price col-md-4"><i class="fas fa-building"></i> No Bird</div>
//                         <div class="col-md-4">
//                         <i class="fas fa-user"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></p>
//                     </div>
//                 </div>
//                 </div>
//                 </div>
//                 <div class="col-md-1"></div>
//                 <div class="col-md-3">
//                     <h4>$ 10 - 30 USD</h4>
//                     <p class="text-center">post 20 minutes ago</p>


//                 </div>
//                 </div>
//                 </a>
//             </div>
//             <hr>
//             <div class="card-body">
//                 <a href="#" class=""/>
//                 <div class="row">

//                     <div class="col-md-8">
//               <h5 class="card-title text-dark text-none">   Audio translation from ENGLISH to JAPANESE   </h5>
          
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit possimus neque distinctio saepe, blanditiis harum rerum commodi voluptate expedita et architecto in laboriosam molestias ea at. Voluptatem, illo modi.</p>
//               <div class="skill-person">PHP - JAVASCRIPT - WEB </div>
//                 <div class="card-text rating-person">
//                     <div class="row">
//                     <div class="fix-price col-md-4"><i class="fas fa-tv"></i> Fix Price</div>
//                     <div class="fix-price col-md-4"><i class="fas fa-building"></i> No Bird</div>
//                     <div class="col-md-4">
//                     <i class="fas fa-user"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></p>
//                 </div>
//             </div>
//             </div>
//             </div>
//             <div class="col-md-1"></div>
//             <div class="col-md-3">
//                 <h4>$ 10 - 30 USD</h4>
//                 <p class="text-center">post 20 minutes ago</p>


//             </div>
//             </div>
//             </a>
//         </div>
//         <hr>
//         <div class="card-body">
//             <a href="#" class=""/>
//             <div class="row">

//                 <div class="col-md-8">
//           <h5 class="card-title text-dark text-none">   Audio translation from ENGLISH to JAPANESE   </h5>
      
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit possimus neque distinctio saepe, blanditiis harum rerum commodi voluptate expedita et architecto in laboriosam molestias ea at. Voluptatem, illo modi.</p>
//           <div class="skill-person">PHP - JAVASCRIPT - WEB </div>
//             <div class="card-text rating-person">
//                 <div class="row">
//                 <div class="fix-price col-md-4"><i class="fas fa-tv"></i> Fix Price</div>
//                 <div class="fix-price col-md-4"><i class="fas fa-building"></i> No Bird</div>
//                 <div class="col-md-4">
//                 <i class="fas fa-user"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></p>
//             </div>
//         </div>
//         </div>
//         </div>
//         <div class="col-md-1"></div>
//         <div class="col-md-3">
//             <h4>$ 10 - 30 USD</h4>
//             <p class="text-center">post 20 minutes ago</p>


//         </div>
//         </div>
//         </a>
//     </div>
//     <hr/>

                    
                    
//                       </div>
            
            
            
//                 </div>
//             </div>        
                    
//                 </div>
                
                
                
                
//         </div>
        
        
//     </div>
    
// </div>

// <div class="tab-pane fade p-3" id="nav-contests" role="tabpanel" aria-labelledby="nav-contests-tab">
//     <div class="mt-5">

    
//             <div class="mt-5">
//                 <div class="container">
        
                        
//                         <div class="container">
//                     <div class="row">
//                         <div class="col-md-3 filter-project">
//                             <h2>Filter</h2>
//                             <h4>Contest prize</h4>

//                               <label >min</label>
//                               <div class="input-group mb-3">
//                                 <span class="input-group-text">$</span>
//                                 <input type="text" class="form-control"
//                                  aria-label="Amount (to the nearest dollar)"/>
//                                 <span class="input-group-text">USD</span>
//                               </div>
//                               <label >max</label>
//                               <div class="input-group mb-3">
//                                 <span class="input-group-text">$</span>
//                                 <input type="text" class="form-control"
//                                  aria-label="Amount (to the nearest dollar)"/>
//                                 <span class="input-group-text">USD</span>
//                               </div>
//                               <h5>Skills</h5>
//                               <div class="input-group mb-3">
//                                 <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
//                                     <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
//                                   </svg></span>
//                                 <input type="text" class="form-control" placeholder="Search Skills" aria-label="Username" aria-describedby="basic-addon1"/>
//                               </div>
//                               <div class="form-check">
//                                 <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//                                 <label class="form-check-label" for="flexCheckDefault">
//                                     Website Design
//                                 </label>
//                               </div>
//                               <div class="form-check">
//                                 <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//                                 <label class="form-check-label" for="flexCheckDefault">
//                                     Website Design
//                                 </label>
//                               </div>
//                               <div class="form-check">
//                                 <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//                                 <label class="form-check-label" for="flexCheckDefault">
//                                     Website Design
//                                 </label>
//                               </div>
//                               <div class="form-check">
//                                 <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//                                 <label class="form-check-label" for="flexCheckDefault">
//                                     Website Design
//                                 </label>
//                               </div>
//                           <h4 class="mt-3">Listing type</h4>
//                           <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//                             <label class="form-check-label" for="flexCheckDefault">
//                                 Website Design
//                             </label>
//                           </div>   <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//                             <label class="form-check-label" for="flexCheckDefault">
//                                 Website Design
//                             </label>
//                           </div>   <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//                             <label class="form-check-label" for="flexCheckDefault">
//                                 Website Design
//                             </label>
//                           </div>   <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//                             <label class="form-check-label" for="flexCheckDefault">
//                                 Website Design
//                             </label>
//                           </div>    

                    
//                         </div>
//                         <div class="col-md-9">
//                             <div class="card text-dark mt-3">
//                                 <div class="card-header">
//                                   <span>Top results
//                                     </span>
//                                     <span>Showing 1-20 of 1989256 results</span>
//                                 </div>
//                                 <div class="card-body">
//                                     <a href="#" class=""/>
//                                     <div class="row">
        
//                                         <div class="col-md-8">
//                                   <h5 class="card-title text-dark text-none">   Audio translation from ENGLISH to JAPANESE   </h5>
                              
//                                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit possimus neque distinctio saepe, blanditiis harum rerum commodi voluptate expedita et architecto in laboriosam molestias ea at. Voluptatem, illo modi.</p>
//                                   <div class="skill-person">PHP - JAVASCRIPT - WEB </div>
//                                     <div class="card-text rating-person">
//                                         <div class="row">
//                                         <div class="fix-price col-md-4"><i class="fas fa-tv"></i> Fix Price</div>
//                                         <div class="fix-price col-md-4"><i class="fas fa-building"></i> No Bird</div>
//                                         <div class="col-md-4">
//                                         <i class="fas fa-user"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></p>
//                                     </div>
//                                 </div>
//                                 </div>
//                                 </div>
//                                 <div class="col-md-1"></div>
//                                 <div class="col-md-3">
//                                     <h4>$ 10 - 30 USD</h4>
//                                     <p class="text-center">post 20 minutes ago</p>
        
            
//                                 </div>
//                                 </div>
//                                 </a>
//                             </div>
//                             <hr/>
//                             <div class="card-body">
//                                 <a href="#" class="">
//                                 <div class="row">
        
//                                     <div class="col-md-8">
//                               <h5 class="card-title text-dark text-none">   Audio translation from ENGLISH to JAPANESE   </h5>
                          
//                               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit possimus neque distinctio saepe, blanditiis harum rerum commodi voluptate expedita et architecto in laboriosam molestias ea at. Voluptatem, illo modi.</p>
//                               <div class="skill-person">PHP - JAVASCRIPT - WEB </div>
//                                 <div class="card-text rating-person">
//                                     <div class="row">
//                                     <div class="fix-price col-md-4"><i class="fas fa-tv"></i> Fix Price</div>
//                                     <div class="fix-price col-md-4"><i class="fas fa-building"></i> No Bird</div>
//                                     <div class="col-md-4">
//                                     <i class="fas fa-user"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></div>
//                                 </div>
//                             </div>
//                             </div>
//                             <div class="col-md-1"></div>
//                             <div class="col-md-3">
//                                 <h4>$ 10 - 30 USD</h4>
//                                 <p class="text-center">post 20 minutes ago</p>
        
        
//                             </div>
//                             </div>
//                             </a>
//                         </div>
//                         <hr>
//                         <div class="card-body">
//                             <a href="#" class=""/>
//                             <div class="row">
        
//                                 <div class="col-md-8">
//                           <h5 class="card-title text-dark text-none">   Audio translation from ENGLISH to JAPANESE   </h5>
                      
//                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit possimus neque distinctio saepe, blanditiis harum rerum commodi voluptate expedita et architecto in laboriosam molestias ea at. Voluptatem, illo modi.</p>
//                           <div class="skill-person">PHP - JAVASCRIPT - WEB </div>
//                             <div class="card-text rating-person">
//                                 <div class="row">
//                                 <div class="fix-price col-md-4"><i class="fas fa-tv"></i> Fix Price</div>
//                                 <div class="fix-price col-md-4"><i class="fas fa-building"></i> No Bird</div>
//                                 <div class="col-md-4">
//                                 <i class="fas fa-user"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></p>
//                             </div>
//                         </div>
//                         </div>
//                         </div>
//                         <div class="col-md-1"></div>
//                         <div class="col-md-3">
//                             <h4>$ 10 - 30 USD</h4>
//                             <p class="text-center">post 20 minutes ago</p>
        
        
//                         </div>
//                         </div>
//                         </a>
//                     </div>
//                     <hr>
//                     <div class="card-body">
//                         <a href="#" class=""/>
//                         <div class="row">
        
//                             <div class="col-md-8">
//                       <h5 class="card-title text-dark text-none">   Audio translation from ENGLISH to JAPANESE   </h5>
                  
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit possimus neque distinctio saepe, blanditiis harum rerum commodi voluptate expedita et architecto in laboriosam molestias ea at. Voluptatem, illo modi.</p>
//                       <div class="skill-person">PHP - JAVASCRIPT - WEB </div>
//                         <div class="card-text rating-person">
//                             <div class="row">
//                             <div class="fix-price col-md-4"><i class="fas fa-tv"></i> Fix Price</div>
//                             <div class="fix-price col-md-4"><i class="fas fa-building"></i> No Bird</div>
//                             <div class="col-md-4">
//                             <i class="fas fa-user"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></p>
//                         </div>
//                     </div>
//                     </div>
//                     </div>
//                     <div class="col-md-1"></div>
//                     <div class="col-md-3">
//                         <h4>$ 10 - 30 USD</h4>
//                         <p class="text-center">post 20 minutes ago</p>
        
        
//                     </div>
//                     </div>
//                     </a>
//                 </div>
//                 <hr/>
//                 <div class="card-body">
//                     <a href="#" class="">
//                     <div class="row">
        
//                         <div class="col-md-8">
//                   <h5 class="card-title text-dark text-none">   Audio translation from ENGLISH to JAPANESE   </h5>
              
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit possimus neque distinctio saepe, blanditiis harum rerum commodi voluptate expedita et architecto in laboriosam molestias ea at. Voluptatem, illo modi.</p>
//                   <div class="skill-person">PHP - JAVASCRIPT - WEB </div>
//                     <p class="card-text rating-person">
//                         <div class="row">
//                         <div class="fix-price col-md-4"><i class="fas fa-tv"></i> Fix Price</div>
//                         <div class="fix-price col-md-4"><i class="fas fa-building"></i> No Bird</div>
//                         <div class="col-md-4">
//                         <i class="fas fa-user"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></p>
//                     </div>
//                 </div>
//                 </p>
//                 </div>
//                 <div class="col-md-1"></div>
//                 <div class="col-md-3">
//                     <h4>$ 10 - 30 USD</h4>
//                     <p class="text-center">post 20 minutes ago</p>
        
        
//                 </div>
//                 </div>
//                 </a>
//             </div>
//             <hr/>
        
                            
                            
//                               </div>
                    
                    
                    
//                         </div>
//                     </div>        
                            
//                         </div>
                        
                        
                        
                        
//                 </div>
                
                
//             </div>
            
//         </div>
        
        
    
// </div>
//         </div>
//     )
// }

// export default DisplayProject
