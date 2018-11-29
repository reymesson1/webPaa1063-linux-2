
var mongoose = require('mongoose');
var webdriver = require('selenium-webdriver');
var express = require('express');
var app = express();

var By = webdriver.By;
var chrome    = require('selenium-webdriver/chrome')

var options   = new chrome.Options();
options.addArguments('--headless');


var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

