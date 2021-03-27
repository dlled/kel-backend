# Kelisto Checkout Backend

App to emulate the offer and stock system of a Business.

## Installation

Use [Docker](https://www.docker.com/) to install backend.

#### Build the Docker image form Dockerfile

```bash
docker build -t <<YOUR-IMAGE-NAME>> .
```

### Run our image previously created
```bash
docker run -it <<YOUR-IMAGE-NAME>>
```
## Usage

### First steps
The application consists of 2 menus, a user menu and an admin menu. The business requirement data will be loaded by default.


Through the console, we will be able to carry out management to complete the required use cases, as well as to scale our business with more products and offers.


Firstly, the user menu, with the functionality:
* Scan items
* Get available products
* Get available offers
* View cart
* Get the price: it will calculate the price based on the offers that are in force, as well as the other products.
* Empty cart


Secondly, we will have the admin menu with functionality:
* Start test data
* Add a product
* Add an offer
* Delete a product
* Delete an offer
* Get my products and my offers

We can also add offers based on existing products in the backend. These features will allow us to scale our application based on new products and new offers.

## Models

### Items
They represent the products of the business.
* Id: Used to map the item
* Name: Name of the item
* Price: Price of the item

### Offers
Used to have special prices in some of the items if your cart complies with the offer requirements
* Id: Used to map the offer in our app
* Article: Id of the item to which the offer applies

* Type: Within the offers, we highlight 2 types of offers:

    - B (Base): Those that apply a discount (%) base on a certain range of products from the fulfillment of a threshold product.
    - P (Proportional): Those offers that increase based on the products we buy, usually presented in the form Buy K Pay N.

* Threshold: Used to measure the buyer requirements to apply the offer
* Discount: In Proportional, refers to the units you have o pay, on Base, refers to the discount applied to the product (%).

### Checkout
Instance used to load products and offers and calculate the final price based on the products scanned.

It receives the products and the offers, and with those, uses its cart to allocate the ids of the products purchased. With the total option we calculate the whole price of the products. 
t
