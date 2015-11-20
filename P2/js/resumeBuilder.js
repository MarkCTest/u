var bio = {
    "name": "Mark Crowther",
    "role": "Front-end Test Architect",
    "welcome": "Welcome to my Udacity pages, part of the Front-end Web Developer course. " +
        "Here you'll find a list of the web programming skills I'm developing as part of the Udacity course. " +
        "A Totally Udacious Mindblow&trade;!",
    "contacts": {
        "youtube": "http://www.youtube.com/user/Cyreath",
        "email": "mark@cyreath.co.uk",
        "github": "MarkCTest",
        "twitter": "@MarkCTest",
        "mobile": "00011 222 334",
        "location": "London, UK"
    },
    "skills": ["HTML5", "CSS3", "JavaScript", "JQuery", "JSON", "Test Automation"],
    "biopic": "images/mark001.jpg",
    display: function() {
            if (bio.skills === 0) {
                console.log("Nothing in Skills so skills header is hidden");
            } else {
                // added the variables below to try out the review suggestion, works well :)
                var $head = $("#header");
                var $top = $("#topContacts");
                var $foot = $("#footerContacts");
                var data = "%data%";

                var formattedRole = HTMLheaderRole.replace(data, bio.role);
                var formattedName = HTMLheaderName.replace(data, bio.name);

                $head.prepend(formattedName, formattedRole);

                console.log("Name and Role added to the resume");

                var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
                var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
                var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
                var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
                var formattedYoutube = HTMLyoutube.replace(data, bio.contacts.youtube);
                var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);

                $top.append(formattedGithub, formattedEmail, formattedTwitter, formattedMobile, formattedYoutube, formattedLocation);
                $foot.append(formattedGithub, formattedTwitter, formattedMobile, formattedYoutube);

                var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
                var formattedWelcome = HTMLwelcomeMsg.replace(data, bio.welcome);
                var formattedSkillsStart = HTMLskillsStart;

                $head.append(formattedBioPic, formattedWelcome, formattedSkillsStart);

                // The solution at the end of [JavaScript Basics > Flow Control > Quiz] seemed very repetative, so I went for this instead
                bio.skills.forEach(function(item) {
                    var formattedSkills = HTMLskills.replace(data, item);
                    $("#skills").append(formattedSkills);
                });
                console.log("Bio added to the resume");
            } //end Else
        } // end bio.display function      
};

// ###########################      EDUCATION          #############################
var education = {
    "schools": [{
        "name": "The Open University",
        "location": "Milton Keynes",
        "degree": "Computing and Systems Practice",
        "major": "Test Automation",
        "dates": "2011",
        "url": "http://www.open.ac.uk/"
    }],
    "onlineCourses": [{
        "title": "Tenable Certified Nessus Auditor",
        "school": "Tenable",
        "dates": "2014",
        "url": "http://elearn.tenable.com/course/info.php?id=55"
    }, {
        "title": "Front-end Web Developer",
        "school": "Udacity",
        "dates": "2015",
        "url": "https://www.udacity.com"
    }],

    display: function() {

            if (education.schools.length > 0) {
                for (var eachSchool in education.schools) {
                    $("#education").append(HTMLschoolStart);

                    var sIndex = education.schools[eachSchool];
                    var formattedSchoolName = HTMLschoolName.replace("%data%", sIndex.name);
                    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", sIndex.degree);
                    var formattedSchoolCombined = formattedSchoolName + formattedSchoolDegree;

                    var formattedSchoolDates = HTMLschoolDates.replace("%data%", sIndex.dates);
                    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", sIndex.location);
                    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", sIndex.major);
                    var formattedSchoolURL = HTMLschoolName.replace("%data%", sIndex.url);

                    $(".education-entry:last").append(formattedSchoolCombined, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor, formattedSchoolURL);
                    console.log("Schools added to the resume");
                }
            } else {
                console.log("Schools is empty so nothing will be shown");
            }

            if (education.onlineCourses.length > 0) {
                $("#education").append(HTMLonlineClasses);
                for (var eachCourse in education.onlineCourses) {
                    $("#education").append(HTMLschoolStart);
                    var ocIndex = education.onlineCourses[eachCourse];

                    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", ocIndex.title);
                    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", ocIndex.school);
                    var formattedOnlineCombined = formattedOnlineTitle + formattedOnlineSchool;
                    var formattedOnlineDates = HTMLonlineDates.replace("%data%", ocIndex.dates);
                    var formattedOnlineURL = HTMLonlineURL.replace("%data%", ocIndex.url);

                    $(".education-entry:last").append(formattedOnlineCombined, formattedOnlineDates, formattedOnlineURL);
                    console.log("Online Classes added to the resume");
                }
            } else {
                console.log("Online Classes is empty so nothing will be shown");
            }

        } //end display function
};

// ###########################        WORK             #############################
var work = {
        "jobs": [{
            "employer": "Piccadilly Group",
            "title": "Principal Consultant",
            "location": "London, UK",
            "dates": "April 2013 to present",
            "description": "In this current role I deliver on-site consulting in Test Management for finance and banking clients." +
                "This can involve analysis and planning to execution and reporting. I'm responsbile for coding automated unit and" +
                "functional system tests using tools such as Selenium and NightWatch.js along with integrated dashboards."
        }, {
            "employer": "Pride Systems Ltd",
            "title": "Front-end Test Architect",
            "location": "Malaga, Spain",
            "dates": "May 2011 to March 2013",
            "description": "In this role I was responsible for developing web based dashboards and reports " +
                "to help display and visualise testing data. I was required to design and code HTML, CSS and JavaScript " +
                "web solutions that could be used by the team and senior management alike."
        }],
        display: function() {

            if (work.jobs.length > 0) {
                $("#workExperience").append(HTMLworkStart);
                for (var eachJob in work.jobs) {
                    var wIndex = work.jobs[eachJob];

                    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", wIndex.employer);
                    var formattedWorkTitle = HTMLworkTitle.replace("%data%", wIndex.title);
                    var concatEmployerAndTitle = formattedWorkEmployer + formattedWorkTitle;
                    var formattedLocation = HTMLworkLocation.replace("%data%", wIndex.location);
                    var formattedDates = HTMLworkDates.replace("%data%", wIndex.dates);
                    var formattedDescription = HTMLworkDescription.replace("%data%", wIndex.description);

                    $(".work-entry:last").append(concatEmployerAndTitle, formattedLocation, formattedDates, formattedDescription);
                    console.log("Work items added to the resume");
                }
            } else {
                console.log("Work is empty so nothing has been added to the resume");
            }
        }
    }; // end WORK object


// ############################       PROJECTS          #############################
var projects = {
    "theProjects": [{
        "title": "Automation Engineer",
        "dates": "2014",
        "description": "Test Automation of over 300 applications for an investment bank. This involved" +
            "tool selection based on the unique needs of the application team's testing problem," +
            "design of HTML based reporting interface, PoC build and deployment via a third party automation vendor.",
        "images": ["images/logo-db.png", "images/icon-nightwatch.png", "images/logo-sel.png", "images/icon-html5.png", "images/icon-css3.png"]
    }, {
        "title": "Test Support Architect",
        "dates": "2015",
        "description": "Analysis and design of test environments",
        "images": ["images/logo-bc.png", "images/logo-itil.png"]
    }],

    display: function() {
        for (var eachProject in projects.theProjects) {
            $("#projects").append(HTMLprojectStart);
            var pIndex = projects.theProjects[eachProject];

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", pIndex.title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", pIndex.dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", pIndex.description);

            $(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);

            if (pIndex.images.length === 0) {
                console.log("Nothing in Images so Images won't be shown");
            } else {
                for (var eachImage in projects.theProjects[eachProject].images) {
                    var formattedProjectImage = HTMLprojectImage.replace("%data%", pIndex.images[eachImage]);
                    $(".project-entry:last").append(formattedProjectImage);
                } // end FOR
            } //end of ELSE

            console.log("Projects added to the resume");

        } // end of FOR
    }
}; // end of PROJECTS object

// Call the resumeBuilder Functions to build the resume content
bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);