import React from 'react'

const OrderList2 = () => {
  return (
    <>
     <section class="content-main">
     <div class="content-header">
         <div>
             <h2 class="content-title card-title">Order List</h2>
             <p>Lorem ipsum dolor sit amet.</p>
         </div>
     </div>
     <div class="row">
         <div class="col-md-9">
             <div class="card mb-4">
                 <header class="card-header">
                     <div class="row gx-3">
                         <div class="col-lg-4 col-md-6 me-auto">
                             <input type="text" placeholder="Search..." class="form-control" />
                         </div>
                         <div class="col-lg-2 col-md-3 col-6">
                             <select class="form-select">
                                 <option>Status</option>
                                 <option>Active</option>
                                 <option>Disabled</option>
                                 <option>Show all</option>
                             </select>
                         </div>
                         <div class="col-lg-2 col-md-3 col-6">
                             <select class="form-select">
                                 <option>Show 20</option>
                                 <option>Show 30</option>
                                 <option>Show 40</option>
                             </select>
                         </div>
                     </div>
                 </header>
               
                 <div class="card-body">
                     <div class="table-responsive">
                         <table class="table table-hover">
                             <thead>
                                 <tr>
                                     <th>ID</th>
                                     <th>Customer name</th>
                                     <th>Price</th>
                                     <th>Status</th>
                                     <th>Date</th>
                                     <th class="text-end">Action</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 <tr>
                                     <td>452</td>
                                     <td><b>Devon Lane</b></td>
                                     <td>$948.55</td>
                                     <td><span class="badge rounded-pill alert-success">Received</span></td>
                                     <td>07.05.2020</td>
                                     <td class="text-end">
                                         <a href="#" class="btn btn-md rounded font-sm">Detail</a>
                                         <div class="dropdown">
                                             <a
                                                 href="#"
                                                 data-bs-toggle="dropdown"
                                                 class="btn btn-light rounded btn-sm font-sm"
                                             >
                                                 <i class="material-icons md-more_horiz"></i>
                                             </a>
                                             <div class="dropdown-menu">
                                                 <a class="dropdown-item" href="#">View detail</a>
                                                 <a class="dropdown-item" href="#">Edit info</a>
                                                 <a class="dropdown-item text-danger" href="#">Delete</a>
                                             </div>
                                         </div>
                                      
                                     </td>
                                 </tr>
                                 <tr>
                                     <td>789</td>
                                     <td><b>Guy Hawkins</b></td>
                                     <td>$0.00</td>
                                     <td><span class="badge rounded-pill alert-danger">Cancelled</span></td>
                                     <td>25.05.2020</td>
                                     <td class="text-end">
                                         <a href="#" class="btn btn-md rounded font-sm">Detail</a>
                                         <div class="dropdown">
                                             <a
                                                 href="#"
                                                 data-bs-toggle="dropdown"
                                                 class="btn btn-light rounded btn-sm font-sm"
                                             >
                                                 <i class="material-icons md-more_horiz"></i>
                                             </a>
                                             <div class="dropdown-menu">
                                                 <a class="dropdown-item" href="#">View detail</a>
                                                 <a class="dropdown-item" href="#">Edit info</a>
                                                 <a class="dropdown-item text-danger" href="#">Delete</a>
                                             </div>
                                         </div>
                                   
                                     </td>
                                 </tr>
                                 <tr>
                                     <td>478</td>
                                     <td><b>Leslie Alexander</b></td>
                                     <td>$293.01</td>
                                     <td><span class="badge rounded-pill alert-warning">Pending</span></td>
                                     <td>18.05.2020</td>
                                     <td class="text-end">
                                         <a href="#" class="btn btn-md rounded font-sm">Detail</a>
                                         <div class="dropdown">
                                             <a
                                                 href="#"
                                                 data-bs-toggle="dropdown"
                                                 class="btn btn-light rounded btn-sm font-sm"
                                             >
                                                 <i class="material-icons md-more_horiz"></i>
                                             </a>
                                             <div class="dropdown-menu">
                                                 <a class="dropdown-item" href="#">View detail</a>
                                                 <a class="dropdown-item" href="#">Edit info</a>
                                                 <a class="dropdown-item text-danger" href="#">Delete</a>
                                             </div>
                                         </div>
                                      
                                     </td>
                                 </tr>
                                 <tr>
                                     <td>589</td>
                                     <td><b>Albert Flores</b></td>
                                     <td>$105.55</td>
                                     <td><span class="badge rounded-pill alert-warning">Pending</span></td>
                                     <td>07.02.2020</td>
                                     <td class="text-end">
                                         <a href="#" class="btn btn-md rounded font-sm">Detail</a>
                                         <div class="dropdown">
                                             <a
                                                 href="#"
                                                 data-bs-toggle="dropdown"
                                                 class="btn btn-light rounded btn-sm font-sm"
                                             >
                                                 <i class="material-icons md-more_horiz"></i>
                                             </a>
                                             <div class="dropdown-menu">
                                                 <a class="dropdown-item" href="#">View detail</a>
                                                 <a class="dropdown-item" href="#">Edit info</a>
                                                 <a class="dropdown-item text-danger" href="#">Delete</a>
                                             </div>
                                         </div>
                                       
                                     </td>
                                 </tr>
                                 <tr>
                                     <td>345</td>
                                     <td><b>Eleanor Pena</b></td>
                                     <td>$779.58</td>
                                     <td><span class="badge rounded-pill alert-success">Received</span></td>
                                     <td>18.03.2020</td>
                                     <td class="text-end">
                                         <a href="#" class="btn btn-md rounded font-sm">Detail</a>
                                         <div class="dropdown">
                                             <a
                                                 href="#"
                                                 data-bs-toggle="dropdown"
                                                 class="btn btn-light rounded btn-sm font-sm"
                                             >
                                                 <i class="material-icons md-more_horiz"></i>
                                             </a>
                                             <div class="dropdown-menu">
                                                 <a class="dropdown-item" href="#">View detail</a>
                                                 <a class="dropdown-item" href="#">Edit info</a>
                                                 <a class="dropdown-item text-danger" href="#">Delete</a>
                                             </div>
                                         </div>
                                    
                                     </td>
                                 </tr>
                                 <tr>
                                     <td>456</td>
                                     <td><b>Dianne Russell</b></td>
                                     <td>$576.28</td>
                                     <td><span class="badge rounded-pill alert-success">Received</span></td>
                                     <td>23.04.2020</td>
                                     <td class="text-end">
                                         <a href="#" class="btn btn-md rounded font-sm">Detail</a>
                                         <div class="dropdown">
                                             <a
                                                 href="#"
                                                 data-bs-toggle="dropdown"
                                                 class="btn btn-light rounded btn-sm font-sm"
                                             >
                                                 <i class="material-icons md-more_horiz"></i>
                                             </a>
                                             <div class="dropdown-menu">
                                                 <a class="dropdown-item" href="#">View detail</a>
                                                 <a class="dropdown-item" href="#">Edit info</a>
                                                 <a class="dropdown-item text-danger" href="#">Delete</a>
                                             </div>
                                         </div>
                                       
                                     </td>
                                 </tr>
                                 <tr>
                                     <td>768</td>
                                     <td><b>Savannah Nguyen</b></td>
                                     <td>$589.99</td>
                                     <td><span class="badge rounded-pill alert-success">Received</span></td>
                                     <td>18.05.2020</td>
                                     <td class="text-end">
                                         <a href="#" class="btn btn-md rounded font-sm">Detail</a>
                                         <div class="dropdown">
                                             <a
                                                 href="#"
                                                 data-bs-toggle="dropdown"
                                                 class="btn btn-light rounded btn-sm font-sm"
                                             >
                                                 <i class="material-icons md-more_horiz"></i>
                                             </a>
                                             <div class="dropdown-menu">
                                                 <a class="dropdown-item" href="#">View detail</a>
                                                 <a class="dropdown-item" href="#">Edit info</a>
                                                 <a class="dropdown-item text-danger" href="#">Delete</a>
                                             </div>
                                         </div>
                                       
                                     </td>
                                 </tr>
                                 <tr>
                                     <td>977</td>
                                     <td><b>Kathryn Murphy</b></td>
                                     <td>$169.43</td>
                                     <td><span class="badge rounded-pill alert-success">Received</span></td>
                                     <td>23.03.2020</td>
                                     <td class="text-end">
                                         <a href="#" class="btn btn-md rounded font-sm">Detail</a>
                                         <div class="dropdown">
                                             <a
                                                 href="#"
                                                 data-bs-toggle="dropdown"
                                                 class="btn btn-light rounded btn-sm font-sm"
                                             >
                                                 <i class="material-icons md-more_horiz"></i>
                                             </a>
                                             <div class="dropdown-menu">
                                                 <a class="dropdown-item" href="#">View detail</a>
                                                 <a class="dropdown-item" href="#">Edit info</a>
                                                 <a class="dropdown-item text-danger" href="#">Delete</a>
                                             </div>
                                         </div>
                                     
                                     </td>
                                 </tr>
                                 <tr>
                                     <td>687</td>
                                     <td><b>Jacob Jones</b></td>
                                     <td>$219.78</td>
                                     <td><span class="badge rounded-pill alert-success">Received</span></td>
                                     <td>07.05.2020</td>
                                     <td class="text-end">
                                         <a href="#" class="btn btn-md rounded font-sm">Detail</a>
                                         <div class="dropdown">
                                             <a
                                                 href="#"
                                                 data-bs-toggle="dropdown"
                                                 class="btn btn-light rounded btn-sm font-sm"
                                             >
                                                 <i class="material-icons md-more_horiz"></i>
                                             </a>
                                             <div class="dropdown-menu">
                                                 <a class="dropdown-item" href="#">View detail</a>
                                                 <a class="dropdown-item" href="#">Edit info</a>
                                                 <a class="dropdown-item text-danger" href="#">Delete</a>
                                             </div>
                                         </div>
                                    
                                     </td>
                                 </tr>
                                 <tr>
                                     <td>688</td>
                                     <td><b>Jacob Jones</b></td>
                                     <td>$219.78</td>
                                     <td><span class="badge rounded-pill alert-success">Received</span></td>
                                     <td>07.05.2020</td>
                                     <td class="text-end">
                                         <a href="#" class="btn btn-md rounded font-sm">Detail</a>
                                         <div class="dropdown">
                                             <a
                                                 href="#"
                                                 data-bs-toggle="dropdown"
                                                 class="btn btn-light rounded btn-sm font-sm"
                                             >
                                                 <i class="material-icons md-more_horiz"></i>
                                             </a>
                                             <div class="dropdown-menu">
                                                 <a class="dropdown-item" href="#">View detail</a>
                                                 <a class="dropdown-item" href="#">Edit info</a>
                                                 <a class="dropdown-item text-danger" href="#">Delete</a>
                                             </div>
                                         </div>
                                    
                                     </td>
                                 </tr>
                             </tbody>
                         </table>
                     </div>
             
                 </div>
           
             </div>
            
         </div>
         <div class="col-md-3">
             <div class="card mb-4">
                 <div class="card-body">
                     <h5 class="mb-3">Filter by</h5>
                     <form>
                         <div class="mb-4">
                             <label for="order_id" class="form-label">Order ID</label>
                             <input type="text" placeholder="Type here" class="form-control" id="order_id" />
                         </div>
                         <div class="mb-4">
                             <label for="order_customer" class="form-label">Customer</label>
                             <input
                                 type="text"
                                 placeholder="Type here"
                                 class="form-control"
                                 id="order_customer"
                             />
                         </div>
                         <div class="mb-4">
                             <label class="form-label">Order Status</label>
                             <select class="form-select">
                                 <option>Published</option>
                                 <option>Draft</option>
                             </select>
                         </div>
                         <div class="mb-4">
                             <label for="order_total" class="form-label">Total</label>
                             <input
                                 type="text"
                                 placeholder="Type here"
                                 class="form-control"
                                 id="order_total"
                             />
                         </div>
                         <div class="mb-4">
                             <label for="order_created_date" class="form-label">Date Added</label>
                             <input
                                 type="text"
                                 placeholder="Type here"
                                 class="form-control"
                                 id="order_created_date"
                             />
                         </div>
                         <div class="mb-4">
                             <label for="order_modified_date" class="form-label">Date Modified</label>
                             <input
                                 type="text"
                                 placeholder="Type here"
                                 class="form-control"
                                 id="order_modified_date"
                             />
                         </div>
                         <div class="mb-4">
                             <label for="order_customer_1" class="form-label">Customer</label>
                             <input
                                 type="text"
                                 placeholder="Type here"
                                 class="form-control"
                                 id="order_customer_1"
                             />
                         </div>
                     </form>
                 </div>
             </div>
           
         </div>
     </div>
     <div class="pagination-area mt-15 mb-50">
         <nav aria-label="Page navigation example">
             <ul class="pagination justify-content-start">
                 <li class="page-item active"><a class="page-link" href="#">01</a></li>
                 <li class="page-item"><a class="page-link" href="#">02</a></li>
                 <li class="page-item"><a class="page-link" href="#">03</a></li>
                 <li class="page-item"><a class="page-link dot" href="#">...</a></li>
                 <li class="page-item"><a class="page-link" href="#">16</a></li>
                 <li class="page-item">
                     <a class="page-link" href="#"><i class="material-icons md-chevron_right"></i></a>
                 </li>
             </ul>
         </nav>
     </div>
 </section>
    </>
  )
}

export default OrderList2