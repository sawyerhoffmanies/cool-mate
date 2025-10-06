// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active navigation link
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveNavLink);

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Insert article content
    insertArticleContent();

    // Form submission
    const contactForm = document.querySelector('.form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Show success message (in a real application, you would send this to a server)
            showNotification('Thank you for your inquiry! We will contact you soon.', 'success');
            
            // Reset form
            this.reset();
        });
    }

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .feature-item, .contact-item');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
});

// Insert article content function
function insertArticleContent() {
    const articleContent = document.getElementById('article-content');
    if (!articleContent) return;

    const content = `
        <h1>Expert Aircon Servicing & Maintenance in Singapore</h1>
        
        <p>Singapore's tropical climate is known for its high humidity and year-round heat, making air conditioning more than just a convenience—it's a necessity. With temperatures frequently rising above 30°C, both households and businesses rely heavily on their cooling systems to maintain comfort and productivity. Because of this constant use, <a href="https://www.airconservicing.org/" target="_blank" rel="noopener noreferrer">aircon servicing</a> plays a crucial role in ensuring that systems continue to perform efficiently, safely, and reliably. Without proper care, even the most advanced units can suffer from breakdowns, energy inefficiency, and shortened lifespans.</p>

        <p>Why Regular Maintenance Matters</p>

        <p>Air conditioning systems are complex machines that work tirelessly to keep indoor environments cool. Over time, dust, dirt, and moisture accumulate in filters and coils, reducing airflow and cooling performance. When neglected, this buildup can increase energy consumption, raise electricity bills, and cause unnecessary strain on the compressor.</p>

        <p>Regular maintenance doesn't just ensure better cooling—it also extends the unit's operational life. A well-maintained system can last years longer than one that is poorly cared for. For households, this means fewer expensive replacements, while businesses benefit from reduced downtime and smoother day-to-day operations.</p>

        <h2>Health Benefits of Proper Servicing</h2>

        <p>One of the less obvious but equally important benefits of air conditioner maintenance is its impact on health. When filters and coils are clogged, they can harbor dust mites, mold spores, and bacteria. These contaminants circulate through indoor spaces, leading to allergies, respiratory issues, and skin irritation.</p>

        <p>Regular cleaning removes these harmful particles, ensuring that the air you breathe is fresh and healthy. For families with young children or elderly members, this is especially critical, as their immune systems may be more vulnerable to poor indoor air quality.</p>

        <h2>Signs Your Air Conditioner Needs Attention</h2>

        <p>While routine checkups are recommended, there are also warning signs that indicate your unit may need professional attention sooner rather than later:</p>

        <p><strong>Reduced cooling efficiency</strong> – If your air conditioner is running but the room doesn't cool down as it used to, the system could be clogged or low on refrigerant.</p>

        <p><strong>Strange noises or odors</strong> – Grinding sounds, rattling, or musty smells often signal internal issues.</p>

        <p><strong>Water leakage</strong> – Blocked drainage pipes or frozen coils can lead to water dripping from the unit.</p>

        <p><strong>Higher energy bills</strong> – A sudden spike in electricity usage usually points to an inefficient or overworked system.</p>

        <p><strong>Frequent cycling</strong> – If the unit keeps turning on and off quickly, there may be a thermostat or electrical issue.</p>

        <p>Recognizing these signs early can prevent minor problems from turning into costly repairs.</p>

        <h2>Types of Air Conditioner Maintenance</h2>

        <p>Different levels of servicing are available depending on the condition of the unit and the customer's needs:</p>

        <p><strong>General Cleaning:</strong> This involves basic filter cleaning, checking drainage pipes, and inspecting the system's performance. It is recommended every 3–4 months for average usage.</p>

        <p><strong>Chemical Wash:</strong> In cases where dirt buildup is heavy, a chemical wash ensures that the coils and components are deeply cleaned. This improves airflow and restores cooling capacity.</p>

        <p><strong>Chemical Overhaul:</strong> A more comprehensive process where the entire unit is dismantled and treated. Ideal for older units or those that have not been maintained regularly.</p>

        <p><strong>Gas Top-Up:</strong> Over time, refrigerant levels can drop, reducing cooling effectiveness. A top-up ensures the system continues to operate at optimal capacity.</p>

        <p><strong>Troubleshooting and Repairs:</strong> When breakdowns occur, professional technicians identify and resolve electrical or mechanical issues.</p>

        <p>By choosing the right type of servicing at the right time, users can save money while keeping their units in prime condition.</p>

        <h2>The Importance of Professional Expertise</h2>

        <p>Some homeowners attempt DIY cleaning, but air conditioning systems are far more intricate than they appear. Filters may be easy to wash, but internal components such as coils, compressors, and electrical wiring require professional handling. Improper cleaning or careless handling can cause more harm than good, leading to malfunctions or even voiding warranties.</p>

        <p>Professional technicians are trained to identify hidden issues that may not be obvious to the untrained eye. For example, a small refrigerant leak or electrical fault might go unnoticed until it causes a major breakdown. By entrusting maintenance to certified experts, customers ensure their systems are serviced safely and effectively.</p>

        <h2>Cost vs. Value</h2>

        <p>Some people delay maintenance due to the cost, but this often proves more expensive in the long run. An inefficient air conditioner consumes significantly more energy, driving up utility bills. Moreover, neglected systems face more frequent breakdowns, which require costly repairs or replacements.</p>

        <p>On the other hand, regular maintenance is an investment. A modest servicing fee not only ensures smoother operation but also reduces electricity costs and prolongs equipment lifespan. For businesses that rely heavily on climate control, such as restaurants or data centers, the financial benefits of consistent maintenance far outweigh the expenses.</p>

        <h2>Environmental Considerations</h2>

        <p>Efficiently maintained air conditioners are not only good for your wallet but also for the environment. Units running at peak performance consume less electricity, reducing overall carbon emissions. Additionally, proper handling of refrigerants during servicing prevents harmful chemicals from being released into the atmosphere, protecting both human health and the planet.</p>

        <p>Singapore, being a nation committed to sustainability, places emphasis on energy efficiency. Regular upkeep of cooling systems contributes to these goals by ensuring that households and companies minimize waste and energy consumption.</p>

        <h2>Choosing the Right Service Provider</h2>

        <p>Not all service providers are equal. When selecting a technician or company, consider the following:</p>

        <p><strong>Experience and expertise</strong> – Look for providers with a proven track record in the field.</p>

        <p><strong>Transparent pricing</strong> – Reputable companies provide clear cost breakdowns without hidden charges.</p>

        <p><strong>Customer reviews</strong> – Check independent platforms for feedback from past clients.</p>

        <p><strong>Service guarantees</strong> – Companies that stand behind their work with warranties or guarantees inspire greater trust.</p>

        <p><strong>Availability</strong> – Emergency breakdowns can happen anytime, so providers offering flexible or service are ideal.</p>

        <p>By doing due diligence, you can ensure that your air conditioning system is in safe, reliable hands.</p>

        <h2>Frequency of Maintenance in Singapore</h2>

        <p>Due to Singapore's hot and humid climate, air conditioners typically run for long hours every day. For most households, aircon servicing every three to four months is recommended. Businesses with heavier usage may require monthly maintenance, especially in environments like offices with many employees, or spaces such as cafes and gyms where comfort is essential to customer satisfaction.</p>

        <p>Following a consistent schedule not only ensures uninterrupted comfort but also reduces the likelihood of sudden breakdowns during the hottest days.</p>

        <h2>Final Thoughts</h2>

        <p>Air conditioning is an indispensable part of life in Singapore. From keeping homes cool to ensuring productivity in offices and commercial spaces, these systems work hard every day. Like any machine, they require regular care to function at their best.</p>

        <p>By prioritizing professional maintenance, you benefit from improved cooling performance, healthier indoor air, lower electricity bills, and a longer-lasting system. Whether it's a quick cleaning, a detailed overhaul, or emergency repairs, timely servicing ensures your air conditioner continues to provide comfort and reliability for years to come.</p>
    `;

    articleContent.innerHTML = content;
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add styles for notification
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 10000;
            max-width: 400px;
            padding: 1rem;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(10px);
            animation: slideInRight 0.3s ease-out;
        }
        
        .notification-success {
            background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
            color: white;
        }
        
        .notification-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    
    if (!document.querySelector('#notification-styles')) {
        style.id = 'notification-styles';
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', function() {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (this.classList.contains('featured')) {
                this.style.transform = 'scale(1.05)';
            } else {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });

    // Add parallax effect to floating shapes
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.floating-shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Add typing effect to hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Add a subtle glow effect on hover
        heroTitle.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 20px rgba(240, 147, 251, 0.5)';
        });
        
        heroTitle.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
        });
    }
});
