document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".number");
    
    const animateCounter = (counter) => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const speed = target / 100; // Adjust speed

        const updateCount = () => {
            count += speed;
            if (count < target) {
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCount();
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
});
