Postman was used.
2 mock profiles were added in users.json.

To Register (http://localhost:4000/user/register - POST request)
{
"username": "(input)",
"password": "(input)",
"email": "(input)"
}

To Login (http://localhost:4000/user/login - POST request);
{
"username": "(input)",
"password": "(input)"
}

Profile Retrieval (http://localhost:4000/user/profile - GET request)
KEY: Authorization
VALUE: Bearer mysecuretoken
