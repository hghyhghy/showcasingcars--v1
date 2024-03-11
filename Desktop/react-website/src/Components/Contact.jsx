import React from 'react'
import styled from 'styled-components'
import Footer from '../Components1/Footer'

const Services = () => {
  const Wrapper = styled.section`
  padding: 9rem 0rem 5rem 0rem;
  .container{
    margin-top: 6rem;
    text-align: center;
    .contact-form{
      max-width: 50rem;
      margin: auto;
      .contact-inputs{
         display: flex;
         flex-direction: column;
         gap: 30px;
         
         input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
      }
    }
  }
  
  `
  return (

    <Wrapper>

      <h2 className=' common-heading'> Our Contacts</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14745.028835856878!2d88.3566967939058!3d22.494530947984167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02713b257b4201%3A0x823fbc7ff044ca83!2sJadavpur%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1709716941600!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xqkrlang" method="post" className=' contact-inputs'>

            <input type="text" name="username" id="" placeholder='Enter Your Username' autoComplete='off' required />
            <input  type='email' name="Email" id="" placeholder='Enter Your Email id' autoComplete='off' required />
            <textarea name="message" id="" cols="30" rows="6" autoComplete='off' required></textarea>
          <input type="submit" value="send" />
          </form>
        </div>
      </div>
      
    </Wrapper>
  )
}

export default Services
