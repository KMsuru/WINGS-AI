import {
  Mic,
  MessageSquareMore,
  NotebookPen,
  CalendarDays,
  ChartColumnIncreasing,
  BookOpen,
  UserPlus,
} from "lucide-react";
import "./Features.css";

const features = [
  {
    icon: Mic,
    title: "Voice-First Interaction",
    description: "Talk to WINGS naturally and get instant answers with voice.",
    bgColor: "#F3EEFF",
    iconColor: "#6C4DFF",
  },
  {
    icon: MessageSquareMore,
    title: "AI Study Assistant",
    description: "Get explanations, solve doubts, and learn any topic easily.",
    bgColor: "#E8F1FF",
    iconColor: "#2563EB",
  },
  {
    icon: NotebookPen,
    title: "Smart Notes",
    description: "Create, organize, and summarize notes with the help of AI.",
    bgColor: "#EAFBF2",
    iconColor: "#22C55E",
  },
  {
    icon: CalendarDays,
    title: "Study Planner",
    description: "Plan your day, set goals, and stay consistent with studies.",
    bgColor: "#FFF4DF",
    iconColor: "#F59E0B",
  },
  {
    icon: ChartColumnIncreasing,
    title: "Progress Tracking",
    description: "Track your progress, streaks, and study analytics.",
    bgColor: "#FFEAF3",
    iconColor: "#EC4899",
  },
  {
    icon: BookOpen,
    title: "Learning Resources",
    description: "Access curated resources and recommendations just for you.",
    bgColor: "#F1EEFF",
    iconColor: "#6C4DFF",
  },
];
const steps = [
  {
    icon: UserPlus,
    title: "Create Account",
    description: "Sign up in seconds and personalize your experience.",
    bgColor: "#F3EEFF",
    iconColor: "#6C4DFF",
  },
  {
    icon: Mic,
    title: "Talk or Type",
    description: "Ask anything by voice or text. WINGS is always here.",
    bgColor: "#F3EEFF",
    iconColor: "#6C4DFF",
  },
  {
    icon: BookOpen,
    title: "Learn & Plan",
    description: "Get answers, create notes, and plan your study journey.",
    bgColor: "#E8F1FF",
    iconColor: "#2563EB",
  },
  {
    icon: ChartColumnIncreasing,
    title: "Track & Improve",
    description: "Track your progress and achieve your academic goals.",
    bgColor: "#EAFBF2",
    iconColor: "#22C55E",
  },
];

function Features() {
  return (
    <section className="features-section">
      <div className="features-container">

        <div className="features-header">

          <span className="features-badge">
            FEATURES
          </span>

          <h2 className="features-title">
            Everything You Need to Excel
          </h2>

          <p className="features-description">
            Powerful features designed to make your learning journey smarter and easier.
          </p>

        </div>



        <div className="features-grid">
        {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
                  <div className="feature-card" key={index}>
                    <div
                      className="feature-icon"
                      style={{
                        background: feature.bgColor,
                        color: feature.iconColor,
                      }}
                    >
                      <Icon />
                    </div>

                    <h3>{feature.title}</h3>

                    <p>{feature.description}</p>
                  </div>
                );
              })}

        </div>

        <section className="how-section">
          <div className="how-container">

            <div className="how-header">
              <span className="how-badge">
                HOW IT WORKS
              </span>

              <h2 className="how-title">
                Simple Steps to Get Started
              </h2>

              <p className="how-description">
                Start your learning journey in just four simple steps.
              </p>
            </div>

            <div className="steps-grid">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div className="step-wrapper" key={index}>
                    <div className="step-line"></div>
                      <div className="step-card" key={index}>
                        <div
                          className="step-icon"
                          style={{
                            background: step.bgColor,
                            color: step.iconColor,
                          }}
                        >
                          <Icon />
                        </div>

                        <h3>{step.title}</h3>

                        <p>{step.description}</p>
                      </div>
                  </div>
                  
                );
              })}
            </div>

          </div>
        </section>

      </div>
      </section>
  );
}

export default Features;