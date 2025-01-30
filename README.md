<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>이영호 AA | 풀스택 개발자 포트폴리오</title>
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="favicon.png">
    
    <!-- Preload Critical Assets -->
    <link rel="preload" href="css/styles.css" as="style">
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Noto+Sans+KR:wght@300;400;700&display=swap" rel="stylesheet">
    
    <!-- Meta Tags -->
    <meta name="description" content="Java와 웹 기술을 전문으로 하는 풀스택 개발자 이영호의 포트폴리오">
    <meta name="keywords" content="이영호, 풀스택 개발자, Java, 웹 개발">
    <meta name="author" content="이영호">
</head>
<body>
    <div class="app-container">
        <!-- Navigation -->
        <nav class="main-nav">
            <div class="nav-wrapper">
                <div class="logo">
                    <div class="logo-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <h1>풀스택 개발자 &amp; AA 이영호</h1>
                </div>
                <ul class="nav-links">
                    <li><a href="#home">홈</a></li>
                    <li><a href="#skills">기술</a></li>
                    <li><a href="#projects">프로젝트</a></li>
                    <li><a href="#timeline">경력</a></li>
                    <li><a href="#contact">연락</a></li>
                </ul>
            </div>
        </nav>

        <!-- Hero Section -->
        <header id="home" class="hero-section">
            <div class="hero-content">
                <div class="hero-text">
                    <h1>안녕하세요, 저는 <span class="highlight">풀스택 개발자</span>입니다</h1>
                    <p>Java와 웹 기술을 전문으로 하는 열정적인 개발자, 이영호입니다.</p>
                    <div class="hero-cta">
                        <a href="#projects" class="btn btn-primary">프로젝트 보기</a>
                        <a href="#contact" class="btn btn-secondary">연락하기</a>
                    </div>
                </div>
                <div class="hero-image-container">
                    <img src="img/youngho.jpg" alt="이영호 프로필 사진" class="hero-image">
                    <div class="language-icons-container"></div>
                </div>
            </div>
        </header>

        <!-- Skills Section -->
        <section id="skills" class="skills-section">
            <div class="section-header">
                <h2>기술 스택</h2>
                <p>제가 사용하는 기술들입니다</p>
            </div>
            <div class="skills-grid">
                <div class="skills-row">
                    <div class="skills-column">
                        <h3>프로그래밍 언어</h3>
                        <div class="skills-icons">
                            <!-- Programming Languages will be dynamically added here -->
                        </div>
                    </div>
                    <div class="skills-column">
                        <h3>프레임워크 및 라이브러리</h3>
                        <div class="skills-icons">
                            <!-- Frameworks and Libraries will be dynamically added here -->
                        </div>
                    </div>
                    <div class="skills-column">
                        <h3>데이터베이스</h3>
                        <div class="skills-icons">
                            <!-- Databases will be dynamically added here -->
                        </div>
                    </div>
                    <div class="skills-column">
                        <h3>DevOps 및 클라우드</h3>
                        <div class="skills-icons">
                            <!-- DevOps and Cloud skills will be dynamically added here -->
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="projects-section">
            <div class="section-header">
                <h2>최근 진행 프로젝트</h2>
                <p>현재 진행중인 프로젝트부터 3건</p>
            </div>
            <div class="projects-carousel">
            </div>
        </section>

        <!-- Timeline Section -->
        <section id="timeline" class="timeline-section">
            <div class="section-header">
                <h2>History</h2>
            </div>
            <div class="timeline"></div>
        </section>
 
        <!-- Contact Section -->
        <section id="contact" class="contact-section">
        <div class="section-header">
            <h2>연락처</h2>
            <p>프로젝트 상담 및 협업 문의</p>
        </div>
        <div class="contact-form-container">
            <form class="contact-form">
                <div class="form-group">
                    <label for="name">이름</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">이메일</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message">메시지</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">메시지 보내기</button>
            </form>
            <div class="contact-info">
                <h4>연락처 정보</h4>
                <p> 이메일: developer.youngho@example.com</p>
                <p> 연락처: 010-1234-5678</p>
                <div class="social-links">
                    <a href="#" class="social-icon"><i class="fab fa-github"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-linkedin"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </section>

        <!-- Footer -->
        <footer>
            <p>&copy; FullStack Developer Young Ho All Rights Reserved.</p>
        </footer>
    </div>
 
    <!-- Language Icons Animation Container -->
    <div class="language-icons-container"></div>

    <!-- Scripts -->
    <script src="js/data.js"></script>
    <script src="js/script.js"></script>
</body>
</html>
