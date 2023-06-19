import { useState } from 'react'

const formEndpoint = import.meta.env.VITE_APP_WP_API_FORM_ENDPOINT

const Contact = () => {
  return (
    <>
      <div id='hero-sub' className="hero-contact">
          <div className="hero-content">
              <h1>Contact us</h1>
          </div>
        </div>

      <div className='section'>
        <h2>Opening times</h2><br></br>
          <h3>Star Safari is open all months of the year</h3><br />
            <p>Our business hours vary throughout the year, we usually run three (3) sessions starting every two (2) hours on Friday, Saturday and Sunday evenings, around sunset.</p><br />
            <p>Weather permitting, we always stargaze!</p>
      </div>

      <div>
        <hr className='horizontal-line'/>
      </div>

      {/* Location section */}
      <div container-col-2>
        <div className='section-contact'>
          <h2>Our location</h2><br></br>
          <h4>1169 Ponatahi Road, Ponatahi, Wairarapa 5792</h4><br />
            <p>Phone 0274 555 555</p><br />
            <p>star.safaris@space.nz</p>
      </div>

      {/* Googlemap */}
      <div>          
        <div className="iframe-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.5375891965846!2d175.52074745638936!3d-41.139153441361834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d40d476833955cb%3A0x2755c57d1d8c79d0!2s1169C%20Ponatahi%20Road%2C%20Ponatahi%205792!5e0!3m2!1sen!2snz!4v1686870207814!5m2!1sen!2snz"
            title="Embedded Content"
            allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Message section  */}
      <div className="container">
        <div id="contact-container" >    
            <h3>Message us </h3>
            <ContactForm/>
            </div>
          <div>
        </div>
    </div>
    </>
  )
}

const ContactForm = () => {

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    const testForm = new FormData();
    testForm.append('your-name', name)
    testForm.append('your-email', email)
    testForm.append('your-message', message)

    axios.post(formEndpoint, testForm, {

      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(function (response) {
      console.log(response);
      setSubmitted(true);
    })
    .catch(function (error) {
      console.log(error);
      setError(true);
    })
  }

  if (submitted) {
    return (
      <>
        <h3>Thank you for your message</h3>
        <p>We will be in touch soon </p>
      </>
    )
  }
  if (error) {
    return (
      <>
        <h3>Error</h3>
        <p>Sorry, we were unable to send your message</p>
      </>
    )
  }

  {/* Contact form inputs */}
  return (
    <>
      <form 
            onSubmit={handleSubmit}
            method="POST">
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text" placeholder="Enter your name"
                    name="name"
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email" placeholder="Enter your email"
                    name="email"
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                    required
                />
            </div>
            <div>
                <label htmlFor="message">Your message</label>
                <textarea
                    name="message"
                    onChange={event => setMessage(event.target.value)}
                    value={message}
                    required
                />
            </div>
            <div>
                <button
                    className="regular-button"
                    type="submit"
                >
                    SUBMIT
                </button>
            </div>
      </form>

    </>
  )
}

export default Contact
