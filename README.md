### Live link

<a href="[url](https://taskmanager-website-7we1.onrender.com)">Click here</a>

### Ports

> -  The Back end is listening on port 5000.

### Packages

- To install packages: write "npm install" in the terminal.

- Create .env file and connect it to your DB.
  
### Async wrapper 
> -  To avoid rewriting try and catch for each controller method

```javascript
const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = asyncWrapper

```

### UI Samples

- Main page.

![Screenshot 2023-06-27 183343](https://github.com/HakimMohamed/TaskManager-Website/assets/70428788/20d38bb9-3bda-4771-b403-681856846537)

- Edit page.

![Screenshot 2023-06-27 184042](https://github.com/HakimMohamed/TaskManager-Website/assets/70428788/fb248cd0-6b62-4303-9e5a-29ad658243d0)


