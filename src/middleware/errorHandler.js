const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong!', msg: err.message });
};

module.exports = { errorHandler };
