const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9175aed09fmshdae6b6b0643857cp1b6163jsn10134fab33af',
		'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
	}
};
let find = document.getElementById("find");

find.onclick = async function(e){
    e.preventDefault();
    let jsearch= document.getElementById("jobsearch").value;
    let l= document.getElementById("loc").value;
    let jt= document.getElementById("jt").value;
    const url = `https://jobs-api14.p.rapidapi.com/list?query=${jsearch}&location=${l}`;
    // const url = 'https://jobs-api14.p.rapidapi.com/list?query=${encodeURIComponent(jsearch)}&location=${l}&distance=1.0&language=en_GB&remoteOnly=true&datePosted=3days&employmentTypes=${jt}&index=0'; 
    console.log(url);
    console.log(jsearch);
    console.log(l);
    console.log(jt);
    // console.log("jd");
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        result["jobs"].map((item) =>{
            console.log(item);
        })
        console.log(result["jobs"][0]);
    } catch (error) {
        console.error(error);
    }
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const jobs = result.jobs;
        const tableBody = document.querySelector('#jobTable tbody');
        
        tableBody.innerHTML='';

        jobs.forEach(job => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td><a href="${job.jobProviders[0].url}">${job.title}</a></td>
            <td>${job.company}</td>
            <td>${job.location}</td>
            <td>${job.Jobtype}</td>
            <td>${job.datePosted}</td>
            <td><a href="composemail.html?company_name=${job.company}"><button>Compose Mail</button></a></td>
          `;
          tableBody.appendChild(row);
        });
      } catch (error) {
        console.error(error);
      }
    
}


    