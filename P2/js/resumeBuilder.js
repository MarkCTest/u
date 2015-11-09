
var bio = {
    "name": "Mark Crowther",
    "role": "Front-end Test Architect",
    "welcome": "Welcome to my Udacity pages, part of the Front-end Web Developer course. Here you'll find a list of the web programming skills I'm developing as part of the Udacity course. Totally Udacious!",
    "contacts": {
        "mobile": "+44 (0)7725 838417",
        "email": "mark@cyreath.co.uk",
        "github": "MarkCTest",
        "twitter": "@MarkCTest",
        "blog": "http://cyreath.blogspot.com/",
        "location": "London, UK"
        },
    "skills": ["HTML5", "CSS3", "JavaScript", "JQuery", "JSON", "Testing", "Automation"],
    "biopic": "http://cyreath.co.uk/dev/udacity/images/mark-crowther.png"
};

// Function to add skills if there are any in the skills array within the bio object
bio.display = function() {
    if (bio.skills === 0) {
            console.log("Nothing in Skills so skills header is hidden");
        } else {
            var formattedSkillsStart = HTMLskillsStart;
            $("#header").append(formattedSkillsStart);
            
// The solution at the end of [JavaScript Basics > Flow Control > Quiz] seemed very repetative, so I went for this instead
            bio.skills.forEach(function(item) {
                var formattedSkills = HTMLskills.replace("%data%",item);
                $("#skills").append(formattedSkills);
            });
        }; //end Else
}; // end displaySkills function


 // ###########################      EDUCATION          ##############################
var education = {
    "schools": [
        {
            "name": "The Open University",
            "location": "Milton Keynes",
            "degree": "Computing and Systems Practice",
            "major": "Automation",
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
            "name": "Udacity",
            "location": "Mountain View",
            "degree": "Front-end Web Developer",
            "major": "Web Development",
            "dates": "2015",
            "url": "https://www.udacity.com"
        }        
    ],
    "display": "place function here"    
}

 // ###########################      WORK          ##############################

var work = {
    "jobs": [
        {
            "employer": "Piccadilly Group",
            "title": "Principal Consultant",
            "location": "London, UK",
            "dates": "April 2013 to present",
            "description": "On-site consulting in Test Management and Delivery"
        },
        {
            "employer": "Pride Systems Ltd",
            "title": "Test Architect",
            "location": "Malaga, Spain",
            "dates": "May 2011 to March 2013",
            "description": "Design and Deliver hands-on testing solutions"
        }
    ],
    "display": "place function here"
}

var projects = {
    "projects": [
        {
            "title": "Automation Engineer",
            "dates": "2014",
            "description": "Test Automation of over 300 applications for an investment bank",
            "images": "http://logodatabases.com/wp-content/uploads/2012/03/deutsche-bank.jpg"
        },
        {
            "title": "Test Support Architect",
            "dates": "2015",
            "description": "Analysis and design of test environments",
            "images": "http://www.barclaycard.co.uk/personal/images/barclaycard_logo.png"
        }
    ],
    "display": "place function here"
}


// TO DO: Convert all the Code for adding elements to the webpage into FUNCTIONS
// #############################################################################

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

// TOP CONTACTS
// ############# TODO: Change this to a forEach loop #############

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);

var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    $("#topContacts").append(formattedBlog);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

// Extra #Header Items

var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcome);
    $("#header").append(formattedWelcome);

// Call the resumeBuilder Functions to build the resume content
bio.display();