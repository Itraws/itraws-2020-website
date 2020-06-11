export default function({ $axios, redirect }, inject) {
  // Create a custom axios instance
  const mailChimpApi = $axios.create({
    headers: {
      Authorization: `auth ${process.env.MAILCHIMP_AUTH}`
    }
  })

  // Inject to context as $api
  inject('mailChimpApi', mailChimpApi)
}
