import {
  CollaborationIcon,
  CommunityIcon,
  CounselingIcon,
  FeedbackSystemIcon,
  FreeCareIcon,
  HomebaseCareIcon,
  OnCallDoctorsIcon,
  PharmacyIcon,
} from "@/components/common/appIcons";

export const heroPageData = {
  content1: {
    heading1: "About Us",
    heading2: "Arike Mission",
    buttonLabel: "READ MORE",
    buttonLink: "/about",
    body1:
      "Arike is a not-for-profit NGO that provides professional home-based health care that is holistic, person centered, confined not just for the patient but extends to family members too. ARIKE’s Health care service addresses all 4 aspects of total care: physical, psychological, social, and spiritual. We institute a unique concept of encouraging community participation in meeting a patient’s health care needs. This is executed by means of a cross subsidised model, whereby sustainability of the NGO is accomplished via nominal pricing of our healthcare services for those who can afford and then, using this income, in addition to CSR funds and sponsorships, to provide free healthcare services to the economically disadvantaged. We presently cover areas under Cochin Corporation and have catered to more than 650 patients over the past 3 years. Our nurses give home visits on their two wheelers, thus, minimizing expenses and paving the way towards sustainability. ",
    body2:
      "Everyone has the fundamental right to receive good quality health care within the comfort of one’s own home amidst loved ones in addition to securing their privacy, familiarity with their environment, autonomy, and a greater degree of independence. This is the promise made by ARIKE.",
    features: [
      {
        icon: HomebaseCareIcon,
        label: "Home-base Care",
        body: "Continuum of care with timely fee with primary care physician.",
      },
      {
        icon: FeedbackSystemIcon,
        label: "FeedBack System",
        body: "Home-based care to more than 370 patients in Ernakulam.",
      },
      {
        icon: OnCallDoctorsIcon,
        label: "On-call Doctors",
        body: "On-call Doctors for teleconsultation and in person.",
      },
      {
        icon: PharmacyIcon,
        label: "Pharmacy",
        body: "Medical and surgical materials supply to patients.",
      },
      {
        icon: CounselingIcon,
        label: "Counselling",
        body: "Psychological support to care givers, patients including counselling by clinical psychologist.",
      },
      {
        icon: CommunityIcon,
        label: "Community",
        body: "Community support groups specific to disease condition.",
      },
      {
        icon: CollaborationIcon,
        label: "Collaboration",
        body: "Collaborative approach with other home care givers (24 hrs care).",
      },
      {
        icon: FreeCareIcon,
        label: "Free Care",
        body: "Free care to needy patients.",
      },
    ],
  },
  content2: {
    label: "People We Helped since 2019",
    value: 1000,
  },
  content3: {
    heading1: "What we Did",
    heading2: (
      <div className="text-4xl sm:text-5xl font-bold">
        Who can avail <span className="font-light">our services?</span>
      </div>
    ),
    body: "Arike is an NGO that offers pain and palliative care to people in our community that is struggling with debilitating and chronic illnesses such as Cancer, Kidney Disease, etc. Our goal is to help these people to relieve their suffering and enhance the quality of their lives. We offer a helping hand to the patient and their bystanders to get through their life with ease providing support at desperate times. In the instances where there is no best solution or cure, Arike offers people endless care and comfort accompanying them throughout the entire aspects of their journey.",
    services: [
      {
        label: "Neurological conditions",
        image: "/services/neuro.jpg",
      },
      {
        label: "Differently abled persons",
        image: "/services/differently-abled.jpg",
      },
      {
        label: "Respiratory conditions (COPD, asthma)",
        image: "/services/respiratory.jpg",
      },
      {
        label: "Other chronic conditions with complications",
        image: "/services/chronic.jpg",
      },
      {
        label: "Post surgery recovery/Post transplant",
        image: "/services/post-surgery.jpg",
      },
      {
        label: "Ostomy patients (colostomy, tracheostomy)",
        image: "/services/ostosmy.jpg",
      },
    ],
  },
  content4: {
    heading1: "Testimonials",
    heading2: (
      <div className="text-4xl sm:text-5xl font-bold">
        What People <span className="font-light">Say About Us?</span>
      </div>
    ),
    testimonials: [
      {
        testimony: `ARIKE has given excellent care for my mother. My mother suffered from diabetes and its complications. She was not eating or drinking anything properly and was very weak.. Arike gave both nursing care and doctor's consultation. Nurses came to this conclusion after the treating doctors advised that palliative care should be sought out because there wasn’t much that could be done for her. They explained about keeping her comfortable as long as possible and not to burden her with further medicines. Intravenous fluids were given to her as and when required andNursing staff were punctual and took very good care of everything. We are fully satisfied with all the care given by ARIKE staff.`,
        authorName: "Mrs. Gracy Mathai",
        designation: "Patient",
      },
      {
        testimony: `We have full satisfaction with the medical staff at Arike who offers care and attention to the families of their patients in addition to patient care. There are no words to express it. Doctors were available to check on my father at any moment. The doctors were there to offer me strength after my father passed away when I was completely worn out. I've been able to provide the finest care for my father in his final days thanks to Arike's assistance. The Arike crew has my sincere affection and gratitude.`,
        authorName: "Mr. Pavunny I M",
        designation: "Patient",
      },
      {
        testimony: `To us, Team Arike resembles a family.Team Arike seems like a family to us. My father will be lively when the Arike staff members arrive for the care,(Especially ,Elizabeth Sister & Nithin). as if the battery has just been charged. The interaction with them gave him a pleasant feeling. When we see it, we also feel a lot of comfort and joy. As a result, we can already say that the Arike team serves as more of a  family to us than just the patient's caretakers.`,
        authorName: "Mr. Prabhakaran Pillai",
        designation: "Patient",
      },
    ],
  },
};
