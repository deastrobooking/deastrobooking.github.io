/*
JavaScript 6th Edition
Project 3

Author: Randolph Chabot 
Date:   4/15/2022

Filename: contact.html

*/
// Github search api settings. 
// Potential for future multiple search metrics and associations through constants. 
const GITHUB_SEARCH_URL = 'https://api.github.com/search/repositories';

function getDataFromApi(searchTerm, callback) {
  const settings = {
    url: GITHUB_SEARCH_URL,
    data: {
      q: `${searchTerm} in:name`,
      per_page: 100
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };

  $.ajax(settings);
}
/*Gathering Ajax Data to be sent to Results Section for disply____________________________
_____________________________________________________________
*/ 
function renderResult(result) {
  return `
    <div>
      <h2>
      <a class="js-result-name" href="${result.html_url}" target="_blank">${result.name}</a> by <a class="js-user-name" href="${result.owner.html_url}" target="_blank">${result.owner.login}</a></h2>
      <p>Number of watchers: <span class="js-watchers-count">${result.watchers_count}</span></p>
      <p>Number of open issues: <span class="js-issues-count">${result.open_issues}</span></p>
    </div>
  `;
}
/*Sending Data to Results Section in index.html____________________________
_____________________________________________________________
*/ 
function displayGitHubSearchData(data) {
  const results = data.items.map((item, index) => renderResult(item));
  $('.js-search-results').html(results);
}

function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.js-query');
    const query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
    getDataFromApi(query, displayGitHubSearchData);
  });
}

$(watchSubmit);
