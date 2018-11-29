
var mongoose = require('mongoose');
var webdriver = require('selenium-webdriver');
var express = require('express');
var app = express();

var By = webdriver.By;


var options   = new chrome.Options();
options.addArguments('--headless');
var driver = new webdriver.Builder().forBrowser('chrome').withCapabilities(options.toCapabilities()).build();

