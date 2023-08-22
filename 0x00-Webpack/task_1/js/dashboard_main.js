import $ from 'jquery';
import debounce from 'lodash/debounce';

const countParagraph = $('<p id="count"></p>');

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="clickButton">Click here to get started</button>');
$('body').append(countParagraph);
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

const updateCounter = () => {
  count++;
  countParagraph.text(`${count} clicks on the button`);
};

const debouncedUpdateCounter = debounce(updateCounter, 300);

$('#clickButton').on('click', debouncedUpdateCounter);
