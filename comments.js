// Create web server with Node.js and Express.js

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  res.send('Hello from comments.js');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

Add the following code to `index.js`:

```javascript
// Path: index.js
// Create web server with Node.js and Express.js

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from index.js');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

Now, run the following command to start the server:

```bash
node index.js
```

Open your browser and navigate to `http://localhost:3000/comments` to see the response from `comments.js`. Then, navigate to `http://localhost:3000/` to see the response from `index.js`.

### Conclusion

In this article, we learned how to create a web server with Node.js and Express.js. We also learned how to create routes for different paths and send responses back to the client. This is just the beginning of what you can do with Node.js and Express.js. You can create more complex web applications by using different middlewares, template engines, and databases.

I hope you found this article helpful. If you have any questions or suggestions, feel free to leave a comment below.

Happy coding! 🚀