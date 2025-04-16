export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, plan } = req.body;
    
    // Here you would typically:
    // 1. Validate the data
    // 2. Store it in a database
    // 3. Send a notification email
    // 4. etc.
    
    // For now, we'll just log it and return success
    console.log("Demo request received:", { name, email, company, plan });
    
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error processing demo request:", error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 