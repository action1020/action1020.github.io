const data = {
    skills: {
        languages: [
            { name: "Java", icon: "fas fa-coffee" },
            { name: "C#", icon: "fas fa-code" },
            { name: "C++", icon: "fas fa-microchip" },
            { name: "C", icon: "fas fa-terminal" },
            { name: "Dart", icon: "fas fa-mobile-alt" },
            { name: "JavaScript", icon: "fab fa-js-square" },
            { name: "VB", icon: "fas fa-file-code" },
            { name: "NodeJS", icon: "fab fa-node" }
        ],
        frameworks: [
            { name: "Vue.js", icon: "fab fa-vuejs" },
            { name: "Next.js", icon: "fas fa-arrow-right" },
            { name: "Node.js", icon: "fab fa-node" },
            { name: "React", icon: "fab fa-react" },
            { name: "Jquery", icon: "fas fa-mouse-pointer" },
            { name: "Spring", icon: "fas fa-leaf" },
            { name: "Nexacro", icon: "fas fa-project-diagram" },
            { name: "TypeScript", icon: "fas fa-code" }
        ],
        databases: [
            { name: "Oracle", icon: "fas fa-database" },
            { name: "MS-SQL", icon: "fas fa-server" },
            { name: "PostgreSQL", icon: "fas fa-archive" },
            { name: "MySQL", icon: "fas fa-table" },
            { name: "Maria-DB", icon: "fas fa-cubes" },
            { name: "Tibero", icon: "fas fa-bolt" },
            { name: "Cubrid", icon: "fas fa-layer-group" },
            { name: "Mongodb", icon: "fas fa-cloud" }
        ],
        devops: [
            { name: "Podman", icon: "fas fa-box" },
            { name: "Docker", icon: "fab fa-docker" },
            { name: "Kubernetes", icon: "fas fa-dharmachakra" },
            { name: "AWS", icon: "fab fa-aws" },
            { name: "Linux", icon: "fab fa-linux" },
            { name: "Windows", icon: "fab fa-windows" },
            { name: "Jenkins", icon: "fas fa-cogs" },
            { name: "Nexus", icon: "fas fa-layer-group" }
        ]
    },
    timeline: [
        {
            "title": "남서울대학교 학사 인트라넷",
            "date": "투입기간 : 2009.04~2009.07",
            "env": ["ASP.NET/C#", "Windows", "MS-SQL 2005", "IIS 6.0"]
        },
        {
            "title": "강동구 보건소 홈페이지 웹 접근성 개편 사업",
            "date": "투입기간 : 2009.07~2009.09",
            "env": ["JAVA/JSP", "Linux", "Oracle 9i", "Apache 2", "Tomcat 5.5"]
        },
        {
            "title": "성동구 보건소 홈페이지 웹 접근성 개편 사업",
            "date": "투입기간 : 2009.07~2009.09",
            "env": ["JAVA/JSP", "Linux", "Oracle 9i", "Apache 2", "Tomcat 5.5"]
        },
        {
            "title": "체육과학연구원 홈페이지 웹 접근성 개편 사업",
            "date": "투입기간 : 2009.10~2010.02",
            "env": ["JAVA/JSP", "Linux", "Oracle 9i", "Apache 2", "Tomcat 5.5"]
        },
        {
            "title": "경기도청 유지보수 및 웹 접근성 개편 사업",
            "date": "투입기간 : 2010.03~2011.03",
            "env": ["JAVA/JSP", "Linux", "Oracle 10g", "WebTob/Jeus 4.2", "Spring-framework"]
        },
        {
            "title": "국립중앙도서관 홈페이지 웹 접근성 개편 사업",
            "date": "투입기간 : 2011.03~2011.04",
            "env": ["JAVA/JSP", "Linux", "Oracle 10g", "WebTob/Jeus 4.2", "Spring-framework"]
        },
        {
            "title": "서울 대공원 홈페이지 웹 접근성 개편 사업",
            "date": "투입기간 : 2011.05~2011.06",
            "env": ["JAVA/JSP", "Linux", "Oracle 10g", "Apache 2", "Tomcat 5.0"]
        },
        {
            "title": "환경부 홈페이지 웹 접근성 개편 사업",
            "date": "투입기간 : 2011.07~2011.10.31",
            "env": ["JAVA/JSP", "Linux", "Oracle 9i", "WebTob/Jeus 4.2", "Spring-framework"]
        },
        {
            "title": "굿네이버스 CRM 구축 사업",
            "date": "투입기간 : 2011.11.01~2012.05.31",
            "env": ["ASP.NET/C#", "Windows", "MS-SQL 2008", "IIS 7.0"]
        },
        {
            "title": "SKTelecom B2B PMS 구축 사업",
            "date": "투입기간 : 2012.06.01~2012.10.31",
            "env": ["ASP.NET/C#", "Windows", "MS-SQL 2008", "IIS 7.0"]
        },
        {
            "title": "KT U cloud 관제 시스템 웹 콘솔 개발",
            "date": "투입기간 : 2012.11.07~2013.03.31",
            "env": ["JAVA/JSP", "Unix", "Oracle 11g", "PostgreSQL 9.2", "Apache 2", "Tomcat 7.0", "Spring-framework"]
        },
        {
            "title": "롯데닷컴 LECS 3.0 플랫폼 기반 신규 쇼핑몰 구축 사업",
            "date": "투입기간 : 2013.05.13~2013.12.04",
            "env": ["JAVA/JSP", "Unix", "Oracle 11g", "Apache 2", "Tomcat 7.0", "Spring-framework"]
        },
        {
            "title": "이아이 컨설팅 PPMS 구축",
            "date": "투입기간 : 2014.01.07~2014.02.07",
            "env": ["JAVA/JSP", "Windows", "MySql 5.5", "Apache 2", "Tomcat 6.0", "Egov-framework"]
        },
        {
            "title": "삼성 에스원 ESM 포털 구축",
            "date": "투입기간 : 2014.02.19~2014.05.19",
            "env": ["JAVA/JSP", "Linux", "MSSQL 2012", "MySQL 5.5", "WebtoB/Jeus 6", "Spring-framework"]
        },
        {
            "title": "삼성 디스플레이 Omni-IM 통합 계정 관리 시스템 구축",
            "date": "투입기간 : 2014.05.26~2014.07.25",
            "env": ["JAVA/JSP", "Linux", "MSSQL 2008", "Apache 2", "Tomcat 6.0", "Spring-framework"]
        },
        {
            "title": "삼성 소스검증 서비스 시스템 구축",
            "date": "투입기간 : 2014.08.01~2014.10.31",
            "env": ["JAVA/JSP", "Linux", "MySql 5.5", "Apache 2", "Tomcat 7.0", "Spring-framework"]
        },
        {
            "title": "아이젠 솔루션(HADOOP 기반) 차세대 시스템 구축",
            "date": "투입기간 : 2014.11.11~2014.12.10",
            "env": ["JAVA/JSP", "Linux", "MySql 5.5", "Apache 2", "Tomcat 7.0", "Egov-framework"]
        },
        {
            "title": "대명 리조트 파일 배포 시스템 구축",
            "date": "투입기간 : 2014.12.11~2015.01.10",
            "env": ["JAVA/JSP", "Linux", "MySql 5.5", "Apache 2", "Tomcat 7.0", "Egov-framework"]
        },
        {
            "title": "GS홈쇼핑 주문회원 서비스 패널 프로젝트",
            "date": "투입기간 : 2015.02.02~2015.05.14",
            "env": ["JAVA/JSP", "Linux", "Oracle 11g", "Apache 2", "Tomcat 7.0", "Spring-framework"]
        },
        {
            "title": "코오롱 베니트 mKolon 2.0 Base(Bass) 서버 구축",
            "date": "투입기간 : 2015.06.01~2015.08.31",
            "env": ["JAVA/JSP", "Linux", "MariaDB 5.5", "Apache 2", "Tomcat 7.0", "Spring-framework"]
        },
        {
            "title": "한국승강기안전관리원(KESI) 웹 전환 구축 사업",
            "date": "투입기간 : 2015.09.10~2016.01.09",
            "env": ["JAVA/JSP", "Linux", "Oracle 11g", "Apache 2", "Tomcat 8.0", "X-Platform"]
        },
        {
            "title": "전자정부 프레임워크기반(3.5) CMS 구축 사업",
            "date": "투입기간 : 2016.01.11~2016.07.08",
            "env": ["JAVA/JSP", "Linux", "Oracle 11g", "Apache 2", "Tomcat 7.0", "Egov-framework"]
        },
        {
            "title": "대화도시가스 하이브리드 앱 구축 사업",
            "date": "투입기간 : 2016.07.11~2016.09.02",
            "env": ["JAVA/JSP", "Windows", "Oracle 11g", "IIS 7", "Spring-framework", "AngularJS"]
        },
        {
            "title": "한국마사회 좌석변경 시스템 웹 개발",
            "date": "투입기간 : 2016.09.22~2016.11.13",
            "env": ["JAVA/JSP", "Linux", "Oracle 11g", "WebLogic 11", "Egov-framework"]
        },
        {
            "title": "흥국생명 퇴직연금 웹 사이트 개발",
            "date": "투입기간 : 2016.11.16~2017.03.15",
            "env": ["JAVA/JSP", "Linux", "Oracle 11g", "MS-SQL 2015", "Regin 4.0", "T-framework"]
        },
        {
            "title": "아워홈 식자재 시스템 개발",
            "date": "투입기간 : 2017.03.16~2017.05.23",
            "env": ["JAVA/JSP", "Linux", "Oracle 11g", "WebLogic 12c", "Spring-framework", "Nexacro"]
        },
        {
            "title": "한국타이어 웹 오더 구축",
            "date": "투입기간 : 2017.05.24~2017.09.30",
            "env": ["JAVA/JSP", "Linux", "Oracle 11g", "WebLogic 12c", "SAP(RFC)", "Egov-Framework"]
        },
        {
            "title": "17년 보육통합정보시스템 기능개선 사업",
            "date": "투입기간 : 2017.10.23~2017.12.08",
            "env": ["JAVA/JSP", "Linux", "Oracle 10g", "Apache 2", "Tomcat 8.5", "Spring-framework"]
        },
        {
            "title": "질병관리본부 국외 감염병 모니터링 시스템 구축",
            "date": "투입기간 : 2018.01.15~2018.04.30",
            "env": ["JAVA/JSP", "Linux", "PostgreSQL 9.3", "Apache 2", "Tomcat 8.5", "Spring-framework"]
        },
        {
            "title": "배달의 민족 사장님 사이트 신규 API 개발",
            "date": "투입기간 : 2018.05.23~2018.09.14",
            "env": ["JAVA/JSP", "Linux", "MS-SQL 2015", "Apache 2", "Tomcat 8.5", "SpringBoot 2"]
        },
        {
            "title": "한국야쿠르트 하이팩토리움 견학 신청 사이트 신규 구축",
            "date": "투입기간 : 2018.09.17~2018.12.14",
            "env": ["JAVA/JSP", "Linux", "Oracle 11g", "Apache 2", "Tomcat 8.5", "Spring-framework"]
        },
        {
            "title": "포스코ICT 음성인식솔루션 VoRIS 신규 구축",
            "date": "투입기간 : 2019.02.11~2019.07.31",
            "env": ["JAVA/JSP", "Linux", "PostgreSQL 9.5", "Apache 2", "Tomcat 8.5", "Egov-framework"]
        },
        {
            "title": "한국야쿠르트 하이프레쉬 모바일 쇼핑몰 리뉴얼 프로젝트",
            "date": "투입기간 : 2019.08.05~2019.10.04",
            "env": ["JAVA/JSP", "Linux", "Oracle 11g", "Apache 2", "Tomcat 8.5", "Spring-framework"]
        },
        {
            "title": "SONY 코리아 홈페이지 리뉴얼 구축",
            "date": "투입기간 : 2019.10.07~2020.01.06",
            "env": ["JAVA/JSP", "Linux", "Oracle 11g", "Apache 2", "Tomcat 8.5", "Spring-framework"]
        },
        {
            "title": "롯데카드 신규 법인회원 가입 프로젝트 구축",
            "date": "투입기간 : 2020.08.05~2020.11.04",
            "env": ["JAVA/JSP", "Linux", "Oracle 12g", "Apache 2", "Tomcat 8.5", "Egov-framework"]
        },
        {
            "title": "롯데멤버스 APP통합 프로젝트",
            "date": "투입기간 : 2020.11.16~2021.02.05",
            "env": ["JAVA/JSP", "Linux", "Oracle 12g", "Apache 2", "Tomcat 8.5", "Spring-framework"]
        },
        {
            "title": "시그나 코리아 신규 건강관리 헬스 앱 구축",
            "date": "투입기간 : 2021.03.02~2021.04.30",
            "env": ["JAVA/JSP", "Linux", "Oracle 12g", "Apache 2", "Tomcat 8.5", "Egov-framework", "Azure"]
        },
        {
            "title": "KB카드 마이데이터 표준API 제공 시스템 구축",
            "date": "투입기간 : 2021.05.03~2021.08.30",
            "env": ["JAVA/JSP", "Linux", "Oracle 12g", "WebLogic 12c", "Egov-framework"]
        },
        {
            "title": "한국투자증권 트래이딩 오픈API 시스템 개발 사업",
            "date": "투입기간 : 2021.09.01~2022.01.30",
            "env": ["JAVA/JSP", "Linux", "MySQL 8.5", "WebLogic 12c"]
        },
        {
            "title": "한화 협력사 B2B 포털 사이트 JAVA 컨버전 사업",
            "date": "투입기간 : 2022.02.14~2022.07.30",
            "env": ["JAVA/JSP", "Linux", "Oracle 12g", "WebTob/Jeus 7", "SpringBoot 2"]
        },
        {
            "title": "ADT캡스 20년 차세대 OSS 시스템 구축 사업",
            "date": "투입기간 : 2022.09.16~2023.02.28",
            "env": ["JAVA/JSP", "Linux", "MySQL 8.5", "SpringBoot 2", "Docker", "Kubernetes", "VueJS 2", "AWS"]
        },
        {
            "title": "굿센 EWS 상시모니터링 SASS 신규 구축 사업",
            "date": "투입기간 : 2023.03.13 ~ 2023.08.02",
            "env": ["JAVA/JSP", "Linux", "MSSQL 2022", "Jenkins", "Docker", "Kubernetes", "VueJS 3", "Nexus"]
        },
        {
            "title": "한화에어로스페이스 One-ERP 차세대 구축 사업",
            "date": "투입기간 : 2023.11.20 ~ 2025.02.14",
            "env": ["JAVA/JSP", "Linux", "Tibero 8", "Jenkins", "WebTob/Jeus 7", "NEXACRO N", "Nexus", "Nginx"] 
        },
        {
            "title": "KB카드 내부업무시스템 통합 프레임워크 구축 사업",
            "date": "투입기간 : 2023.11.20 ~ 2025.02.14",
            "env": ["JAVA/JSP", "Linux", "Oracle 19c", "Docker", "Kubernetes", "Weblogic/OHS", "VueJS 3", "Nexus"] 
        }
    ],
    projects: []
};