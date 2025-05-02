import scrapeJobs1 from "../Scraper/scrapeSite1.js";
import scrapeJobs2 from "../Scraper/scrapeSite2.js";

const scrapeJobs = async (location, role) => {
  const [site1Jobs, site2Jobs] = await Promise.all([
    scrapeJobs1(location, role),
    scrapeJobs2(location, role),
  ]);

  return [...site1Jobs, ...site2Jobs];
};

export default scrapeJobs;
