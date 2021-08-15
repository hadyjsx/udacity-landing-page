/*
 *     AUTHOR: 
 *     -   Abdelhady 'H2O' Salah
 * 
 *     VERSION:
 *     -   1.0.0
 * 
 *     REPOSITORY:
 *     -   https://github.com/h2o-creator/udacity-landing-page
 * 
 *     LICENSE NOTICE:
 *     -   This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; 
 *         either version 3 of the License, or (at your option) any later version.
 * 
 *     -   This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; 
 *         without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * 
 *     -   You should have received a copy of the GNU General Public License along with this program. If not, see https://www.gnu.org/licenses/.
 */

/* Global Scope */

//Random text generated by http://www.cupcakeipsum.com
const globalRandomStrings = [
    //First String
    'Cupcake ipsum dolor sit amet. Halvah croissant shortbread tiramisu I love pastry. Toffee I love biscuit chocolate bar jelly tart shortbread. Dessert wafer gingerbread cake donut I love. Jelly-o I love soufflé soufflé cotton candy cake. Jelly apple pie pie I love topping. I love lollipop oat cake cake bonbon lollipop. I love chocolate cake jujubes cake sweet roll apple pie powder. Macaroon bonbon danish apple pie I love. Pastry jujubes candy sesame snaps brownie marzipan sweet roll. Cake macaroon jelly macaroon lollipop. Sugar plum macaroon bonbon icing chocolate liquorice. Icing donut tootsie roll shortbread fruitcake sugar plum muffin brownie.',
    'Croissant chocolate cake lollipop macaroon lemon drops cupcake lemon drops liquorice. Oat cake tart halvah cake danish. Lemon drops soufflé cookie carrot cake wafer biscuit gummi bears. Jelly beans muffin brownie fruitcake biscuit marzipan pie sesame snaps. Gingerbread dragée powder jelly-o donut I love chocolate bar chupa chups. I love liquorice powder I love I love. Powder jelly-o dessert marshmallow toffee cheesecake. Pie cookie toffee muffin bear claw cake muffin liquorice powder. I love donut tart I love jelly I love. Apple pie cotton candy ice cream I love bear claw gingerbread apple pie chocolate bar chocolate bar. Croissant cake gummi bears.',
    'I love toffee I love gummi bears cheesecake apple pie. Carrot cake sweet candy tootsie roll I love. Biscuit bear claw tiramisu shortbread biscuit chocolate brownie apple pie. Wafer bonbon gingerbread wafer I love I love carrot cake tootsie roll.',
 
    //Second String
    'Cupcake ipsum dolor sit amet dessert jelly-o apple pie candy canes. Chocolate bar jelly caramels wafer sweet lollipop icing pie I love. Sweet jujubes danish tootsie roll pudding biscuit sweet roll. Donut danish shortbread I love croissant apple pie I love. Marshmallow chocolate cake marshmallow pudding macaroon. Croissant icing candy canes liquorice cupcake icing sugar plum pie carrot cake. Cupcake carrot cake sesame snaps soufflé macaroon sesame snaps. I love toffee carrot cake caramels lollipop. Candy canes pie pastry liquorice danish croissant. Chupa chups dessert I love gingerbread liquorice lollipop I love icing lollipop. I love powder cake I love cookie jelly. Pudding shortbread cake I love powder cheesecake tootsie roll.',
    'I love bear claw chocolate bar pudding I love apple pie chocolate bar. Apple pie chocolate bar chocolate cake macaroon tootsie roll candy canes. Muffin pastry sugar plum icing gummi bears I love croissant pastry. Jelly cheesecake pudding cookie fruitcake pastry macaroon cheesecake. Topping cookie croissant sugar plum caramels chupa chups jelly beans cake powder. Toffee gummi bears cotton candy donut wafer cookie muffin pudding. Soufflé sweet roll sesame snaps chocolate cake cake. Bear claw icing chupa chups gummi bears dessert powder chupa chups. Chocolate bar soufflé sesame snaps croissant bonbon. Tootsie roll cookie chocolate ice cream cake. Gingerbread I love jelly beans wafer sesame snaps gummies. I love chocolate cake sweet.',
    'I love jujubes ice cream. Topping jelly-o I love caramels I love I love macaroon.',
 
    //Third String
    'Cupcake ipsum dolor sit amet cotton candy cake. Chocolate cake I love brownie ice cream jelly-o cheesecake toffee. Toffee ice cream marshmallow wafer halvah. Lollipop gummies tootsie roll macaroon donut. Cupcake I love jujubes lemon drops ice cream liquorice. Sweet danish sweet roll chocolate caramels. Cotton candy chocolate cake carrot cake I love sugar plum shortbread. Carrot cake sugar plum lollipop lemon drops cookie jelly. Cookie apple pie biscuit I love sugar plum tart sweet liquorice biscuit. Candy canes pastry croissant chocolate bar chocolate cake I love gummies fruitcake. Donut soufflé cake tootsie roll gummi bears tootsie roll I love. Caramels powder cupcake chocolate cotton candy lemon drops chocolate.',
    'Topping sugar plum cotton candy chocolate bar carrot cake jujubes. Shortbread tart sweet pudding gummi bears caramels dessert I love topping. Croissant I love bonbon tiramisu danish macaroon. Ice cream gummies gummi bears halvah carrot cake I love sesame snaps gingerbread. Cake chocolate cake dragée cookie sweet chupa chups chocolate cake lemon drops chocolate. Lemon drops lemon drops oat cake biscuit halvah I love. Lollipop icing caramels lollipop oat cake. Donut bear claw soufflé cake croissant. Chocolate cake caramels jujubes chocolate bar jujubes. Croissant sugar plum chocolate cake tiramisu cheesecake. Jujubes caramels topping muffin cake. Pie chupa chups sweet roll jujubes I love danish dragée dragée. Bonbon carrot cake bear claw biscuit topping.',
    'I love jelly beans wafer lollipop toffee fruitcake muffin powder.',

    //Fourth String
    'Cupcake ipsum dolor sit amet jelly I love sugar plum tart. Caramels danish halvah croissant gingerbread sweet I love apple pie marshmallow. Sesame snaps marshmallow carrot cake oat cake tootsie roll caramels jelly beans. Sugar plum gummi bears shortbread jelly candy canes shortbread chupa chups. Jelly cheesecake I love topping pudding apple pie shortbread donut apple pie. Carrot cake tootsie roll gingerbread tart shortbread brownie pastry. Chupa chups marzipan bonbon gummi bears macaroon liquorice. Chupa chups sweet roll cheesecake ice cream bonbon gummi bears. Cheesecake soufflé lemon drops sweet gummi bears jelly beans. Muffin cake caramels jelly-o gummies brownie liquorice cake lollipop. Jelly beans chocolate bar marshmallow oat cake I love muffin tart oat cake.',
    'Lemon drops I love sesame snaps shortbread gummi bears soufflé tiramisu muffin. Carrot cake sweet ice cream pudding sesame snaps ice cream chupa chups I love. Marshmallow gummi bears liquorice candy canes I love cupcake muffin candy canes. Liquorice oat cake bonbon tiramisu cookie. Ice cream sugar plum jelly bear claw I love sweet lollipop I love. Jelly beans ice cream I love bear claw marzipan pastry chocolate cake brownie cotton candy. Cotton candy cotton candy gummi bears icing bear claw cotton candy cotton candy wafer. I love pastry chocolate I love sweet roll carrot cake I love halvah. I love chocolate cake apple pie cake sesame snaps I love pudding wafer. Tart halvah chocolate bar muffin I love. Apple pie I love dessert cotton candy cheesecake sesame snaps.',
    'Sweet roll pudding tootsie roll candy canes tart. Sesame snaps shortbread sweet roll I love liquorice bear claw cotton candy lollipop fruitcake. Brownie cake I love muffin ice cream pie I love sweet roll. Donut jelly-o sweet roll croissant candy canes I love croissant macaroon I love. Liquorice lollipop tart jelly beans biscuit halvah tart. Halvah shortbread jelly beans liquorice jelly-o.'
];

//Total sections created

let totalSections = 0;

//Custom nav timer

let customNavTimeout;

/* Helping Functions */

//Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//Modified 15/8/2021: Converted into arrow function with concise body type
//Result: It worked!
const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

//Return a random string
const returnRandomString = (numberOfTimes) => {
    let mainString = '';
    for (let i = 0; i < numberOfTimes; i++) { //Generate as many strings as required
        const string = getRandomArbitrary(0, globalRandomStrings.length - 1).toFixed(); //Return a random rounded value in the index of our global strings
        mainString += ` ${globalRandomStrings[string]} `; //Append the random string that was chosen automatically to the main string that will be returned by the function
    }
    return mainString;
};

//Source: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
//Create an observer for elements
//Note: I converted this function into an arrow function as requested by the Udacity reviewer
const createObserver = (elementToObserve) => {
    let options = {
        root: null,
        threshold: 0.4
    }
    let observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(elementToObserve);
};

//My own implementation of the handleIntersect function
//Thanks to the MDN for the rich resources

let lastActiveSection = null; //Identify the last active section

//Handle observer intersection calls
const handleIntersect = (entries, observer) => {
    for (const entry of entries) {
        if (entry.target.classList.contains('section')) {
            const getNavElement = document.querySelector(`#${entry.target.id}-nav.nav-li`); //Get the nav list item that matches the section

            //Now check if it's visible
            if (entry.isIntersecting === true) {
                if (lastActiveSection !== null && lastActiveSection != entry.target) { //Disable previous active section if exists
                    const getLastActiveNavElement = document.querySelector(`#${lastActiveSection.id}-nav.nav-li`);
                    lastActiveSection.classList.remove('section-active');
                    getLastActiveNavElement.classList.remove('li-active');
                }
                //Activate new section
                entry.target.classList.add('section-active');
                getNavElement.classList.add('li-active');
                entry.target.style.background = `rgba(237, 235, 235, ${entry.intersectionRatio})`;
                lastActiveSection = entry.target;
            } else {
                //If it's not intersecting, and isn't in the threshold (at least 40% visible), hide the section (or make sure it is)
                entry.target.classList.remove('section-active');
                getNavElement.classList.remove('li-active');
                entry.target.style.background = `rgba(237, 235, 235, ${entry.intersectionRatio})`;
            }
        }    
    }
};

/* Core Functions (and objects ;)) */

const customNav = { //An object for handling custom navigation (dynamic, you say)
    navParentElement: document.querySelector('.nav'),
    navElement: document.querySelector('.nav-ul'),
    createDynamicNavSections: function() {
        const sectionsNodeList = document.querySelectorAll('.section');
        if (sectionsNodeList.length === 0) { //If there is nothing, don't continue with the rest of the functionality
            return false;
        }
        const docFrag = document.createDocumentFragment();
        for (let section of sectionsNodeList) { //Loop through the NodeList
            const sectionName = section.id.split('-').join(' ').toUpperCase(); //Change section-1 to SECTION 1
            const sectionNavElementList = document.createElement('li'); //Create a new nav list element
     
            sectionNavElementList.className = 'nav-li'; //Use proper layout for nav list 
            sectionNavElementList.id = `${section.id}-nav`;
    
            sectionNavElementList.textContent = sectionName; //Use the modified section name for the list text

            docFrag.appendChild(sectionNavElementList); //Append the nav list element to the virtual DOM
        }
        customNav.navElement.appendChild(docFrag); //Append the nav list element to the nav unordered list element (parent)

        //An event listener for handling navigation clicks
        customNav.navElement.addEventListener('click', (e) => {
            if ((e.target.nodeName === 'LI') && e.target.id !== 'logo.li' && e.target.id !== 'hamburger.li') { //If user clicked the list item from nav menu
                let targetId = e.target.id;
                targetId = targetId.split('-nav'); //Remove the -nav from the ID to return section-1 instead of section-1-nav
                targetId.pop(); //Remove the -nav index from the array
                const sectionElement = document.querySelector(`#${targetId}`); //Find the section
                window.scrollTo(0, sectionElement.offsetTop - 100); //Go to section
            } else if (e.target.id === 'hamburger.li' || e.target.parentElement.id === 'hamburger.li') {
                const navItems = document.querySelectorAll('.nav-li');
                for (const navItem of navItems) {
                    if (navItem.id !== 'logo.li' && navItem.id !== 'hamburger.li') {
                        if (navItem.style.display === 'none') {
                            navItem.style.display = 'block';
                        } else {
                            navItem.style.display = 'none';
                        }
                    }
                }
            }
            clearTimeout(customNavTimeout);
        }); //Handle clicks to navigation unordered list
        return sectionsNodeList.length;
    },
    createNavLogo: function(iconURL, logoName) { //Create the logo using the icon url and logo name supplied to it
        const logoList = document.createElement('li'); //Create a list item
        const logoIcon = document.createElement('img'); //Create the image tag
        const logoLink = document.createElement('a'); //Create the link tag
        logoList.className = 'nav-li nav-logo li-active'; //Add appropriate styling to nav logo
        logoLink.className = 'nav-link'; //Add appropriate styling to nav link
        logoLink.textContent = logoName; //Use the argument (or parameter in this context) to set logo name
        logoIcon.setAttribute('src', iconURL); //Add Logo source image to the image tag
        logoIcon.setAttribute('alt', logoName); //Add alt text to the Logo source image
        logoLink.setAttribute('href', '#'); //Links to nothing, still a link? I could probably use index.html so that it refreshes on click
        logoList.setAttribute('id', 'logo.li'); //Let's make it easier to identify our logo list item
        logoList.appendChild(logoIcon); //Finally add the image tag to the list
        logoList.appendChild(logoLink); //And add the link tag to the list
        customNav.navElement.appendChild(logoList); //Append all the stuff above into the custom nav (our navigation element), retrieved from the customNav object
        return logoList;
    },
    //This function creates the navigation hamburger list dynamically
    createNavHamburger: function() {
        const hamburgerElement = document.createElement('li'); //Create the list tag
        const hamburgerIcon = document.createElement('i'); //Create the i tag
        hamburgerElement.id = 'hamburger.li'; //Add a unique identifier to be looked up easily
        hamburgerElement.classList.add('nav-li'); //Follow the same inline style as the siblings
        hamburgerElement.classList.add('hamburger-li'); //Follow the same inline style as the siblings
        hamburgerElement.style.float = 'right'; //Make it appear in the right not too close to the logo
        hamburgerIcon.className = 'fas fa-hamburger'; //Use the fontawesome hamburger instead of bars
        hamburgerElement.appendChild(hamburgerIcon); //Add the icon to the list
        customNav.navElement.appendChild(hamburgerElement); //Add the list to the unordered list
        return hamburgerElement;
    }
};

const createSections = (sections) => { //Create as many sections as you can get to need... Why'd you need a random section, though?
    const textContainer = document.querySelector('.container');
    const docFrag = document.createDocumentFragment();
    for (let i = 0; i < sections; i++) { //For as many sections, repeat the code
        //Create necessary elements
        sectionElement = document.createElement('section');
        sectionHeader = document.createElement('h2');
        sectionParagraph = document.createElement('p');

        //Add the 'section' class to our section element
        sectionElement.classList.add('section');

        //Set the ID of our section element to section-x where x is the index of the total sections variable plus one (it starts from one until forever)
        sectionElement.setAttribute('id', `section-${totalSections + 1}`);

        //Tell the script to dynamically add the section no. to the heading in form of SECTION x: Section title that is 25 chars ...
        sectionHeader.textContent = `SECTION ${totalSections + 1}: ${returnRandomString(1).substring(0, 25).toUpperCase()} ...`;

        //Populate our section paragraph with random text
        sectionParagraph.textContent = returnRandomString(5);

        //Finally append the children
        sectionElement.appendChild(sectionHeader);
        sectionElement.appendChild(sectionParagraph);

        //Observe the section
        createObserver(sectionElement);

        //Append & Process... We use virtual DOM to save resources
        docFrag.appendChild(sectionElement);
        if (totalSections === 0) {
            sectionElement.classList.add('section-active');
        }
        totalSections ++;
    }
    //One reflow and one repaint. That's a win for performance.
    textContainer.appendChild(docFrag);

    //Accept events (listen) on double click to the textContainer element... Actually that's also to save resources
    //Instead of per-section event, we use one event on the parent, and take advantage of the ability to identify the actual selected element
    //By using event.target as I did in the arrow function
    textContainer.addEventListener('dblclick', (e) => {
        if (e.target.nodeName === 'SECTION') { //If the user selected a section, not the entire container (appending listener to entine container was done for performance
            const sectionParagraph = e.target.lastElementChild; //Paragraph is supposed to be the last element of the section
            sectionParagraph.classList.toggle('hide-element'); //Toggle the element on double key press
    
            //The following code was created for the purpose of going to the next section in case there is
            //This only applies if the user closed the previous section not opening it
            const nextSection = e.target.nextElementSibling;
            if (nextSection !== null && sectionParagraph.className === 'hide-element') {
                window.scrollTo(0, nextSection.offsetTop);
            }
        }
    });
    return totalSections;
};

/* Main Function */

const main = () => {
    //This function is the thing that processes all the code we created, to actually make use of it.

    //Create the logo, use our emerald image and my... well.. name :)
    customNav.createNavLogo('img/emerald-icon.png', 'Abdelhady\'s');

    //Add our hamburger list at the beginning
    customNav.createNavHamburger();

    //You can create a billion (wouldn't be out of bounds? idk)
    createSections(11);

    //Create navigation list based on how many sections you created!
    customNav.createDynamicNavSections();

    /* Scroll top functionality */
    const scrollTopElement = document.querySelector('.scroll-top');
    scrollTopElement.addEventListener('click', function() { //If you click it, you go up
        window.scrollTo(0, 0);
    });
};

window.onload = main();

/* Browser Events */

window.onscroll = (e) => { //Respond to scroll
    //Navigation Work
    const container = document.querySelector('#content');
    const containerOffset = container.offsetTop;
    //If the current vertical offset exceeded the container offset (where our content reside at)
    //We begin to show the sticky navigation and adjust margins as needed, if not, show nav where it normally would be
    if (window.pageYOffset >= containerOffset) {
        customNav.navParentElement.classList.add('nav-sticky');
        container.style.margin = '25px 50px 0';
    } else {
        customNav.navParentElement.classList.remove('nav-sticky');
        container.style.margin = '0 50px';
    }

    //We normally wouldn't hide navigation if the user is scrolling, also, we would kill the timer if it's running due to
    //the user being idle beforehand, to avoid visual errors and inconvenience
    customNav.navParentElement.classList.remove('hide-element');
    clearTimeout(customNavTimeout);

    //After 5 seconds, if the user is in the middle of nowhere, hide navigation
    //If the user isn't 100 pixels below default, then they're at top, we'd still show navigation
    //Only hide navigation if user is deep below, and didn't scroll for some time (5 seconds, again)
    customNavTimeout = setTimeout(function() {
        if (window.pageYOffset > 100) {
            customNav.navParentElement.classList.add('hide-element');
        }    
    }, 15000);

    //Scroll to Top
    const scrollTopElement = document.querySelector('.scroll-top');
    if (window.pageYOffset > 100) { //If the user scrolled down 100 pixels
        scrollTopElement.style.display = 'block'; //Show the scorll to top magic icon
    } else {
        scrollTopElement.style.display = 'none'; //Otherwise, hide it (it's not needed)
        
    }
};