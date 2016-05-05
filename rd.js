var cpfs = [
  "696.585.611-44",
  "835.844.375-71",
  "701.397.193-69",
  "729.646.053-94"
];
var cnpjs = [
  "47.819.214/0001-58",
  "54.623.125/0001-05",
  "31.922.588/0001-64",
  "58.408.711/0001-80",
  "57.147.375/0001-04"
];

var rand = function(value) {
  return Math.floor(Math.random() * value) + 1 ;
};

var zipcode_mask = "xxxxx-xxx";
var mask_number = function(str) {
  text = "";
  for (var i = 0, len = str.length; i < len; i++) {
    if(str[i] == "x") {
      text += rand(9);
    } else {
      text += str[i];
    }
  }
  return text;
};

var mask_letter = function(str) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for( var i=0; i < str.length; i++ ){
    if(str[i] == "x") {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    } else {
      text += str[i];
    }
  }
  return text;
};

var mask_site = function(str) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";
  for( var i=0; i < str.length; i++ ){
    if(str[i] == "x") {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    } else {
      text += str[i];
    }
  }
  return text;
};

var name_mask = "xxxxxxxxxx xxxxxxxxxx";
var email_mask = "xxxx@xxxx.com.br";
var site_mask = "http://xxxxxxxxxx.com.br";
var address_mask = "xxxxxxxxxxxx xxxxxxx xxxxxxxxxx xxxxxxxxxxxx";
var address = mask_letter(address_mask) + ", " + mask_number("xxx");
var RD = {
  name: mask_letter(name_mask),
  email: mask_site(email_mask),
  zipcode: mask_number(zipcode_mask),
  site: mask_site(site_mask),
  address: address,
  password: "123qwe",
  cpf: cpfs[rand(cpfs.length - 1)],
  cnpj: cnpjs[rand(cnpjs.length - 1)],
  state: "SC",
  city: "Florianópolis"
};
