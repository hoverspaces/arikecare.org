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
    label: "All our services are available 24/7",
    services: [
      {
        label: "Doctor Consultations",
        image: "/services/Doctor Consultations.png",
      },
      {
        label: "End-of-life care",
        image: "/services/End-of-life care.png",
      },
      {
        label: "Medical Equipments & Surgicals",
        image: "/services/Medical Equipments & Surgicals.png",
      },
      {
        label: "Home-care System",
        image: "/services/Home-care System.png",
      },
      {
        label: "Regular nursing care",
        image: "/services/Regular nursing care.png",
      },
      {
        label: "Emergency Care",
        image: "/services/Emergency Care.png",
      },
      {
        label: "Referral System",
        image: "/services/Referral System.png",
      },
      {
        label: "Death care",
        image: "/services/Death care.png",
      },
      {
        label: "Ascitic tap",
        image: "/services/Ascitic tap.png",
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
        testimony: `We are impressed with the care and attention given by the medical staff at Arike to
        the families of their patients, in addition to patient care. There are no words to express
        it. Doctors are available to check my father at any moment. The doctors were there to
        offer me strength after my father passed away when I was completely worn out. I've
        been able to provide the finest care for my father in his final days thanks to Arike's
        assistance. Arike crew has my sincere affection and gratitude.`,
        authorName: "Mrs. Sheeba",
        designation: "Caregiver of Mr Pavunny I M",
      },
      {
        testimony: `To us, Team Arike is like a family. My father will be lively when the Arike staff
        members arrive for the care,(especially Elizabeth Sister & Nithin). It’s as if his
        batteries get charged and he is full of life. When we see it, we also feel a lot of
        comfort and joy. As a result, we can certainly say that the Arike team serves as more
        of a  family to us than just the patient's caretakers.`,
        authorName: "Supriya",
        designation: "caregiver of Mr.Prabhakaran Pilla",
      },
      {
        testimony: `You gave excellent care. My mother suffered from uncontrolled diabetes. Arike
        Nurses came to the conclusion after the treating doctors advised that palliative care
        should be sought out because there wasn’t much that could be done with medicines
        alone. Arike Nursing staff are very punctual and took care of everything. We are
        satisfied with the Nursing attention that you provided.`,
        authorName: "Mr. Suni",
        designation: "Caregiver of Mrs Gracy Mathai",
      },
      {
        testimony: `Arike's team delivered an excellent service. Both the service and staff 's cooperation
        were first-rate. We were so relieved to see the support extended to our family and they
        gave  ample relief to all his symptoms. Thank you Arike for the wonderful care.`,
        authorName: "Mrs.Smitha",
        designation: "Caregiver of Mr.Rajagopalan k",
      },
    ],
  },
};
