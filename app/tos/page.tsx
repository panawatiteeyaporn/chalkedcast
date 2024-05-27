import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
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
          </svg>
          Back
        </Link>
        <h1 className="pb-6 text-3xl font-extrabold">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="whitespace-pre-wrap leading-relaxed"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: May 27, 2024

1. Introduction
Welcome to Chalked Cast. By accessing or using our website at https://chalkedcast.com, you agree to be bound by these Terms & Services.

2. Description of Service
Chalked Cast provides information about the official Chalked Cast podcast, including podcast episodes, social media links, listening platforms, and a link to Patreon for premium membership options.

3. Ownership
Chalked Cast does not claim ownership of any content on this site. The website is for informational purposes only.

4. User Data Collection
We collect your email address for the purpose of providing updates and notifications. For more details, please refer to our Privacy Policy at https://chalkedcast.com/privacy-policy.

5. Non-Personal Data Collection
We use web cookies to collect non-personal data to improve your experience on our website.

6. Governing Law
These Terms & Services are governed by the laws of the United States.

7. Updates to the Terms
We may update these Terms & Services from time to time. You will be notified of any changes via email.

8. Contact Us
If you have any questions about these Terms & Services, please contact us at rizzo@chalkedcast.com.

Thank you for visiting Chalked Cast!`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
