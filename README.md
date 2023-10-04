# CST-391 Milestone
### GCU milestone assignment for CST-391: JavaScript Web Application Development

[https://github.com/ktbloomq/CST-391-milestone](https://github.com/ktbloomq/CST-391-milestone)

PrayerHub social platform 

## Contents
- [Recent Changes](#recent-changes)
- [Roadmap](#roadmap)
- [Initial Database Design](#initial-database-design)
- [Initial UI Sitemap](#initial-ui-sitemap)
- [Initial UI Wireframes](#angular-ui-screenshots)
- [API Endpoints](#api-endpoints)
- [Known Risks](#known-risks)

## Introduction
My proposed app will be a public prayer request app. This app will let users send and receive prayer requests. When they post, they can decide weather or not to post anonymously. These prayers can be seen through a public feed and a friends feed. When users pray over that person, they can mark as prayed, or leave a reply.

## Recent Changes
- Ported PrayerHub app to React
- Ported posts page
- Ported new post page
- Ported like post button
- Ported delete post button

## Roadmap
- [x] As a user, I want to post prayers so I can be supported by others
- [x] As a user, I want to see prayer requests so I can pray for others
- [X] As a user, I want to mark posts I prayed for so they can know they have been prayed over
- [x] As a user, I want to delete posts so I can close old prayer requsts
- [ ] As a user, I want the option to post anonymously so I can feel safer to share
- [ ] As a user, I want to respond to prayer requests so I can encourage them
- [ ] As a user, I want to be able to log in so I can keep track of my prayers and responses.
- [ ] As a user, I want to add my friends so I can be a constant support for them.

## Initial Database Design

![entity relationshop](./Entity%20Relationship.drawio.png)

## Initial UI Sitemap

![sitemap](./sitemap.drawio.png)


## React UI Screenshots

![homepage](./list%20prayers.png)


![create prayer](./create%20prayer.png)

## API Endpoints

IMPORTANT! These endpoints are for testing purposes only. They currently represent an insecure api where anyone has permission to do anything. Security will be added in coming updates.

| | Endpoint | Description |
| - | - | - |
| GET | localhost:5000/prayers | get all prayers
| GET | localhost:5000/prayers?postID= | get prayer from id
| GET | localhost:5000/prayers?userID= | get all prayers from user
| POST | localhost:5000/prayers | post a prayer
| PUT | localhost:5000/prayers | update prayer
| PUT | localhost:5000/pray/postID | like prayer
| DELETE | localhost:5000/prayers/postID | delete prayer

## Known Risks
The primary risk of this app will be security. Especially, making sure users who wish to stay anonymous. There are countless numbers of people tangled up in messy situations. Having a secure and anonymous platform, they can share their struggles without risking their safety.