# API Documentation

## Postman Usage
Postman was used to interact with the API. 2 mock profiles were added in `users.json`.

### Register User
- **Endpoint:** `http://localhost:4000/user/register`  
- **Method:** `POST`  
- **Request Body:**
```json
{
  "username": "enter username",
  "password": "enter password",
  "email": "enter email"
}
```
### Login User 
- **Endpoint:** `http://localhost:4000/user/login`  
- **Method:** `POST`  
- **Request Body:**
```json
{
  "username": "enter username",
  "password": "enter password"
}
```
### User Retrieval
- **Endpoint:** `http://localhost:4000/user/profile`  
- **Method:** `GET`  
- **Headers:**
 >Key: `Authorization`
 Value: `Bearer mysecuretoken`
