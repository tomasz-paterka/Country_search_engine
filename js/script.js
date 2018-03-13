var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#country-name').val();
	if (!countryName.length) countryName = 'Poland';
	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
}

function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item) {
		var table = $('<table border=1>');
		table.append('<tr><td>Country: </td><td>'+item.name+'</td></tr>');
		table.append('<tr><td>Capital: </td><td>'+item.capital+'</td></tr>');
		table.append('<tr><td>Region: </td><td>'+item.region+'</td></tr>');
		table.append('<tr><td>Area: </td><td>'+item.area+'</td></tr>');
		table.append('<tr><td>Population: </td><td>'+item.population+'</td></tr>');
		/*$('<li>').text('Country: ' + item.name).appendTo(countriesList);
		$('<li>').text('Capital: ' + item.capital).appendTo(countriesList);
		$('<li>').text('Region: ' + item.region).appendTo(countriesList);
		$('<li>').text('Area: ' + item.area).appendTo(countriesList);
		$('<li>').text('Population: ' + item.population + '').appendTo(countriesList);*/
		
		table.appendTo(countriesList);
	});
}