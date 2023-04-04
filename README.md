
# Notify me.
Name of this project is Notify me.

The objective of this project is to create a blog app where user can Read the blogs , Create blogs, comment on blog they like
## Visit below link too see demo

[Demo](https://rightous.netlify.app)


## Features

- Read blogs without login
- Register on website / Signup
- Login to account
- See account details
- Upload profile picture
- Update profile
- Create blog
- Upload image for blog
- Update blog
- Delete blog
- Give comment on the blog
- Users can't make changes to others' post
- User cannot create post without loging in
- Light/dark mode toggle


## Tech Stack

## Client
- react
- redux
- react-router-dom
- react-icons
- react-redux
- redux-thunk
- chakra-ui



---
## Server
- bcrypt
- cloudinary
- cors
- dotenv
- express
- jsonwebtoken
- mongoose
- multer
- nodemon
## Installation

Install my-project by cloning the repository

```bash
  cd backend
  npm Install
  cd frontend
  npm Install
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
### Backend-End environment Variables

- `DB_URL`   your mongoDb ATLAS url

- `PRIVATE_KEY` to hash the password

- #### Cloudinary Variables

- `CLOUD_NAME` provided by Cloudinary

- `API_KAY` provided by Cloudinary

- `API_SECRET` provided by Cloudinary


## API Reference

#### Get all items

```http
  GET /blog
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `NA` | `NA` | **No API_KEY Required** |

#### Get item by blog_Id
```http
  GET /blog/${blog_id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `blog_id`      | `ObjectId` | **Required**. Id of item to fetch |

#### Create post 

```http
  POST /blog
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_id`      | `ObjectId` | **Required**. to create post|
| `title`      | `string` | **Required**. to create post |
| `blog`      | `string` | **Required**. Description to create post |
| `image_blog`      | `file` | **Required**. to create post |

#### Update item by blog_Id

```http
  PATCH /blog/update/${blog_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `blog_id`      | `ObjectId` | **Required**. Id of item update|
| `payload`      | `stringified object` | **Required**. object to update|

#### Delete item by blog_Id
```http
  DELETE /blog/delete/${blog_id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `blog_id`      | `ObjectId` | **Required**. Id of item to fetch |

---

#### Get all comments on perticular post by blog_Id
```http
  GET /comment/${blog_id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `blog_id`      | `ObjectId` | **Required**. Id of item to all comments |

#### post comment 

```http
  POST /comment
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_id`      | `ObjectId` | **Required**. to create comment|
| `comment`      | `string` | **Required**. to create comment |
| `blog_id`      | `ObjectId` | **Required**.  to create comment |

---
## Run Locally

Clone the project

```bash
  git clone https://github.com/Praful-87/blog-app-mern.git
```

Go to the project directory

```bash
  cd backend
```
```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run server
```
Start the developement server ( localhost )

```bash
  npm run start
```


## Deployment

To deploy this project

Go to the frontend directory

```bash
  cd frontend
```

```bash
  npm run build
```


```bash
  deploy the build folder on netlify
```


# Screenshots
### App with Loged In

![App Screenshot](https://res.cloudinary.com/doaedvl5s/image/upload/v1680586453/Screenshot_185_pgk68a.png)
### App with Loged In for mobile view

![App Screenshot](https://res.cloudinary.com/doaedvl5s/image/upload/v1680586923/Screenshot_188_mamoq9.png)

### App without Loged In

![App Screenshot](https://res.cloudinary.com/doaedvl5s/image/upload/v1680586453/Screenshot_186_y9fjed.png)

### App without Loged In for mobile view

![App Screenshot](https://res.cloudinary.com/doaedvl5s/image/upload/v1680586684/Screenshot_187_gtb2sc.png)



## Acknowledgements

 - [Online storage to store uploaded images](https://cloudinary.com/)
 - [Host user frontend here](https://www.netlify.com/)
 - [Host user backend here](https://www.cyclic.sh/)


## Authors

- [@Praful-87](https://github.com/Praful-87)

---
![Logo](https://res.cloudinary.com/doaedvl5s/image/upload/v1680167039/lyredncxehdefxt5jx29.png)

