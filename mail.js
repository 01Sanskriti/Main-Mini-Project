//gemini api
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyCWYXbgFsFeDjdZm-j4vfLvqnJHvxa-WCQ");

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = "generate an email to get job in IT industry for the sudesh pawar and i am web developer and complete my bTech degree in datta meghe college of enginnering"

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();


// const API_KEY = "AIzaSyCWYXbgFsFeDjdZm-j4vfLvqnJHvxa-WCQ";
// const prompt = "generate an email for get a job in IT industy";
// const model = "gemini-pro"; // Or any other desired model

// const url = `https://api.generativeai.googleapis.com/v1/models/${model}:generateText`;

// fetch(url, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${API_KEY}`
//   },
//   body: JSON.stringify({
//     prompt: prompt
//   })
// })
// .then(response => {
//   if (!response.ok) {
//     throw new Error(`API request failed with status ${response.status}`);
//   }
//   return response.json();
// })
// .then(data => {
//   document.getElementById("generated-text").textContent = data.text;
// })
// .catch(error => {
//   console.error("Error fetching text:", error);
//   document.getElementById("generated-text").textContent = "Error: Failed to generate text.";
// });
