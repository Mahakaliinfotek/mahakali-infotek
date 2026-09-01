import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const policySections = [
  {
    number: "1.",
    title: "Introduction",
    content: [
      `The Mahakali Group ("Mahakali Group", "we", "our" or "us") is committed to protecting the privacy and security of the Personal Data entrusted to us by visitors, customers, business partners, vendors, job applicants and other individuals who interact with our website or communicate with us.`,

      `This Privacy Policy ("Policy") explains how The Mahakali Group collects, uses, stores, processes, shares and protects your Personal Data when you access or use our website, submit enquiries, apply for career opportunities, communicate with us or otherwise interact with us (collectively referred to as the "Website").`,

      `We recognise the importance of protecting your privacy and are committed to processing Personal Data responsibly, transparently and in accordance with the applicable provisions of the Digital Personal Data Protection Act, 2023, the Information Technology Act, 2000 and other applicable laws of India.`,

      `This Privacy Policy applies to all visitors and users of the Website, including but not limited to:`,
    ],
    bullets: [
      "Visitors browsing the Website.",
      "Individuals submitting business or general enquiries.",
      "Customers and prospective customers.",
      "Vendors, suppliers and business partners.",
      "Job applicants and prospective employees.",
      "Individuals communicating with us through email, telephone, social media or other communication channels.",
    ],
    afterBullets: [
      `By accessing or using the Website or voluntarily providing your Personal Data, you acknowledge that you have read, understood and agreed to the collection, use and processing of your Personal Data in accordance with this Privacy Policy.`,

      `Where required under applicable law, we shall obtain your consent before collecting or processing your Personal Data. You may withdraw your consent at any time, subject to applicable legal and contractual obligations.`,

      `This Privacy Policy should be read together with our Terms of Use and any other notices or policies published on the Website.`,

      `In the event of any inconsistency between this Privacy Policy and applicable law, the provisions of the applicable law shall prevail.`,
    ],
  },

  {
    number: "2.",
    title: "Definitions",
    content: [
      `For the purposes of this Privacy Policy, unless the context otherwise requires:`,
    ],
    definitions: [
      {
        term: "Applicable Law",
        text: `means all applicable laws, rules, regulations, notifications and governmental directions relating to privacy, data protection and information technology in India.`,
      },
      {
        term: "Personal Data",
        text: `means any data about an individual who is identifiable by or in relation to such data.`,
      },
      {
        term: "Processing",
        text: `means any operation performed on Personal Data, including collection, recording, storage, organisation, use, disclosure, sharing, transmission, modification, retrieval, deletion or destruction.`,
      },
      {
        term: "Data Principal",
        text: `shall have the meaning assigned to it under the Digital Personal Data Protection Act, 2023.`,
      },
      {
        term: "Website",
        text: `means the official website of The Mahakali Group, including the websites, digital platforms and online services of its subsidiaries, affiliates, group companies and associated entities, including OTO, Indiazona, Mahakali Infotek, Mahakali International, Ran San Enterprises, Mahakali Nurani LLC (Oman), and any other present or future entity owned, operated, managed or controlled by The Mahakali Group, together with all associated web pages, microsites, digital platforms and online services operated by or on behalf of The Mahakali Group.`,
      },
      {
        term: "User, You or Your",
        text: `means any individual accessing, browsing or interacting with the Website or otherwise providing Personal Data to The Mahakali Group.`,
      },
    ],
  },

  {
    number: "3.",
    title: "Categories of Personal Data Collected",
    content: [
      `The Mahakali Group collects Personal Data that is necessary for responding to enquiries, managing business relationships, recruitment activities and improving the functionality of the Website.`,

      `Depending on your interaction with the Website, we may collect the following categories of Personal Data:`,
    ],
    subsections: [
      {
        number: "3.1",
        title: "Personal and Contact Information",
        text: `We may collect information such as your name, organisation name, designation, mobile number, email address, postal address and any other information voluntarily provided by you while communicating with us or submitting an enquiry through the Website.`,
      },
      {
        number: "3.2",
        title: "Business Information",
        text: `Where you interact with us as a customer, vendor, supplier, consultant or business partner, we may collect business-related information including company details, business address, nature of business and other information necessary for establishing or managing our business relationship.`,
      },
      {
        number: "3.3",
        title: "Career and Recruitment Information",
        text: `If you apply for employment opportunities with The Mahakali Group, we may collect information contained in your application or resume, including educational qualifications, professional experience, employment history, skills, references and any other information voluntarily submitted by you during the recruitment process.`,
      },
      {
        number: "3.4",
        title: "Communication Information",
        text: `We may retain records of correspondence exchanged with you through email, telephone, contact forms, social media platforms or other communication channels for the purposes of responding to enquiries, providing assistance and maintaining business records.`,
      },
      {
        number: "3.5",
        title: "Technical Information",
        text: `When you access the Website, certain information may be collected automatically, including your IP address, browser type, operating system, device information, pages visited, date and time of access, referring website, cookies and other technical information that helps us maintain the security and functionality of the Website.`,
      },
      {
        number: "3.6",
        title: "Information Collected Through Cookies",
        text: `The Website may use cookies and similar technologies to improve user experience, analyse website traffic, remember user preferences and enhance the overall performance and security of the Website. Further details regarding the use of cookies are provided in this Privacy Policy.`,
      },
    ],
  },

  {
    number: "4.",
    title: "Purposes of Collection and Processing of Personal Data",
    content: [
      `The Mahakali Group processes Personal Data only for lawful, specific and legitimate purposes connected with its business operations and the management of the Website.`,

      `Personal Data collected through the Website may be used for one or more of the following purposes:`,
    ],
    subsections: [
      {
        number: "4.1",
        title: "Responding to Enquiries",
        text: `To respond to enquiries, requests for information, business proposals and other communications received through the Website or other communication channels.`,
      },
      {
        number: "4.2",
        title: "Business Relationship Management",
        text: `To establish, manage and maintain relationships with customers, prospective customers, vendors, suppliers, consultants, business partners and other stakeholders.`,
      },
      {
        number: "4.3",
        title: "Recruitment and Employment",
        text: `To evaluate applications for employment, communicate with applicants, conduct recruitment processes, verify information submitted by candidates and maintain recruitment records.`,
      },
      {
        number: "4.4",
        title: "Communication",
        text: `To communicate with users regarding enquiries, business opportunities, service-related information, events, corporate announcements, newsletters or other information that may be relevant to the user's interaction with The Mahakali Group.`,
      },
      {
        number: "4.5",
        title: "Website Administration",
        text: `To administer, maintain, monitor and improve the Website, analyse usage trends, enhance user experience, ensure website security and prevent unauthorised or fraudulent activities.`,
      },
      {
        number: "4.6",
        title: "Legal and Regulatory Compliance",
        text: `To comply with applicable laws, regulatory requirements, legal proceedings, governmental requests and other statutory obligations, and to establish, exercise or defend legal claims.`,
      },
    ],
    afterSubsections: [
      `The Mahakali Group shall process Personal Data only for the purposes for which it was collected or for any other purpose permitted under applicable law or authorised by the Data Principal.`,
    ],
  },

  {
    number: "5.",
    title: "Sharing and Disclosure of Personal Data",
    content: [
      `The Mahakali Group respects the privacy of your Personal Data and does not sell, rent or otherwise disclose your Personal Data to third parties except as described in this Privacy Policy or where required under applicable law.`,

      `Personal Data may be shared in the following circumstances:`,
    ],
    subsections: [
      {
        number: "5.1",
        title: "Within The Mahakali Group",
        paragraphs: [
          `Personal Data may be shared with our subsidiaries, affiliates, group companies or associated entities where such sharing is necessary for business administration, responding to enquiries, providing services or managing business relationships.`,

          `For the purposes described in this Privacy Policy, Personal Data may also be shared between The Mahakali Group and its subsidiaries, affiliates, joint ventures, associated companies or other entities under common management or control, where such sharing is reasonably necessary for business administration, responding to enquiries, recruitment, customer relationship management, internal reporting, compliance with applicable law or other legitimate business purposes. Such entities shall process Personal Data in accordance with this Privacy Policy and applicable laws.`,
        ],
      },
      {
        number: "5.2",
        title: "Service Providers",
        paragraphs: [
          `We may engage trusted third-party service providers to assist in operating the Website and conducting our business activities, including providers of website hosting, cloud storage, information technology support, email services, analytics, marketing and other administrative services.`,

          `Such service providers shall process Personal Data only on our behalf and in accordance with our instructions and applicable legal requirements.`,
        ],
      },
      {
        number: "5.3",
        title: "Business Partners",
        text: `Where necessary, Personal Data may be shared with our customers, vendors, consultants, advisors, contractors or other business partners solely for the purpose of facilitating business operations or fulfilling contractual obligations.`,
      },
      {
        number: "5.4",
        title: "Legal and Regulatory Authorities",
        text: `We may disclose Personal Data where such disclosure is required to comply with applicable laws, regulations, court orders, governmental requests or other legal processes, or where necessary to protect the rights, property, safety or legitimate interests of The Mahakali Group or any other person.`,
      },
      {
        number: "5.5",
        title: "With Your Consent",
        text: `We may disclose your Personal Data to any other person or organisation where you have expressly authorised or consented to such disclosure.`,
      },
    ],
  },

  {
    number: "6.",
    title: "Retention of Personal Data",
    content: [
      `The Mahakali Group retains Personal Data only for as long as is reasonably necessary to fulfil the purposes for which it was collected, including the management of business relationships, responding to enquiries, recruitment activities, compliance with legal obligations and protection of our legal rights.`,

      `The retention period may vary depending on the nature of the Personal Data, applicable legal requirements and legitimate business needs.`,

      `Upon expiry of the applicable retention period, or where the Personal Data is no longer required, such information shall be securely deleted, destroyed or anonymised unless its continued retention is required or permitted under applicable law.`,
    ],
  },

  {
    number: "7.",
    title: "Security of Personal Data",
    content: [
      `The Mahakali Group implements reasonable technical, administrative and organisational measures to safeguard Personal Data against unauthorised access, disclosure, alteration, misuse, loss or destruction.`,

      `These measures may include secure servers, access controls, authentication mechanisms, encryption, periodic security reviews and other industry-standard safeguards appropriate to the nature of the information processed.`,

      `While we strive to protect Personal Data using commercially reasonable security practices, no method of electronic transmission or storage is completely secure. Accordingly, we cannot guarantee absolute security of Personal Data transmitted through the internet.`,

      `Users are responsible for maintaining the confidentiality of any credentials used to access restricted areas of the Website and should promptly notify us of any suspected unauthorised access.`,
    ],
  },

  {
    number: "8.",
    title: "Rights of the Data Principal",
    content: [`Subject to applicable law, you may have the right to:`],
    bullets: [
      "Request access to your Personal Data.",
      "Request correction or updating of inaccurate or incomplete Personal Data.",
      "Request deletion of your Personal Data where permitted by law.",
      "Withdraw consent for the processing of your Personal Data where such processing is based on consent.",
      "Seek information regarding the processing of your Personal Data.",
      "Nominate another individual to exercise your rights in accordance with applicable law.",
      "Submit a grievance regarding the processing of your Personal Data.",
    ],
    afterBullets: [
      `The Mahakali Group may require reasonable verification of identity before responding to any request relating to Personal Data.`,

      `Certain requests may be refused or restricted where permitted or required under applicable law.`,
    ],
  },

  {
    number: "9.",
    title: "Cookies and Similar Technologies",
    content: [
      `The Website may use cookies and similar technologies to enhance user experience, analyse website traffic, improve functionality and maintain the security of the Website.`,

      `Users may manage or disable cookies through their browser settings. However, disabling cookies may affect certain features or functionality of the Website.`,

      `By continuing to use the Website, you consent to our use of cookies in accordance with this Privacy Policy, unless you choose to disable them through your browser settings.`,
    ],
  },

  {
    number: "10.",
    title: "Third-Party Websites",
    content: [
      `The Website may contain links to third-party websites or online platforms for the convenience of users.`,

      `The Mahakali Group is not responsible for the privacy practices, content or security of such third-party websites. Users are encouraged to review the privacy policies of those websites before providing any Personal Data.`,
    ],
  },

  {
    number: "11.",
    title: "Changes to This Privacy Policy",
    content: [
      `The Mahakali Group reserves the right to amend or update this Privacy Policy from time to time to reflect changes in applicable laws, business practices, technology or the services offered through the Website.`,

      `The revised Privacy Policy shall be published on the Website along with the updated "Last Updated" date. Continued use of the Website after such changes shall constitute your acceptance of the revised Privacy Policy, to the extent permitted by applicable law.`,
    ],
  },

  {
    number: "12.",
    title: "Grievance Redressal",
    content: [
      `If you have any questions, concerns or grievances regarding this Privacy Policy or the processing of your Personal Data, you may contact our designated Grievance Officer using the details provided below:`,
    ],
    contact: {
      heading: "Grievance Officer",
      details: [
        ["Name", "Mr. T. S. Srivastav"],
        ["Designation", "Grievance Officer / Data Protection Officer"],
        ["Email", "hr@mahakaliudyog.com"],
        ["Phone", "0891-2539553"],
        [
          "Registered Office",
          "11, Clive Row, 4th Floor, Kolkata, West Bengal 700001",
        ],
      ],
    },
    afterContact: [
      `We shall endeavour to acknowledge and address grievances within the timelines prescribed under applicable law.`,
    ],
  },

  {
    number: "13.",
    title: "Governing Law and Jurisdiction",
    content: [
      `This Privacy Policy shall be governed by and construed in accordance with the laws of India.`,

      `Any dispute arising out of or relating to this Privacy Policy or the processing of Personal Data shall be subject to the exclusive jurisdiction of the competent courts at Kolkata, West Bengal, unless otherwise required under applicable law.`,
    ],
  },
];

const Paragraph = ({ children }) => (
  <Typography
    sx={{
      mb: 2,
      color: "#454545",
      fontFamily: '"IBM Plex Sans", sans-serif',
      fontSize: {
        xs: 14,
        sm: 15,
        md: 16,
      },
      lineHeight: {
        xs: 1.7,
        md: 1.8,
      },
      fontWeight: 400,
    }}
  >
    {children}
  </Typography>
);

const PolicySection = ({ section }) => {
  return (
    <Box
      component="section"
      sx={{
        mb: {
          xs: 5,
          md: 6,
        },
      }}
    >
      <Typography
        component="h2"
        sx={{
          mb: 2.5,
          color: "#202124",
          fontFamily: '"IBM Plex Sans", sans-serif',
          fontSize: {
            xs: 20,
            sm: 23,
            md: 26,
          },
          lineHeight: 1.3,
          fontWeight: 700,
          textTransform: "uppercase",
        }}
      >
        {section.number} {section.title}
      </Typography>

      {section.content?.map((paragraph, index) => (
        <Paragraph key={`content-${index}`}>{paragraph}</Paragraph>
      ))}

      {section.definitions?.map((definition) => (
        <Paragraph key={definition.term}>
          <Box component="span" sx={{ fontWeight: 700, color: "#202124" }}>
            “{definition.term}”
          </Box>{" "}
          {definition.text}
        </Paragraph>
      ))}

      {section.bullets && (
        <Box
          component="ul"
          sx={{
            mt: 0,
            mb: 2.5,
            pl: {
              xs: 2.5,
              md: 3.5,
            },
          }}
        >
          {section.bullets.map((item) => (
            <Typography
              component="li"
              key={item}
              sx={{
                mb: 1,
                pl: 0.5,
                color: "#454545",
                fontFamily: '"IBM Plex Sans", sans-serif',
                fontSize: {
                  xs: 14,
                  sm: 15,
                  md: 16,
                },
                lineHeight: 1.7,
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      )}

      {section.afterBullets?.map((paragraph, index) => (
        <Paragraph key={`after-bullets-${index}`}>{paragraph}</Paragraph>
      ))}

      {section.subsections?.map((subsection) => (
        <Box
          key={`${subsection.number}-${subsection.title}`}
          sx={{
            mt: 3,
          }}
        >
          <Typography
            component="h3"
            sx={{
              mb: 1.3,
              color: "#202124",
              fontFamily: '"IBM Plex Sans", sans-serif',
              fontSize: {
                xs: 16,
                sm: 17,
                md: 18,
              },
              lineHeight: 1.4,
              fontWeight: 700,
            }}
          >
            {subsection.number} {subsection.title}
          </Typography>

          {subsection.text && <Paragraph>{subsection.text}</Paragraph>}

          {subsection.paragraphs?.map((paragraph, index) => (
            <Paragraph key={`${subsection.number}-${index}`}>
              {paragraph}
            </Paragraph>
          ))}
        </Box>
      ))}

      {section.afterSubsections?.map((paragraph, index) => (
        <Paragraph key={`after-subsections-${index}`}>{paragraph}</Paragraph>
      ))}

      {section.contact && (
        <Box
          sx={{
            mt: 3,
            p: {
              xs: 2.5,
              md: 3.5,
            },
            border: "1px solid #DDE7DD",
            borderRadius: "14px",
            backgroundColor: "#F4FFF5",
          }}
        >
          <Typography
            sx={{
              mb: 2,
              color: "#075A12",
              fontFamily: '"IBM Plex Sans", sans-serif',
              fontSize: {
                xs: 18,
                md: 20,
              },
              fontWeight: 700,
            }}
          >
            {section.contact.heading}
          </Typography>

          {section.contact.details.map(([label, value]) => (
            <Box
              key={label}
              sx={{
                display: {
                  xs: "block",
                  sm: "grid",
                },
                gridTemplateColumns: {
                  sm: "160px minmax(0, 1fr)",
                },
                gap: {
                  sm: 2,
                },
                mb: 1.4,
              }}
            >
              <Typography
                sx={{
                  color: "#202124",
                  fontFamily: '"IBM Plex Sans", sans-serif',
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                {label}
              </Typography>

              <Typography
                component={
                  label === "Email"
                    ? "a"
                    : label === "Phone"
                    ? "a"
                    : "p"
                }
                href={
                  label === "Email"
                    ? `mailto:${value}`
                    : label === "Phone"
                    ? `tel:${value.replace(/[^0-9+]/g, "")}`
                    : undefined
                }
                sx={{
                  m: 0,
                  color:
                    label === "Email" || label === "Phone"
                      ? "#075A12"
                      : "#454545",
                  fontFamily: '"IBM Plex Sans", sans-serif',
                  fontSize: 15,
                  lineHeight: 1.6,
                  textDecoration:
                    label === "Email" || label === "Phone"
                      ? "underline"
                      : "none",
                  textUnderlineOffset: "3px",
                }}
              >
                {value}
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      {section.afterContact?.map((paragraph, index) => (
        <Box key={`after-contact-${index}`} sx={{ mt: 2.5 }}>
          <Paragraph>{paragraph}</Paragraph>
        </Box>
      ))}
    </Box>
  );
};

export default function PrivacyPolicyPage() {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "#FFFFFF",
        minHeight: "100vh",
        fontFamily: '"IBM Plex Sans", sans-serif',
      }}
    >
      <Box
        sx={{
          pt: {
            xs: 13,
            md: 18,
          },
          pb: {
            xs: 6,
            md: 8,
          },
          backgroundColor: "#F4FFF5",
          borderBottom: "1px solid #E3EEE4",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: "1120px",
            px: {
              xs: 2.5,
              sm: 4,
              md: 5,
            },
          }}
        >
          <Typography
            component="h1"
            sx={{
              mb: 2,
              color: "#202124",
              fontFamily: '"IBM Plex Sans", sans-serif',
              fontSize: {
                xs: 32,
                sm: 42,
                md: 54,
              },
              lineHeight: 1.1,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
            }}
          >
            Privacy Policy
          </Typography>

          <Typography
            sx={{
              color: "#5C625D",
              fontFamily: '"IBM Plex Sans", sans-serif',
              fontSize: {
                xs: 14,
                md: 16,
              },
              lineHeight: 1.6,
            }}
          >
            This Privacy Policy explains how The Mahakali Group collects,
            processes, stores and protects your Personal Data.
          </Typography>
        </Container>
      </Box>

      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1120px",
          px: {
            xs: 2.5,
            sm: 4,
            md: 5,
          },
          py: {
            xs: 6,
            md: 9,
          },
        }}
      >
        {policySections.map((section) => (
          <PolicySection
            key={`${section.number}-${section.title}`}
            section={section}
          />
        ))}
      </Container>
    </Box>
  );
}