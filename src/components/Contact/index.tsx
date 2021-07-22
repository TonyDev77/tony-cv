import emailjs from 'emailjs-com';
import React, { BaseSyntheticEvent } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { mailToken } from '../../api';
import { WrapContact, WrapForm } from './styles';

function SendMail() {
	async function sendEmail(event: BaseSyntheticEvent) {
		event.preventDefault();

		await emailjs
			.sendForm('service_gmail', 'cv-template', event.target, `${mailToken}`)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		event.target.reset();

		// document.getElementById('msg-email').innerHTML = 'Mensagem enviada :)';
	}

	return (
		<form onSubmit={sendEmail}>
			<label htmlFor='name'> Nome: </label>
			<input type='text' id='name' name='name' placeholder='Nome...' />

			<label htmlFor='email'> E-mail: </label>
			<input type='mail' id='email' name='email' placeholder='Email...' />

			<label htmlFor='subject'> Título: </label>
			<input type='text' id='subject' name='subject' placeholder='Assunto...' />

			<label htmlFor='message'> Mensagem: </label>
			<textarea id='message' name='message' placeholder='Mensagem...' />

			<button type='submit'>Enviar</button>
		</form>
	);
}

function Contact() {
	return (
		<WrapContact id='contact'>
			<h1>CONTATO</h1>
			<WrapForm>
				<address>
					<div>
						<FaWhatsapp size={30} />
						<a href='tel:(81)99323-5866'>
							<strong>(81)</strong> 9 9323 - 5866
						</a>
					</div>

					<div>
						<IoMailOutline size={30} />
						<a href='mailto:tony.deve7oper@gmail.com?subject=Recrutamento&body=Opaaa, Olá Tony,'>
							tony.deve7oper@gmail.com
						</a>
					</div>
				</address>

				<SendMail />
			</WrapForm>
		</WrapContact>
	);
}

export default Contact;