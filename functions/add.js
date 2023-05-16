exports.handler = async (event, context) => {
  const { num1, num2 } = JSON.parse(event.body)
  const result = num1 + num2

  return {
    statusCode: 200,
    body: JSON.stringify({ result }),
  }
}
