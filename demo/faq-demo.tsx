"use client";

import React from "react";
import { FAQ } from "@/components/ui/faq-tabs";

const FAQDemo: React.FC = () => {
  const categories = {
    "getting-started": "Getting Started",
    "reporting-issues": "Reporting Issues",
    "tracking-resolution": "Tracking & Resolution",
    "privacy-security": "Privacy & Security",
    "technical-support": "Technical Support"
  };

  const faqData = {
    "getting-started": [
      {
        question: "What is the Civic Issue Reporting System?",
        answer:
          "This is a digital platform developed for Jharkhand government that allows citizens to report civic issues like broken streetlights, potholes, water logging, garbage collection problems, and other public infrastructure issues directly to the concerned authorities."
      },
      {
        question: "Who can use this system to report issues?",
        answer:
          "Any citizen of Jharkhand can use this system. You need to register with a valid mobile number and basic details. No special qualifications or technical knowledge is required to report issues."
      },
      {
        question: "Is there any fee to use this service?",
        answer:
          "No, this service is completely free for all citizens. The platform is funded by the Government of Jharkhand to improve public services and civic infrastructure."
      },
      {
        question: "What types of civic issues can I report?",
        answer:
          "You can report various issues including: broken streetlights, potholes and road damage, water supply problems, drainage and sewage issues, garbage collection delays, park maintenance, illegal construction, traffic signal problems, and other public infrastructure concerns."
      },
      {
        question: "Do I need to download an app or can I use a website?",
        answer:
          "The system is available both as a mobile app (Android/iOS) and as a web portal. You can choose whichever is more convenient for you. Both platforms have the same features and functionality."
      }
    ],
    "reporting-issues": [
      {
        question: "How do I report a civic issue?",
        answer:
          "To report an issue: 1) Log into the platform, 2) Click 'Report New Issue', 3) Select the issue category, 4) Add a clear description, 5) Upload photos if possible, 6) Provide the exact location, 7) Submit the report. You'll receive a unique ticket number for tracking."
      },
      {
        question: "What information do I need to provide when reporting an issue?",
        answer:
          "You need to provide: issue category, detailed description of the problem, location (address or GPS coordinates), photos of the issue (recommended), your contact details, and any additional relevant information that might help authorities understand and resolve the issue."
      },
      {
        question: "Can I report an issue without providing my personal details?",
        answer:
          "While registration requires basic details for accountability, you can choose to keep your identity private from public view. However, authorities may need to contact you for clarification, so a valid phone number is required."
      },
      {
        question: "How important are photos when reporting an issue?",
        answer:
          "Photos are highly recommended as they provide clear evidence of the problem and help authorities understand the severity and nature of the issue. This often leads to faster resolution and appropriate resource allocation."
      },
      {
        question: "Can I report the same issue that someone else has already reported?",
        answer:
          "Yes, multiple reports of the same issue actually help prioritize it. The system will link similar reports together and show you if others have reported the same problem in your area, giving it higher priority for resolution."
      },
      {
        question: "What if I don't know the exact address of the issue location?",
        answer:
          "You can use the GPS feature in the app to automatically detect your current location, or use the map interface to pinpoint the location. You can also provide landmark descriptions if the exact address is not known."
      }
    ],
    "tracking-resolution": [
      {
        question: "How can I track the status of my reported issue?",
        answer:
          "After reporting, you'll receive a unique ticket number. Use this to track your issue's progress through the 'Track Issue' section. You'll see status updates like 'Received', 'Under Review', 'Assigned to Department', 'Work in Progress', and 'Resolved'."
      },
      {
        question: "How long does it typically take to resolve reported issues?",
        answer:
          "Resolution time varies by issue type and complexity. Emergency issues (like broken streetlights in accident-prone areas) are prioritized for 24-48 hours. Regular maintenance issues may take 7-15 days, while major infrastructure problems might take several weeks to months."
      },
      {
        question: "Will I be notified when my issue is resolved?",
        answer:
          "Yes, you'll receive notifications via SMS and app/email when there are status updates on your reported issue. You'll be specifically notified when work begins and when the issue is marked as resolved."
      },
      {
        question: "What if I'm not satisfied with how my issue was resolved?",
        answer:
          "If you're not satisfied with the resolution, you can reopen the ticket with additional comments and evidence. There's also an escalation feature to bring the matter to higher authorities' attention and a feedback system to rate the resolution quality."
      },
      {
        question: "Can I see what issues others have reported in my area?",
        answer:
          "Yes, there's a community dashboard where you can view reported issues in your neighborhood (with privacy protection). This helps avoid duplicate reporting and lets you see ongoing civic improvements in your area."
      },
      {
        question: "How do I know which government department is handling my issue?",
        answer:
          "Once your issue is reviewed, it's automatically assigned to the relevant department (PWD, Municipal Corporation, Electricity Board, etc.). You can see the assigned department and contact information in your issue tracking page."
      }
    ],
    "privacy-security": [
      {
        question: "Is my personal information safe on this platform?",
        answer:
          "Yes, your personal information is protected according to government data protection guidelines. Your details are only used for issue resolution and communication purposes. The platform uses secure encryption for data transmission and storage."
      },
      {
        question: "Can other people see my personal details when I report an issue?",
        answer:
          "No, your personal details like phone number and email are kept private. Only your name (if you choose to display it) and the issue details are visible to other users. Government officials handling your case can access your contact information."
      },
      {
        question: "What happens to my data if I delete my account?",
        answer:
          "If you delete your account, your personal information will be removed from the system. However, the reported issues and their resolution status will remain for public record and future reference, but without your personal identifiers."
      },
      {
        question: "Can I report issues anonymously?",
        answer:
          "Partial anonymity is possible - your name won't be displayed publicly, but authorities need a way to contact you for clarification or updates. You must provide at least a valid phone number during registration."
      }
    ],
    "technical-support": [
      {
        question: "What should I do if the app/website is not working properly?",
        answer:
          "First, try refreshing the page or restarting the app. Check your internet connection. If problems persist, you can contact technical support through the help section or call the helpline number provided. Also ensure you're using the latest version of the app."
      },
      {
        question: "What if I can't upload photos with my issue report?",
        answer:
          "Check that your photos are not too large (max 5MB per image). Ensure the app has camera and storage permissions on your device. If issues persist, you can submit the report without photos initially and add them later through the 'Update Issue' feature."
      },
      {
        question: "Can I use this system on any mobile phone?",
        answer:
          "The mobile app works on smartphones with Android 5.0+ or iOS 10.0+. For basic phones, you can use the web version through any browser. There's also a helpline number for those who cannot access digital platforms."
      },
      {
        question: "What if I forget my login details?",
        answer:
          "You can reset your password using the 'Forgot Password' option with your registered mobile number or email. If you've forgotten your registered details, contact the helpline with your ID proof for account recovery."
      },
      {
        question: "Is there a helpline number for assistance?",
        answer:
          "Yes, there's a dedicated helpline for technical support and general queries. The number is available on the platform and operates during business hours. You can also submit help requests through the in-app support feature."
      },
      {
        question: "Can I edit or delete my reported issue after submitting it?",
        answer:
          "You can add additional information or photos to your report, but you cannot delete it once submitted (to maintain transparency). If you submitted incorrect information, contact support or add a comment with the correct details."
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <FAQ
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about reporting civic issues in Jharkhand"
        categories={categories}
        faqData={faqData}
      />
    </div>
  );
};

export default FAQDemo;