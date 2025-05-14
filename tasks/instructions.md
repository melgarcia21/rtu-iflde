# RTU-IFLDE Website Instructions

## I. Overall Website Goal & Strategy

**Goal:** To serve as the primary online presence for RTU's Institute of Flexible Learning and Digital Education (IFLDE). It should inform prospective students, partners, and the public about IFLDE's mission, the FlexiLearnPro initiative, its program offerings (starting with ETEEAP, expanding to Micro-credentials), and establish credibility through showcasing its research-driven approach (benchmarking) and adherence to standards (CHED CMO).

**Strategy:** Combine institutional information with clear program details. Leverage the benchmarking activities to demonstrate a thoughtful approach to program design. Clearly explain concepts like ETEEAP and Micro-credentials using official definitions (CHED CMO) tailored for the audience. Keep content updated, especially via the News section.

## II. Website Architecture & Navigation

**Global Header:**

*   **Content:** RTU Logo, University Name ("Rizal Technological University"), IFLDE Logo, Institute Name ("Institute of Flexible Learning and Digital Education"), IFLDE Tagline ("Forging Excellence in Borderless and Innovative Education").
*   **Design:** Maintain the professional look from the image. Ensure logos are clear and official. Background image should be relevant to RTU or digital learning.

**Main Navigation Bar:**

*   **Placement:** Below the global header, as shown.
*   **Links (with Icons):**
    *   **Home:** (Maybe use RTU IFLDE text/logo instead of a "Home" link if the logo links home)
    *   **About:** (Icon: Info/Building/Briefcase) - Information about IFLDE, FlexiLearnPro, ETEEAP/MC concepts.
    *   **Programs:** (Icon: Graduation Cap/Book/Course List) - Details on ETEEAP, future Micro-credentials.
    *   **News:** (Icon: Newspaper/Megaphone) - Updates, announcements, benchmarking insights.
    *   **Contact:** (Icon: Phone/Envelope) - How to reach IFLDE.
    *   **User Icon (Right Side):** Keep as is. Could be placeholder for future student/applicant portal login.

**Global Footer:**

*   **Content:**
    *   Copyright notice (© \[Year] Rizal Technological University - IFLDE. All Rights Reserved.)
    *   Quick Links (Repeat main nav: About, Programs, News, Contact)
    *   Contact Snippet (Address, Email, Phone)
    *   Social Media Links (If IFLDE has specific ones, otherwise link to RTU main accounts)
    *   Link to RTU Main Website
    *   Privacy Policy / Terms of Use links (Important)

## III. Page-by-Page Breakdown

**(A) Home Page (src/pages/index.tsx) - Landing Page**

*   **Purpose:** Engage visitors immediately, provide a high-level overview of IFLDE & FlexiLearnPro, and direct them to key information areas.

*   **Sections & Content:**

    *   **Hero Section (src/components/sections/HeroSection.tsx):**
        *   **Content:** Mirroring the purple section in your image: "Welcome to FlexiLearnPro". Tagline: "Empowering flexible learning for professionals and students." Prominent Call-to-Action (CTA) Button: "Explore Our Programs" (links to Programs page).
        *   **Design:** Clean, bold text. Maybe a subtle background pattern or keep it solid purple.

    *   **Introduction / Who We Are (src/components/sections/IntroSection.tsx):**
        *   **Content:** Briefly introduce IFLDE. "Your partner in accessible and innovative education at RTU." Mention the focus on ETEEAP and future-forward programs like Micro-credentials. Highlight the commitment to quality based on research (mention FlexiLearnPro benchmarking).
        *   **Design:** Short paragraphs, maybe alongside 2-3 icons representing flexibility, career growth, quality.

    *   **Featured Program: ETEEAP (src/components/sections/FeaturedProgramSection.tsx):**
        *   **Content:** Since ETEEAP is the initial focus: Headline: "Advance Your Career with ETEEAP". Briefly explain what ETEEAP is (pathway for professionals to earn a degree based on experience). List key benefits. CTA Button: "Learn More about ETEEAP" (links to the ETEEAP details on the Programs page).
        *   **Design:** Visually distinct section, perhaps with a relevant background image or icon.

    *   **How It Works / Our Approach (src/components/sections/HowItWorksSection.tsx):**
        *   **Content:** Briefly explain the FlexiLearnPro approach – "Designed for Success: Our programs are developed through careful study and benchmarking with leading institutions (mention PSU, DMMMSU, CLSU, MMSU experiences briefly)." Mention focus on student support, relevant curriculum, and flexible modalities. Could be simple steps: 1. Assess Needs 2. Design Programs 3. Deliver Flexibly 4. Ensure Quality.
        *   **Design:** Could use step-based graphics or icons.

    *   **Latest News Snippets (src/components/sections/NewsSnippetSection.tsx):**
        *   **Content:** Display titles and maybe short excerpts of the 2-3 most recent news articles (pulled from news.json). Each snippet links to the full News page or specific article. Headline: "Latest Updates from IFLDE". CTA Link: "View All News".
        *   **Design:** Cards or simple list format.

    *   **Call to Action (Bottom) (src/components/sections/BottomCTASection.tsx):**
        *   **Content:** Reinforce the main goal. Headline: "Ready to Take the Next Step?". Text encouraging exploration or contact. Buttons: "Explore Programs", "Contact Us".
        *   **Design:** Simple, clear, contrasting background.

**(B) About Page (src/pages/about.tsx)**

*   **Purpose:** Build credibility, explain the 'why' behind IFLDE and its programs, define key terms based on official sources.

*   **Sections & Content:**

    *   **Page Header (src/components/ui/PageHeader.tsx):** Title: "About the Institute of Flexible Learning and Digital Education". Optional brief intro sentence.

    *   **About IFLDE (src/components/sections/AboutInstituteSection.tsx):**
        *   **Content:** Detail IFLDE's Mission, Vision, and Mandate within RTU. Explain its role in promoting flexible, accessible, and quality digital education.

    *   **The FlexiLearnPro Initiative (src/components/sections/FlexiLearnProSection.tsx):**
        *   **Content:** Explain the "FlexiLearnPro: Navigating Digital Learning Institutions" project. Detail its objective (comprehensive analysis, developing robust frameworks). Summarize the benchmarking phases and key institutions visited (PSU, DMMMSU, CLSU, MMSU). Highlight the purpose of this benchmarking – to adopt best practices for RTU's offerings, starting with ETEEAP.

    *   **Understanding ETEEAP (src/components/sections/ETEEAPExplainedSection.tsx):**
        *   **Content:** Define ETEEAP based on CHED descriptions. Explain who is eligible (professionals with work experience). Describe the general process (assessment of prior learning, gap-filling courses). Mention its legal basis (if possible). Link to ETEEAP program details on the Programs page.

    *   **Understanding Micro-credentials (src/components/sections/MicroCredentialsExplainedSection.tsx):**
        *   **Content:** Crucial for future offerings. Define Micro-credentials based directly on the provided CHED CMO. Explain:
            *   Definition (smaller units, specific skills/knowledge).
            *   Purpose (lifelong learning, upskilling, reskilling).
            *   Types (Stackable vs. Non-stackable, For-Credit vs. Non-Credit).
            *   PQF Alignment (Levels 5-8).
            *   Delivery Modes (Flexible, online).
            *   Benefits (Industry relevance, flexibility).
        *   Mention RTU-IFLDE's commitment to offering CHED-compliant MCs in the future.

    *   **Our Commitment to Quality (src/components/sections/QualityAssuranceSection.tsx):**
        *   **Content:** State IFLDE's commitment to quality assurance, referencing CHED standards (mentioning internal/external review processes, alignment with PQF, industry needs). Highlight how benchmarking informs this quality focus.

    *   **Partnerships (src/components/sections/PartnershipsSection.tsx):**
        *   **Content:** Explain the importance of collaboration with industry, LGUs (as suggested by DMMMSU), and other academic institutions (like CODEPP members). Mention intent to forge relevant partnerships. (List logos/names once established).

**(C) Programs Page (src/pages/programs/index.tsx)**

*   **Purpose:** Showcase all available learning opportunities (ETEEAP, future MCs, Certificates). Allow users to easily find and understand program details.

*   **Sections & Content:**

    *   **Page Header:** Title: "Our Programs". Brief intro: "Explore flexible learning opportunities designed for your career growth."

    *   **Filtering/Sorting Bar (Optional but recommended) (src/components/program/ProgramFilter.tsx):**
        *   **Content:** Allow filtering by Program Type (ETEEAP, Micro-credential, Certificate), possibly by Field of Study later.

    *   **Program Listing (src/components/program/ProgramListing.tsx):**
        *   **Content:** Display available programs using cards (src/components/program/ProgramCard.tsx). Each card should show:
            *   Program Title
            *   Program Type (ETEEAP / Micro-credential)
            *   Short Description / Key Outcome
            *   Relevant Image/Icon
            *   CTA: "View Details" (linking to the dynamic detail page: /programs/[slug])
        *   **Initial State:** Feature the planned ETEEAP program(s) prominently. Add MCs as they are developed.

**(D) Program Detail Page (src/pages/programs/[slug].tsx) - Dynamic**

*   **Purpose:** Provide comprehensive information about a single specific program.

*   **Sections & Content (Data sourced from programs.json entry for the specific slug):**

    *   Program Title & Header Image: Clear title, relevant banner image.
    *   Overview & Objectives: Detailed description, target audience, specific learning outcomes (SMART format).
    *   Curriculum/Modules: List of courses, topics covered, or competencies developed.
    *   Program Details:
        *   **Modality:** (e.g., Fully Online, Blended, Distance Learning with limited face-to-face sessions).
        *   **Duration:** Estimated time to complete.
        *   **Credit Units/Hours:** (Crucial for MCs - specify based on CMO, e.g., "3 Units / 51 Hours").
        *   **Schedule:** (If applicable - e.g., synchronous session times, asynchronous flexibility).
        *   **Admission Requirements:** Eligibility criteria (e.g., work experience for ETEEAP), required documents, application deadlines.
        *   **Assessment & Award:** How learning is assessed (e.g., portfolio, exams, projects), type of certificate/diploma/degree awarded. For MCs: Specify if stackable, PQF Level (if determined), digital credential availability.
    *   Faculty/Instructors (Optional): Brief profiles of key faculty involved.
    *   Tuition Fees & Payment: Detailed breakdown of fees, payment options, potential scholarships.
    *   How to Apply: Clear, step-by-step application instructions with a prominent "Apply Now" button/link.

**(E) News Page (src/pages/news/index.tsx)**

*   **Purpose:** Archive and display news, updates, announcements, and insights from IFLDE activities.

*   **Sections & Content:**

    *   **Page Header:** Title: "News & Updates".

    *   **News Listing (src/components/news/NewsListing.tsx):**
        *   **Content:** Display news articles chronologically using list items or cards (src/components/news/NewsListItem.tsx). Each item shows: Title, Date, Short Excerpt, "Read More" link. Use the benchmarking reports as initial content (e.g., "IFLDE Conducts Phase 1 Benchmarking for FlexiLearnPro", "Phase 2 Benchmarking at CLSU & MMSU Completed").
        *   **Source:** Pull data from news.json. Consider fields for title, date, excerpt, full content (or link), image URL.

    *   **Filtering/Categories (Optional):** Allow filtering by tags like "Benchmarking", "Program Development", "Partnerships", "Announcements".

**(F) Contact Page (src/pages/contact.tsx)**

*   **Purpose:** Provide clear channels for users to inquire or connect with IFLDE.

*   **Sections & Content:**

    *   **Page Header:** Title: "Contact Us". Intro: "We're here to help. Reach out with your questions."

    *   **Contact Details (src/components/sections/ContactInfoSection.tsx):**
        *   **Content:** Clearly list:
            *   Office Location (IFLDE Office Address within RTU)
            *   Email Address (e.g., iflde@rtu.edu.ph)
            *   Phone Number
            *   Office Hours

    *   **Contact Form (src/components/forms/ContactForm.tsx):**
        *   **Content:** Fields for Name, Email, Subject/Inquiry Type (dropdown: General Inquiry, ETEEAP Inquiry, Partnership, etc.), Message. Submit button. Include privacy notice and potentially reCAPTCHA.

    *   **Map (Optional) (src/components/ui/MapEmbed.tsx):** Embed a Google Map showing the RTU campus or specific building.