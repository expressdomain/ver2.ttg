import React from "react"
import { ContactFormTitle } from "@/data";


const functionURL = "https://sienna-bullfrog-4324.twil.io/send-mail" // this is your function URL

const { subTitle, title, description } = ContactFormTitle;

class ContactForm extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			buttonDisabled: true,
			message: { f_name: "", l_name: "", fromEmail: "", phone: "", subject: "", body: "" },
			submitting: false,
			error: null,
			reply_to: `fromEmail`
		}
	}
	
	
	onClick = async event => {
		event.preventDefault()
		this.setState({ submitting: true })
		const { f_name, l_name, fromEmail, phone, subject, body } = this.state.message
		
		const response = await fetch(functionURL, {
			method: "post",
			headers: {
				"Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
			},
			body: new URLSearchParams({f_name, l_name, fromEmail, phone, subject, body }).toString(),
		})
		if (response.status === 200) {
			
			setTimeout(() => {
					alert('Thank you for your message! We will reply within 24 hours.');
				}, 3000);
				clearTimeout();
				
			this.setState({
				error: null,
				submitting: false,
				message: {
					f_name: "",
					l_name: "",
					fromEmail: "",
					phone: "",
					subject: "",
					body: "",
				},
			})
		} else {
			const json = await response.json()
			this.setState({
				//error: json.error,
				error: 'WHOOPS! Please fill out all required fields.',
				submitting: false,
			})
		}
	}
	
	onChange = event => {
		const name = event.target.getAttribute("name")
		this.setState({
			message: { ...this.state.message, [name]: event.target.value },
		})
	}
	
	
	render() {
		return (
			<>
				<section className="commonSection ContactPage">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 text-center">
								<h4 className="sub_title">{subTitle}</h4>
								<h2 className="sec_title">{title}</h2>
								<p className="sec_desc">{description}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-8 offset-lg-2 col-sm-12 col-md-10 offset-md-1">
				<div className="error-handler">{this.state.error}</div>
				<form
					method="post"
					action={functionURL}
				>
					<div className="row">
						<div className="col-lg-6 col-sm-6">
							<input
								className="input-form form-control required"
								required
								type="text"
								name="f_name"
								id="f_name"
								placeholder="First Name"
								value={this.state.message.f_name}
								onChange={this.onChange}
							/>
							<div className="invalid-feedback">
								Please provide a valid city.
							</div>
						</div>
						<div className="col-lg-6 col-sm-6">
							<input
								className="input-form required"
								type="text"
								name="l_name"
								id="l_name"
								placeholder="Last Name"
								value={this.state.message.l_name}
								onChange={this.onChange}
							/>
						</div>
						<div className="col-lg-6 col-sm-6">
							<input
								className="input-form required"
								type="email"
								name="fromEmail"
								id="fromEmail"
								placeholder="Email Address"
								value={this.state.message.fromEmail}
								onChange={this.onChange}
							/>
						</div>
						<div className="col-lg-6 col-sm-6">
							<input
								className="input-form"
								type="text"
								name="phone"
								id="phone"
								placeholder="Phone Number"
								value={this.state.message.phone}
								onChange={this.onChange}
							/>
						</div>
						<div className="col-lg-12 col-sm-12">
							<input
								className="input-form"
								type="text"
								name="subject"
								id="subject"
								placeholder="Subject"
								value={this.state.message.subject}
								onChange={this.onChange}
							/>
						</div>
						<div className="col-lg-12 col-sm-12">
        <textarea
         className="input-form required"
         name="body"
         id="body"
         placeholder="Write Message"
         value={this.state.message.body}
         onChange={this.onChange}
        ></textarea>
						</div>
					</div>
					<button
						className="common_btn red_bg"
						type="submit"
						id="con_submit"
						disabled={this.state.submitting}
						onClick={this.onClick}
					>
						<span>Send Message</span>
					</button>
				</form>
							</div>
						</div>
					</div>
				</section>
			</>
		)
	}
}

export default ContactForm

