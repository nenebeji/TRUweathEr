var city = $('#city')

// set dates
$('#today').text(moment().format('DD/MM/YYYY'));
$('#plus1').text(moment().add(1, 'day').format('DD/MM/YYYY'));
$('#plus2').text(moment().add(2, 'days').format('DD/MM/YYYY'));
$('#plus3').text(moment().add(3, 'days').format('DD/MM/YYYY'));
$('#plus4').text(moment().add(4, 'days').format('DD/MM/YYYY'));
$('#plus5').text(moment().add(5, 'days').format('DD/MM/YYYY'));

// city.text('London'); set text content

console.log(moment().format('DD/MM/YYYY'));
console.log(moment().add(1, 'day').format('DD/MM/YYYY'));