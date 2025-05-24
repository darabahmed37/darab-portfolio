import { useState } from "react";
import Heading from "../Components/Heading.tsx";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const ContactMe = () => {
  const [meetingDateTime, setMeetingDateTime] = useState<Date | null>(null);

  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-12 md:px-24">
      <div className="max-w-4xl mx-auto">
        <Heading title="Contact Me" />

        <div className="bg-gray-800 rounded-lg shadow-lg mt-6">
          <form className="space-y-6" autoComplete={"off"}>
            {/* Name & Email */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-primary"
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block mb-2 text-sm font-medium">Subject</label>
              <input
                type="text"
                placeholder="Project Proposal"
                className="w-full px-4 py-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-primary"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Your Message
              </label>
              <textarea
                rows={6}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-primary resize-none"
              ></textarea>
            </div>

            {/* Attachment */}
            <div>
              <label className="block mb-2 text-sm font-medium  ">
                Attachment (optional)
              </label>
              <input
                type="file"
                className="w-full text-gray-300 bg-gray-700 border border-gray-600 rounded cursor-pointer focus:outline-none  p-3 focus:border-primary"
              />
            </div>

            {/* Meeting Time */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Preferred Meeting Time (optional)
              </label>
              <DatePicker
                selected={meetingDateTime}
                onChange={(date) => setMeetingDateTime(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                placeholderText="Select date & time"
                className="w-full px-4 py-3 bg-white  border border-gray-300 rounded cursor-pointer focus:outline-none focus:border-primary"
                calendarClassName="bg-gray-800 text-white rounded shadow-lg"
                popperClassName="bg-gray-800"
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded shadow border border-primary transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
