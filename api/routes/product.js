import ProductService from '../service/productservice';

class Product {

  static insertRoutes(app, dbCon) {

    const service = new ProductService();
    //create or add product item
    app.post('/api/product/create', function(req, res) {
      var inventory = { 'name': req.body.name, 'description': req.body.description, 'unit': req.body.unit };
      service.insert(dbCon, inventory)
      .then(result => res.send(`Item ${result.insertId} added successfully`))
      .catch(err => res.send(`Something went wrong ${err}`, 500));
    });

    //delete product by id
    app.post('/api/product/delete/:id', function(req, res) {
      var data = req.params.id;
      service.deleteRow(dbCon, data)
      .then(() => res.send('Item deleted successfuly'))
      .catch(err => res.send(`Something went wrong ${err}`, 500));
    });

    //update product by id
    app.post('/api/product/update/:id', function(req, res) {
      var product = { 'item_id': req.params.id, 'name': req.body.name, 'description': req.body.description, 'unit': req.body.unit };
      service.update(dbCon, product)
      .then(result => res.send(`Item updated sucessfully ${result.changedRows}`))
      .catch(err => res.send(`Something went wrong ${err}`, 500));
    });
    //get list of all products
    app.get('/api/product', function(req, res) {
      service.list(dbCon)
      .then(result => res.send(result))
      .catch(err => res.send(`Something went wrong ${err}`, 500));
    });

    //get product by id
    app.get('/api/product/:id', function(req, res) {
      var data = req.params.id;
      service.getbyid(dbCon, data)
      .then(result => res.send(result))
      .catch(err => res.send(`Something went wrong ${err}`, 500));
    });
  }

}

export default Product;
