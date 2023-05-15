import React from 'react'

const Products = () => {
  return (
	  <section class="content-main">
      <div class="content-header">
          <div>
              <h2 class="content-title card-title">Products List</h2>
              <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
              <a href="#" class="btn btn-light rounded font-md">Export</a>
              <a href="#" class="btn btn-light rounded font-md">Import</a>
              <a href="#" class="btn btn-light rounded font-md">Set as daily best deal</a>
              <a href="/add-product" class="btn btn-primary"
                  ><i class="text-muted material-icons md-post_add"></i>Add product</a
              >
          </div>
      </div>
      <div class="card mb-4">
          <header class="card-header">
              <div class="row align-items-center">
                  <div class="col col-check flex-grow-0">
                      <div class="form-check ms-2">
                          <input class="form-check-input" type="checkbox" value="" />
                      </div>
                  </div>
                  <div class="col-md-5 col-12 me-auto mb-md-0 mb-3">
                      <div class="col-search">
                          <form class="searchform">
                              <div class="input-group">
                                  <input type="text" class="form-control" placeholder="Search product" />
                                  <button class="btn btn-light bg" type="button">
                                      <i class="material-icons md-search"></i>
                                  </button>
                              </div>
                          </form>
                      </div>
                  </div>
                  <div class="col-md-2 col-12 me-auto mb-md-0 mb-3">
                      <select class="form-select">
                          <option selected>All category</option>
                          <option>Electronics</option>
                          <option>Clothes</option>
                          <option>Automobile</option>
                      </select>
                  </div>
                  <div class="col-md-2 col-6">
                      <input type="date" value="02.05.2021" class="form-control" />
                  </div>
                  <div class="col-md-2 col-6">
                      <select class="form-select">
                          <option selected>Status</option>
                          <option>Active</option>
                          <option>Disabled</option>
                          <option>Show all</option>
                      </select>
                  </div>
              </div>
          </header>
     
          <div class="card-body">
              <article class="itemlist">
                  <div class="row align-items-center">
                      <div class="col col-check flex-grow-0">
                          <div class="form-check">
                              <input class="form-check-input" type="checkbox" />
                          </div>
                      </div>
                      <div class="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                          <a class="itemside" href="#">
                              <div class="left">
                                  <img
                                      src="assets/imgs/items/1.jpg"
                                      class="img-sm img-thumbnail"
                                      alt="Item"
                                  />
                              </div>
                              <div class="info">
                                  <h6 class="mb-0">Seeds of Change Organic Quinoa</h6>
                              </div>
                          </a>
                      </div>
                      <div class="col-lg-2 col-sm-2 col-4 col-price"><span>$34.50</span></div>
                      <div class="col-lg-2 col-sm-2 col-4 col-status">
                          <span class="badge rounded-pill alert-success">Active</span>
                      </div>
                      <div class="col-lg-1 col-sm-2 col-4 col-date">
                          <span>02.11.2021</span>
                      </div>
                      <div class="col-lg-2 col-sm-2 col-4 col-action text-end">
                          <a href="#" class="btn btn-sm font-sm rounded btn-brand">
                              <i class="material-icons md-edit"></i> Edit
                          </a>
                          <a href="#" class="btn btn-sm font-sm btn-light rounded">
                              <i class="material-icons md-delete_forever"></i> Delete
                          </a>
                      </div>
                  </div>
             
              </article>
         
              <article class="itemlist">
                  <div class="row align-items-center">
                      <div class="col col-check flex-grow-0">
                          <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" />
                          </div>
                      </div>
                      <div class="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                          <a class="itemside" href="#">
                              <div class="left">
                                  <img
                                      src="assets/imgs/items/2.jpg"
                                      class="img-sm img-thumbnail"
                                      alt="Item"
                                  />
                              </div>
                              <div class="info">
                                  <h6 class="mb-0">All Natural Italian-Style Chicken</h6>
                              </div>
                          </a>
                      </div>
                      <div class="col-lg-2 col-sm-2 col-4 col-price"><span>$990.99</span></div>
                      <div class="col-lg-2 col-sm-2 col-4 col-status">
                          <span class="badge rounded-pill alert-success">Active</span>
                      </div>
                      <div class="col-lg-1 col-sm-2 col-4 col-date">
                          <span>02.11.2021</span>
                      </div>
                      <div class="col-lg-2 col-sm-2 col-4 col-action text-end">
                          <a href="#" class="btn btn-sm font-sm rounded btn-brand">
                              <i class="material-icons md-edit"></i> Edit
                          </a>
                          <a href="#" class="btn btn-sm font-sm btn-light rounded">
                              <i class="material-icons md-delete_forever"></i> Delete
                          </a>
                      </div>
                  </div>
          
              </article>
           
              <article class="itemlist">
                  <div class="row align-items-center">
                      <div class="col col-check flex-grow-0">
                          <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" />
                          </div>
                      </div>
                      <div class="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                          <a class="itemside" href="#">
                              <div class="left">
                                  <img
                                      src="assets/imgs/items/3.jpg"
                                      class="img-sm img-thumbnail"
                                      alt="Item"
                                  />
                              </div>
                              <div class="info">
                                  <h6 class="mb-0">Gortons Beer Battered Fish Fillets</h6>
                              </div>
                          </a>
                      </div>
                      <div class="col-lg-2 col-sm-2 col-4 col-price"><span>$76.99</span></div>
                      <div class="col-lg-2 col-sm-2 col-4 col-status">
                          <span class="badge rounded-pill alert-warning">Archived</span>
                      </div>
                      <div class="col-lg-1 col-sm-2 col-4 col-date">
                          <span>02.11.2021</span>
                      </div>
                      <div class="col-lg-2 col-sm-2 col-4 col-action text-end">
                          <a href="#" class="btn btn-sm font-sm rounded btn-brand">
                              <i class="material-icons md-edit"></i> Edit
                          </a>
                          <a href="#" class="btn btn-sm font-sm btn-light rounded">
                              <i class="material-icons md-delete_forever"></i> Delete
                          </a>
                      </div>
                  </div>
             
              </article>
             
              <article class="itemlist">
                  <div class="row align-items-center">
                      <div class="col col-check flex-grow-0">
                          <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" />
                          </div>
                      </div>
                      <div class="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                          <a class="itemside" href="#">
                              <div class="left">
                                  <img
                                      src="assets/imgs/items/4.jpg"
                                      class="img-sm img-thumbnail"
                                      alt="Item"
                                  />
                              </div>
                              <div class="info">
                                  <h6 class="mb-0">Foster Farms Takeout Crispy Classic Buffalo</h6>
                              </div>
                          </a>
                      </div>
                      <div class="col-lg-2 col-sm-2 col-4 col-price"><span>$18.00</span></div>
                      <div class="col-lg-2 col-sm-2 col-4 col-status">
                          <span class="badge rounded-pill alert-success">Active</span>
                      </div>
                      <div class="col-lg-1 col-sm-2 col-4 col-date">
                          <span>02.11.2021</span>
                      </div>
                      <div class="col-lg-2 col-sm-2 col-4 col-action text-end">
                          <a href="#" class="btn btn-sm font-sm rounded btn-brand">
                              <i class="material-icons md-edit"></i> Edit
                          </a>
                          <a href="#" class="btn btn-sm font-sm btn-light rounded">
                              <i class="material-icons md-delete_forever"></i> Delete
                          </a>
                      </div>
                  </div>
           
              </article>
          
              <article class="itemlist">
                  <div class="row align-items-center">
                      <div class="col col-check flex-grow-0">
                          <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" />
                          </div>
                      </div>
                      <div class="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                          <a class="itemside" href="#">
                              <div class="left">
                                  <img
                                      src="assets/imgs/items/3.jpg"
                                      class="img-sm img-thumbnail"
                                      alt="Item"
                                  />
                              </div>
                              <div class="info">
                                  <h6 class="mb-0">Blue Diamond Almonds Lightly Salted</h6>
                              </div>
                          </a>
                      </div>
                      <div class="col-lg-2 col-sm-2 col-4 col-price"><span>$76.99</span></div>
                      <div class="col-lg-2 col-sm-2 col-4 col-status">
                          <span class="badge rounded-pill alert-danger">Disabled</span>
                      </div>
                      <div class="col-lg-1 col-sm-2 col-4 col-date">
                          <span>02.11.2021</span>
                      </div>
                      <div class="col-lg-2 col-sm-2 col-4 col-action text-end">
                          <a href="#" class="btn btn-sm font-sm rounded btn-brand">
                              <i class="material-icons md-edit"></i> Edit
                          </a>
                          <a href="#" class="btn btn-sm font-sm btn-light rounded">
                              <i class="material-icons md-delete_forever"></i> Delete
                          </a>
                      </div>
                  </div>
       
              </article>
         
              <article class="itemlist">
                  <div class="row align-items-center">
                      <div class="col col-check flex-grow-0">
                          <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" />
                          </div>
                      </div>
                      <div class="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                          <a class="itemside" href="#">
                              <div class="left">
                                  <img
                                      src="assets/imgs/items/5.jpg"
                                      class="img-sm img-thumbnail"
                                      alt="Item"
                                  />
                              </div>
                              <div class="info">
                                  <h6 class="mb-0">Chobani Complete Vanilla Greek Yogurt</h6>
                              </div>
                          </a>
                      </div>
                      <div class="col-lg-2 col-sm-2 col-4 col-price"><span>$18.00</span></div>
                      <div class="col-lg-2 col-sm-2 col-4 col-status">
                          <span class="badge rounded-pill alert-warning">Archived</span>
                      </div>
                      <div class="col-lg-1 col-sm-2 col-4 col-date">
                          <span>02.11.2021</span>
                      </div>
                      <div class="col-lg-2 col-sm-2 col-4 col-action text-end">
                          <a href="#" class="btn btn-sm font-sm rounded btn-brand">
                              <i class="material-icons md-edit"></i> Edit
                          </a>
                          <a href="#" class="btn btn-sm font-sm btn-light rounded">
                              <i class="material-icons md-delete_forever"></i> Delete
                          </a>
                      </div>
                  </div>
          
              </article>
         
              <article class="itemlist">
                  <div class="row align-items-center">
                      <div class="col col-check flex-grow-0">
                          <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" />
                          </div>
                      </div>
                      <div class="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                          <a class="itemside" href="#">
                              <div class="left">
                                  <img
                                      src="assets/imgs/items/6.jpg"
                                      class="img-sm img-thumbnail"
                                      alt="Item"
                                  />
                              </div>
                              <div class="info">
                                  <h6 class="mb-0">Canada Dry Ginger Ale 2 L Bottle</h6>
                              </div>
                          </a>
                      </div>
                      <div class="col-lg-2 col-sm-2 col-4 col-price"><span>$76.99</span></div>
                      <div class="col-lg-2 col-sm-2 col-4 col-status">
                          <span class="badge rounded-pill alert-success">Active</span>
                      </div>
                      <div class="col-lg-1 col-sm-2 col-4 col-date">
                          <span>02.11.2021</span>
                      </div>
                      <div class="col-lg-2 col-sm-2 col-4 col-action text-end">
                          <a href="#" class="btn btn-sm font-sm rounded btn-brand">
                              <i class="material-icons md-edit"></i> Edit
                          </a>
                          <a href="#" class="btn btn-sm font-sm btn-light rounded">
                              <i class="material-icons md-delete_forever"></i> Delete
                          </a>
                      </div>
                  </div>
              
              </article>
           
              <article class="itemlist">
                  <div class="row align-items-center">
                      <div class="col col-check flex-grow-0">
                          <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" />
                          </div>
                      </div>
                      <div class="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                          <a class="itemside" href="#">
                              <div class="left">
                                  <img
                                      src="assets/imgs/items/4.jpg"
                                      class="img-sm img-thumbnail"
                                      alt="Item"
                                  />
                              </div>
                              <div class="info">
                                  <h6 class="mb-0">Gortons Beer Battered Fish Fillets</h6>
                              </div>
                          </a>
                      </div>
                      <div class="col-lg-2 col-sm-2 col-4 col-price"><span>$18.00</span></div>
                      <div class="col-lg-2 col-sm-2 col-4 col-status">
                          <span class="badge rounded-pill alert-success">Active</span>
                      </div>
                      <div class="col-lg-1 col-sm-2 col-4 col-date">
                          <span>02.11.2021</span>
                      </div>
                      <div class="col-lg-2 col-sm-2 col-4 col-action text-end">
                          <a href="#" class="btn btn-sm font-sm rounded btn-brand">
                              <i class="material-icons md-edit"></i> Edit
                          </a>
                          <a href="#" class="btn btn-sm font-sm btn-light rounded">
                              <i class="material-icons md-delete_forever"></i> Delete
                          </a>
                      </div>
                  </div>
        
              </article>
         
              <article class="itemlist">
                  <div class="row align-items-center">
                      <div class="col col-check flex-grow-0">
                          <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" />
                          </div>
                      </div>
                      <div class="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                          <a class="itemside" href="#">
                              <div class="left">
                                  <img
                                      src="assets/imgs/items/3.jpg"
                                      class="img-sm img-thumbnail"
                                      alt="Item"
                                  />
                              </div>
                              <div class="info">
                                  <h6 class="mb-0">Gortons Beer Battered Fish Fillets</h6>
                              </div>
                          </a>
                      </div>
                      <div class="col-lg-2 col-sm-2 col-4 col-price"><span>$76.99</span></div>
                      <div class="col-lg-2 col-sm-2 col-4 col-status">
                          <span class="badge rounded-pill alert-success">Active</span>
                      </div>
                      <div class="col-lg-1 col-sm-2 col-4 col-date">
                          <span>02.11.2021</span>
                      </div>
                      <div class="col-lg-2 col-sm-2 col-4 col-action text-end">
                          <a href="#" class="btn btn-sm font-sm rounded btn-brand">
                              <i class="material-icons md-edit"></i> Edit
                          </a>
                          <a href="#" class="btn btn-sm font-sm btn-light rounded">
                              <i class="material-icons md-delete_forever"></i> Delete
                          </a>
                      </div>
                  </div>
        
              </article>
          
              <article class="itemlist">
                  <div class="row align-items-center">
                      <div class="col col-check flex-grow-0">
                          <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" />
                          </div>
                      </div>
                      <div class="col-lg-3 col-sm-4 col-8 flex-grow-1 col-name">
                          <a class="itemside" href="#">
                              <div class="left">
                                  <img
                                      src="assets/imgs/items/4.jpg"
                                      class="img-sm img-thumbnail"
                                      alt="Item"
                                  />
                              </div>
                              <div class="info">
                                  <h6 class="mb-0">Haagen-Dazs Caramel Cone Ice</h6>
                              </div>
                          </a>
                      </div>
                      <div class="col-lg-2 col-sm-2 col-4 col-price"><span>$180.99</span></div>
                      <div class="col-lg-2 col-sm-2 col-4 col-status">
                          <span class="badge rounded-pill alert-success">Active</span>
                      </div>
                      <div class="col-lg-1 col-sm-2 col-4 col-date">
                          <span>02.11.2021</span>
                      </div>
                      <div class="col-lg-2 col-sm-2 col-4 col-action text-end">
                          <a href="#" class="btn btn-sm font-sm rounded btn-brand">
                              <i class="material-icons md-edit"></i> Edit
                          </a>
                          <a href="#" class="btn btn-sm font-sm btn-light rounded">
                              <i class="material-icons md-delete_forever"></i> Delete
                          </a>
                      </div>
                  </div>
             
              </article>
   
          </div>

      </div>
    
      <div class="pagination-area mt-30 mb-50">
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
  )
}

export default Products