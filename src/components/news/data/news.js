import teamPhoto from '../../../asset/image/Team.jpg';
import matchPhoto1 from '../../../asset/image/DSC_0001.jpg';
import matchPhoto2 from '../../../asset/image/DSC_0002.jpg';
import matchPhoto3 from '../../../asset/image/DSC_0003.jpg';
import trainingPhoto1 from '../../../asset/image/DSC_0006.jpg';
import trainingPhoto2 from '../../../asset/image/DSC_0007.jpg';
import facilityPhoto1 from '../../../asset/image/DSC_0010.jpg';
import facilityPhoto2 from '../../../asset/image/DSC_0011.jpg';
import academyPhoto1 from '../../../asset/image/DSC_0012.jpg';
import academyPhoto2 from '../../../asset/image/DSC_0013.jpg';
import academyPhoto3 from '../../../asset/image/DSC_0014.jpg';
import clubLogo from '../../../asset/image/logo.jpg';

// New image imports for player interviews
import playerPhoto1 from '../../../asset/image/471646943_582695291176661_2570579736408709495_n.jpg';
import playerPhoto2 from '../../../asset/image/471654841_582701441176046_3294254267803376358_n.jpg';
import playerPhoto3 from '../../../asset/image/471700920_582701364509387_8906448552685656771_n.jpg';
import playerPhoto4 from '../../../asset/image/471746118_582701374509386_8551467312860881778_n.jpg';
import playerPhoto5 from '../../../asset/image/471858081_582701481176042_2642988102857680941_n.jpg';
import trainingSession1 from '../../../asset/image/z5973016052782_001_d51bdad3cd2ed2e981bc093e51fc3903.jpg';
import trainingSession2 from '../../../asset/image/z5973016052782_002_273b5235652a3dfb76bf40d8a50b698c.jpg';
import trainingSession3 from '../../../asset/image/z5973016052782_003_cc79159abbb5a68bf4d33000377f0dde.jpg';

const newsData = [
    {
        id: 1,
        title: "FC Escuela Youth Team Triumphs Over Valencia Academy",
        category: "Match Report",
        date: "2024-03-15",
        author: "Carlos Martinez",
        image: matchPhoto1,
        excerpt: "Our U-18 team secured a remarkable 3-1 victory against Valencia Academy in a thrilling match.",
        content: `
            <p>In a display of exceptional talent and teamwork, FC Escuela's U-18 team emerged victorious against the prestigious Valencia Academy with a convincing 3-1 scoreline. The match, played at our home ground, showcased the remarkable progress our youth development program has made.</p>
            <h3>Match Highlights</h3>
            <p>The game began with high intensity, with our young talents taking control from the first whistle. Marco Ruiz opened the scoring in the 15th minute with a spectacular long-range effort. Valencia equalized shortly after, but our team maintained their composure and discipline.</p>
            <p>Second-half goals from Carlos Vega and Antonio Torres sealed the victory, demonstrating the technical prowess and tactical understanding our academy has instilled in these young players.</p>
            <h3>Coach's Comments</h3>
            <p>"This victory is a testament to the hard work and dedication of our young players," said Head Youth Coach Roberto Fernandez. "We're not just developing footballers; we're nurturing future stars who understand the beautiful game."</p>
        `,
        tags: ["Youth Team", "Match Report", "Victory", "Development"],
        relatedImages: [
            {
                url: matchPhoto2,
                caption: "Team celebrating after the final whistle"
            },
            {
                url: matchPhoto3,
                caption: "Action shot from the match"
            }
        ]
    },
    {
        id: 2,
        title: "Youth Development Program Expansion Announced",
        category: "Academy News",
        date: "2024-03-12",
        author: "Maria Rodriguez",
        image: facilityPhoto1,
        excerpt: "FC Escuela announces major expansion of youth development facilities and international partnerships.",
        content: `
            <p>FC Escuela is proud to announce a significant expansion of our youth development program, marking a new chapter in our commitment to nurturing young talent. This expansion includes state-of-the-art training facilities and new international partnerships.</p>
            <h3>New Facilities</h3>
            <p>The expansion includes:</p>
            <ul>
                <li>Three new full-size training pitches with advanced drainage systems</li>
                <li>Indoor training facility with cutting-edge equipment</li>
                <li>Modern performance analysis center</li>
                <li>Enhanced medical and physiotherapy facilities</li>
            </ul>
            <h3>International Partnerships</h3>
            <p>We're excited to announce new partnerships with leading academies in Brazil, Germany, and Japan, creating opportunities for cultural exchange and technical development.</p>
        `,
        tags: ["Academy", "Development", "Facilities", "Partnership"],
        relatedImages: [
            {
                url: facilityPhoto2,
                caption: "New training facilities under construction"
            },
            {
                url: trainingPhoto1,
                caption: "Current training sessions in progress"
            }
        ]
    },
    {
        id: 3,
        title: "Three Academy Players Selected for National U-17 Team",
        category: "Academy News",
        date: "2024-03-10",
        author: "Juan Perez",
        image: teamPhoto,
        excerpt: "Three of our academy's brightest talents have been called up to represent the national U-17 team.",
        content: `
            <p>We are immensely proud to announce that three of our academy players have been selected to represent the national U-17 team in the upcoming European qualifiers. This achievement reflects the quality of our youth development program and the individual talent of these young players.</p>
            <h3>Selected Players</h3>
            <ul>
                <li>Diego Mendoza (Midfielder)</li>
                <li>Lucas Torres (Forward)</li>
                <li>Pablo Ruiz (Defender)</li>
            </ul>
            <p>This marks the first time in our academy's history that three players have been simultaneously selected for the national youth team. The selection comes after outstanding performances in the youth league and several international youth tournaments.</p>
            <h3>Academy Director's Statement</h3>
            <p>"This is a proud moment for our academy and these talented young players," said Academy Director Fernando Silva. "It validates our approach to youth development and shows that we are on the right path."</p>
        `,
        tags: ["Academy", "National Team", "Youth Development", "Achievement"],
        relatedImages: [
            {
                url: academyPhoto1,
                caption: "The selected players during training"
            },
            {
                url: academyPhoto2,
                caption: "Academy training session"
            },
            {
                url: academyPhoto3,
                caption: "Players in action during youth tournament"
            }
        ]
    },
    {
        id: 4,
        title: "Innovative Training Methods Boost Player Development",
        category: "Training",
        date: "2024-03-08",
        author: "Roberto Fernandez",
        image: trainingPhoto2,
        excerpt: "FC Escuela implements cutting-edge training methodologies to enhance player development across all age groups.",
        content: `
            <p>In our continuous effort to stay at the forefront of youth development, FC Escuela has introduced innovative training methods that combine traditional football wisdom with modern sports science. These new approaches are already showing promising results across all age groups.</p>
            <h3>New Training Approach</h3>
            <p>Our updated training program incorporates:</p>
            <ul>
                <li>Advanced video analysis sessions</li>
                <li>Personalized fitness programs</li>
                <li>Mental conditioning workshops</li>
                <li>Technical skills development using AI-powered equipment</li>
            </ul>
            <h3>Early Results</h3>
            <p>Players have shown significant improvement in decision-making, technical skills, and physical conditioning. The integration of technology with traditional coaching methods has created a more comprehensive development pathway for our young talents.</p>
        `,
        tags: ["Training", "Innovation", "Development", "Technology"],
        relatedImages: [
            {
                url: trainingPhoto1,
                caption: "Players during technical training session"
            },
            {
                url: academyPhoto2,
                caption: "Video analysis session in progress"
            }
        ]
    },
    {
        id: 5,
        title: "Community Football Initiative Launches",
        category: "Community",
        date: "2024-03-05",
        author: "Elena Santos",
        image: academyPhoto3,
        excerpt: "FC Escuela kicks off new community program to make football accessible to all local youth.",
        content: `
            <p>FC Escuela is proud to announce the launch of our Community Football Initiative, a program designed to make football training accessible to all young people in our local community. This initiative represents our commitment to social responsibility and community development.</p>
            <h3>Program Details</h3>
            <p>The initiative includes:</p>
            <ul>
                <li>Free weekly training sessions for local youth</li>
                <li>Equipment donation program</li>
                <li>Scholarship opportunities for talented players</li>
                <li>Weekend football festivals</li>
            </ul>
            <h3>Community Impact</h3>
            <p>We believe that football has the power to transform lives and strengthen communities. Through this initiative, we aim to create opportunities for young people regardless of their background or circumstances.</p>
        `,
        tags: ["Community", "Social Impact", "Youth Football", "Development"],
        relatedImages: [
            {
                url: matchPhoto2,
                caption: "Community training session"
            },
            {
                url: teamPhoto,
                caption: "Local youth participating in weekend festival"
            }
        ]
    },
    {
        id: 6,
        title: "FC Escuela Hosts International Youth Tournament",
        category: "Tournament",
        date: "2024-03-01",
        author: "Miguel Torres",
        image: clubLogo,
        excerpt: "Our academy welcomes youth teams from across Europe for a week-long tournament celebrating young talent.",
        content: `
            <p>FC Escuela is hosting its first International Youth Tournament, bringing together talented young players from across Europe. The tournament serves as a platform for cultural exchange and competitive development.</p>
            <h3>Tournament Format</h3>
            <p>The week-long event features:</p>
            <ul>
                <li>12 teams from 8 different countries</li>
                <li>Age categories: U-15 and U-17</li>
                <li>Professional scouting presence</li>
                <li>Cultural exchange activities</li>
            </ul>
            <h3>More Than Football</h3>
            <p>Beyond the competition, the tournament includes cultural exchange programs, educational workshops, and opportunities for players to build international friendships.</p>
        `,
        tags: ["Tournament", "International", "Youth Football", "Competition"],
        relatedImages: [
            {
                url: matchPhoto1,
                caption: "Opening ceremony"
            },
            {
                url: matchPhoto3,
                caption: "Tournament action"
            },
            {
                url: facilityPhoto1,
                caption: "Teams gathering at main facility"
            }
        ]
    },
    {
        id: 7,
        title: "Squad Update: New Signings Join Youth Academy",
        category: "Team Updates",
        date: "2024-02-28",
        author: "Carlos Martinez",
        image: teamPhoto,
        excerpt: "FC Escuela welcomes five promising young talents to strengthen our youth academy squads.",
        content: `
            <p>FC Escuela is delighted to announce the arrival of five new talented players to our youth academy. These signings represent our ongoing commitment to nurturing young talent and strengthening our squad depth across different age groups.</p>
            <h3>New Arrivals</h3>
            <ul>
                <li>Marco Silva (16) - Forward from Porto Youth</li>
                <li>Lucas Hernandez (15) - Midfielder from Barcelona Academy</li>
                <li>David Chen (17) - Defender from Local League</li>
                <li>James Wilson (16) - Goalkeeper from Manchester City Academy</li>
                <li>Rafael Santos (15) - Winger from Santos Youth</li>
            </ul>
            <h3>Integration Plan</h3>
            <p>The new players will undergo our comprehensive integration program, which includes technical training, tactical education, and cultural adaptation support. Our experienced coaching staff will work closely with each player to ensure their smooth transition into our academy system.</p>
        `,
        tags: ["Team Updates", "Squad", "Transfers", "Youth Development"],
        relatedImages: [
            {
                url: academyPhoto1,
                caption: "New players at their first training session"
            },
            {
                url: trainingPhoto2,
                caption: "Integration training in progress"
            }
        ]
    },
    {
        id: 8,
        title: "Team Captain Named for U-18 Squad",
        category: "Team Updates",
        date: "2024-02-25",
        author: "Roberto Fernandez",
        image: academyPhoto2,
        excerpt: "Diego Ramirez appointed as the new captain of our U-18 team following exceptional leadership qualities.",
        content: `
            <p>We are proud to announce Diego Ramirez as the new captain of our U-18 squad. Diego has shown exceptional leadership qualities both on and off the pitch, making him the ideal candidate for this important role.</p>
            <h3>Leadership Qualities</h3>
            <p>Diego has demonstrated:</p>
            <ul>
                <li>Outstanding communication skills with teammates and coaching staff</li>
                <li>Exemplary work ethic during training and matches</li>
                <li>Strong mentoring capabilities with younger players</li>
                <li>Excellent academic performance alongside football development</li>
            </ul>
            <h3>Coach's Statement</h3>
            <p>"Diego embodies everything we look for in a captain," says Head Coach Martinez. "His dedication, leadership, and ability to inspire others make him the perfect choice to lead our team."</p>
        `,
        tags: ["Team Updates", "Squad", "Leadership", "U-18"],
        relatedImages: [
            {
                url: matchPhoto1,
                caption: "Diego leading the team"
            },
            {
                url: trainingPhoto1,
                caption: "Captain's first training session"
            }
        ]
    },
    {
        id: 9,
        title: "Injury Update: Recovery Progress for Key Players",
        category: "Team Updates",
        date: "2024-02-22",
        author: "Dr. Maria Garcia",
        image: facilityPhoto2,
        excerpt: "Latest updates on the recovery progress of our injured players and expected return dates.",
        content: `
            <p>Our medical team provides the latest updates on the recovery progress of several key players. We are pleased to report positive developments in their rehabilitation programs.</p>
            <h3>Player Status Updates</h3>
            <ul>
                <li>Carlos Vega (Ankle) - Expected return: 2 weeks</li>
                <li>Antonio Torres (Hamstring) - Final phase of rehabilitation</li>
                <li>Luis Rodriguez (Knee) - Returned to light training</li>
            </ul>
            <h3>Medical Team Statement</h3>
            <p>"All players are responding well to their treatment plans," reports Head of Medical Dr. Garcia. "We are implementing state-of-the-art rehabilitation techniques to ensure their safe and effective return to play."</p>
            <h3>Rehabilitation Process</h3>
            <p>Our comprehensive rehabilitation program includes personalized physical therapy, strength training, and gradual return-to-play protocols. The medical team works closely with coaching staff to optimize recovery timelines while prioritizing player health and safety.</p>
        `,
        tags: ["Team Updates", "Medical", "Squad", "Injury News"],
        relatedImages: [
            {
                url: trainingPhoto2,
                caption: "Rehabilitation session in progress"
            },
            {
                url: facilityPhoto1,
                caption: "Medical facility and equipment"
            }
        ]
    },
    {
        id: 10,
        title: "Interview: Rising Star Marco Silva on His Journey",
        category: "Player Interview",
        date: "2024-03-18",
        author: "Juan Perez",
        image: playerPhoto1,
        excerpt: "Young forward Marco Silva discusses his development at FC Escuela and his dreams for the future.",
        content: `
            <p>In an exclusive interview, rising star Marco Silva shares his experiences at FC Escuela's youth academy and his aspirations for the future. The talented forward has been making waves with his impressive performances this season.</p>
            <h3>Early Beginnings</h3>
            <p>"I started playing football when I was just five years old," recalls Marco. "Joining FC Escuela's academy was a dream come true. The facilities and coaching here are world-class."</p>
            <h3>Development at FC Escuela</h3>
            <p>Marco credits the academy's comprehensive training program for his rapid development. "The coaches here don't just focus on technical skills. They teach us about tactical awareness, mental strength, and the importance of education."</p>
            <h3>Future Aspirations</h3>
            <p>"My ultimate goal is to play professional football at the highest level," says Marco. "But I know the journey is long, and I'm focused on improving every day."</p>
        `,
        tags: ["Player Interview", "Youth Development", "Academy"],
        relatedImages: [
            {
                url: playerPhoto4,
                caption: "Marco during training"
            },
            {
                url: trainingSession1,
                caption: "Action shot from recent match"
            }
        ]
    },
    {
        id: 11,
        title: "Captain's Corner: Diego Ramirez Speaks",
        category: "Player Interview",
        date: "2024-03-16",
        author: "Maria Rodriguez",
        image: playerPhoto2,
        excerpt: "U-18 team captain Diego Ramirez discusses leadership, responsibility, and team spirit.",
        content: `
            <p>Newly appointed U-18 team captain Diego Ramirez sits down for an in-depth discussion about his role as team leader and his vision for the squad's future.</p>
            <h3>Leadership Philosophy</h3>
            <p>"Being captain isn't just about wearing the armband," Diego explains. "It's about setting an example both on and off the pitch. I try to be someone my teammates can look up to and come to for support."</p>
            <h3>Team Goals</h3>
            <p>"We have a talented group of players, and our goal is to compete at the highest level while maintaining our team spirit and unity. Everyone here is committed to improving and supporting each other."</p>
            <h3>Balancing Studies and Football</h3>
            <p>Diego emphasizes the importance of education alongside football development. "The academy helps us manage our time effectively. It's challenging but rewarding to excel in both areas."</p>
        `,
        tags: ["Player Interview", "Leadership", "Team Captain"],
        relatedImages: [
            {
                url: playerPhoto5,
                caption: "Diego leading team talk"
            },
            {
                url: trainingSession2,
                caption: "Training session with teammates"
            }
        ]
    },
    {
        id: 12,
        title: "From Recovery to Comeback: Luis Rodriguez's Story",
        category: "Player Interview",
        date: "2024-03-14",
        author: "Carlos Martinez",
        image: playerPhoto3,
        excerpt: "Midfielder Luis Rodriguez shares his journey through injury recovery and his return to training.",
        content: `
            <p>After a challenging period of rehabilitation, midfielder Luis Rodriguez opens up about his recovery process and his determination to return stronger than ever.</p>
            <h3>The Injury Journey</h3>
            <p>"It was tough mentally and physically," Luis admits. "But the support from the medical team, coaches, and my teammates has been incredible. They helped me stay positive throughout the recovery process."</p>
            <h3>Rehabilitation Process</h3>
            <p>Luis describes the comprehensive rehabilitation program at FC Escuela. "The medical team designed a personalized recovery plan that not only focused on healing but also on preventing future injuries."</p>
            <h3>Looking Ahead</h3>
            <p>"I'm excited to be back in training with the team. This experience has made me stronger and more appreciative of every moment on the pitch."</p>
        `,
        tags: ["Player Interview", "Recovery", "Comeback"],
        relatedImages: [
            {
                url: trainingSession3,
                caption: "Rehabilitation session"
            },
            {
                url: playerPhoto4,
                caption: "Back in training"
            }
        ]
    }
];

export default newsData; 