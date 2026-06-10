import { URL } from "url";

const myURL = new URL("https://www.example.com:8080/p/a/t/h?query=string#hash");

// uniform resource locator

console.log(myURL.hash);
// used for what hash was in the url / link
//#host

console.log(myURL.host);
// to check the cost
//www.example.com:8080

console.log(myURL.hostname);
// gets host nae
// dwww.example.com

console.log(myURL.port);
// gets the port number
//  8080

console.log(myURL.href);
// gives the whole url of the link
// https://www.example.com:8080/p/a/t/h?query=string#hash

console.log(myURL.protocol);
// returns protovol
// https:\

console.log(myURL.search);
// gives whatever you are seaching fo
// ?query=string

console.log(myURL.searchParams);
// give the url search paramaeters
// URLSearchParams { 'query' => 'string' }