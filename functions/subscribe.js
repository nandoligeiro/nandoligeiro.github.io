/**
 * Serverless Function — Newsletter Subscribe
 * Deploy: Vercel (api/subscribe.js) or Netlify (functions/subscribe.js)
 *
 * TODO: integrate with newsletter provider when defined
 * Options: Resend, Mailchimp, ConvertKit, Buttondown
 */
export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', 'https://nandoligeiro.github.io')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { email } = req.body || {}

  if (!email || !email.includes('@') || email.length > 254) {
    return res.status(400).json({ error: 'Email inválido' })
  }

  try {
    // ── Uncomment when provider is defined ──────────────────
    //
    // Example: Resend
    // const { Resend } = await import('resend')
    // const resend = new Resend(process.env.NEWSLETTER_API_KEY)
    // await resend.contacts.create({
    //   email,
    //   audienceId: process.env.NEWSLETTER_LIST_ID,
    // })
    //
    // Example: Mailchimp
    // await fetch(`https://us1.api.mailchimp.com/3.0/lists/${process.env.NEWSLETTER_LIST_ID}/members`, {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Basic ${Buffer.from(`anystring:${process.env.NEWSLETTER_API_KEY}`).toString('base64')}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email_address: email, status: 'subscribed' }),
    // })
    // ────────────────────────────────────────────────────────

    console.log(`[newsletter] new subscriber: ${email}`)
    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('[newsletter] error:', err)
    return res.status(500).json({ error: 'Erro interno. Tente novamente.' })
  }
}
