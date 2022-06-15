import { MongoClient } from 'mongodb';

export default async function Handler(req, res) {
	if (req.method === 'POST') {
		const { email, name, message } = req.body;

		if (
			!email ||
			!email.includes('@') ||
			!name ||
			name.trim() === '' ||
			!message ||
			message.trim() === ''
		) {
			res
				.status(422)
				.json({ message: 'invalid input' });
			return;
		}
		const newMessage = {
			email,
			name,
			message,
		};

		let client;

		const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.srnhgn1.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

		try {
			client = await MongoClient.connect(connectionString);
				//'mongodb+srv://masihmehrabi:ePe3P12JYdqqVBgF@cluster0.srnhgn1.mongodb.net/?retryWrites=true&w=majority'
		
		} catch (error) {
			res.status(500).json({
				message: 'couldnot connect to database.',
			});
			return;
		}
		const db = client.db();

		try {
			const result = await db
				.collection('messages')
				.insertOne(newMessage);
			newMessage.id = result.insertedId;
		} catch (error) {
			client.close();
			res.status(500).json({
				message: 'Storing message failed!',
			});
			return;
		}
		client.close();

		res.status(201).json({
			message: 'Successfully stored message!',
			message: newMessage,
		});
	}
}
