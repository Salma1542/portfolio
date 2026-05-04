import heritageVideo from "./images/project video1.mp4";
import logo from "./images/OIP (1).webp"
import newsImg from "./images/Beige New Product Mockup Now Available Facebook Post.png";
import recipeImg from "./images/Beige New Product Mockup Now Available Facebook Post (3).png";
import majd from "./images/Beige New Product Mockup Now Available Facebook Post (5).png";
import menoufiaLogo from "./images/menoufia.webp";
export const PORTFOLIO_DATA = {
  en: {
    name: "Salma Abdelwahed",
    role: "Front-End Developer",
    objective: "Motivated computer science student and front-end developer experienced in building responsive websites and web applications using HTML, CSS, Javascript, and modern frameworks like React and Bootstrap. Skilled in UI/UX design, problem-solving, and delivering interactive user-friendly designs.",
    about: {
      title: "Passionate about UI/UX & Performance",
      description: "I believe that a website is not just lines of code, but a message and a purpose embodied in visual details. I am Salma Abdelwahed, a Front-End Developer who believes that code is a tool for creating unique user experiences. I began my journey with a deep passion for transforming static designs into interactive reality during my studies at the Faculty of Computers and Information, and I have developed this passion into professionalism that combines programming logic with design aesthetics. I don’t just style interfaces—I give them a soul and a digital identity, delivering clean and well-structured React code where brand strategy meets technical quality.\n\nI have refined my technical skills through intensive experiences; in the Digital Pioneers Initiative (DEPI), I deepened my understanding of system building using Angular and TypeScript, while in Digilians training, I expanded my expertise to include React.js and Next.js, along with full-stack skills using Node.js. I always strive to build responsive websites that work efficiently and smoothly across all devices, from mobile to desktop, with attention to the smallest visual details that serve the business goal and give projects a strong online presence. My goal is to help clients turn their ideas into professional websites that combine attractive design with strong performance and leave a real impact on users.",
    },
    education: [
      {
        title: "Bachelor's in Computer Science and Information",
        institution: "Menoufia University",
        grade: "Very Good with Honors",
        projectGrade: "Excellent (A+)",
        year: "June 2025",
        location: "Shibin el-kom, Egypt",
logo: menoufiaLogo      },
    ],
    certificates: [
      {
        issuer: "SEF Academy",
        title: "FRONT END WEB DEVELOPMENT",
        date: "Jan '24",
        description: "Comprehensive training in front-end web development technologies and best practices.",
        link: "https://drive.google.com/file/d/17YJ5Y-eVilUDTIKPo4qliNH_GVjmhwtA/view?usp=sharing",
        logo: "/src/images/sef.webp"
      },
    ],
    experience: [
      {
        company: "Digilians – Digital Pioneers Initiative",
        role: "MERN Stack Developer Trainee",
        type: "Internship",
        period: "Feb 2026 - Present",
        duration: "",
        location: "Cairo, Egypt",
        workType: "On-site",
        logo: "/src/images/digilians.webp",
        stack: ["MongoDB", "Express.js", "React.js", "Node.js", "TypeScript", "Redux Toolkit", "Git", "GitHub", "Docker"],
        situation: "needed to build scalable full-stack applications while maintaining clean collaborative workflows and consistent environments across a team of 5 developers",
        actions: [
          "Engineered 2+ full-stack web applications using the MERN stack, ensuring seamless data flow between MongoDB, Express, React, and Node.js",
          "Architected high-performance frontend components using TypeScript and Redux Toolkit",
          "Streamlined collaborative workflows using Git/GitHub within a team of 5 developers",
          "Implemented Docker for environment containerization and authored technical documentation"
        ],
        results: [
          "Reduced state-related bugs by 20% and improved re-rendering efficiency",
          "Achieved 100% on-time project delivery through effective version control",
          "Increased code maintainability by 15%"
        ]
      },
      {
        company: "DEPI – Digital Pioneers Initiative",
        role: "Front-End Development Intern",
        type: "Internship",
        period: "Apr 2024 - Oct 2024",
        duration: "6 mos",
        location: "Cairo, Egypt",
        workType: "Hybrid",
        logo: "/src/images/DEPI logo.png",
        stack: ["HTML5", "CSS3", "JavaScript", "Angular"],
        situation: "needed to build responsive and interactive web interfaces that perform well across all devices with fast load times",
        actions: [
          "Developed 1+ user-friendly web interfaces using HTML5, CSS3, and JavaScript",
          "Enhanced website interactivity and UI performance using Angular"
        ],
        results: [
          "Achieved 100% responsive design across all devices",
          "Improved UI performance by 25%, resulting in smoother user experience and faster load times"
        ]
      },
    ],
    services: [
      {
        title: "Front-End Development",
        description: "Building modern, scalable, and high-performance web applications using React, TypeScript, and clean component-based architecture.",
        icon: "Code2",
        tags: ["React", "TypeScript", "Next.js"]
      },
      {
        title: "UI to Code Conversion",
        description: "Converting UI/UX designs (Figma, Adobe XD) into pixel-perfect, responsive, and fully functional web interfaces.",
        icon: "Monitor",
        tags: ["Figma", "Adobe XD", "Pixel Perfect"]
      },
      {
        title: "Modern UI Design",
        description: "Creating responsive layouts that work smoothly across all devices using Tailwind CSS and Bootstrap and Modern design patterns.",
        icon: "Layout",
        tags: ["Tailwind CSS", "Bootstrap", "Responsive"]
      },
      {
        title: "E-commerce Solutions",
        description: "Developing clean, fast, and scalable e-commerce front-end interfaces focused on performance and user experience.",
        icon: "ShoppingBag",
        tags: ["WooCommerce", "Shopify", "Payment Gateway"]
      },
      {
        title: "Performance Optimization",
        description: "Improving website speed, rendering performance, and overall user experience through optimization best practices.",
        icon: "Gauge",
        tags: ["Lazy Loading", "Code Splitting", "Core Web Vitals"]
      },
      {
        title: "Maintainable Code",
        description: "Writing well-structured, readable, and maintainable code that makes future updates easy after delivery.",
        icon: "Stethoscope",
        tags: ["Clean Code", "SOLID Principles", "Documentation"]
      },
    ],
    contact: {
      email: "salmaabdelwahed480@gmail.com",
      phone: "+201152957313",
      location: "Cairo, Egypt",
      socials: {
        github: "https://github.com/Salma-Abdelwahed",
        linkedin: "https://linkedin.com/in/salma-abdelwahed",
      },
    },
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      services: "Services",
      projects: "Projects",
      testimonials: "Testimonials",
      contact: "Contact",
      resume: "Resume",
      education: "Education",
      certificates: "Certificates",
    },
    skills: {
      title: "MY SKILLS",
      subtitle: "A collection of technical and soft skills I possess",
      categories: [
        { id: "front-end", name: "Frontend Skills", icon: "Layout" },
        { id: "back-end", name: "Backend Skills", icon: "Server" },
        { id: "tools", name: "Tools & Utilities", icon: "Settings" },
        { id: "soft-skills", name: "Soft Skills", icon: "Brain" },
      ],
      descriptions: {
        "front-end": "Designing and developing scalable, high-performance web applications with modern frontend technologies, focusing on clean architecture, maintainable code, optimized rendering, and seamless user experience across devices.",
        "back-end": "Building secure and scalable backend services using Node.js and Express.js, implementing structured architecture patterns.",
        "tools": "Utilizing modern development tools and platforms to streamline workflows, version control, deployment, and UI/UX handoff.",
        "soft-skills": "Applying analytical thinking to break down complex problems and working effectively in teams."
      },
      items: {
        "front-end": [
          { name: "HTML5", icon: "Html5" },
          { name: "CSS3", icon: "Css3" },
          { name: "JavaScript", icon: "Javascript" },
          { name: "TypeScript", icon: "Typescript" },
          { name: "React.js", icon: "React" },
          { name: "Redux", icon: "Redux" },
          { name: "Tailwind CSS", icon: "Tailwind" },
          { name: "Bootstrap", icon: "Bootstrap" },
        ],
        "back-end": [
          { name: "Node.js", icon: "Nodejs" },
          { name: "Express.js", icon: "Express" },
          { name: "SQL Server", icon: "Database" },
          { name: "MySQL", icon: "Database" },
          { name: "Oracle", icon: "Database" },
          { name: "REST APIs", icon: "Api" },
          { name: "Authentication", icon: "Lock" },
          { name: "Deployment", icon: "Rocket" },
        ],
        "tools": [
          { name: "Git", icon: "Github" },
          { name: "GitHub", icon: "Github" },
          { name: "VS Code", icon: "Code2" },
          { name: "Figma", icon: "Layout" },
          { name: "Postman", icon: "Api" },
          { name: "Docker", icon: "Server" },
          { name: "Vercel", icon: "Rocket" },
          { name: "Netlify", icon: "Globe" },
        ],
        "soft-skills": [
          { name: "Git & GitHub", icon: "Github", description: "Version control & collaboration" },
          { name: "Docker", icon: "Server", description: "Containerization basics" },
          { name: "VS Code & Figma", icon: "Layout", description: "Development & UI handoff" },
        ]
      }
    },
    projects: [
      {
        title: "Graduation Project : Our Heritage",
        challenge: "Preserving Arab handicrafts in a digital age while providing a modern e-commerce experience for artisans.",
        action: "Developed a web platform that combines social networking and e-commerce using React.js and Vite, styled with HTML5 and CSS3. Includes an intelligent recommendation system.",
        result: "Grade: A+. Successfully created a bridge between traditional crafts and modern markets, achieving high user engagement.",
        tech: ["React.js", "Vite", "Tailwind CSS", "HTML5", "CSS3"],
        link: "#",
        videoUrl: heritageVideo // مسار الفيديو الخاص بكِ
      },
      {
        title: "Recipe Sharing Website",
        challenge: "Creating a platform for users to share and explore recipes with an intuitive navigation experience.",
        action: "Designed and developed a responsive platform using framework Angular, focusing on user-friendly interface.",
        result: "Improved user experience and simplified recipe discovery through structured content and interactive features.",
        tech: ["Angular", "JavaScript", "CSS3", "HTML5"],
        link:'https://final-project-wheat-theta.vercel.app/splash',
        image: recipeImg,
      },
      {
        title: "Majd Webaite",
        challenge: "Fetching and displaying real-time weather data based on user location or input.",
        action: "Created a dynamic web application using JavaScript to interact with a weather API.",
        result: "Provides accurate, real-time weather information with a dynamic and responsive UI.",
        tech: ["JavaScript", "Weather API", "HTML5", "CSS3"],
        link: "https://majd-nine.vercel.app/",
        image:majd
      },
      {
        title: "Live News & Sports Hub",
  challenge: "Integrating multiple real-time data sources—from global news to live football scores and weather—into a single, high-performance interface.",
  action: "Engineered a dynamic dashboard using Vanilla JavaScript to fetch and sync data from multiple REST APIs. Implemented real-time updates for live match scores and integrated a weather geolocation feature.",
  result: "Successfully built a low-latency hub that provides users with instantaneous updates on global events and sports, featuring a responsive design for all devices.",
  tech: ["JavaScript (ES6+)", "REST API", "HTML5", "CSS3", "WeatherAPI"],
  link:'https://news-website-steel-nu.vercel.app/',
        image:newsImg

      },
     
    ],
    pricing: {
      title: "Choose Your Plan",
      subtitle: "No hidden fees. Every plan is scoped to deliver real value — from a simple landing page to a full web application.",
      badge: "Transparent Pricing",
      info: "All plans include clean code, responsive design, and post-launch support. As a junior developer, I offer affordable rates to build my portfolio while delivering quality work.",
      plans: [
        {
          name: "Starter",
          title: "Basic",
          price: "$5–20",
          unit: "/project",
          description: "Perfect for simple static websites or personal landing pages.",
          features: ["Up to 3 Pages", "Responsive Design", "HTML/CSS/JavaScript", "Contact Form (basic)", "1 Revision Round"],
          button: "Get Started"
        },
        {
          name: "Balance",
          title: "Balance",
          price: "$40–70",
          unit: "/project",
          description: "Ideal for business websites with dynamic content and basic React.",
          features: ["Up to 5 Pages", "Everything in Basic", "React.js Components", "Basic API Integration", "2 Revision Rounds"],
          button: "Get Started",
          popular: true
        },
        {
          name: "Professional",
          title: "PRO",
          price: "$80–100",
          unit: "/project",
          description: "Full-stack project with React, Node.js, and database.",
          features: ["Up to 8 Pages", "Everything in Balance", "Node.js Backend", "Database Integration", "RESTful API", "3 Revision Rounds"],
          button: "Get Started"
        },
        {
          name: "Custom",
          title: "Let's Talk",
          price: "Flexible",
          unit: "",
          description: "Tailored solutions for complex projects with specific requirements.",
          features: ["Everything in PRO", "Custom Features", "Advanced Functionality", "Priority Support", "Ongoing Maintenance"],
          button: "Contact Me"
        }
      ]
    },
    softSkills: {
      title: "Soft Skills",
      description: "Applying analytical thinking to break down complex problems, working effectively in teams, and adapting quickly to new technologies and changing requirements.",
      items: ["Problem Solving", "Team Collaboration", "Adaptability", "Time Management"]
    }
  },
  ar: {
    name: "سلمى عبد الواحد",
    role: "مطورة واجهات أمامية (Front-End)",
    objective: "طالبة علوم حاسب ومطورة واجهات أمامية طموحة، لديها خبرة في بناء مواقع وتطبيقات ويب متجاوبة باستخدام HTML و CSS و Javascript وأطر العمل الحديثة مثل React و Bootstrap. ماهرة في تصميم UI/UX، وحل المشكلات، وتقديم تصميمات تفاعلية سهلة الاستخدام.",
    about: {
      title: "شغوفة بتصميم الواجهات والأداء العالي",
      description: "أؤمن بأن الموقع الإلكتروني ليس مجرد أسطر من الكود، بل هو رسالة وهدف يتجسد في التفاصيل البصرية. أنا سلمى عبد الواحد، مطورة واجهات أمامية (Front-End) أؤمن بأن الكود هو أداة لخلق تجارب مستخدم فريدة. بدأت رحلتي بشغف عميق لتحويل التصاميم الثابتة إلى واقع تفاعلي خلال دراستي في كلية الحاسبات والمعلومات، وقد طورت هذا الشغف إلى احتراف يجمع بين منطق البرمجة وجماليات التصميم. أنا لا أقوم فقط بتنسيق الواجهات، بل أمنحها روحاً وهوية رقمية، وأقدم كود React نظيفاً ومنظماً حيث تلتقي استراتيجية العلامة التجارية مع الجودة التقنية.\n\nلقد صقلت مهاراتي التقنية من خلال تجارب مكثفة؛ ففي مبادرة رواد مصر الرقمية (DEPI)، عمقت فهمي لبناء الأنظمة باستخدام Angular و TypeScript، بينما في تدريب Digilians، وسعت خبرتي لتشمل React.js و Next.js، بالإضافة إلى مهارات Full-Stack باستخدام Node.js. أسعى دائماً لبناء مواقع متجاوبة تعمل بكفاءة وسلاسة عبر جميع الأجهزة، من الهاتف المحمول إلى سطح المكتب، مع الاهتمام بأصغر التفاصيل البصرية التي تخدم هدف العمل وتمنح المشاريع حضوراً قوياً عبر الإنترنت. هدفي هو مساعدة العملاء على تحويل أفكارهم إلى مواقع احترافية تجمع بين التصميم الجذاب والأداء القوي وتترك أثراً حقيقياً على المستخدمين.",
    },
    education: [
      {
        title: "بكالوريوس الحاسبات والمعلومات",
        institution: "جامعة المنوفية",
        grade: "جيد جداً مع مرتبة الشرف",
        projectGrade: "امتياز (A+)",
        year: "يونيو 2025",
        location: "شبين الكوم، مصر",
        logo: "/src/images/menoufia.png"
      },
    ],
    certificates: [
      {
        issuer: "أكاديمية SEF",
        title: "تطوير الواجهات الأمامية (FRONT END WEB DEVELOPMENT)",
        date: "يناير 2024",
        description: "تدريب شامل على تقنيات تطوير الويب للواجهات الأمامية وأفضل الممارسات.",
        link: "#",
        logo: "/src/images/sef.webp"
      },
    ],
    skills: {
      title: "مهاراتي",
      subtitle: "مجموعة من المهارات التقنية والشخصية التي أمتلكها",
      categories: [
        { id: "front-end", name: "مهارات الفرونت إند", icon: "Layout" },
        { id: "back-end", name: "مهارات الباك إند", icon: "Server" },
        { id: "tools", name: "الأدوات والوسائل", icon: "Settings" },
        { id: "soft-skills", name: "المهارات الشخصية", icon: "Brain" },
      ],
      descriptions: {
        "front-end": "تصميم وتطوير تطبيقات ويب قابلة للتطوير وعالية الأداء باستخدام تقنيات الواجهة الأمامية الحديثة، مع التركيز على المعمارية النظيفة، والكود القابل للصيانة، وتقديم تجربة مستخدم سلسة عبر الأجهزة.",
        "back-end": "بناء خدمات خلفية آمنة وقابلة للتوسع باستخدام Node.js و Express.js، مع تنفيذ أنماط معمارية منظمة.",
        "tools": "استخدام أدوات ومنصات التطوير الحديثة لتبسيط سير العمل، التحكم في الإصدارات، النشر، وتسليم التصميمات.",
        "soft-skills": "تطبيق التفكير التحليلي لتفكيك المشكلات المعقدة والعمل بفعالية في فرق."
      },
      items: {
        "front-end": [
          { name: "HTML5", icon: "Html5" },
          { name: "CSS3", icon: "Css3" },
          { name: "JavaScript", icon: "Javascript" },
          { name: "TypeScript", icon: "Typescript" },
          { name: "React.js", icon: "React" },
          { name: "Redux", icon: "Redux" },
          { name: "Tailwind CSS", icon: "Tailwind" },
          { name: "Bootstrap", icon: "Bootstrap" },
        ],
        "back-end": [
          { name: "Node.js", icon: "Nodejs" },
          { name: "Express.js", icon: "Express" },
          { name: "SQL Server", icon: "Database" },
          { name: "MySQL", icon: "Database" },
          { name: "Oracle", icon: "Database" },
          { name: "REST APIs", icon: "Api" },
          { name: "Authentication", icon: "Lock" },
          { name: "Deployment", icon: "Rocket" },
        ],
        "tools": [
          { name: "Git", icon: "Github" },
          { name: "GitHub", icon: "Github" },
          { name: "VS Code", icon: "Code2" },
          { name: "Figma", icon: "Layout" },
          { name: "Postman", icon: "Api" },
          { name: "Docker", icon: "Server" },
          { name: "Vercel", icon: "Rocket" },
          { name: "Netlify", icon: "Globe" },
        ],
        "soft-skills": [
          { name: "Git & GitHub", icon: "Github", description: "إصدارات الكود والتعاون" },
          { name: "Docker", icon: "Server", description: "أساسيات الحاويات" },
          { name: "VS Code & Figma", icon: "Layout", description: "التطوير وتسليم التصميم" },
        ]
      }
    },
    projects: [
      {
        title: "مشروع التخرج : تراثنا",
        challenge: "الحفاظ على الحرف اليدوية العربية في العصر الرقمي مع توفير تجربة تجارة إلكترونية حديثة للحرفيين.",
        action: "تطوير منصة ويب تجمع بين التواصل الاجتماعي والتجارة الإلكترونية باستخدام React.js و Vite، مع تصميم باستخدام HTML5 و CSS3. تتضمن نظام توصية ذكي.",
        result: "التقدير: A+. نجاح بناء جسر بين الحرف التقليدية والأسواق الحديثة، وتحقيق تفاعل عالي من المستخدمين.",
        tech: ["React.js", "Vite", "Tailwind CSS", "HTML5", "CSS3"],
        image: "/src/images/museum.png",
        link: "#",
      },
      {
        title: "مشروع معرض الأعمال الشخصي",
        challenge: "عرض المشاريع والمهارات والخبرات بطريقة احترافية وتفاعلية.",
        action: "بناء موقع معرض أعمال شخصي مع التركيز على التفاعلية والاستجابة لتعزيز تجربة المستخدم.",
        result: "إنشاء مركز مركزي للهوية المهنية، مما أدى إلى تحسين التواجد عبر الإنترنت.",
        tech: ["React.js", "Tailwind CSS", "Framer Motion"],
        image: "/src/images/hero_dev.png",
        link: "#",
      },
      {
        title: "تطبيق قائمة المهام",
        challenge: "مساعدة المستخدمين على إدارة المهام بفعالية من خلال واجهة بسيطة وبديهية.",
        action: "تطوير تطبيق يعتمد على React لإضافة وتحرير وحذف المهام.",
        result: "تبسيط إدارة المهام للمستخدمين بواجهة مستخدم نظيفة وعملية.",
        tech: ["React.js", "CSS3", "HTML5"],
        link: "#",
      },
    ],
    experience: [
      {
        company: "مبادرة رواد مصر الرقمية (Digilians)",
        role: "متدربة مطور MERN Stack",
        type: "تدريب",
        period: "فبراير 2026 - الحالي",
        duration: "",
        location: "القاهرة، مصر",
        workType: "من الموقع",
        logo: "/src/images/digilians.webp",
        stack: ["MongoDB", "Express.js", "React.js", "Node.js", "TypeScript", "Redux Toolkit", "Git", "GitHub", "Docker"],
        situation: "الحاجة إلى بناء تطبيقات full-stack قابلة للتطوير مع الحفاظ على سير عمل تعاوني نظيف وبيئات متناسقة عبر فريق مكون من 5 مطورين.",
        actions: [
          "هندسة أكثر من تطبيقين ويب كاملين باستخدام MERN stack، مع ضمان تدفق سلس للبيانات بين MongoDB و Express و React و Node.js",
          "بناء مكونات واجهة أمامية عالية الأداء باستخدام TypeScript و Redux Toolkit",
          "تبسيط سير العمل التعاوني باستخدام Git/GitHub ضمن فريق مكون من 5 مطورين",
          "تنفيذ Docker لتغليف البيئات وتأليف الوثائق التقنية"
        ],
        results: [
          "تقليل الأخطاء البرمجية المتعلقة بالحالة بنسبة 20% وتحسين كفاءة إعادة العرض (rendering)",
          "تحقيق تسليم المشاريع في الوقت المحدد بنسبة 100% من خلال التحكم الفعال في الإصدارات",
          "زيادة قابلية صيانة الكود بنسبة 15%"
        ]
      },
      {
        company: "مبادرة رواد مصر الرقمية (DEPI)",
        role: "متدربة تطوير واجهات أمامية",
        type: "تدريب",
        period: "أبريل 2024 - أكتوبر 2024",
        duration: "6 أشهر",
        location: "القاهرة، مصر",
        workType: "هجين",
        logo: "/src/images/DEPI logo.png",
        stack: ["HTML5", "CSS3", "JavaScript", "Angular"],
        situation: "الحاجة إلى بناء واجهات ويب مستجيبة وتفاعلية تعمل بشكل جيد عبر جميع الأجهزة مع أوقات تحميل سريعة.",
        actions: [
          "تطوير أكثر من واجهة ويب سهلة الاستخدام باستخدام HTML5 و CSS3 و JavaScript",
          "تعزيز تفاعل الموقع وأداء واجهة المستخدم باستخدام Angular"
        ],
        results: [
          "تحقيق تصميم مستجيب بنسبة 100% عبر جميع الأجهزة",
          "تحسين أداء واجهة المستخدم بنسبة 25%، مما أدى إلى تجربة مستخدم أكثر سلاسة وأوقات تحميل أسرع"
        ]
      },
    ],
    services: [
      {
        title: "تطوير الواجهات الأمامية",
        description: "بناء تطبيقات ويب حديثة وقابلة للتطوير وعالية الأداء باستخدام React و TypeScript وهندسة نظيفة تعتمد على المكونات.",
        icon: "Code2",
        tags: ["React", "TypeScript", "Next.js"]
      },
      {
        title: "تحويل التصميم إلى كود",
        description: "تحويل تصاميم UI/UX (Figma ، Adobe XD) إلى واجهات ويب مقسمة بدقة ومتجاوبة وعملية بالكامل.",
        icon: "Monitor",
        tags: ["Figma", "Adobe XD", "Pixel Perfect"]
      },
      {
        title: "تصميم واجهة مستخدم حديثة",
        description: "إنشاء تخطيطات سريعة الاستجابة تعمل بسلاسة عبر جميع الأجهزة باستخدام Tailwind CSS و Bootstrap وأنماط التصميم الحديثة.",
        icon: "Layout",
        tags: ["Tailwind CSS", "Bootstrap", "Responsive"]
      },
      {
        title: "حلول التجارة الإلكترونية",
        description: "تطوير واجهات أمامية متاجر إلكترونية نظيفة وسريعة وقابلة للتطوير تركز على الأداء وتجربة المستخدم.",
        icon: "ShoppingBag",
        tags: ["WooCommerce", "Shopify", "Payment Gateway"]
      },
      {
        title: "تحسين الأداء",
        description: "تحسين سرعة الموقع وأداء العرض وتجربة المستخدم الإجمالية من خلال ممارسات تحسين الأداء.",
        icon: "Gauge",
        tags: ["Lazy Loading", "Code Splitting", "Core Web Vitals"]
      },
      {
        title: "كود قابل للصيانة",
        description: "كتابة كود منظم جيداً وقابل للقراءة وللصيانة مما يجعل التحديثات المستقبلية سهلة بعد التسليم.",
        icon: "Stethoscope",
        tags: ["Clean Code", "SOLID Principles", "Documentation"]
      },
    ],
    contact: {
      email: "salmaabdelwahed480@gmail.com",
      phone: "+201152957313",
      location: "القاهرة، مصر",
      socials: {
        github: "https://github.com/Salma-Abdelwahed",
        linkedin: "https://linkedin.com/in/salma-abdelwahed",
      },
    },
    nav: {
      about: "عني",
      skills: "المهارات",
      experience: "الخبرة",
      services: "الخدمات",
      projects: "المشاريع",
      testimonials: "التوصيات",
      contact: "تواصل معي",
      resume: "السيرة الذاتية",
      education: "التعليم",
      certificates: "الشهادات",
    },
    pricing: {
      title: "اختر خطتك",
      subtitle: "لا توجد رسوم خفية. كل خطة مصممة لتقديم قيمة حقيقية — من صفحة هبوط بسيطة إلى تطبيق ويب كامل.",
      badge: "تسعير شفاف",
      info: "تشمل جميع الخطط كوداً نظيفاً، تصميماً متجاوباً، ودعماً ما بعد الإطلاق. كمطورة ناشئة، أقدم أسعاراً معقولة لبناء معرض أعمالي مع تقديم عمل عالي الجودة.",
      plans: [
        {
          name: "البداية",
          title: "أساسي",
          price: "5–20$",
          unit: "/مشروع",
          description: "مثالي لمواقع الويب الثابتة البسيطة أو صفحات الهبوط الشخصية.",
          features: ["حتى 3 صفحات", "تصميم متجاوب", "HTML/CSS/JavaScript", "نموذج اتصال (أساسي)", "جولة مراجعة واحدة"],
          button: "ابدأ الآن"
        },
        {
          name: "التوازن",
          title: "متوازن",
          price: "40–70$",
          unit: "/مشروع",
          description: "مثالي لمواقع الشركات ذات المحتوى الديناميكي و React الأساسي.",
          features: ["حتى 5 صفحات", "كل ما في الأساسي", "مكونات React.js", "تكامل API أساسي", "جولتا مراجعة"],
          button: "ابدأ الآن",
          popular: true
        },
        {
          name: "الاحترافي",
          title: "برو",
          price: "80–100$",
          unit: "/مشروع",
          description: "مشروع كامل (Full-stack) باستخدام React و Node.js وقاعدة بيانات.",
          features: ["حتى 8 صفحات", "كل ما في المتوازن", "باك إند Node.js", "تكامل قاعدة البيانات", "RESTful API", "3 جولات مراجعة"],
          button: "ابدأ الآن"
        },
        {
          name: "مخصص",
          title: "دعنا نتحدث",
          price: "مرن",
          unit: "",
          description: "حلول مخصصة للمشاريع المعقدة ذات المتطلبات المحددة.",
          features: ["كل ما في البرو", "ميزات مخصصة", "وظائف متقدمة", "دعم ذو أولوية", "صيانة مستمرة"],
          button: "تواصل معي"
        }
      ]
    },
    softSkills: {
      title: "المهارات الشخصية",
      description: "تطبيق التفكير التحليلي لتفكيك المشكلات المعقدة، العمل بفعالية في فرق، والتكيف بسرعة مع التقنيات الجديدة والمتطلبات المتغيرة.",
      items: ["حل المشكلات", "التعاون الجماعي", "التكيف", "إدارة الوقت"]
    }
  }
};
