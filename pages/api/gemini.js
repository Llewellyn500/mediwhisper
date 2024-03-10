import { GoogleGenerativeAI } from '@google/generative-ai'

export default async function handler(req, res) {
  const { message } = req.body;

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
  const model = genAI.getGenerativeModel({ model: "gemini-pro"})
  const chat = model.startChat()

  const result = await chat.sendMessage(message)
  const response = await result.response
  const text = response.text()

  res.send(text)
}