import kleur from 'kleur'
import { ChatGPTAPI } from 'chatgpt'

const api = new ChatGPTAPI({
    apiKey: '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',
})

res = await api.sendMessage(`
    given the following resume and job description, generate a cover letter which includes the name of the applicant at the bottom signature. RESUME: "  "     and COVER LETTER: "   "
`)

console.log(`${kleur.green().bold('root:')} ${cleanText('', res.text)}`)

// Enable graceful stop
process.once('SIGINT', () => tgClient.stop('SIGINT'))
process.once('SIGTERM', () => tgClient.stop('SIGTERM'))
