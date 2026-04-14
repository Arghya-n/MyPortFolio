# Implementation Plan - Portfolio Personalization (Nazmus Sakib)

Transform the existing React portfolio template into a personalized portfolio for **Nazmus Sakib** using the information provided in the CV.

## User Review Required

> [!IMPORTANT]
> - **CV PDF**: I will update the code to point to a PDF file named `Nazmus_Sakib_CV.pdf`. You should place your actual CV PDF in `src/Assets/` and rename it to match this, or provide the file so I can assist.
> - **Project Images**: I'll use placeholders for project images (or relevant generic icons) for now. You can replace them with actual screenshots of your work later.
> - **Social Links**: I will use the links provided in the CV (GitHub: Arghya-n, LinkedIn: nazmus-sakib).

## Proposed Changes

### Core Metadata & Navigation

#### [MODIFY] [Navbar.js](file:///e:/Portfolio/MyPortfolio/src/components/Navbar.js)
- Update brand name/logo text to "NS" or "Nazmus Sakib".

#### [MODIFY] [Footer.js](file:///e:/Portfolio/MyPortfolio/src/components/Footer.js)
- Update copyright info and social icons to match Nazmus Sakib's profiles.

---

### Home Page

#### [MODIFY] [Home.js](file:///e:/Portfolio/MyPortfolio/src/components/Home/Home.js)
- Change name to "Nazmus Sakib".
- Update social links in the "Find Me On" section.

#### [MODIFY] [Home2.js](file:///e:/Portfolio/MyPortfolio/src/components/Home/Home2.js)
- Update the "Introduction" text to reflect Research/Software Engineering interests.
- Include specific mentions of NLP, ML, and Applied AI.

#### [MODIFY] [Type.js](file:///e:/Portfolio/MyPortfolio/src/components/Home/Type.js)
- Update roles: "Software Engineer", "NLP Researcher", "Competitive Programmer", "Technical Writer".

---

### About Page

#### [MODIFY] [AboutCard.js](file:///e:/Portfolio/MyPortfolio/src/components/About/AboutCard.js)
- Update education: B.Sc. in CSE from Chittagong University of Engineering & Technology (CUET).
- Mention Research Interests: NLP, ML, Deep Learning, etc.

#### [MODIFY] [Techstack.js](file:///e:/Portfolio/MyPortfolio/src/components/About/Techstack.js)
- Update skill icons to include: Python, C#, Java, C++, JavaScript, PHP.
- Add ML/AI stack: PyTorch, TensorFlow, Scikit-learn, LangChain.
- Add NLP tools: NLTK, SpaCy, HuggingFace Transformers.

---

### Projects Page

#### [MODIFY] [Projects.js](file:///e:/Portfolio/MyPortfolio/src/components/Projects/Projects.js)
- Replace all 6 placeholder projects with the 4 key projects from the CV:
  1. **Taxinument**: RAG-based financial document system (Python, FastAPI, LangChain).
  2. **Task Tracker System**: Full-stack app (.NET Core, React, Redis).
  3. **Connect_CUET**: Alumni networking platform (PHP, MySQL).
  4. **Concurrent Queue Simulation**: Multithreaded simulation (Java).

---

### Resume Page

#### [MODIFY] [ResumeNew.js](file:///e:/Portfolio/MyPortfolio/src/components/Resume/ResumeNew.js)
- Update PDF import path to `Nazmus_Sakib_CV.pdf`.

## Open Questions

- Do you have specific images you'd like to use for the projects?
- Would you like me to add a section for "Publications" or "Honors & Awards" directly on the About page or as a separate section?

## Verification Plan

### Automated Tests
- Run `npm start` to verify the application builds and renders correctly.
- Check console for any broken image links or errors.

### Manual Verification
- Verify all text content matches the CV exactly.
- Check if social links correctly point to your profiles.
- Verify responsive layout on mobile and desktop.
