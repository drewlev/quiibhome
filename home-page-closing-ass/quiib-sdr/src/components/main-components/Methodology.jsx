import "./Methodology.css"
import SubtitleSection from "./SubtitleSection"
import hunt from "../../assets/process/hunt.svg"
import measure from "../../assets/process/measure.svg"
import strategy from "../../assets/process/strategy.svg"

const ProcessBox = ({ number, title, description, icon }) => {
    return (
        <div className="process-box">
            <div className="icon-container" style={{ backgroundImage: `url(${icon})` }}>
                {/* Icon can be a background image or an img tag depending on your preference */}
            </div>
            <h2>{number}. {title}</h2>
            <p>{description}</p>
        </div>
    );
};

const ProcessSection = () => {
    const processSteps = [
        {
            icon: strategy,
            number: '1',
            title: 'Formulating Strategies',
            description: 'Collaboratively, we develop the foundational strategy. Our approach involves refining the sales process through continuous A/B testing until we establish a consistent method.'
        },
        {
            icon: hunt,
            number: '2',
            title: 'Lead Acquisition',
            description: 'Utilizing resources like LinkedIn, we gather potential leads. Significant effort is dedicated to purifying these lists, along with rigorous email verification, to ensure minimal bounce rates.'
        },
        {
            icon: measure,
            number: '3',
            title: 'Execution & Analysis',
            description: 'Our weekly routine includes introducing a new set of leads and a fresh A/B test. Detailed weekly reports keep you informed of new insights. Additionally, we monitor your inbox bi-daily for any responses.'
        }
    ];
    

    return (
        <div className="process-section">
            <SubtitleSection
                title="No Magic, Just Mastery©"
                subtitle="Our Methodology"
                content={`Indeed, there's no wizardry here, only an extraordinary amount of diligent effort on your behalf.<br/><br/>
                          Every week involves a rhythm of dispatching an A/B test to a fresh group of leads. Envision gaining insights and scheduling meetings effortlessly... your only task being a straightforward 30-minute call.`}
                />
                

            <div className="process-grid">
                {processSteps.map((step, index) => (
                    <ProcessBox key={index} {...step} />
                ))}
            </div>
        </div>
    );
};


export default ProcessSection;