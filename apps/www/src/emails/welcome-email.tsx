import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import Footer from "./_components/Footer";

export default function WelcomeEmail({
  name = "Brighton Mboya",
  email = "reggie@jani-ai.com",
}: {
  name: string | null;
  email: string;
}) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Jani AI</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-10 max-w-[500px] rounded border border-solid border-gray-200 px-10 py-5">
            {/* <Section className="mt-8">
              <Img
                src={DUB_WORDMARK}
                height="40"
                alt="Dub"
                className="mx-auto my-0"
              />
            </Section> */}
            <Heading className="mx-0 my-7 p-0 text-center text-xl font-semibold text-black">
              Welcome to Jani AI
            </Heading>
            {/* <Section className="my-8">
              <Img src={DUB_THUMBNAIL} alt="Dub" className="max-w-[500px]" />
            </Section> */}
            <Text className="text-sm leading-6 text-black">
              Thanks for signing up{name && `, ${name}`}!
            </Text>
            <Text className="text-sm leading-6 text-black">
              My name is Brighton, and I'm the co-founder of Jani AI, a platform
              to help you track resources across your supply chain. We're very
              much excited to have you on board.
            </Text>
            <Text className="text-sm leading-6 text-black">
              Here are a few things you can do:
            </Text>
            <Text className="ml-1 text-sm leading-4 text-black">
              ◆ Create a{" "}
              <Link
                href="https://jani-ai.com?newWorkspace=true"
                className="font-medium text-blue-600 no-underline"
              >
                new workspace
              </Link>{" "}
            </Text>
            <Text className="ml-1 text-sm leading-4 text-black">
              ◆ Start managing your farmers
            </Text>
            <Text className="ml-1 text-sm leading-4 text-black">
              ◆ Generate Reports and monitor your resources
            </Text>
            <Text className="ml-1 text-sm leading-4 text-black">
              ◆ Manage your inventory
            </Text>
            <Text className="text-sm leading-6 text-black">
              Let me know if you have any questions or feedback. I'm always
              happy to help!
            </Text>
            <Text className="text-sm font-light leading-6 text-gray-400">
              Brighton from Jani AI
            </Text>

            <Footer email={email} marketing />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
