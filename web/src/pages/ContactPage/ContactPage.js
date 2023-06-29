import { MetaTags } from '@redwoodjs/web'
import { Form, TextField, TextAreaField, Submit, Label, FieldError } from '@redwoodjs/forms'

const ContactPage = () => {

	// functions
	const onSubmit = (data) => {
		console.log(data)
	}

	return (
		<>
			<MetaTags title="Contact" description="Contact page" />

			<Form onSubmit={onSubmit}>
				<Label name="name" errorClassName='error'>Name</Label>
				<TextField name="name" validation={{ required: true }} errorClassName='error' />
				<FieldError name="name" className='error' />

				<Label name="email" errorClassName='error'>Email</Label>
				<TextField name="email" validation={{
					required: true,
					pattern: { value: /^[\w\.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)+$/ }
				}} errorClassName='error' />
				<FieldError name="email" className='error' />

				<Label name="message" errorClassName='error'>Message</Label>
				<TextAreaField name="message" validation={{ required: true }} errorClassName='error' />
				<FieldError name="message" className='error' />

				<Submit>Send</Submit>
			</Form>
		</>
	)
}

export default ContactPage
