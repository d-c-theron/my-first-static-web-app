module.exports = async function (context, req) {
    context.res.json({
        text: "Hello from the newly changed API"
    });
};