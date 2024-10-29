
import nodemailer from "nodemailer";
export async function POST(request: Request, response: Response) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return Response.json({ error: "Missing required fields." }, { status: 400 });
  }

  const newMessage = {
    name,
    email,
    message,
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return Response.json({ error: "Invalid email address." }, { status: 400 });
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: true,
    auth: {
      user: `${process.env.EMAIL}`,
      pass: `${process.env.PASSWORD}`,
    }
  })



  const okMessageSent = await transporter.sendMail({
    from: "CognitiveApe <" + process.env.EMAIL + ">",
    to: process.env.EMAIL,
    subject: "New message from portfolio site",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  });

  return Response.json({ message: "Success", okMessageSent }, { status: 200 });
}
