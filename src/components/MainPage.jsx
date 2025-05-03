import React from 'react'

const MainPage = () => {
    const data = [
        {
          "id": 1,
          "title": "We're Hiring Interns!",
          "date": "2025-05-01",
          "type": "Internship",
          "content": "NextHorizon is offering Summer 2025 internships in Frontend Development. Work with React, Tailwind, and real users!",
          "deadline": "2025-05-15",
          "tags": ["Internship", "Frontend", "ReactJS"],
          "link": "#",
          "image": "https://images.unsplash.com/photo-1581090700227-1e8a6b67a2d3"
        },
        {
          "id": 2,
          "title": "NextHorizon CodeSprint 1.0 is Live!",
          "date": "2025-05-02",
          "type": "Hackathon",
          "content": "48-hour online hackathon for students. Build impactful apps and win prizes worth ₹50,000!",
          "deadline": "2025-06-09",
          "tags": ["Hackathon", "StudentTech", "NextHorizon"],
          "link": "https://nexthorizon.dev/codesprint",
          "image": "https://images.unsplash.com/photo-1551836022-d5d88e9218df"
        },
        {
          "id": 3,
          "title": "Job Openings: React Dev & Content Writers",
          "date": "2025-04-30",
          "type": "Job",
          "content": "Join our core team! Hiring React devs, content creators, and UI/UX interns. Remote-friendly.",
          "deadline": null,
          "tags": ["Jobs", "Remote", "Developer"],
          "link": "mailto:careers@nexthorizon.dev",
          "image": "https://images.unsplash.com/photo-1581093588401-9c91d54685d0"
        },
        {
          "id": 4,
          "title": "Campus Ambassador Program",
          "date": "2025-04-28",
          "type": "Student Program",
          "content": "Be the face of NextHorizon in your college. Earn certificates, mentorship, and exclusive perks!",
          "deadline": "2025-05-25",
          "tags": ["Student", "Leadership", "Ambassador"],
          "link": "https://nexthorizon.dev/ambassador",
          "image": "https://images.unsplash.com/photo-1531497865144-0464ef8fb9e1"
        },
        {
          "id": 5,
          "title": "Open Source Contributors Wanted",
          "date": "2025-04-27",
          "type": "Open Source",
          "content": "Contribute to our GitHub projects and build student-focused tools. Recognition and mentorship await.",
          "deadline": null,
          "tags": ["OpenSource", "GitHub", "Developer"],
          "link": "https://github.com/NextHorizonDev",
          "image": "https://images.unsplash.com/photo-1549921296-3a559d53c24a"
        },
        {
          "id": 6,
          "title": "Weekly Dev Meetup: Build in Public",
          "date": "2025-05-03",
          "type": "Community Event",
          "content": "Showcase your weekly progress and get feedback from fellow devs. Open to all students.",
          "deadline": "2025-06-01",
          "tags": ["Meetup", "DevTalk", "Community"],
          "link": "#",
          "image": "https://images.unsplash.com/photo-1551836022-4c4c79ecde78"
        },
        {
          "id": 7,
          "title": "Tech Blogger Search",
          "date": "2025-04-25",
          "type": "Content",
          "content": "Love writing? Join as a tech blogger and build your writing portfolio on NextHorizon.",
          "deadline": "2025-05-20",
          "tags": ["Blogging", "Writing", "Tech"],
          "link": "mailto:editor@nexthorizon.dev",
          "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1f"
        },
        {
          "id": 8,
          "title": "UI/UX Design Challenge",
          "date": "2025-05-05",
          "type": "Challenge",
          "content": "Submit a design prototype for our upcoming dashboard. Top designs will be implemented!",
          "deadline": "2025-05-30",
          "tags": ["Design", "UIUX", "Challenge"],
          "link": "#",
          "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437d2"
        },
        {
          "id": 9,
          "title": "Open Discussion: AI in Education",
          "date": "2025-05-06",
          "type": "Discussion",
          "content": "Join our open mic space on the future of AI tools in student learning. Let’s ideate!",
          "deadline": "2025-05-10",
          "tags": ["AI", "Education", "Discussion"],
          "link": "#",
          "image": "https://images.unsplash.com/photo-1605902712222-dcbb1df1c9b3"
        },
        {
          "id": 10,
          "title": "Newsletter Writers Wanted",
          "date": "2025-05-07",
          "type": "Content",
          "content": "We're launching a tech + opportunity newsletter. Help us curate stories and resources weekly!",
          "deadline": "2025-05-18",
          "tags": ["Newsletter", "Content", "Tech"],
          "link": "mailto:editor@nexthorizon.dev",
          "image": "https://images.unsplash.com/photo-1519337265831-281ec6cc8514"
        },
        {
            "id": 11,
            "title": "Backend Bootcamp Launch 🚀",
            "date": "2025-05-08",
            "type": "Learning Program",
            "content": "Kickstart your backend journey with our hands-on MERN + GoLang bootcamp. Beginner friendly!",
            "deadline": "2025-05-25",
            "tags": ["Backend", "Bootcamp", "MERN"],
            "link": "https://nexthorizon.dev/bootcamp",
            "image": "https://images.unsplash.com/photo-1581090700227-2f51f48c809f"
        },
        {
        "id": 12,
        "title": "Design Internship Now Open",
        "date": "2025-05-08",
        "type": "Internship",
        "content": "We're hiring graphic and UI designers! Get mentored, earn stipends, and work on real student-facing tools.",
        "deadline": "2025-05-20",
        "tags": ["Internship", "Design", "Graphics"],
        "link": "#",
        "image": "https://images.unsplash.com/photo-1593642634367-d91a135587b5"
        },
        {
        "id": 13,
        "title": "Student Founder Circle 🧠",
        "date": "2025-05-09",
        "type": "Community",
        "content": "Launching a startup as a student? Join our founder circle, connect with mentors & pitch at our demo day!",
        "deadline": "2025-05-30",
        "tags": ["Startup", "StudentFounder", "Entrepreneurship"],
        "link": "https://nexthorizon.dev/founder-circle",
        "image": "https://images.unsplash.com/photo-1515169067865-5387a5b82cfd"
        },
        {
        "id": 14,
        "title": "NextHorizon Design Sprint",
        "date": "2025-05-10",
        "type": "Challenge",
        "content": "Redesign our onboarding flow for students. Prizes + internships for top entries.",
        "deadline": "2025-05-22",
        "tags": ["UIUX", "DesignChallenge", "StudentDesign"],
        "link": "#",
        "image": "https://images.unsplash.com/photo-1581092910061-7a300b9d93db"
        },
        {
        "id": 15,
        "title": "Contributor Spotlight 🔦",
        "date": "2025-05-11",
        "type": "Recognition",
        "content": "We’re spotlighting our top contributors weekly! Contribute to open source or events and get featured.",
        "deadline": null,
        "tags": ["OpenSource", "Recognition", "Community"],
        "link": "#",
        "image": "https://images.unsplash.com/photo-1603573741163-9a3da9e41c17"
        },
        {
        "id": 16,
        "title": "Podcast Host Internship 🎙️",
        "date": "2025-05-12",
        "type": "Internship",
        "content": "Love talking tech and opportunities? Host our weekly podcast on student journeys and tools.",
        "deadline": "2025-05-20",
        "tags": ["Internship", "Podcast", "TechTalks"],
        "link": "#",
        "image": "https://images.unsplash.com/photo-1584989158057-b79b3742046e"
        },
        {
        "id": 17,
        "title": "AI/ML Research Contributors",
        "date": "2025-05-12",
        "type": "Research",
        "content": "Join our AI+Education research group. Contribute models or papers that improve student learning!",
        "deadline": "2025-06-01",
        "tags": ["AI", "Research", "StudentAI"],
        "link": "#",
        "image": "https://images.unsplash.com/photo-1633418651064-16f5633b1cf1"
        },
        {
        "id": 18,
        "title": "NextHorizon Student Advisory Board",
        "date": "2025-05-13",
        "type": "Leadership",
        "content": "Shape the future of student tech. Join our board and help decide what we build next!",
        "deadline": "2025-06-01",
        "tags": ["Leadership", "StudentBoard", "NextHorizon"],
        "link": "https://nexthorizon.dev/advisory",
        "image": "https://images.unsplash.com/photo-1552664730-d307ca884978"
        },
        {
        "id": 19,
        "title": "Freelancer Match Program",
        "date": "2025-05-14",
        "type": "Freelance",
        "content": "We’re connecting student freelancers to real clients. Fill out your profile to be featured!",
        "deadline": "2025-05-30",
        "tags": ["Freelance", "RemoteWork", "StudentJobs"],
        "link": "https://nexthorizon.dev/freelance",
        "image": "https://images.unsplash.com/photo-1553481187-be93c21490c4"
        },
        {
        "id": 20,
        "title": "Monthly Newsletter Vol. 1 is Out!",
        "date": "2025-05-15",
        "type": "Update",
        "content": "Catch up on all the May updates, featured students, and upcoming events in our first-ever newsletter.",
        "deadline": null,
        "tags": ["Newsletter", "CommunityUpdate", "MayEdition"],
        "link": "https://nexthorizon.dev/newsletter/may-2025",
        "image": "https://images.unsplash.com/photo-1519337265831-281ec6cc8514"
        }
      ]
  return (
    <>
        
    </>
  )
}

export default MainPage
