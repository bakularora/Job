import puppeteer from "puppeteer";
import dotenv from "dotenv";
dotenv.config();

function createIndeedJobUrl(location, role) {
    const baseUrl = "https://in.indeed.com/jobs";
    const query = `q=${encodeURIComponent(role)}`;
    const locationParam = `l=${encodeURIComponent(location)}`;
    const additionalParams = "from=searchOnHP";
    
    return `${baseUrl}?${query}&${locationParam}&${additionalParams}`;
}

const scrapeJobs2 = async (location,role) => {
  const browser = await puppeteer. launch({ headless: false, });;
    const page = await browser.newPage();
    const url = createIndeedJobUrl(location,role);
    await page.goto(
      url,
      { waitUntil: "networkidle2" }
    );
  
    // Wait for the job elements to load
    await page.waitForSelector(".job_seen_beacon");
  
    // Extract job data
    const jobs = await page.evaluate(() => {
      let jobElements = document.querySelectorAll(".job_seen_beacon");
  
      let jobList = [];
      jobElements.forEach((job) => {
        let titleElement = job.querySelector("h2.jobTitle a span");
        let companyElement = job.querySelector("[data-testid='company-name']");
        let locationElement = job.querySelector("[data-testid='text-location']");
        let linkElement = job.querySelector("h2.jobTitle a");
  
        if (titleElement && companyElement && locationElement && linkElement) {
          jobList.push({
            title: titleElement.innerText.trim(),
            company: companyElement.innerText.trim(),
            location: locationElement.innerText.trim(),
            link: "https://in.indeed.com" + linkElement.getAttribute("href"),
            salary: "View salary from the website"
          });
        }
      });
      return jobList;
    });
    await browser.close();
    return jobs;
  
    console.log(jobs);
  
    
  };
  
  // Call the function to start scraping
  export default scrapeJobs2;
