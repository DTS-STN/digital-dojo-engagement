import nodemailer from 'nodemailer'
import sanitizeHTML from 'sanitize-html'

export default async function (req, res) {
  console.log(req.body)
  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.NODEMAILER_EMAIL,
      to: process.env.NODEMAILER_EMAIL,
      subject: 'Start Dojo Contact Form',
      html: `<dl>
        <dt><b>First Name:</b></dt><dt>${sanitizeHTML(req.body.firstName)}</dt>
        <dt><b>Last Name:</b></dt><dt>${sanitizeHTML(req.body.lastName)}</dt>
        <dt><b>Email:</b></dt><dt>${sanitizeHTML(req.body.email)}</dt>
        <dt><b>Work Location:</b></dt><dt>${sanitizeHTML(
          req.body.workLocation
        )}</dt>
        <dt><b>Next Step:</b></dt><dt>${sanitizeHTML(req.body.nextStep)}</dt>
        <dt><b>Tell us about yourself and your team:</b></dt><dt>${sanitizeHTML(
          req.body.tellUs
        )}</dt>
        <dt><b>How did you find out about us?:</b></dt><dt>${sanitizeHTML(
          req.body.howFind
        )}</dt>


      </dl>`,
    })
    res.status(200).json({ message: 'success' })
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'failed to send' })
  }
}
