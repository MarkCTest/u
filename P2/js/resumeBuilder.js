
var bio = {
    "name": "Mark Crowther",
    "role": "Front-end Test Architect",
    "welcome": "Welcome to my Udacity pages, part of the Front-end Web Developer course. Here you'll find a list of the web programming skills I'm developing as part of the Udacity course. A Totally Udacious Mindblow&trade;!",
    "contacts": {
        "youtube": "http://www.youtube.com/user/Cyreath",
        "email": "mark@cyreath.co.uk",
        "github": "MarkCTest",
        "twitter": "@MarkCTest",
        "blog": "http://cyreath.blogspot.com/",
        "location": "London, UK"
        },
    "skills": ["HTML5", "CSS3", "JavaScript", "JQuery", "JSON", "Test Automation"],
    "biopic": "images/mark001.jpg",
    display : function() {
        if (bio.skills === 0) {
            console.log("Nothing in Skills so skills header is hidden");
        } else {
            var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
                $("#header").prepend(formattedRole);

            var formattedName = HTMLheaderName.replace("%data%", bio.name);
                $("#header").prepend(formattedName);

            console.log("Name and Role added to the resume");

            var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
                $("#topContacts").append(formattedEmail);
            
            var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
                $("#topContacts").append(formattedGithub);
                $("#footerContacts").append(formattedGithub);
            
            var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
                $("#topContacts").append(formattedTwitter);
                $("#footerContacts").append(formattedTwitter);
            
            var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
                $("#topContacts").append(formattedBlog);
                 $("#footerContacts").append(formattedBlog);
            
            var formattedYoutube = HTMLyoutube.replace("%data%", bio.contacts.youtube);
                $("#topContacts").append(formattedYoutube);
                $("#footerContacts").append(formattedYoutube);
            
            var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
                $("#topContacts").append(formattedLocation);

            var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
                $("#header").append(formattedBioPic);

            var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcome);
                $("#header").append(formattedWelcome);
            
            var formattedSkillsStart = HTMLskillsStart;
                $("#header").append(formattedSkillsStart);
            
            // The solution at the end of [JavaScript Basics > Flow Control > Quiz] seemed very repetative, so I went for this instead
            bio.skills.forEach(function(item) {
                var formattedSkills = HTMLskills.replace("%data%", item);
                $("#skills").append(formattedSkills);
            });
            console.log("Bio added to the resume");
        }; //end Else
    } // end bio.display function      
};

 // ###########################      EDUCATION          #############################
var education = {
    "schools": [
        {
            "name": "The Open University",
            "location": "Milton Keynes",
            "degree": "Computing and Systems Practice",
            "major": "Test Automation",
            "dates": "2011",
            "url": "http://www.open.ac.uk/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Tenable Certified Nessus Auditor",
            "school": "Tenable",
            "dates": "2014",
            "url": "http://elearn.tenable.com/course/info.php?id=55"
        },
        {
            "title": "Front-end Web Developer",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com"
        }        
    ],
    
display : function() {
    $("#education").append(HTMLschoolStart);
    
    
    for (eachSchool in education.schools) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[eachSchool].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[eachSchool].degree);
        var formattedSchoolCombined = formattedSchoolName + formattedSchoolDegree;
        $(".education-entry:last").append(formattedSchoolCombined);      

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[eachSchool].dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[eachSchool].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[eachSchool].major);
        $(".education-entry:last").append(formattedSchoolMajor);
        
        var formattedSchoolURL = HTMLschoolName.replace("%data%", education.schools[eachSchool].url);
        $(".education-entry:last").append(formattedSchoolURL);
        }

    $("#education").append(HTMLonlineClasses);
    
    for (eachOnlineClass in education.onlineCourses) {
        $(HTMLschoolStart).insertAfter($("h3"));
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[eachOnlineClass].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[eachOnlineClass].school);
        var formattedOnlineCombined = formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry:last").append(formattedOnlineCombined);
        
        var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[eachOnlineClass].dates);
        $(".education-entry:last").append(formattedOnlineDate);
 
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[eachOnlineClass].url);
        $(".education-entry:last").append(formattedOnlineURL);        
        
        }
        console.log("Schools added to the resume")
    }      
};

 // ###########################        WORK             #############################
var work = {
    "jobs": [
        {
            "employer": "Piccadilly Group",
            "title": "Principal Consultant",
            "location": "London, UK",
            "dates": "April 2013 to present",
            "description": "In this current role I deliver on-site consulting in Test Management for finance and banking clients. This can involve analysis and planning to execution and reporting. I'm responsbile for coding automated unit and functional system tests using tools such as Selenium and NightWatch.js along with integrated dashbaords."
        },
        {
            "employer": "Pride Systems Ltd",
            "title": "Front-end Test Architect",
            "location": "Malaga, Spain",
            "dates": "May 2011 to March 2013",
            "description": "In this role I was responsible for developing web based dashboards and reports to help display and visualise testing data. I was required to design and code HTML, CSS and JavaScript web solutions that could be used by the team and senior management alike."
        }],
display : function() {
    for (eachJob in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
     
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[eachJob].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[eachJob].title);
        var concatEmployerAndTitle = formattedWorkEmployer + formattedWorkTitle;
        $(".work-entry:last").append(concatEmployerAndTitle);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[eachJob].location);
        $(".work-entry:last").append(formattedLocation);        
        
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[eachJob].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[eachJob].description);
        $(".work-entry:last").append(formattedDescription);        

        console.log("Work items added to the resume");        
        
        }
    }    
};


// ############################       PROJECTS          #############################
var projects = {
    "theProjects": [
        {
            "title": "Automation Engineer",
            "dates": "2014",
            "description": "Test Automation of over 300 applications for an investment bank. This involved tool selection based on the unique needs of the application team's testing problem, design of HTML based reporting interface, PoC build and deployment via a third party automation vendor.",
            "images": ["images/logo-db.png", "images/icon-nightwatch.png", "images/logo-sel.png", "images/icon-html5.png", "images/icon-css3.png"]
        },
        {
            "title": "Test Support Architect",
            "dates": "2015",
            "description": "Analysis and design of test environments",
            "images": ["images/logo-bc.png", "images/logo-itil.png"]
        }],
    
display : function() {
    for (eachProject in projects.theProjects) {
        $("#projects").append(HTMLprojectStart);
        
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.theProjects[eachProject].title);
        $(".project-entry:last").append(formattedProjectTitle);
        
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.theProjects[eachProject].dates);
        $(".project-entry:last").append(formattedProjectDates);
        
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.theProjects[eachProject].description);
        $(".project-entry:last").append(formattedProjectDescription);

            if (projects.theProjects[eachProject].images.length === 0) {
                console.log("Nothing in Images so Images won't be shown");
            } else {
                for (eachImage in projects.theProjects[eachProject].images) {
                     var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.theProjects[eachProject].images[eachImage]);
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