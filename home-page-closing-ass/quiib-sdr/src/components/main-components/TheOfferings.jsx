import magnifying from "../../assets/magnifying.svg"
import graph from "../../assets/graph.svg"
import funnel from "../../assets/funnel.svg"
import convert from "../../assets/convert.svg"
import SubtitleSection from "./SubtitleSection"
import "./TheOfferings.css"


function HowItWorks() {
    const InfoFrame = ({ title, description, features, icon }) => {
        return (
            <div className="info-frame-container">
                <div className="icon-container">
                    <img src={icon} alt="Icon" />
                </div>
                <h1>{title}</h1>
                <p>{description}</p>
                <ul>
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
        );
      };

      const frames = [
        {
            title: "Lead Generation Expertise",
            description: "The journey begins with exceptional leads. Our meticulously curated lists are brimming with prospects directly aligned with your specific problem-solving needs.",
            features: ["Targeted Lead Generation", "Verified Email Contacts", "Precision in Lead Selection"],
            icon: magnifying 
        },
        {
            title: "Proven Effectiveness",
            description: "Wondering about our efficiency? Explore our case studies. Our experience includes a wide array of successful and challenging campaigns. We've navigated through every possible mistake, so you won't have to.",
            features: ["Outcome-Oriented Performance", "Less than 3% Spam Rate", "High-Level Expertise"],
            icon: convert 
        },
        {
            title: "Technical Strategy",
            description: "Far from ordinary, we are a team of technical, startup-minded experts with a deeply analytical approach. One of our founders is a CTO actively involved in several AI ventures, among other qualifications.",
            features: ["Data-Driven Strategies", "Extensive A/B Experimentation", "Regular Insights Reporting"],
            icon: graph
        },
        {
            title: "Filling Your Sales Goals",
            description: "For emerging businesses lacking a sales team, we enrich your sales pipeline. From facilitating meetings to ensuring consistent warm lead interactions, we've got it covered.",
            features: ["Comprehensive Funnel Analysis", "Conversion Rate Enhancement", "Performance Review and Audits"],
            icon: funnel
        },
    ];
    


    return (
        <div className="how">
            <SubtitleSection
                title={`We're aware that prospecting and <br/>regular email outreach <br/>can be tedious.`}
                subtitle="The Offerings"
                content={`Focus on what you do best: closing deals and securing funds. <br/>Leave the outbound efforts to us, freeing you to invest your time where it truly counts.`}
            />
                
            <div className="how-grid">
                {frames.map((frame, index) => (
                    <InfoFrame
                        key={index}
                        title={frame.title}
                        description={frame.description}
                        features={frame.features}
                        icon={frame.icon}
                    />
                ))}
            </div>
        </div>
    );
    
}

export default HowItWorks