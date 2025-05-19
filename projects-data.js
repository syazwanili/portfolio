const projects = [
    {
        id: "juice-carton",
        title: "[Prototype] Juice Carton Packaging Design",
        date: "20 Apr 2022",
        images: ["./img/bg-img/c2.png", "./img/bg-img/c1.png", "./img/bg-img/c3.png"],
        description: "This project showcases a creative juice carton packaging prototype designed using Adobe Photoshop. Developed as part of a multimedia course assignment focused on creating realistic mockups, the design explores branding and visual appeal for everyday products. Choosing a juice carton allowed me to experiment with shape, color, and texture to produce an eye-catching, professional-looking package mockup. The project demonstrates skills in digital illustration, layout composition, and product presentation — essential elements in packaging design.",
        tags: ["Adobe Photoshop", "Packaging", "Product Mockup"]
    },
    {
        id: "wheelswave-web",
        title: "[Website] WheelsWave Car Booking System",
        date: "22 Dec 2023",
        images: ["./img/bg-img/ww2.png", "./img/bg-img/ww1.png", "./img/bg-img/ww4.png", "./img/bg-img/ww5.png", "./img/bg-img/ww6.png", "./img/bg-img/ww7.png", "./img/bg-img/ww3.png"],
        description: "WheelsWave is a comprehensive car booking system developed using HTML, CSS, JavaScript, and JSP. Designed to serve both customers and administrators, the platform allows users to easily browse available vehicles, make reservations, and manage bookings in real-time. The admin side provides robust tools for managing car inventories, booking statuses, and user data, ensuring smooth operation and efficient service. This project highlights full-stack web development skills with a focus on user experience and backend integration.",
        tags: ["HTML/CSS", "JAVA", "JSP", "Full-stack"]
    },
    {
        id: "scd",
        title: "[Website] Student Clustering System Dashboard Final Year Project",
        date: "12 Jul 2024",
        images: ["./img/bg-img/fyp1.png", "./img/bg-img/fyp2.png","./img/bg-img/fyp22.png","./img/bg-img/fyp222.png","./img/bg-img/fyp2222.png","./img/bg-img/fyp22222.png", "./img/bg-img/fyp3.png", "./img/bg-img/fyp4.png"],
        description: "This final year project presents a Student Clustering System Dashboard developed to analyze real student data collected from primary schools in Malaysia. The system uses agglomerative clustering, a hierarchical machine learning algorithm implemented in Python, to group students based on various attributes. The dashboard visualizes these clusters using interactive charts powered by Plotly and Highcharts, providing insightful and intuitive data representations for educators and administrators. This project combines data science, machine learning, and web visualization techniques to support data-driven decision making in education.",
        tags: ["Data Visualization", "Machine Learning", "Python", "Dashboard", "HTML/CSS"]
    },
    {
        id: "vanstapele",
        title: "[Website] Van Stapele Dessert Ordering System",
        date: "20 Dec 2024",
        images: ["./img/bg-img/vs1.png", "./img/bg-img/vs2.png", "./img/bg-img/vs4.png", "./img/bg-img/vs5.png",  "./img/bg-img/vs6.png", "./img/bg-img/vs3.png",  "./img/bg-img/vs7.png",  "./img/bg-img/vs77.png",  "./img/bg-img/vs8.png",  "./img/bg-img/vs9.png",  "./img/bg-img/vs10.png",],
        description: "Van Stapele is a user-friendly dessert ordering system designed to let customers browse and order a variety of cakes, including ice cream cakes, deluxe cakes, ready-to-eat cakes, and soft cookies. Built using HTML, CSS, and Java, the platform features a seamless shopping experience with cart functionality and payment processing. On the admin side, a comprehensive dashboard enables order tracking, product management, and PDF report generation for efficient business operations. This project demonstrates full-stack development skills focused on e-commerce and administrative management.",
        tags: ["HTML/CSS", "JAVA", "Full-stack", "Dashboard", "E-commerce website"]
    },
    {
        id: "wheelswave-app",
        title: "[App] WheelsWave Car Booking App",
        date: "12 Jul 2024",
        images: ["./img/bg-img/wwa1.png"],
        description: "WheelsWave is an Android car booking application that mirrors the functionality of its web counterpart, designed to provide users with a seamless vehicle reservation experience on mobile devices. Developed using Android Studio with Kotlin and Gradle, the app offers intuitive navigation for customers to browse available cars, book rides, and manage their bookings. The admin interface enables efficient management of fleet and reservations, ensuring smooth operation. This project highlights mobile app development skills with a focus on Kotlin programming and user-centric design.",
        tags: ["Android", "Kotlin"]
    },
    {
        id: "kagami",
        title: "[Prototype] KAGAMI Smart Mirror",
        date: "24 Nov 2023",
        images: ["./img/bg-img/kg1.png", "./img/bg-img/kg2.png", "./img/bg-img/kg4.png"],
        description: `KAGAMI Smart Mirror is an innovative prototype developed for an Enterprise subject, designed to enhance health and wellness routines. This smart mirror assists users during exercise by providing posture correction, tracking calories burned, and monitoring heart rate in real time. It also features weather updates and an intelligent mood detection system that analyzes both heart rate and facial expressions to offer personalized feedback. This project combines hardware concept design with interactive user experience, focusing on the intersection of fitness technology and smart home innovation. <br><br>Click <a href="https://www.youtube.com/watch?v=G9pAZNT34kk&t=11s" target="_blank" style="color:#ff4081;text-decoration:underline;">HERE</a> to watch the product's video.`,
        tags: ["Prototype", "Health & Wellness Tech", "Invention"]
    },
    {
        id: "letsrun",
        title: "[Website] Let's Run Event Registration System",
        date: "24 Nov 2023",
        images: ["./img/bg-img/letsrun.png", "./img/bg-img/lr2.png", "./img/bg-img/lr3.png"],
        description: "Let’s Run is an event registration website designed to streamline participant sign-ups for the running event. Users can enter personal details, select their shirt size, choose whether they want a medal, and complete their registration seamlessly. The system generates a digital receipt for confirmation. Developed using HTML, CSS, Java, and JSP, this project emphasizes user-friendly form handling and backend processing for efficient event management.",
        tags: ["JAVA", "JSP", "User Form Handling"]
    },
    {
        id: "sunway",
        title: "[Website] Sunway Lagoon Night Park Map Ride Calculation",
        date: "4 Jul 2024",
        images: ["./img/bg-img/1.png", "./img/bg-img/2.png", "./img/bg-img/3.png", "./img/bg-img/4.png"],
        description: "This interactive web tool helps visitors optimize their visit to Sunway Lagoon Night Park by entering their entrance time and preferred rides. The system calculates the ideal ride order, estimates travel times, and shows how much time remains before park closing to maximize the user’s experience. Built with Python for the backend logic and HTML/CSS for the user interface, this project combines algorithmic planning with an intuitive design to enhance amusement park visits.",
        tags: ["Ride Optimization", "Python", "UX"]
    },
    {
        id: "sg",
        title: "[Game] Sunny's Guild",
        date: "1 Dec 2024",
        images: ["./img/bg-img/sg2.jpeg", "./img/bg-img/sg3.jpeg", "./img/bg-img/sg1.jpeg"],
        description: `Sunny's Guild is an action-packed 2D RPG adventure game where players embark on thrilling missions to collect coins, defeat zombies and evil robots, and conquer level-based challenges. Along the way, players can boost their score, heal with potions, and fight to survive while navigating toward the portal that leads to the next stage. Developed using Construct 3, the game showcases engaging gameplay mechanics, smooth animations, and a fun, arcade-style experience. <br><br>Play the game <a href="https://www.construct.net/en/free-online-games/sunnys-guild-71129/play" target="_blank" style="color:#ff4081;text-decoration:underline;">HERE</a>.`,
        tags: ["Construct 3", "2D Game", "Action"]
    },
    {
        id: "sr",
        title: "[Game] Sugar Rush",
        date: "1 Nov 2024",
        images: ["./img/bg-img/sr2.jpeg", "./img/bg-img/sr3.jpeg", "./img/bg-img/sr1.jpeg"],
        description: `Join Vanellope von Schweetz - the Main Character - on a sweet but daring journey in Sugar Rush! In this vibrant RPG-style game, players guide Vanellope through a candy-coated world, dodging poisonous traps and collecting sugary treats along the way. With colorful visuals, fast-paced gameplay, and tricky obstacles, Sugar Rush blends charm and challenge. Built using Construct 3, this game delivers an exciting experience for fans of arcade adventures and light RPG elements. <br><br>Play the game <a href="https://www.construct.net/en/free-online-games/sugar-rush-69979/play" target="_blank" style="color:#ff4081;text-decoration:underline;">HERE</a>.`,
        tags: ["Adventure", "Candy-Themed RPG", "Construct 3"]
    },
    {
        id: "sb",
        title: "[Game] Snowy Battle",
        date: "1 Jan 2025",
        images: ["./img/bg-img/sb3.jpeg", "./img/bg-img/sb1.jpeg", "./img/bg-img/sb2.jpeg"],
        description: `Snowy Battle is a fast-paced RPG-style action game where players must dodge relentless enemies, shoot with precision, and collect cakes to stay alive. Set in a snowy battlefield, your goal is to reach 100 points while surviving waves of enemies and navigating wintry terrain. Built using Construct 3, the game combines quick reflexes with strategic movement for an exciting and rewarding experience.<br><br>Play the game <a href="https://www.construct.net/en/free-online-games/snowy-battle-72186/play" target="_blank" style="color:#ff4081;text-decoration:underline;">HERE</a>.`,
        tags: ["RPG Action", "Construct 3"]
    },
    {
        id: "pp",
        title: "[Game] Planet Pals: Earth Rescue",
        date: "24 Jan 2025",
        images: ["./img/bg-img/pp1.jpeg", "./img/bg-img/pp2.jpeg", "./img/bg-img/pp3.jpeg", "./img/bg-img/pp4.jpeg", "./img/bg-img/pp5.jpeg"],
        description: `Planet Pals: Earth Rescue is an educational platformer that puts players in the shoes of a young eco-hero on a mission to save the planet. Across three levels of increasing difficulty, players will extinguish wildfires, plant trees, and rescue endangered animals—learning valuable lessons about environmental conservation along the way. Designed to be both fun and informative, the game encourages eco-awareness through interactive gameplay. Built using Construct 3, it blends meaningful action with engaging platformer mechanics.<br><br>Play the game <a href="https://www.construct.net/en/free-online-games/planet-pals-earth-rescue-72944/play" target="_blank" style="color:#ff4081;text-decoration:underline;">HERE</a>.`,
        tags: ["Educational Game", "Environmental Awareness", "Construct 3"]
    },
    {
        id: "network",
        title: "[Network] Office Network Design Using Cisco Packet Tracer",
        date: "13 Jul 2022",
        images: ["./img/bg-img/network.png"],
        description: `This project focuses on designing and simulating a small-scale office network for the fictional company JBiebs Prod Co. using Cisco Packet Tracer. I designed the network to support two departments—Admin and Advertisement—with a total of 36 client devices, incorporating both wired and wireless connectivity.<br><br>

The scope of the project includes IP addressing and subnetting, Router and switch configuration, Network connectivity testing using command prompt tools, File sharing between devices, and Setting up a web server with DNS and DHCP services.<br>

Through this assignment, I gained hands-on experience in network design, configuration, and troubleshooting. It allowed me to apply the theoretical concepts from the course, strengthening my understanding of data communication and networking principles in a practical setting.<br><br>
<br><br>Click <a href="https://drive.google.com/file/d/1yv3R7VuOwGj4yk7jKAM4zzKclxsojOv9/view?usp=sharing" target="_blank" style="color:#ff4081;text-decoration:underline;">HERE</a> to view the presentation video.`,
        tags: ["Networking Basics", "Web Server Setup ", "DHCP" ,"DNS", "Cisco Packet Tracer"]
    },
    {
        id: "sif",
        title: "[Website] SIF & Co",
        date: "14 Nov 2019",
        images: ["./img/bg-img/Web 1.png", "./img/bg-img/Web 2.png"],
        description: "SIF & Co is a minimalist fashion catalog website designed to showcase style inspirations and outfit ideas. Built using HTML and CSS, the site functions as a visual logbook where users can explore curated fashion looks and aesthetic layouts. With a clean and modern design, it serves as a digital mood board for those interested in fashion trends and personal style exploration.",
        tags: ["Fashion Catalog", "HTML/CSS", "Style Inspo"]
    },
    {
        id: "ing",
        title: "[Website] Ingermark Project",
        date: "15 May 2020",
        images: ["./img/bg-img/ing.png"],
        description: "The Ingermark Project is a trial corporate website developed by me and my teammates for Ingermark (M) Sdn Bhd, a real-world automation company. Created using HTML, CSS, and JavaScript, the site was designed to present the company’s services, expertise, and corporate identity in a clean and professional layout. The project emphasizes responsive design, clear content structure, and an understanding of real-client requirements—providing a valuable experience in building websites for actual businesses.",
        tags: ["Corporate Web", "HTML/CSS", "JS"]
    },
    {
        id: "cx",
        title: "[Website] Internship CollectXpress Juris Technologies",
        date: "14 Jan 2021",
        images: ["./img/bg-img/cx2.png", "./img/bg-img/cx1.png"],
        description: `CollectXpress is a user-friendly debt collection website developed during my internship at Juris Technologies. Built with HTML, CSS, and JavaScript, the platform aims to simplify the debt recovery process for users through an intuitive interface and streamlined features. This project provided hands-on experience in real-world web development, focusing on usability, responsive design, and practical application in the financial services sector. <br><br>Click <a href="https://collectxpress.net/" target="_blank" style="color:#ff4081;text-decoration:underline;">HERE</a> to view the website.`,
        tags: ["Internship Project", "HTML/CSS", "JS"]
    }


];

function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
  
  const projectId = getQueryParam("id");
  const project = projects.find(p => p.id === projectId);
  
  if (project) {
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('breadcrumb-project-title').textContent = project.title;
    document.getElementById("project-date").textContent = project.date;
    document.getElementById("project-description").innerHTML = project.description;
  
    const mainImage = document.getElementById('currentImage');
    const thumbnailContainer = document.getElementById('thumbnailContainer');
  
    // Set initial main image
    mainImage.src = project.images[0];
    mainImage.classList.add('main-image-img');
  
    // Generate thumbnails
  project.images.forEach((imgSrc, index) => {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.classList.add('thumb');
    if (index === 0) img.classList.add('active');
    img.alt = `Thumbnail ${index + 1}`;
    img.addEventListener('click', () => {
      document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
      img.classList.add('active');
      currentImage.src = imgSrc;
    });
    thumbnailContainer.appendChild(img);
  });


  
    // Scroll buttons
    document.getElementById('thumbPrev').addEventListener('click', () => {
      thumbnailContainer.scrollBy({ left: -100, behavior: 'smooth' });
    });
  
    document.getElementById('thumbNext').addEventListener('click', () => {
      thumbnailContainer.scrollBy({ left: 100, behavior: 'smooth' });
    });
  
    // Populate tags
    const tagList = document.getElementById('project-tags');
    project.tags.forEach(tag => {
      const li = document.createElement('li');
      li.textContent = tag;
      tagList.appendChild(li);
    });

    const tagList1 = document.getElementById('breadcrumb-project-tags');
    project.tags.forEach(tag => {
      const li = document.createElement('li');
      li.textContent = tag;
      tagList1.appendChild(li);
    });

    
  } else {
    document.querySelector('.project-content .container').innerHTML = "<p>Project not found.</p>";
  }
  
