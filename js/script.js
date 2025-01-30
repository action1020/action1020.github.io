document.addEventListener('DOMContentLoaded', function() {
    // 공통 유틸리티 함수
    function safeRender(renderFunction) {
        try {
            renderFunction();
        } catch (error) {
            console.error('Rendering error:', error);
            setTimeout(() => safeRender(renderFunction), 100);
        }
    }

    // 중앙선 위치 조정 함수
    function adjustCenterLine() {
        const timelineSection = document.querySelector('.timeline-section');
        const timelineContainer = document.querySelector('.timeline');
        
        if (!timelineSection || !timelineContainer) {
            console.error('Timeline elements not found');
            return;
        }

        // 모든 타임라인 아이템 선택
        const timelineItems = Array.from(timelineContainer.querySelectorAll('.timeline-item'));
        
        if (timelineItems.length === 0) {
            console.warn('No timeline items found');
            return;
        }

        // 중앙선의 높이를 콘텐츠 높이에 맞춤
        const updateCenterLineHeight = () => {
            const sectionHeight = timelineContainer.scrollHeight + 100; // 추가 패딩
            timelineSection.style.setProperty('--timeline-height', `${sectionHeight}px`);
        };

        // 초기 높이 설정
        updateCenterLineHeight();

        // 이미지 로드 등으로 인한 높이 변경 대비
        window.addEventListener('load', updateCenterLineHeight);
    }

    // 타임라인 아이템 생성 시 모든 데이터 포함
    function createTimeline() {
        const timeline = document.querySelector('.timeline');
        timeline.innerHTML = ''; // Clear existing timeline

        // Enhanced year extraction function
        function extractYear(dateString) {
            // Try multiple regex patterns to extract year from end date
            const patterns = [
                /투입기간\s*:\s*\d{4}\.\d{2}\.\d{2}~(\d{4})\.\d{2}\.\d{2}/,  // Prioritize end date in "투입기간" format
                /(\d{4})\.\d{2}\.\d{2}$/,  // End date at the end of the string
                /(\d{4})/  // Fallback to just 4-digit year
            ];

            for (const pattern of patterns) {
                const match = dateString.match(pattern);
                if (match) {
                    return match[1];
                }
            }
            return '';
        }

        // Function to format date with Korean text
        function formatDate(dateString) {
            const match = dateString.match(/투입기간\s*:\s*(\d{4}\.\d{2}\.\d{2})~(\d{4}\.\d{2}\.\d{2})/);
            if (match) {
                const [, startDate, endDate] = match;
                return `투입기간 : ${startDate} ~ ${endDate}`;
            }
            return dateString;
        }

        // Reverse the timeline data to start from the last item
        const reversedTimeline = [...data.timeline].reverse();

        // Create year markers container
        const yearMarkers = document.createElement('div');
        yearMarkers.classList.add('timeline-year-markers');

        // Extract all unique years and sort them
        const uniqueYears = [...new Set(
            reversedTimeline
                .map(item => extractYear(item.date))
                .filter(Boolean)
        )].sort((a, b) => a - b);

        console.log('Unique Years:', uniqueYears);  // Debug log

        // Create year markers for all unique years
        const yearMarkerElements = uniqueYears.map(year => {
            const yearMarker = document.createElement('div');
            yearMarker.classList.add('timeline-year-marker');
            yearMarker.textContent = year;
            yearMarker.dataset.year = year;
            return yearMarker;
        });

        // Calculate years of experience
        function calculateProjectYears() {
            const firstProjectDate = new Date('2009-04-01');
            const currentDate = new Date();
            const yearsDiff = currentDate.getFullYear() - firstProjectDate.getFullYear();
            return yearsDiff;
        }

        // Create section header
        const sectionHeader = document.createElement('div');
        sectionHeader.classList.add('section-header');
        sectionHeader.innerHTML = `
            <h2>내가 걸어온 ${calculateProjectYears()}년의 발자취</h2>
        `;
        timeline.appendChild(sectionHeader);

        reversedTimeline.forEach((item, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.classList.add('timeline-item');
            
            // Alternate left and right positioning
            const isLeft = index % 2 === 0;
            timelineItem.classList.add(isLeft ? 'timeline-left' : 'timeline-right');
            
            // Extract year from start date
            const year = extractYear(item.date);
            
            // Format date
            const formattedDate = formatDate(item.date);

            timelineItem.innerHTML = `
                <div class="timeline-content">
                    <h3>${item.title}</h3>
                    <p class="date">${formattedDate}</p>
                    ${item.env ? `
                    <div class="timeline-project-details">
                        ${item.env.map(env => `<span class="project-env-tag">${env}</span>`).join('')}
                    </div>
                    ` : ''}
                </div>
            `;

            timeline.appendChild(timelineItem);
        });

        // Append all year markers
        yearMarkerElements.forEach(marker => yearMarkers.appendChild(marker));
        timeline.appendChild(yearMarkers);

        // Adjust year markers after a short delay to ensure DOM is fully rendered
        const adjustYearMarkers = () => {
            const timelineItems = timeline.querySelectorAll('.timeline-item');
            const timelineRect = timeline.getBoundingClientRect();
            
            yearMarkers.querySelectorAll('.timeline-year-marker').forEach(yearMarker => {
                const year = yearMarker.dataset.year;
                
                // Find the first item with this year
                const correspondingItem = Array.from(timelineItems).find(item => {
                    const itemIndex = Array.from(timelineItems).indexOf(item);
                    const itemYear = extractYear(reversedTimeline[itemIndex].date);
                    return itemYear === year;
                });

                if (correspondingItem) {
                    const itemRect = correspondingItem.getBoundingClientRect();
                    const itemCenterY = itemRect.top - timelineRect.top + itemRect.height / 2;
                    
                    yearMarker.style.top = `${itemCenterY}px`;
                    yearMarker.style.position = 'absolute';
                    yearMarker.style.transform = 'translate(-50%, -50%)';
                    yearMarker.style.opacity = '1';
                } else {
                    console.warn(`No corresponding item found for year ${year}`);
                }
            });
        };

        // Adjust on initial render and window resize
        setTimeout(adjustYearMarkers, 100);
        window.addEventListener('resize', adjustYearMarkers);

        // Adjust center line after creating timeline
        adjustCenterLine();
    }

    // 스킬 렌더링
    function renderSkills() {
        const skillCategories = [
            { 
                selector: '.skills-column:nth-child(1) .skills-icons', 
                skills: data.skills.languages 
            },
            { 
                selector: '.skills-column:nth-child(2) .skills-icons', 
                skills: data.skills.frameworks 
            },
            { 
                selector: '.skills-column:nth-child(3) .skills-icons', 
                skills: data.skills.databases 
            },
            { 
                selector: '.skills-column:nth-child(4) .skills-icons', 
                skills: data.skills.devops 
            }
        ];

        skillCategories.forEach(category => {
            const container = document.querySelector(category.selector);
            
            if (!container) {
                console.warn(`Skills container not found: ${category.selector}`);
                return;
            }

            // Clear existing skills
            container.innerHTML = '';

            // Add skills
            category.skills.forEach(skill => {
                const skillWrapper = document.createElement('div');
                skillWrapper.classList.add('skill-wrapper');

                const skillElement = document.createElement('div');
                skillElement.classList.add('skill-icon');
                skillElement.setAttribute('data-tooltip', skill.name);

                const iconElement = document.createElement('i');
                iconElement.className = skill.icon;

                const nameElement = document.createElement('span');
                nameElement.classList.add('skill-name');
                nameElement.textContent = skill.name;

                skillElement.appendChild(iconElement);
                skillWrapper.appendChild(skillElement);
                skillWrapper.appendChild(nameElement);

                container.appendChild(skillWrapper);
            });
        });
    }

    // 프로젝트 렌더링
    function renderProjects() {
        const projectsCarousel = document.querySelector('.projects-carousel');
        const sectionHeader = projectsCarousel.previousElementSibling;
        
        // Clear existing project cards
        projectsCarousel.innerHTML = '';
        
        // Check if projects exist
        if (typeof data === 'undefined' || !data.projects || data.projects.length === 0) {
            console.warn('No projects data available');
            sectionHeader.querySelector('p').textContent = '현재 진행중인 프로젝트가 없습니다';
            return;
        }
        
        // Update section header text dynamically
        const projectCount = data.projects.length;
        sectionHeader.querySelector('p').textContent = 
            projectCount > 0 
                ? `현재 진행중인 프로젝트 총 ${projectCount}건` 
                : '현재 진행중인 프로젝트가 없습니다';
        
        // 프로젝트를 역순으로 렌더링
        data.projects.slice().reverse().forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            // 동적으로 다른 데이터 구조 처리
            const title = project.title || '프로젝트';
            const description = project.description || project.date || '상세 정보 없음';
            const skills = project.skill || project.env || [];
            
            projectCard.innerHTML = `
                <div class="project-info">
                    <h3>${title}</h3>
                    <p>${description}</p>
                    <div class="project-skills">
                        ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
            `;
            
            projectsCarousel.appendChild(projectCard);
        });
    }

    // 타임라인에서 마지막 3개 프로젝트를 projects에 동적으로 추가
    function updateProjectsFromTimeline() {
        // data.js에서 timeline 배열의 마지막 3개 항목 가져오기
        const lastThreeTimelineProjects = data.timeline.slice(-3);
        
        // 마지막 3개 타임라인 항목을 projects 형식으로 변환
        const dynamicProjects = lastThreeTimelineProjects.map(project => ({
            title: project.title || '미지정 프로젝트',
            description: project.date || '상세 정보 없음',
            skill: project.env || []
        }));

        // projects 배열 초기화 및 동적 프로젝트 추가
        data.projects = dynamicProjects;

        // 프로젝트 렌더링 함수 다시 호출
        renderProjects();
    }

    // 안전한 렌더링 호출
    safeRender(createTimeline);
    safeRender(renderSkills);
    safeRender(renderProjects);
    safeRender(updateProjectsFromTimeline);

    // Smooth Scrolling
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Typing Effect for Hero Text
    const heroText = document.querySelector('.hero-text h1');
    const textContent = heroText.textContent;
    heroText.textContent = '';

    function typeWriter(text, element, speed = 50) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                // After typing is complete, animate language icons
                animateLanguageIcons();
            }
        }
        type();
    }

    function animateLanguageIcons() {
        const container = document.querySelector('.language-icons-container');
        
        // 언어와 프레임워크 아이콘 결합
        const languageIcons = [
            ...data.skills.languages.map(lang => ({
                class: lang.icon,
                name: lang.name,
                color: getColorForLanguage(lang.name)
            })),
            ...data.skills.frameworks.map(framework => ({
                class: framework.icon,
                name: framework.name,
                color: getColorForFramework(framework.name)
            }))
        ];

        // 언어 및 프레임워크에 따른 색상 매핑
        function getColorForLanguage(name) {
            const colorMap = {
                'Java': '#f89939',
                'JavaScript': '#f0db4f',
                'C#': '#68217A',
                'C++': '#659AD2',
                'Python': '#4B8BBE',
                'Dart': '#0175C2',
                'VB': '#00539C',
                'NodeJS': '#68A063'
            };
            return colorMap[name] || '#333';
        }

        function getColorForFramework(name) {
            const colorMap = {
                'Vue.js': '#41B883',
                'React': '#61DAFB',
                'Next.js': '#000000',
                'Node.js': '#68A063',
                'Spring': '#6DB33F',
                'TypeScript': '#3178C6',
                'Jquery': '#0769AD'
            };
            return colorMap[name] || '#666';
        }

        // Randomize the order of icons
        const shuffledIcons = languageIcons
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);

        shuffledIcons.forEach((icon, index) => {
            const iconElement = document.createElement('i');
            iconElement.className = `language-icon ${icon.class}`;
            
            // Randomize initial position slightly
            iconElement.style.bottom = `${-50 - Math.random() * 50}px`;
            iconElement.style.left = `${-50 - Math.random() * 50}px`;
            iconElement.style.color = icon.color;
            
            // Stagger the animation start
            setTimeout(() => {
                iconElement.classList.add('animate');
            }, index * 300);

            // 아이콘에 툴팁 추가
            iconElement.setAttribute('title', icon.name);

            container.appendChild(iconElement);
        });

        // Remove icons after animation completes
        setTimeout(() => {
            container.innerHTML = '';
        }, 5000);  // 5초로 연장 (기존 3.5초에서)
    }

    typeWriter(textContent, heroText);

    // Project Carousel
    const carousel = document.querySelector('.projects-carousel');
    const projectCards = document.querySelectorAll('.project-card');

    let currentIndex = 0;
    let cardsPerView = 3;

    function calculateCardsPerView() {
        const screenWidth = window.innerWidth;
        if (screenWidth > 1024) {
            cardsPerView = 3;
        } else if (screenWidth > 768) {
            cardsPerView = 2;
        } else {
            cardsPerView = 1;
        }
        return cardsPerView;
    }

    function updateCarousel() {
        if (projectCards.length === 0) return;

        calculateCardsPerView();
        const cardWidth = projectCards[0].offsetWidth;
        const gap = parseInt(window.getComputedStyle(carousel).gap || '20px');
        
        // Circular looping
        if (currentIndex >= projectCards.length) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = projectCards.length - 1;
        }

        const totalWidth = (cardWidth + gap) * currentIndex;
        carousel.style.transform = `translateX(-${totalWidth}px)`;
    }

    // Resize event listener
    window.addEventListener('resize', updateCarousel);

    // Contact Form Submission
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Basic form validation
        if (!name || !email || !message) {
            alert('모든 필드를 채워주세요.');
            return;
        }
        
        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('올바른 이메일 형식을 입력해주세요.');
            return;
        }
        
        // Simulate form submission (replace with actual backend logic)
        alert('메시지가 성공적으로 전송되었습니다. 곧 연락드리겠습니다.');
        contactForm.reset();
    });

    // Initial setup
    updateCarousel();
});