/*
exports.handler = async (event, context) => {
  const { num1, num2 } = JSON.parse(event.body)
  const result = num1 + num2

  return {
    statusCode: 200,
    body: JSON.stringify({ result }),
  }
}
*/

exports.handler = async (event) => {
  const { num1, num2 } = event.queryStringParameters
  
  // Perform the addition
  const result = parseInt(num1) + parseInt(num2)
  
  // Prepare the JSON response
  const response = {
    statusCode: 200,
    body: JSON.stringify({ result }),
    headers: {
      'Content-Type': 'application/json',
    },
  }
  
  return response;
}
