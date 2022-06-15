import { useState } from 'react';
import styles from './contact-form.module.css';
import Notification from './../ui/notification'



async function sendContactData(contactDetails) {

	const response = await fetch('/api/contact', {
		method: 'POST',
		body: JSON.stringify(contactDetails),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(
			data.message || 'Something went wrong!'
		);
	}
}

export default function ContactForm() {
	const [enteredEmail, setEnteredEmail] =
		useState('');
	const [enteredName, setEnteredName] =
		useState('');
	const [enteredMessage, setEnteredMessage] =
		useState('');
	const [requsetStatus, setRequestStatus] =
		useState();
	const [requsetError, setRequestError] = useState();


	async function SendMessageHandler(event) {
		event.preventDefault();

		setRequestStatus('pending');

		try {
			await sendContactData({ 
				email: enteredEmail,
				name: enteredName,
				message: enteredMessage
			 });
			 setRequestStatus('success');
		}catch(error) {
			setRequestError(error.message);
			setRequestStatus('error');
		}
	}

	let notification;

	if(requsetStatus === 'pending') {
		notification = {
			status: 'pending',
			title: 'Sending message...',
			message: 'Your message is on its way!'
		};
	}

	if(requsetStatus === 'success') {
		notification = {
			status: 'success',
			title: 'Success!',
			message: 'Message sent successfully!'
		}
	}

	if (requsetStatus === 'error'){
		notification = {
			status: 'error',
			title: 'Error',
			message: requsetError
		}
	}

	return (
		<section className={styles.contact}>
			<h1>How can I help you?</h1>
			<form
				className={styles.form}
				onSubmit={SendMessageHandler}
			>
				<div className={styles.controls}>
					<div className={styles.control}>
						<label htmlFor='email'>
							Your Email
						</label>
						<input
							type='email'
							id='email'
							required
							value={enteredEmail}
							onChange={event =>
								setEnteredEmail(
									event.target.value
								)
							}
						/>
					</div>
					<div className={styles.control}>
						<label htmlFor='name'>
							Your Name
						</label>
						<input
							type='text'
							id='name'
							required
							value={enteredName}
							onChange={event =>
								setEnteredName(event.target.value)
							}
						/>
					</div>
				</div>
				<div className={styles.control}>
					<label htmlFor='message'>
						Your Message
					</label>
					<textarea
						id='message'
						rows='5'
						required
						value={enteredMessage}
						onChange={event =>
							setEnteredMessage(
								event.target.value
							)
						}
					></textarea>
				</div>
				<div className={styles.actions}>
					<button>Send Message</button>
				</div>
			</form>
			{notification && (<Notification
			status={notification.status}
			title={notification.title}
			message={notification.message}
			/>
			)}
		</section>
	);
}
