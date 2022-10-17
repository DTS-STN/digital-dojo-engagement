import nodemailer from 'nodemailer'

export default async function (req, res) {
  const transporter = nodemailer.createTransport({
    port: 587,
    host: 'SMTP.office365.com',
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
      subject: 'Start Dojo Team Engagement',
      html: `<dl>
        <dt><b>First Name:</b></dt><dt>${req.body.first_name}</dt>
        <dt><b>Last Name:</b></dt><dt>${req.body.last_name}</dt>
        <dt><b>Email:</b></dt><dt>${req.body.email}</dt>
        <dt><b>Team Name:</b></dt><dt>${req.body.team_name}</dt>
        <dt><b>Work Location:</b></dt><dt>${req.body.work_location}</dt>
        <dt><b>Dates in mind?:</b></dt><dt>${req.body.dates}</dt>
        <dt><b>Subject to train:</b></dt><dt>${req.body.practice}</dt>
        <dt><b>What to know about them:</b></dt><dt>${req.body.what_else}</dt>
        <dt><b>How did they find us?:</b></dt><dt>${req.body.how_find}</dt>
      </dl>`,
    })
    res.status(200).json({ message: 'success' })
  } catch (e) {
    res.status(500).json({ message: 'failed to send' })
  }
}
