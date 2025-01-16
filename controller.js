const helloWorld = (req, res) => {
    res.send("Hello World");
  };
  
  const sendJson = (req, res) => {
    const data = {
      message: "This is a JSON response.",
      status: "success"
    };
    res.json(data);
  };
  
  const postRequest = (req, res) => {
    console.log('Received Body:', req.body);
    res.json({
        message: "I am post body.", receivedData: req.body});
  };
  
  module.exports = {
    helloWorld,
    sendJson,
    postRequest
  };