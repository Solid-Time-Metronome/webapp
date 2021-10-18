import { useState } from 'react'
import { send } from 'emailjs-com'

export default function ContactUs () {
  const [response, setResponse] = useState('')
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: ''
  })

  const onSubmit = (e) => {
    e.preventDefault()
    send(
      'service_8kbt099',
      'template_p2q38qf',
      toSend,
      'user_zIwQNAaIAva6lqIaWM32c'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        setResponse(
          "Thanks for contacting us. We'll get back to you as soon as possible."
        )
      })
      .catch((err) => {
        console.log('FAILED...', err)
        setResponse('Message failed to send. Please try again')
      })
  }

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value })
  }

  return (
      <section>
         <form onSubmit={onSubmit}>
            <input
               type='text'
               name='from_name'
               placeholder='name'
               value={toSend.from_name}
               onChange={handleChange}
            />

            <input
               type='text'
               name='message'
               placeholder='message'
               value={toSend.message}
               onChange={handleChange}
            />
            <input
               type='text'
               name='reply_to'
               placeholder='email'
               value={toSend.reply_to}
               onChange={handleChange}
            />
            <button type='submit'>Submit</button>
         </form>

         <p>{response}</p>
      </section>
  )
}
