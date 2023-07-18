# Bloglist Dashboard

Save and manage your list of favorite blogs. See other's blog list and give a like to their collections if you find it interesting.

Visit at https://bloglist-chakraui.herokuapp.com/.

## Screenshots
| Manage Blog List |   New Blog |
| :-------------: |:-------------:|
| ![Main Section](https://raw.githubusercontent.com/ranjabi/bloglist-dashboard/main/frontend/src/assets/main-page.png) | ![New Blog Section](https://raw.githubusercontent.com/ranjabi/bloglist-dashboard/main/frontend/src/assets/new-blog-section.png)
| **Blog Detail** | **Login Page** |
| ![Blog Detail](https://raw.githubusercontent.com/ranjabi/bloglist-dashboard/main/frontend/src/assets/single-blog-page.png) | ![Login Page](https://raw.githubusercontent.com/ranjabi/bloglist-dashboard/main/frontend/src/assets/login-page.png) |
| **List of Users** |
| ![List of Users](https://raw.githubusercontent.com/ranjabi/bloglist-dashboard/main/frontend/src/assets/users-page.png) |

## Tech Stack

**Client:** React, ChakraUI

**Server:** Node, Express, MongoDB

**Other:** JWT Authentication

## Use Cases

- Register a new account 
- Login your account to manage your own blog list
- Create and delete your own blog list
- See and give a like to other's blog list
- Add a comment to a blog list
- See list of users and its amount of posted blog list

You can fill the username and password with **admin** to log in for demo purposes or register a new account.

## Lessons Learned

React state is immutable and behaves asynchronously, the right method is needed to make sure the components can still render the newest state update.

## Etc
The front end & the back end part of this repository is moved from the previous following source to make the directory cleaner:

Front end: https://github.com/ranjabi/fullstackopen2022/tree/90fb578ee910c1ac132a66f44b4091ac9ec0f375/part5/bloglist-frontend

Back end: https://github.com/ranjabi/fullstackopen2022/tree/main/part4/bloglist

## Authors

- [@ranjabi](https://www.github.com/ranjabi)

