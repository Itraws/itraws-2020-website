interface forValidationEvent {
  [key: string]: any | []
}

exports.handler = (event: forValidationEvent) => {
  const email = JSON.parse(event.body).payload
  console.log(`Received a submission: ${JSON.stringify(email)}`)
  return {
    statusCode: 200,
    body: 'Ok'
  }
}
