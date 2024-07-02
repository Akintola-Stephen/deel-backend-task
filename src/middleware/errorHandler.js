/**
 * Middleware for handling errors in an Express.js application.
 * It logs the error to the console and sends a JSON response with a 500 status code.
 * @param {Error} err - The error object that was thrown.
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @param {Function} next - The next middleware function in the stack.
 */
const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong!', msg: err.message });
};

export  { errorHandler };
