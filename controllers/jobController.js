import scrapeJobs from '../utils/scrapeJobs.js';

export const getJobs = async (req, res) => {
  const { location, role } = req.query;
  if (!location || !role) {
    return res.status(400).json({
       success:false,
       error: 'Location and role are required'
       });
  }

  try {
    const jobs = await scrapeJobs(location, role);
    res.status(200).json({
      success:true,
      jobs
    });
  } catch (error) {
    console.error('Error scraping jobs:', error);
    res.status(500).json({ 
      success:false,
      error: 'Failed to scrape jobs' });
  }
};
