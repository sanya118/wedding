
const apiKey = 'AIzaSyCJZfLp9quPfOJRPC4Us20EzZaciaS_exM';  // Replace with your actual API key
const sheetId = '1YgHRqgvSVJF9BhaRbEvq47FiasnFblQKsmOwzcNqksc';       // Replace with your spreadsheet ID
const range = 'Sheet1!A2:D';                  // Adjust the range to the actual data in your sheet

fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);  // This will log your sheet data
    })
    .catch(error => {
        console.error('Error fetching data from Google Sheets API:', error);
    });
