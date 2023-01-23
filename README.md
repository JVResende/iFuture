# iFuture

![logo](https://user-images.githubusercontent.com/102267210/193479015-a2804e1c-c166-46fb-a65f-4e9099454881.svg)

## 📄 About

Web application that simulates Ifood, where the user places orders, accesses the shopping cart, completes the purchase, changes his data and checks the waiting time for the order.

## 🔗 Link to access

If you are going to open the site on your computer, follow these steps to get the experience of an app:

1. Click on the link https://ifutureapp.surge.sh/.
2. Press F12.
3. Click where the arrows in the image below are indicating and set it as responsive with a size of 360x640.

![passos](https://user-images.githubusercontent.com/102267210/193830669-06fb206d-73e2-490d-b013-1ba9efcc4934.PNG)

## 💻 Functionalities

### - Login/Registration flow:

![login](https://user-images.githubusercontent.com/102267210/193480285-83e48e82-ea9e-4c4f-9195-a437f6e36145.PNG) ![8](https://user-images.githubusercontent.com/102267210/193480659-3a6eaed9-a44f-4e5d-83ba-0088439d6180.PNG) ![9](https://user-images.githubusercontent.com/102267210/193480700-a19ce795-46c2-42d3-9307-842cef3b36b5.PNG)

- The user must be able to create an account, registering his personal data and his address.
- If you enter any incorrect information or fail to enter any mandatory information, the user should receive a clear error message.
- After completing the registration, the user must be redirected to the restaurant list screen.

### - Search and Selection of Restaurants:

![2](https://user-images.githubusercontent.com/102267210/193480360-075ca645-7435-4895-b534-431ee6c0465b.PNG) ![3](https://user-images.githubusercontent.com/102267210/193480362-c611a494-9d3b-4cf6-9f69-92b4fed74640.PNG) ![4](https://user-images.githubusercontent.com/102267210/193480396-0d3f7494-eee7-4781-9c9d-cfe2f363c7fe.PNG)

- User should be able to view a list of all restaurants.
- User must be able to search for a restaurant by name.
- User must be able to filter restaurants by category.
- The user must be able to click on a restaurant card to view the screen with its menu.

### - Restaurant menu:

![5](https://user-images.githubusercontent.com/102267210/193480453-99a55cb9-8a5a-4e21-b79e-c9f9785398d3.PNG)

- The user must be able to view the restaurant's information (photo, name, type, delivery time, shipping, address).
- The user must be able to view the products of the restaurant.
- The user must be able to view the information of each dish (photo, name, description, price).
- The user must be able to add dishes to the cart and select the quantity of each dish.
- User must be able to remove items from cart.
- If there is already an item from another restaurant in the cart, a message appears asking the user if he wants to clear the cart.

### - Cart and Checkout:

![6](https://user-images.githubusercontent.com/102267210/193480540-41f5bed9-5144-496b-9a2b-6cebc272dbe2.PNG) ![9](https://user-images.githubusercontent.com/102267210/193482293-5f0f2fda-7052-4b56-a282-3f2d0beb2bd3.PNG)

- The user must be able to view the list of items they have added to the cart. If you haven't added any items, you should see an "Empty Cart" message.
- The user should see, at the top of the screen, the delivery address.
- The user must view the total purchase price, which must be correctly calculated according to the price and quantity of each item added together with the shipping price.
- User must be able to select a payment method from credit card and cash options.
- The user must be able to complete an order and, when doing so, must see an "Order in Progress" banner with the order details (this banner is active during the restaurant's delivery time).
- If there is already an order in progress, the user will not be able to place another order until the delivery is completed.

### - Profile, Edit Profile and Order History:

![7](https://user-images.githubusercontent.com/102267210/193714467-5163b103-8a70-49b1-bf98-c7a3b93ac821.PNG) 
![10](https://user-images.githubusercontent.com/102267210/193714469-992b0163-9677-4b60-a2c7-91b4796e7ca0.PNG) 
![11](https://user-images.githubusercontent.com/102267210/193714470-671486f2-2fef-473d-be4e-d6b35e24fbf0.PNG) 

- The user must be able to view and edit his personal details and address.
- When editing information, if you enter any incorrect information or fail to enter any mandatory information, the user should receive a clear error message.
- The user must be able to view his history of completed orders.
- If you want, the user can click on the "exit" button to log out.

## ⚙️ Setup

Clone down this repository. You will need node and npm installed globally on your machine.

Installation:

$ npm install
$ npm install axios
$ npm install styled-components
$ npm install react-router-dom
$ npm install @material-ui/core @material-ui/icons

To start the project:

$ npm start

Now just test it in your browser!

## Technologies

- ReactJS
- API
- Material UI
- Axios
- React-Router-Dom
- Agile Methodologies

## 👩‍💻 Developers

- João Vitor Gomes Lara Resende.
- Rafael Gonçalves Quintanilha Guimarães.
- Nei Luis Duarte Tavares Junior.
- Rafael Castilho Castro.
- Lucas Ferreira Arruda.
