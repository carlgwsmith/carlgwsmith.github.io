import Hero from '../Home/Hero'
import HeroImg from '../assets/finary-hero.png'
import CaseStudyDescBar from './CaseStudyDescBar'
import Objectives from './FinObjectives'
import Process from './Process'
import Persona from '../Global Components/UserPersona'
import Research from './Research'
import persona1 from '../assets/agents-user1.png'
import userFlow from '../assets/UserFlow.png'
import Defining from '../Global Components/Defining'
import DesignSystem from '../FinaryAssets/DesignSystem'
import Mockups from '../FinaryAssets/Mockups'
export default function Finary (){
    const motivations1 = 
    [
    {id: 1, 
    content:'To help his clients achieve their financial goals, and to be successful in his career.'},
    {id: 2,
    content:'To maintain clients and grow his book of business by creating an edge.'},
    ]


    
    const goals1 =
    [
    {id: 1, 
    content:'To grow his client base and provide them with the best possible financial advice.'},
    {id: 2,
    content:'He is passionate about helping people achieve their financial goals.'},
    {id: 3,
    content:'He is always looking for new ways to improve his skills and knowledge.'}
    ]



    const pain1 =[
    {id: 1, 
    content:'Finding the time to meet with clients, and keeping track of all of his client data.'},
    {id: 2,
    content:`It takes time and effort to build a network and gain a reputation as a trusted advisor.`},

    ]



    const challenge1 = [
    {id: 1, 
    content:'To stay up-to-date on the latest financial news and trends, and to manage his time effectively.'},
    {id: 2,
    content:'John doesn’t feel his is most efficient about his time management'},
    {id: 3,
    content:'John has trouble keeping track of all of his clients data.'}
    ]


    const solutions1 =
    [
        {id: 1, 
        content:'A CRM tool can help John to stay informed about the latest financial news and trends. This can help him to provide his clients with the best possible advice.'},
        {id: 2,
        content:'A CRM tool can help John to store and organize all of his client data in one place. This can help him to easily access the information he needs when he needs it.'},
        {id: 3,
        content:'A CRM tool can help John keep track of his appointments, tasks, and deadlines. This can help him to be more efficient and productive.'}
        ]


    const benefits1 =[
        {id: 1, 
        content:'Peace of mind knowing that his family is financially secure'},
        {id: 2,
        content:'The confidence that he is getting the best possible policy for his needs'},
        {id: 3,
        content:'The ability to save money on life insurance'}
        ]

    return(
        <div>
            <Hero title="Finary CRM" desc={<>
                This application assists financial advisors and representatives in tracking customer interactions, managing data, engagement and performance of their financial portfolio.  The tool is intended to improve customer service and increase an advisors book of business.
                <div className="flex gap-4 mt-6">
                    <a href="https://carlgwsmith.com/FinaryCRM/#/dashboard" target="_blank" rel="noreferrer"
                        className="px-6 py-2 rounded-full border border-jet text-jet font-semibold hover:bg-jet hover:text-white transition-colors duration-200">
                        Demo Site
                    </a>
                    <a href="https://github.com/carlgwsmith/FinaryCRM" target="_blank" rel="noreferrer"
                        className="flex items-center gap-2 px-6 py-2 rounded-full border border-jet text-jet font-semibold hover:bg-jet hover:text-white transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub Repo
                    </a>
                </div>
            </>} rightSide={HeroImg} image='true'/>
            <CaseStudyDescBar year="2023" role="Product Designer, Developer" duration="4 mos"/>
            <Objectives/>
            <Process/>
            <Research content={<div><p>We began the research process by conducting user research. We looked up potential users of the tool to understand their needs and pain points. We also analyzed data from existing financial advisor CRMs to get a sense of the market.</p>
                    <p className="mt-5">Based on our research, we developed a set of user personas. These personas represent the different types of users who would use the tool. We used the personas to guide our design decisions.</p>
                    <p className="mt-5">We then created wireframes and prototypes of the tool.</p></div>}/>
            <Persona
            pic={persona1}
            name="John Smith"
            title="Financial Advisor"
            city="New York, NY"
            age="35"
            motivations={motivations1}
            goals={goals1}
            pain={pain1}
            challenges={challenge1}
            solutions={solutions1}
            benefits={benefits1}
            isFlow="true"
            flowSrc={userFlow}
            />
            <Defining
            identify="a CRM system can be a valuable tool for financial advisors in a number of ways. By helping to track client interactions, automate tasks, generate reports, and comply with regulations, a CRM system can help financial advisors improve their service, increase their efficiency, and reduce their risk."
            purpose="A CRM can help financial advisors build stronger relationships with their clients by keeping track of their interactions and preferences. This information can be used to personalize communications and provide more relevant advice, increase profitability, and increase efficency."
            features="The CRM should be able to track client interaction, performance and relationships. The CRM should be able to generate a report and insights to show the consumer their performance and give the advisor the position of subject matter expert."/>
            <DesignSystem/>
            <Mockups/>
        </div>
    )
}