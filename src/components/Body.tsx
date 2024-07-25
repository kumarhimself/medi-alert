"use client";

import React from "react";
import Button from "../components/ui/button";
import Avatar from "../components/ui/avatar";
import Link from "next/link";
import Separator from "../components/ui/separator";
import Textarea from "../components/ui/textArea";

const Body: React.FC = () => {
  const patients = [
    { id: "12345", name: "John Doe", initials: "JD" },
    { id: "54321", name: "Jane Appleseed", initials: "JA" },
    { id: "98765", name: "Robert Malone", initials: "RM" },
    { id: "67890", name: "Emily Simmons", initials: "ES" },
  ];

  const conversationHistory = [
    {
      name: "John Doe",
      message:
        "Hi, I'm having trouble managing my diabetes. Can you provide some tips?",
      initials: "JD",
    },
    {
      name: "Dr. Sarah Johnson",
      message:
        "Okay, John, let's go over some tips to help you manage your diabetes:\n\n• Monitor your blood sugar levels regularly\n• Follow a healthy, balanced diet\n• Exercise regularly\n• Take your medications as prescribed",
      initials: "SJ",
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-100">
      <div className="grid min-h-screen w-full grid-cols-[280px_1fr_400px]">
        {/* Patients List */}
        <div className="flex flex-col border-r bg-white p-4 space-y-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Patients</h2>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-xl border border-primary/30 bg-background px-4 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted"
            >
              <PlusIcon className="mr-2 h-4 w-4" />
              Add Patient
            </Link>
          </div>
          <div className="space-y-4">
            {patients.map((patient, index) => (
              <Link
                key={index}
                href="#"
                className={`flex items-center gap-3 rounded-lg p-3 transition-all ${
                  index === 0 ? "bg-blue-100" : "hover:bg-gray-100"
                }`}
              >
                <Avatar className="h-10 w-10 border">{patient.initials}</Avatar>
                <div className="flex-1 truncate">
                  <div className="font-medium">{patient.name}</div>
                  <div className="text-xs text-gray-500">
                    Patient ID: {patient.id}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Patient Details */}
        <div className="flex flex-col bg-white p-6 space-y-6">
          <h2 className="text-xl font-semibold mb-4">Patient Details</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border">JD</Avatar>
                <div>
                  <h2 className="text-2xl font-semibold">John Doe</h2>
                  <p className="text-sm text-gray-500">Patient ID: 12345</p>
                </div>
              </div>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-xl border border-primary/30 bg-background px-4 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted"
              >
                <FilePenIcon className="mr-2 h-4 w-4" />
                Edit
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-6">
              {[
                { label: "Age", value: "35" },
                { label: "Gender", value: "Male" },
                { label: "Blood Type", value: "O+" },
                { label: "Allergies", value: "Pollen, Penicillin" },
              ].map((item, index) => (
                <div key={index}>
                  <div className="text-sm text-gray-500">{item.label}</div>
                  <div className="font-medium">{item.value}</div>
                </div>
              ))}
            </div>
            <Separator className="my-6" />
            <div className="space-y-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Medical History</h3>
                <div className="space-y-2">
                  {[
                    { condition: "Diabetes", status: "Type 2" },
                    { condition: "Hypertension", status: "Controlled" },
                    { condition: "Asthma", status: "Mild" },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-500">{item.condition}</span>
                      <span className="font-medium">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Separator className="my-6" />
              <div className="mt-6">
                {" "}
                {/* Increased top margin */}
                <h3 className="text-lg font-semibold mb-4">
                  Upcoming Appointments
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Annual Checkup",
                      date: "June 15, 2023 - 10:00 AM",
                    },
                    {
                      title: "Diabetes Follow-up",
                      date: "July 20, 2023 - 2:30 PM",
                    },
                  ].map((appointment, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <div className="font-medium">{appointment.title}</div>
                        <div className="text-sm text-gray-500">
                          {appointment.date}
                        </div>
                      </div>
                      <Link
                        href="#"
                        className="inline-flex h-9 items-center justify-center rounded-xl border border-primary/30 bg-background px-4 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted"
                      >
                        View Details
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scribe Section */}
        <div className="flex flex-col bg-white border-l p-6 space-y-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Scribe</h2>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-xl border border-primary/30 bg-custom-blue px-4 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted"
              >
                <MicIcon className="mr-2 h-4 w-4" />
                Start Dictation
              </Link>
            </div>
            <Textarea
              className="w-full mb-2 bg-blue-50 rounded-lg border border-primary/30"
              placeholder="Enter your prompt..."
            />
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-xl border border-primary/30 bg-custom-blue px-4 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted"
            >
              Submit
            </Link>
          </div>
          <Separator className="my-6" />
          <div>
            <h2 className="text-lg font-semibold mb-4">Conversation History</h2>
            <div className="space-y-4 max-h-[400px] overflow-y-auto">
              {conversationHistory.map((entry, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Avatar className="w-10 h-10">{entry.initials}</Avatar>
                  <div>
                    <div className="font-medium">{entry.name}</div>
                    <p className="text-sm text-gray-600 whitespace-pre-line">
                      {entry.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;

// SVG Icons
function FilePenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function MicIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 2L11 13M22 2l-4 20L11 13 2 22" />
    </svg>
  );
}

// Sample Data
const patients = [
  {
    id: "12345",
    name: "John Doe",
    image: "/placeholder-user.jpg",
    initials: "JD",
  },
  {
    id: "67890",
    name: "Jane Smith",
    image: "/placeholder-user.jpg",
    initials: "JS",
  },
];

const conversationHistory = [
  {
    name: "Dr. Wilson",
    message: "Patient shows signs of improvement.",
    avatar: "/placeholder-user.jpg",
    initials: "DW",
  },
  {
    name: "Nurse Kelly",
    message: "Administered medication as prescribed.",
    avatar: "/placeholder-user.jpg",
    initials: "NK",
  },
];
