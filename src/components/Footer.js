import Ruhama from "../components/img/Ruhama-person.png"
import Brandon from "../components/img/Brandon-person.png"
import Rae from "../components/img/Rae-person.png"
import Sam from "../components/img/Sam-person.png"
import Github from "../components/img/GitHub.png"
import Linkedin from "../components/img/Linkedin.png"

export default function Footer(){

    const teamMembers = [
        {name: "Ruhama", linkedin: Linkedin, github: Github, img: Ruhama},
        {name: "Samantha", linkedin: Linkedin, github: Github, img: Sam},
        {name: "Rae", linkedin: Linkedin, github: Github, img: Rae},
        {name: "Brandon", linkedin: Linkedin, github: Github, img: Brandon},
    ]

    return(
        <div className="footerContainer">
            {teamMembers.map((team, idx) => (
                <div className="teamContainer" key={idx}>
                    <img src={team.img} alt="shiloette of a person" />
                    <div className="social">
                        <a href={team.github}><img src={team.github} alt="placeholder"/></a>
                        <a href={team.linkedin}><img src={team.linkedin} alt="placeholder"/></a>
                    </div>
                </div>
            ))}  
        </div>
    )
}