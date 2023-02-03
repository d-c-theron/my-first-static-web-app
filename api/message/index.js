module.exports = async function (context, req) {
    context.res.json({
        text: "Hello from the changed API - 03/02"
    });
};