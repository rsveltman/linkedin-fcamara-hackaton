var pry = require('pryjs');
var entities = require("entities");
var loadJsonFile = require("load-json-file");
var JSONPath = require('advanced-json-path');
var candidate;

var dataPaths = {
  "pathFirstName" : "$.*.*[0]",
  "pathLastName" : "$.*.[1].*.[0]",
  "pathLocation" : "$.*[2]",
  "pathCompanyNames" : "$.*.[3].*.*.*",
  "pathSocial" : "$.*.[5]",
  "pathSocialMedia" : "$.*.[6]",
  "pathSeekingJob" :  "$.*.[7]",
  "pathSkills" : "$.*.[8]"
}


loadJsonFile('./sample.json').then( json => {
    
    candidate = json;
    var result = JSONPath(candidate, pathFirstName);
    // var key;
    // for (var m in result){
    //   key = m;
    // }
    // console.log(m);
    eval(pry.it);
    
    
    
    var follows_company = followsCompany(candidate); // boolean
    var has_github = hasGithub(candidate); // boolean
    var is_seeking = isSeekingJob(candidate, keyword); // boolean
    var how_near = livesHowNear(candidate, reference); // number
    var experience = calculateExperiencePoints(candidate, keyword); // number
    var education = calculateEducationPoints(candidate); // number
    var skills = calculateSkillPoints(candidate, keyword); // number
    var social = howSocial(candidate); // number
    
  } );