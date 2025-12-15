import type { Route } from './+types/index';
// import { Form } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Project App | Contact' }];
}

// export async function action({ request }: Route.ActionArgs) {
//   const formData = await request.formData();
//   const name = formData.get('name');
//   const email = formData.get('email');
//   const subject = formData.get('subject');
//   const message = formData.get('message');
//   const errors: Record<string, string> = {};

//   if (!name) errors.name = 'Name is required';
//   if (!email) {
//     errors.email = 'Email is required';
//   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//     errors.email = 'Invalid email format';
//   }

//   if (!subject) errors.subject = 'Subject is required';
//   if (!message) errors.message = 'Message is required';

//   if (Object.keys(errors).length > 0) {
//     return { errors };
//   }
//   const data = {
//     name,
//     email,
//     subject,
//     message,
//   };

//   return { message: 'Form submitted succesfully', data };
// }

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  // const errors = actionData?.errors || {};
  return (
    <>
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Contact Me
      </h2>
      <form
        action="https://formspree.io/f/xjknalby"
        method="POST"
        className="space-y-6 max-w-3xl m-auto"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800"
          />
        </div>
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 cursor-pointer transition">
          Send Message
        </button>
      </form>
      {/* <Form method="POST" className="space-y-6 max-w-3xl m-auto">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800"
          />
          {errors.subject && (
            <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800"
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 cursor-pointer transition">
          Send Message
        </button>
      </Form> */}
    </>
  );
};

export default ContactPage;
