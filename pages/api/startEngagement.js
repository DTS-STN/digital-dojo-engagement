import nodemailer from 'nodemailer'
import sanitizeHTML from 'sanitize-html'

export default async function (req, res) {
  const transporter = nodemailer.createTransport({
    service: 'Outlook365',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.NODEMAILER_EMAIL,
      to: process.env.NODEMAILER_EMAIL,
      subject: 'Start Dojo Team Engagement',
      html: `<dl>
        <dt><b>First Name:</b></dt><dt>${sanitizeHTML(req.body.first_name)}</dt>
        <dt><b>Last Name:</b></dt><dt>${sanitizeHTML(req.body.last_name)}</dt>
        <dt><b>Email:</b></dt><dt>${sanitizeHTML(req.body.email)}</dt>
        <dt><b>Team Name:</b></dt><dt>${sanitizeHTML(req.body.team_name)}</dt>
        <dt><b>Work Location:</b></dt><dt>${sanitizeHTML(
          req.body.work_location
        )}</dt>
        <dt><b>Dates in mind?:</b></dt><dt>${sanitizeHTML(req.body.dates)}</dt>
        <dt><b>Subject to train:</b></dt><dt>${sanitizeHTML(
          req.body.practice
        )}</dt>
        <dt><b>What to know about them:</b></dt><dt>${sanitizeHTML(
          req.body.what_else
        )}</dt>
        <dt><b>How did they find us?:</b></dt><dt>${sanitizeHTML(
          req.body.how_find
        )}</dt>
      </dl>`,
    })
    res.status(200).json({ message: 'success' })
  } catch (e) {
    res.status(500).json({ message: 'failed to send' })
  }
}
