import React, {Fragment} from "react";
import Project from '../components/Project.js';

const ProjectPage = () => {

    const capstoneImages = ["/images/Jama-Jira-Plugin/Capstone-authentication.png",
                           "/images/Jama-Jira-Plugin/Capstone-select-item.png",
                           "/images/Jama-Jira-Plugin/Capstone-link-items.png",
                           "/images/Jama-Jira-Plugin/Capstone-unlink.png",
                           "/images/Jama-Jira-Plugin/Capstone-sync-settings.png",
                           "/images/Jama-Jira-Plugin/Capstone-error-logs.png"];

    const climbItImages = ["/images/ClimbIt/ClimbIt-home.png", 
                           "/images/ClimbIt/ClimbIt-search-results.png", 
                           "/images/ClimbIt/ClimbIt-googlemap.png", 
                           "/images/ClimbIt/ClimbIt-googlemap-functionality.png", 
                           "/images/ClimbIt/ClimbIt-directions.png", 
                           "/images/ClimbIt/ClimbIt-weather.png"];

    const recallTrackerImages = ["/images/Recall-Tracker/onboarding-page.png", 
                           "/images/Recall-Tracker/add-new-vehicle.png", 
                           "/images/Recall-Tracker/search-for-VIN.png", 
                           "/images/Recall-Tracker/vehicle-found.png"];

    const spaceHuntImages = ["/images/SpaceHunt/Spacehunt-mini-screenshot.png"];

    return (
        <Fragment>
            <Project
                title="Jama-Jira link plugin"
                images={capstoneImages}
                size="60%"
                caption="A Jira plugin to sync items between Jira and Jama Connect"
                description="This is the final product for my Software Engineering Capstone course. The plugin links and syncs items (such as user 
                    stories or requirements) between Jira and Jama Connect so the user does not have to update them in both applications."
                role="My role in this project was the UX/UI design, frontend linking and sync interval setup, backend syncing and sync interval setup, 
                    and Jira integration."
                repo="https://github.com/CapstoneBitsPlease"
            ></Project>

            <Project
                title="ClimbIt"
                images={climbItImages}
                size="60%"
                caption="A web application that allows the user to search for hikes in any location and provides them with a map, directions, and weather forecast"
                description="ClimbIt was the final project for my Full-Stack Web Development course. Using various REST APIs, this application provides a 
                    user-friendly way to plan a hike in any location."
                role="My role in this project was the UX/UI design and frontend/middle-end development."
                repo="https://github.com/xbhouse/ClimbIt"
            ></Project>

            <Project
                title="Recall Tracker"
                images={recallTrackerImages}
                size="20%"
                caption="A user-friendly mobile Android application that provides the user with safety
                recalls and notifications for their vehicle"
                description="This project was completed during the CDK-Fortellis Hackathon in August 2019. Given a Vehicle ID Number, the app will provide information
                on any current recalls and provide notifications for the user if there are any future recalls."
                role="I contributed to the frontend design and development of this application."
                repo="https://github.com/xbhouse/RecallTracker-Android"
            ></Project>

            <Project
                title="SpaceHunt"
                images={spaceHuntImages}
                size="30%"
                caption="An inventive game played in the web browser"
                description="This was the final project for my Software Engineering class. Dr. Warren Harrison created the game plot, which centers around the objective 
                    of locating a secret recipe in the shortest amount of time possible, while not running out of supplies or energy and avoiding various obstacles."
                role="I worked on implementing the local storage so the user can save and load their game."
                repo="https://github.com/xbhouse/spacehunt-best-team"
            ></Project>

        </Fragment>
    )
}

export default ProjectPage;