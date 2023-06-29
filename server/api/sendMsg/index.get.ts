const token = process.env.TG_TOKEN
const chatId = process.env.TG_CHAT

const url = `https://api.telegram.org/bot${token}/sendMessage`;

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { name, phone } = query;

  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: `${name}\n+7${phone}`,
    }),
  })

  return {
    hello: 'world'
  }
})