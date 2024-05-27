import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
  return (
    <main className="mx-auto max-w-xl">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="pb-6 text-3xl font-extrabold">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="whitespace-pre-wrap leading-relaxed"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: May 27, 2024

1. Introduction
Welcome to Chalked Cast. This Privacy Policy describes how we collect, use, and protect your information when you visit our website https://chalkedcast.com.

2. Information We Collect

Personal Data: We collect your email address when you subscribe for future updates.
Non-Personal Data: We use web cookies to collect non-personal data to enhance your browsing experience.
3. Purpose of Data Collection
We collect your email address to notify you about new podcast episodes, updates, and other relevant information.

4. Data Sharing
We do not share your personal data with any third parties.

5. Children's Privacy
We do not knowingly collect any data from children under the age of 13. If we become aware that we have collected personal data from a child, we will take steps to delete such information.

6. Updates to This Privacy Policy
We may update this Privacy Policy from time to time. You will be notified of any changes via email.

7. Contact Us
If you have any questions or concerns about this Privacy Policy, please contact us at rizzo@chalkedcast.com.

Thank you for visiting Chalked Cast!`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
