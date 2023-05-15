import React from 'react'

const AddProducts = () => {
  return (
      <section class="content-main">
      <div class="row">
          <div class="col-9">
              <div class="content-header">
                  <h2 class="content-title">Add New Product</h2>
                  <div>
                      <button class="btn btn-light rounded font-sm mr-5 text-body hover-up">
                          Save to draft
                      </button>
                      <button class="btn btn-md rounded font-sm hover-up">Publich</button>
                  </div>
              </div>
          </div>
          <div class="col-lg-6">
              <div class="card mb-4">
                  <div class="card-header">
                      <h4>Basic</h4>
                  </div>
                  <div class="card-body">
                      <form>
                          <div class="mb-4">
                              <label for="product_name" class="form-label">Product title</label>
                              <input
                                  type="text"
                                  placeholder="Type here"
                                  class="form-control"
                                  id="product_name"
                              />
                          </div>
                          <div class="mb-4">
                              <label class="form-label">Full description</label>
                              <textarea placeholder="Type here" class="form-control" rows="4"></textarea>
                          </div>
                          <div class="row">
                              <div class="col-lg-4">
                                  <div class="mb-4">
                                      <label class="form-label">Regular price</label>
                                      <div class="row gx-2">
                                          <input placeholder="₦" type="text" class="form-control" />
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-4">
                                  <div class="mb-4">
                                      <label class="form-label">Promotional price</label>
                                      <input placeholder="₦" type="text" class="form-control" />
                                  </div>
                              </div>
                              <div class="col-lg-4">
                                  <label class="form-label">Currency</label>
                                  <select class="form-select">
                                      <option>USD</option>
                                      <option>EUR</option>
                                      <option>RUBL</option>
                                  </select>
                              </div>
                          </div>
                          <div class="mb-4">
                              <label class="form-label">Tax rate</label>
                              <input type="text" placeholder="%" class="form-control" id="product_name" />
                          </div>
                          <label class="form-check mb-4">
                              <input class="form-check-input" type="checkbox" value="" />
                              <span class="form-check-label"> Make a template </span>
                          </label>
                      </form>
                  </div>
              </div>
            
              <div class="card mb-4">
                  <div class="card-header">
                      <h4>Shipping</h4>
                  </div>
                  <div class="card-body">
                      <form>
                          <div class="row">
                              <div class="col-lg-6">
                                  <div class="mb-4">
                                      <label for="product_name" class="form-label">Width</label>
                                      <input
                                          type="text"
                                          placeholder="inch"
                                          class="form-control"
                                          id="product_name"
                                      />
                                  </div>
                              </div>
                              <div class="col-lg-6">
                                  <div class="mb-4">
                                      <label for="product_name" class="form-label">Height</label>
                                      <input
                                          type="text"
                                          placeholder="inch"
                                          class="form-control"
                                          id="product_name"
                                      />
                                  </div>
                              </div>
                          </div>
                          <div class="mb-4">
                              <label for="product_name" class="form-label">Weight</label>
                              <input type="text" placeholder="gam" class="form-control" id="product_name" />
                          </div>
                          <div class="mb-4">
                              <label for="product_name" class="form-label">Shipping fees</label>
                              <input type="text" placeholder="₦" class="form-control" id="product_name" />
                          </div>
                      </form>
                  </div>
              </div>
       
          </div>
          <div class="col-lg-3">
              <div class="card mb-4">
                  <div class="card-header">
                      <h4>Media</h4>
                  </div>
                  <div class="card-body">
                      <div class="input-upload">
                          <img src="assets/imgs/theme/upload.svg" alt="" />
                          <input class="form-control" type="file" />
                      </div>
                  </div>
              </div>
            
              <div class="card mb-4">
                  <div class="card-header">
                      <h4>Organization</h4>
                  </div>
                  <div class="card-body">
                      <div class="row gx-2">
                          <div class="col-sm-6 mb-3">
                              <label class="form-label">Category</label>
                              <select class="form-select">
                                  <option>Automobiles</option>
                                  <option>Home items</option>
                                  <option>Electronics</option>
                                  <option>Smartphones</option>
                                  <option>Sport items</option>
                                  <option>Baby and Tous</option>
                              </select>
                          </div>
                          <div class="col-sm-6 mb-3">
                              <label class="form-label">Sub-category</label>
                              <select class="form-select">
                                  <option>Nissan</option>
                                  <option>Honda</option>
                                  <option>Mercedes</option>
                                  <option>Chevrolet</option>
                              </select>
                          </div>
                          <div class="mb-4">
                              <label for="product_name" class="form-label">Tags</label>
                              <input type="text" class="form-control" />
                          </div>
                      </div>
                 
                  </div>
              </div>
             
              <div class="card mb-4">
                  <div class="card-header">
                      <h4>Sales</h4>
                  </div>
                  <div class="card-body">
                      <div class="row gx-2">
                          <div class="mb-3">
                              <label class="form-label">Mark product as</label>
                              <select class="form-select">
                                  <option>Sale</option>
                                  <option>Best</option>
                                  <option>Hot</option>
                              </select>
                          </div>
                          <div class="mb-4">
                              <label class="form-label">Percentage off</label>
                              <input type="text" class="form-control" />
                          </div>
                      </div>
                
                  </div>
              </div>
           
          </div>
      </div>
  </section>
  )
}

export default AddProducts