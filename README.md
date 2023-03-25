# Shop Application (apis)
## Routes Used in this backend api app:
### 1- http://localhost:7000/api/products 
#### Methods :
    - POST  => create a new product
    - GET   => get all products
    
### 1- http://localhost:7000/api/products/:id 
#### Methods :
    - GET  => get a user with an id in url (api gets it in the (req.params.id))
    - PUT  => update a user , u have to send body (json) and put id of the user in url too
    - DELETE  => delete a user with an id in (api gets it in the (req.params.id))

### 1- http://localhost:7000/api/orders 
#### Methods :
    - POST  => make a new order
    - GET   => get all products
    
### 1- http://localhost:7000/api/orders/:id 
#### Methods :
    - GET  => get an order with an id in url (api gets it in the (req.params.id))
    - PUT  => update an order , u have to send body (json) and put id of the order in url too
    - DELETE  => delete an order with an id in (api gets it in the (req.params.id))
