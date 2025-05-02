
import puppeteer from "puppeteer";
import dotenv from "dotenv";
dotenv.config();

function createNaukriJobUrl(location, role) {
    const baseUrl = "https://www.naukri.com";
    const jobType = `${encodeURIComponent(role)}-jobs-in-${encodeURIComponent(location)}`;
    const query = `k=${encodeURIComponent(role)}`;
    const locationParam = `l=${encodeURIComponent(location)}`;
    const additionalParams = "nignbevent_src=jobsearchDeskGNB";
    
    return `${baseUrl}/${jobType}?${query}&${locationParam}&${additionalParams}`;
}


const scrapeJobs1 = async (location, role) => {
  const browser = await puppeteer. launch({ headless: false, }); // Set headless to false for debugging
  const page = await browser.newPage();
  const url = createNaukriJobUrl(location, role);
  await page.goto(
    url,
    { waitUntil: "networkidle2" }
  );

  // Wait for the job elements to load
  await page.waitForSelector('.cust-job-tuple');

  // Add a delay to ensure dynamic content is loaded
  

  // Extract job data
  const jobs = await page.evaluate(() => {
    let jobElements = document.querySelectorAll('.cust-job-tuple');

    let jobList = [];
    jobElements.forEach((job) => {
      try {
        let titleElement = job.querySelector('.row1 .title');
        let companyElement = job.querySelector('.row2 .comp-name');
        let salaryElement = job.querySelector('.row3 .sal-wrap .sal');
        let locationElement = job.querySelector('.row3 .loc-wrap .loc');
        let linkElement = titleElement ? titleElement.href : '';

        // Fallback values if elements are not found
        let title = titleElement ? titleElement.innerText : 'Title not found';
        let company = companyElement ? companyElement.innerText : 'Company not found';
        let salary = salaryElement ? salaryElement.innerText : 'Salary not found';
        let location = locationElement ? locationElement.innerText : 'Location not found';

        jobList.push({
          title: title.trim(),
          company: company.trim(),
          salary: salary.trim(),
          location: location.trim(),
          link: linkElement
        });
      } catch (error) {
        console.error("Error extracting job data:", error);
      }
    });
    return jobList;
  });
  await browser.close();
  return jobs;

  console.log(jobs);

  
};
export default scrapeJobs1;
