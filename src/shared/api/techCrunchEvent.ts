const apiUrl = 'https://annalz.clickocean.io/flure/tech-crunch-event/san-francisco';

export const saveAnswer = async ({ question, answer }: { question: string, answer: string}): Promise<unknown> => {
  return await fetch(`${apiUrl}/test`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ question, answer })
  })
}

export const saveEmail = async (email: string): Promise<unknown> => {
  return await fetch(`${apiUrl}/email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  })
}